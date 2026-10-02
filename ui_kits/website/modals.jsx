(() => {
const { useState, useMemo } = React;
const MX = window.MX;
const TIPOS = ['Comprar', 'Rentar', 'Vender', 'Desarrollos', 'Inversión', 'Otro'];
const validate = (v, fields) => {
  const e = {};
  if (fields.includes('name') && !v.name.trim()) e.name = 'Ingresa tu nombre';
  if (fields.includes('phone') && v.phone.replace(/\D/g, '').length < 10) e.phone = 'Ingresa un teléfono de 10 dígitos';
  if (fields.includes('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Ingresa un correo válido';
  return e;
};
const firstName = (n) => n.trim().split(' ')[0];

const CHANNELS = {
  info: { title: 'Solicitar información', desc: () => 'Un asesor Mextas te responderá en menos de 2 horas hábiles.' },
  whatsapp: { title: 'Escríbenos por WhatsApp', desc: () => 'Déjanos tus datos y un asesor te enviará la ficha completa por WhatsApp.' },
  call: { title: 'Llamar a un asesor', desc: () => 'Llámanos al 33 1234 5678 (lun–vie, 9:00–19:00) o deja tu número y te llamamos.' },
  credit: { title: 'Asesoría de crédito', desc: () => 'Te ayudamos a comparar opciones de financiamiento con instituciones aliadas.' },
  general: { title: 'Consultar propiedad', desc: () => 'Cuéntanos qué buscas y te enviaremos opciones seleccionadas.' },
  dev: { title: 'Solicitar información', desc: (P) => 'Recibe precios, planos y disponibilidad actualizada de ' + (P.devName || 'este desarrollo') + '.' },
};

function ContactForm({ p, devName, model, channel = 'info', inline, showType, onDone }) {
  const app = useApp();
  const defMsg = p ? 'Hola, me interesa ' + p.title + ' (' + p.id + '). ¿Podrían darme más información?'
    : devName ? 'Hola, me interesa ' + devName + (model ? ', modelo ' + model : '') + '. ¿Podrían enviarme precios y disponibilidad?' : '';
  const [v, setV] = useState({ name: '', phone: '', email: '', message: defMsg, optin: true, tipo: 'Comprar' });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');
  const up = (k) => (e) => { const val = e.target.value; setV((s) => ({ ...s, [k]: val })); if (err[k]) setErr((x) => ({ ...x, [k]: undefined })); };
  const submit = (e) => {
    e.preventDefault();
    const er = validate(v, ['name', 'phone', 'email']);
    setErr(er);
    if (Object.keys(er).length) return;
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); app.toast({ tone: 'success', title: 'Solicitud enviada', message: 'Un asesor te contactará pronto.' }); }, 1300);
  };
  if (status === 'sent') {
    const how = channel === 'call' ? 'Te llamaremos' : channel === 'whatsapp' ? 'Te escribiremos por WhatsApp' : 'Te contactaremos';
    return <Success title="Solicitud enviada" text={'Gracias, ' + firstName(v.name) + '. ' + how + ' al ' + v.phone + ' en menos de 2 horas hábiles.'}
      action={onDone ? <MX.Button variant="dark" onClick={onDone}>Cerrar</MX.Button> : <MX.Button variant="outline" onClick={() => { setStatus('idle'); setV((s) => ({ ...s, message: defMsg })); }}>Enviar otra consulta</MX.Button>} />;
  }
  const hasErr = Object.values(err).some(Boolean);
  return (
    <form className="k-form" onSubmit={submit} noValidate>
      {hasErr ? <div className="k-alert" role="alert"><MX.Icon name="AlertCircle" size={16} />Revisa los campos marcados.</div> : null}
      {showType ? <fieldset className="k-fs"><legend className="k-label">Tipo de consulta</legend><div className="k-chiprow">{TIPOS.map((t) => <MX.Chip key={t} selected={v.tipo === t} onClick={() => setV((s) => ({ ...s, tipo: t }))}>{t}</MX.Chip>)}</div></fieldset> : null}
      <MX.Input label="Nombre" required autoComplete="name" placeholder="Nombre y apellido" value={v.name} onChange={up('name')} error={err.name} />
      <div className="k-form__2">
        <MX.Input label="Teléfono" required type="tel" inputMode="tel" autoComplete="tel" placeholder="55 1234 5678" value={v.phone} onChange={up('phone')} error={err.phone} />
        <MX.Input label="Correo" required type="email" autoComplete="email" placeholder="nombre@correo.com" value={v.email} onChange={up('email')} error={err.email} />
      </div>
      <MX.Input label="Mensaje" multiline rows={4} value={v.message} onChange={up('message')} placeholder="¿Qué te gustaría saber?" />
      {p || devName ? <MX.Checkbox label={p ? 'Quiero recibir información sobre esta propiedad.' : 'Quiero recibir actualizaciones de este desarrollo.'} checked={v.optin} onChange={(c) => setV((s) => ({ ...s, optin: c }))} /> : null}
      <MX.Button type="submit" variant="dark" size="lg" fullWidth loading={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}</MX.Button>
      <p className="k-fine">Al enviar aceptas el tratamiento de tus datos conforme a nuestro {inline ? <a href="#" onClick={(e) => { e.preventDefault(); app.openModal('legal', { doc: 'privacidad' }); }}>aviso de privacidad</a> : 'aviso de privacidad'}.</p>
    </form>
  );
}

const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00'];
function icsDownload(p, date, time, type) {
  const [h, m] = time.split(':').map(Number);
  const s = new Date(date); s.setHours(h, m, 0, 0);
  const e = new Date(s.getTime() + 60 * 60000);
  const f = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mextas//Visita//ES', 'BEGIN:VEVENT', 'UID:' + Date.now() + '@mextas.mx', 'DTSTAMP:' + f(new Date()), 'DTSTART:' + f(s), 'DTEND:' + f(e),
    'SUMMARY:Visita ' + (type === 'video' ? 'por videollamada' : 'presencial') + ' · ' + p.title, 'LOCATION:' + p.location, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = 'visita-mextas.ics'; a.click();
}

function VisitFlow({ p, onDone }) {
  const app = useApp();
  const D = window.MXData;
  const days = useMemo(() => { const out = []; const d = new Date(); d.setHours(0, 0, 0, 0); while (out.length < 12) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0) out.push(new Date(d)); } return out; }, []);
  const [step, setStep] = useState(1);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(null);
  const [type, setType] = useState('presencial');
  const [v, setV] = useState({ name: '', phone: '', email: '' });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');
  const agent = D.agents.find((a) => a.id === p.agent) || D.agents[0];
  const long = (d) => d.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });
  const up = (k) => (e) => { const val = e.target.value; setV((s) => ({ ...s, [k]: val })); };
  const confirm = (e) => {
    e.preventDefault();
    const er = validate(v, ['name', 'phone', 'email']); setErr(er);
    if (Object.keys(er).length) return;
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); app.toast({ tone: 'success', title: 'Visita confirmada', message: long(days[day]) + ' · ' + time }); }, 1300);
  };
  if (status === 'sent') {
    return (
      <Success title="Tu visita está confirmada" text={'Te enviamos la confirmación a ' + v.email + '. ' + agent.name + ' te contactará un día antes.'}
        action={<><MX.Button variant="outline" iconLeft="CalendarPlus" onClick={() => icsDownload(p, days[day], time, type)}>Agregar a mi calendario</MX.Button><MX.Button variant="dark" onClick={onDone}>Listo</MX.Button></>}>
        <div className="k-summary">
          <div><span>Propiedad</span><b>{p.title}</b></div><div><span>Fecha</span><b>{long(days[day])}</b></div>
          <div><span>Hora</span><b>{time} h</b></div><div><span>Tipo</span><b>{type === 'video' ? 'Videollamada' : 'Presencial'}</b></div><div><span>Asesor</span><b>{agent.name}</b></div>
        </div>
      </Success>
    );
  }
  return (
    <div className="k-form">
      <div className="k-steps" aria-hidden="true"><span className="is-on">1 · Fecha y hora</span><span className={step === 2 ? 'is-on' : ''}>2 · Tus datos</span></div>
      {step === 1 ? (<>
        <fieldset className="k-fs"><legend className="k-label">Fecha</legend><div className="k-dates">
          {days.map((d, i) => <button type="button" key={i} className={'k-date' + (i === day ? ' is-on' : '')} aria-pressed={i === day} aria-label={long(d)} onClick={() => { setDay(i); setTime(null); }}>
            <small>{d.toLocaleDateString('es-MX', { weekday: 'short' }).replace('.', '')}</small><b>{d.getDate()}</b><small>{d.toLocaleDateString('es-MX', { month: 'short' }).replace('.', '')}</small>
          </button>)}
        </div></fieldset>
        <fieldset className="k-fs"><legend className="k-label">Hora</legend><div className="k-times">
          {TIMES.map((t, i) => { const taken = (i + day) % 4 === 1 || (days[day].getDay() === 6 && i > 4); return <button type="button" key={t} disabled={taken} className={'k-time' + (time === t ? ' is-on' : '')} aria-pressed={time === t} aria-label={t + (taken ? ', no disponible' : '')} onClick={() => setTime(t)}>{t}</button>; })}
        </div></fieldset>
        <fieldset className="k-fs"><legend className="k-label">Tipo de visita</legend><div className="k-radios">
          <MX.Radio variant="card" icon="MapPin" name="visit-type" value="presencial" label="Presencial" description="Recorrido en sitio con tu asesor" checked={type === 'presencial'} onChange={setType} />
          <MX.Radio variant="card" icon="Video" name="visit-type" value="video" label="Videollamada" description="Recorrido guiado en vivo" checked={type === 'video'} onChange={setType} />
        </div></fieldset>
        <MX.Button variant="dark" size="lg" fullWidth iconRight="ArrowRight" disabled={!time} onClick={() => setStep(2)}>{time ? 'Continuar' : 'Selecciona un horario'}</MX.Button>
      </>) : (
        <form className="k-form" onSubmit={confirm} noValidate>
          <p className="k-pick"><b>{long(days[day])}</b> · {time} h · {type === 'video' ? 'Videollamada' : 'Presencial'}</p>
          <MX.Input label="Nombre" required autoComplete="name" value={v.name} onChange={up('name')} error={err.name} placeholder="Nombre y apellido" />
          <div className="k-form__2">
            <MX.Input label="Teléfono" required type="tel" autoComplete="tel" value={v.phone} onChange={up('phone')} error={err.phone} placeholder="55 1234 5678" />
            <MX.Input label="Correo" required type="email" autoComplete="email" value={v.email} onChange={up('email')} error={err.email} placeholder="nombre@correo.com" />
          </div>
          <div className="k-row-btns">
            <MX.Button variant="outline" size="lg" iconLeft="ArrowLeft" onClick={() => setStep(1)}>Atrás</MX.Button>
            <MX.Button type="submit" variant="dark" size="lg" loading={status === 'sending'}>{status === 'sending' ? 'Confirmando…' : 'Confirmar visita'}</MX.Button>
          </div>
        </form>
      )}
    </div>
  );
}

