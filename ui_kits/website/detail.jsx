(() => {
const { useState, useEffect, useRef } = React;
const MX = window.MX;
const ageLabel = (y) => (!y ? 'No aplica' : 2026 - y <= 0 ? 'A estrenar' : (2026 - y) + (2026 - y === 1 ? ' año' : ' años'));

function Gallery({ p, onOpen }) {
  const imgs = p.images;
  const [mi, setMi] = useState(0);
  const shown = imgs.length >= 5 ? imgs.slice(0, 5) : imgs.slice(0, 3);
  return (
    <div className="k-gal-wrap">
      <div className={'k-gal' + (shown.length === 3 ? ' k-gal--3' : '')}>
        {shown.map((src, i) => <button key={i} type="button" onClick={() => onOpen(i)} aria-label={'Abrir galería, imagen ' + (i + 1) + ' de ' + imgs.length}><img src={src} alt={i === 0 ? p.title : ''} loading={i < 3 ? 'eager' : 'lazy'} /></button>)}
      </div>
      <div className="k-gal-m" onScroll={(e) => { const el = e.currentTarget; setMi(Math.round(el.scrollLeft / el.clientWidth)); }}>
        {imgs.map((src, i) => <button key={i} type="button" onClick={() => onOpen(i)} aria-label={'Abrir imagen ' + (i + 1)}><img src={src} alt={i === 0 ? p.title : ''} loading={i < 2 ? 'eager' : 'lazy'} /></button>)}
      </div>
      <span className="k-gal__count"><MX.Icon name="Images" size={14} />{mi + 1} / {imgs.length}</span>
      <MX.Button className="k-gal__all" size="sm" variant="outline-inverse" iconLeft="Expand" onClick={() => onOpen(0)} style={{ background: 'rgba(13,13,12,.55)' }}>Ver las {imgs.length} fotos</MX.Button>
    </div>
  );
}

function Lightbox({ images, index, onIndex, title }) {
  const open = index >= 0;
  const [i, setI] = useState(0);
  const tx = useRef(null);
  useEffect(() => { if (open) setI(index); }, [index]);
  const go = (d) => setI((x) => (x + d + images.length) % images.length);
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open]);
  return (
    <MX.Dialog open={open} onClose={() => onIndex(-1)} placement="full" tone="dark" hideClose>
      <div className="k-lb">
        <div className="k-lb__top">
          <span className="k-lb__title">{title}</span>
          <span className="k-lb__count" aria-live="polite">{i + 1} / {images.length}</span>
          <MX.IconButton icon="X" label="Cerrar galería" variant="ghost" onClick={() => onIndex(-1)} />
        </div>
        <div className="k-lb__stage" onTouchStart={(e) => { tx.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => { if (tx.current == null) return; const dx = e.changedTouches[0].clientX - tx.current; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); tx.current = null; }}>
          <img key={i} src={images[i]} alt={title + ' — imagen ' + (i + 1) + ' de ' + images.length} />
          <MX.IconButton className="k-lb__nav k-lb__prev" icon="ChevronLeft" label="Imagen anterior" variant="glass" size="lg" onClick={() => go(-1)} />
          <MX.IconButton className="k-lb__nav k-lb__next" icon="ChevronRight" label="Imagen siguiente" variant="glass" size="lg" onClick={() => go(1)} />
        </div>
        <div className="k-lb__thumbs">
          {images.map((s, j) => <button key={j} type="button" className={j === i ? 'is-on' : ''} aria-label={'Ver imagen ' + (j + 1)} aria-current={j === i || undefined} onClick={() => setI(j)}><img src={s} alt="" loading="lazy" /></button>)}
        </div>
      </div>
    </MX.Dialog>
  );
}