function SellerForm({ valuation: initialVal, onDone, inline }) {
  const app = useApp();
  const D = window.MXData;
  const [v, setV] = useState({ name: '', phone: '', email: '', ubicacion: '', tipo: null, precio: '', message: '', valuation: !!initialVal });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');
  const up = (k) => (e) => { const val = e.target.value; setV((s) => ({ ...s, [k]: val })); };
  const submit = (e) => {
    e.preventDefault();
    const er = validate(v, ['name', 'phone', 'email']);
    if (!v.ubicacion.trim()) er.ubicacion = 'Indica la ubicación de la propiedad';
    if (!v.tipo) er.tipo = 'Selecciona el tipo de propiedad';
    setErr(er);
    if (Object.keys(er).length) return;
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); app.toast({ tone: 'success', title: v.valuation ? 'Valuación solicitada' : 'Solicitud recibida', message: 'Te contactaremos en menos de 24 horas.' }); }, 1400);
  };
  if (status === 'sent') {
    return <Success title={v.valuation ? 'Valuación solicitada' : 'Recibimos tu solicitud'} text={'Gracias, ' + firstName(v.name) + '. Un especialista revisará tu ' + (v.tipo || 'propiedad').toLowerCase() + ' en ' + v.ubicacion + ' y te contactará en menos de 24 horas para agendar la visita de valuación.'}
      action={onDone ? <MX.Button variant="dark" onClick={onDone}>Cerrar</MX.Button> : <MX.Button variant="outline" onClick={() => setStatus('idle')}>Enviar otra propiedad</MX.Button>} />;
  }
  return (
    <form className="k-form" onSubmit={submit} noValidate>
      {Object.values(err).some(Boolean) ? <div className="k-alert" role="alert"><MX.Icon name="AlertCircle" size={16} />Revisa los campos marcados.</div> : null}
      <MX.Input label="Nombre" required autoComplete="name" value={v.name} onChange={up('name')} error={err.name} placeholder="Nombre y apellido" />
      <div className="k-form__2">
        <MX.Input label="Teléfono" required type="tel" autoComplete="tel" value={v.phone} onChange={up('phone')} error={err.phone} placeholder="55 1234 5678" />
        <MX.Input label="Correo" required type="email" autoComplete="email" value={v.email} onChange={up('email')} error={err.email} placeholder="nombre@correo.com" />
      </div>
      <div className="k-form__2">
        <MX.Input label="Ubicación de la propiedad" required iconLeft="MapPin" value={v.ubicacion} onChange={up('ubicacion')} error={err.ubicacion} placeholder="Colonia, ciudad" />
        <MX.Select label="Tipo de propiedad" required placeholder="Selecciona tipo" value={v.tipo} error={err.tipo} onChange={(t) => setV((s) => ({ ...s, tipo: t }))} options={D.types.filter((t) => t !== 'Desarrollo')} />
      </div>
      <MX.Input label="Precio estimado" hint="Opcional · lo validamos con comparables de la zona" inputMode="numeric" iconLeft="DollarSign" placeholder="MXN" value={v.precio ? Number(v.precio).toLocaleString('en-US') : ''} onChange={(e) => setV((s) => ({ ...s, precio: e.target.value.replace(/\D/g, '') }))} />
      <MX.Input label="Mensaje" multiline rows={3} value={v.message} onChange={up('message')} placeholder="Superficie, estado de la propiedad, fecha en que te gustaría vender…" />
      <MX.Checkbox label="Solicitar valuación" description="Un especialista visita la propiedad y te entrega una opinión de valor sin costo." checked={v.valuation} onChange={(c) => setV((s) => ({ ...s, valuation: c }))} />
      <MX.Button type="submit" variant="dark" size="lg" fullWidth loading={status === 'sending'}>{status === 'sending' ? 'Enviando…' : v.valuation ? 'Solicitar valuación' : 'Enviar solicitud'}</MX.Button>
    </form>
  );
}