function MortgageCalculator({ p }) {
  const D = window.MXData;
  const { openModal } = useApp();
  const [price, setPrice] = useState(p.price);
  const [down, setDown] = useState(20);
  const [years, setYears] = useState('20');
  const [rate, setRate] = useState(10.5);
  const dp = (price * down) / 100;
  const loan = Math.max(0, price - dp);
  const n = Number(years) * 12;
  const r = rate / 100 / 12;
  const monthly = loan > 0 ? (loan * r) / (1 - Math.pow(1 + r, -n)) : 0;
  const total = monthly * n + dp;
  return (
    <div className="k-mort">
      <div className="k-mort__in">
        <MX.Input label="Precio de propiedad" iconLeft="DollarSign" inputMode="numeric" hint="MXN" value={price ? price.toLocaleString('en-US') : ''} onChange={(e) => setPrice(Number(e.target.value.replace(/\D/g, '')) || 0)} />
        <MX.Slider label="Enganche" min={10} max={60} value={down} onChange={setDown} format={(v) => v + '%'} />
        <div><span className="k-label">Plazo</span><MX.Tabs variant="segmented" fullWidth label="Plazo" value={years} onChange={setYears} items={['5', '10', '15', '20'].map((y) => ({ value: y, label: y + ' años' }))} /></div>
        <MX.Slider label="Tasa estimada anual" min={8} max={14} step={0.1} value={rate} onChange={setRate} format={(v) => v.toFixed(1) + '%'} />
      </div>
      <div className="k-mort__out" aria-live="polite">
        <span className="k-mort__lbl">Pago mensual estimado</span>
        <span className="k-mort__big">{D.fmt(monthly)}<small> MXN</small></span>
        <div className="k-mort__rows">
          <div><span>Enganche ({down}%)</span><b>{D.fmt(dp)}</b></div>
          <div><span>Monto financiado</span><b>{D.fmt(loan)}</b></div>
          <div><span>Total estimado a {years} años</span><b>{D.fmt(total)}</b></div>
        </div>
        <p className="k-disclaimer">Simulación informativa. Las condiciones reales dependen de la institución financiera.</p>
        <MX.Button iconRight="ArrowRight" onClick={() => openModal('contact', { p, channel: 'credit' })}>Hablar con un asesor de crédito</MX.Button>
      </div>
    </div>
  );
}

function AgentPanel({ p, agent }) {
  const { openModal } = useApp();
  return (
    <div className="k-agent">
      <p className="k-eyebrow">Asesor Mextas</p>
      <h3>¿Te interesa esta propiedad?</h3>
      <p className="k-agent__sub">Habla con un asesor Mextas.</p>
      <div className="k-agent__btns">
        <MX.Button variant="dark" fullWidth iconLeft="Mail" onClick={() => openModal('contact', { p, channel: 'info' })}>Solicitar información</MX.Button>
        <MX.Button fullWidth iconLeft="CalendarDays" onClick={() => openModal('visit', { p })}>Agendar visita</MX.Button>
        <div className="k-agent__row">
          <MX.Button variant="outline" size="sm" iconLeft="MessageCircle" onClick={() => openModal('contact', { p, channel: 'whatsapp' })}>WhatsApp</MX.Button>
          <MX.Button variant="outline" size="sm" iconLeft="Phone" onClick={() => openModal('contact', { p, channel: 'call' })}>Llamar</MX.Button>
        </div>
      </div>
      <div className="k-agent__who"><span className="k-avatar">{agent.initials}</span><div><b>{agent.name}</b><small>{agent.role}</small></div></div>
      <p className="k-agent__note"><MX.Icon name="Clock" size={14} />Respuesta promedio: menos de 2 horas en horario laboral.</p>
    </div>
  );
}