const LEGAL = {
  privacidad: { title: 'Aviso de privacidad', body: ['Mextas Inmobiliaria utiliza los datos que compartes (nombre, teléfono y correo) exclusivamente para dar seguimiento a tu solicitud y, si lo autorizas, enviarte información de propiedades.', 'No compartimos tus datos con terceros sin tu consentimiento, salvo con notarías e instituciones financieras cuando forman parte de una operación que tú solicitas.', 'Puedes ejercer tus derechos ARCO escribiendo a privacidad@mextas.mx.', 'Documento de demostración: el texto legal definitivo debe ser revisado por el área jurídica.'] },
  terminos: { title: 'Términos y condiciones', body: ['La información publicada es de carácter informativo y puede cambiar sin previo aviso. Precios, superficies y disponibilidad deben confirmarse con un asesor.', 'Las simulaciones de crédito son estimaciones y no constituyen una oferta de financiamiento.', 'Documento de demostración: el texto legal definitivo debe ser revisado por el área jurídica.'] },
};

function ModalHost() {
  const { modal, closeModal } = useApp();
  const last = React.useRef({ kind: null, props: {}, id: 0 });
  if (modal) last.current = modal;
  const m = modal || last.current;
  const P = m.props || {};
  const is = (k) => !!modal && modal.kind === k;
  const ch = CHANNELS[P.channel] || CHANNELS.info;
  const legal = LEGAL[P.doc] || LEGAL.privacidad;
  return (<>
    <MX.Dialog open={is('contact')} onClose={closeModal} eyebrow={P.p ? P.p.title : P.devName || 'Mextas Inmobiliaria'} title={ch.title} description={ch.desc(P)}>
      <ContactForm key={m.id} p={P.p} devName={P.devName} model={P.model} channel={P.channel} onDone={closeModal} />
    </MX.Dialog>
    <MX.Dialog open={is('visit')} onClose={closeModal} eyebrow={P.p ? P.p.title : ''} title="Agenda una visita" description="Elige el día, la hora y el tipo de recorrido.">
      {P.p ? <VisitFlow key={m.id} p={P.p} onDone={closeModal} /> : null}
    </MX.Dialog>
    <MX.Dialog open={is('seller')} onClose={closeModal} eyebrow="Propietarios" title={P.valuation ? 'Solicitar valuación' : 'Vende con Mextas'} description="Cuéntanos sobre tu propiedad. La valuación inicial no tiene costo.">
      <SellerForm key={m.id} valuation={P.valuation} onDone={closeModal} />
    </MX.Dialog>
    <MX.Dialog open={is('legal')} onClose={closeModal} size="lg" title={legal.title} footer={<MX.Button variant="dark" onClick={closeModal}>Entendido</MX.Button>}>
      {legal.body.map((t, i) => <p key={i} className="k-prose" style={{ fontSize: 15 }}>{t}</p>)}
    </MX.Dialog>
  </>);
}

Object.assign(window, { ContactForm, SellerForm, VisitFlow, ModalHost });
})();