function PropertyDetail({ slug }) {
  const app = useApp();
  const D = window.MXData;
  const [lb, setLb] = useState(-1);
  const p = app.bySlug[slug];
  if (!p) return <NotFound what="propiedad" />;
  const agent = D.agents.find((a) => a.id === p.agent) || D.agents[0];
  const fav = app.isFav(p);
  const cmp = app.isCmp(p);
  const share = async () => {
    try { await navigator.clipboard.writeText(location.href); app.toast({ tone: 'success', title: 'Enlace copiado', message: 'Compártelo con quien quieras.' }); }
    catch (e) { app.toast({ icon: 'Link', title: 'Copia este enlace', message: location.href }); }
  };
  const similar = D.properties.filter((x) => x.slug !== p.slug && x.operation === p.operation && (x.city === p.city || x.type === p.type)).slice(0, 3);
  const feats = [['Tipo', p.type], ['Operación', p.operation === 'renta' ? 'Renta' : 'Venta'], ['Superficie construida', p.area + ' m²'], p.lot ? ['Terreno', p.lot + ' m²'] : null,
    p.beds ? ['Recámaras', p.beds] : null, p.baths ? ['Baños', p.baths] : null, ['Estacionamientos', p.parking || '—'], ['Antigüedad', ageLabel(p.year)], ['Estatus', p.status], ['Clave', p.id]].filter(Boolean);
  return (
    <div className="k-detail k-has-mbar">
      <div className="k-container k-wide">
        <MX.Breadcrumbs items={[{ label: 'Inicio', href: '#/' }, { label: 'Propiedades', href: '#/propiedades' }, { label: p.city, href: '#/propiedades?ubicacion=' + p.zones[0] }, { label: p.title }]} />
        <Gallery p={p} onOpen={setLb} />
        <div className="k-dhead">
          <div>
            <div className="k-dbadges">{p.badge ? <MX.Badge>{p.badge}</MX.Badge> : null}<MX.Badge tone="outline">{p.operation === 'renta' ? 'En renta' : 'En venta'}</MX.Badge><span className="k-dref">{p.id}</span></div>
            <h1>{p.title}</h1>
            <p className="k-dloc"><MX.Icon name="MapPin" size={15} />{p.location}</p>
          </div>
          <div className="k-dhead__side">
            <p className="k-dprice">{D.fmtPrice(p)}<small>{p.operation === 'venta' ? D.fmt(p.price / p.area) + ' MXN por m²' : 'Contrato mínimo 12 meses'}</small></p>
            <div className="k-dactions">
              <MX.IconButton icon="Heart" label={fav ? 'Quitar de favoritos' : 'Guardar en favoritos'} active={fav} onClick={() => app.toggleFav(p)} />
              <MX.IconButton icon="Share2" label="Compartir" onClick={share} />
              <MX.Button size="sm" variant={cmp ? 'dark' : 'outline'} iconLeft={cmp ? 'Check' : 'Scale'} onClick={() => app.toggleCompare(p)}>{cmp ? 'En comparación' : 'Comparar'}</MX.Button>
            </div>
          </div>
        </div>
        <MX.PropertySpecs variant="blocks" beds={p.beds || undefined} baths={p.baths || undefined} area={p.area} parking={p.parking || undefined} />
        <div className="k-dlayout">
          <div>
            <section className="k-dblock"><h2>Descripción</h2>{p.description.map((t, i) => <p key={i} className="k-prose">{t}</p>)}</section>
            <section className="k-dblock"><h2>Características</h2>
              <ul className="k-features">{feats.map(([k, v]) => <li key={k}><span>{k}</span><b>{v}</b></li>)}</ul>
              {p.features.length ? <ul className="k-highlights">{p.features.map((x) => <li key={x}><MX.Icon name="Check" size={16} />{x}</li>)}</ul> : null}
            </section>
            <section className="k-dblock"><h2>Amenidades</h2><div className="k-amen-grid">{p.amenities.map((a) => <MX.AmenityItem key={a} icon={D.amenityIcons[a] || 'Check'} label={a} />)}</div></section>
            <section className="k-dblock"><h2>Ubicación</h2><MockMap p={p} /><p className="k-fine" style={{ marginTop: 12 }}>La ubicación exacta se comparte al agendar una visita.</p></section>
            <section className="k-dblock"><h2>Galería</h2><div className="k-galgrid">{p.images.map((src, i) => <button key={i} type="button" onClick={() => setLb(i)} aria-label={'Ver imagen ' + (i + 1)}><img src={src} alt="" loading="lazy" /></button>)}</div></section>
            {p.operation === 'venta' ? <section className="k-dblock" id="simulador"><p className="k-eyebrow">Información financiera</p><h2>Calcula tu inversión</h2><MortgageCalculator p={p} /></section> : null}
          </div>
          <aside aria-label="Contactar asesor"><AgentPanel p={p} agent={agent} /></aside>
        </div>
      </div>
      {similar.length ? <section className="k-section k-white k-bt"><div className="k-container k-wide">
        <MX.SectionHeader eyebrow="También te puede interesar" title="Propiedades similares" action={<MX.Button variant="outline" size="sm" iconRight="ArrowRight" href={'#/propiedades?ubicacion=' + p.zones[0]}>Ver más en {p.city}</MX.Button>} />
        <div className="k-grid k-grid--3 k-mt">{similar.map((x) => <PCard key={x.id} p={x} />)}</div>
      </div></section> : null}
      <div className="k-mbar">
        <MX.Button variant="outline" iconLeft="CalendarDays" onClick={() => app.openModal('visit', { p })}>Agendar visita</MX.Button>
        <MX.Button variant="dark" onClick={() => app.openModal('contact', { p, channel: 'info' })}>Solicitar info</MX.Button>
      </div>
      <Lightbox images={p.images} index={lb} onIndex={setLb} title={p.title} />
    </div>
  );
}

Object.assign(window, { PropertyDetail, Lightbox, MortgageCalculator, ageLabel });
})();
