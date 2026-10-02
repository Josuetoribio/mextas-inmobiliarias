(() => {
const { useState } = React;
const MX = window.MX;

function SvcGrid({ items }) {
  return <div className="k-svc-grid">{items.map((s, i) => <article key={s.title} className="k-svc">
    <div className="k-svc__top"><MX.Icon name={s.icon} size={28} strokeWidth={1.25} className="k-svc__icon" /><span className="k-svc__n">{String(i + 1).padStart(2, '0')}</span></div>
    <h3>{s.title}</h3><p>{s.text}</p>
  </article>)}</div>;
}

function ServicesTeaser() {
  const D = window.MXData;
  return (
    <section className="k-section k-white k-bt" id="servicios"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Servicios" title="Acompañamiento completo, de la búsqueda al cierre" action={<MX.Button variant="outline" size="sm" iconRight="ArrowRight" href="#/servicios">Ver servicios</MX.Button>} /></Reveal>
      <Reveal className="k-mt"><SvcGrid items={D.services.buyers} /></Reveal>
    </div></section>
  );
}

function Services() {
  const D = window.MXData;
  const { openModal } = useApp();
  return (<>
    <PageHead eyebrow="Servicios" title="Acompañamiento completo, de la búsqueda al cierre" crumbs={[{ label: 'Inicio', href: '#/' }, { label: 'Servicios' }]}
      text="Un solo equipo para comprar, vender o invertir: asesoría, análisis de mercado, negociación y gestión documental." />
    <section className="k-section k-pt0"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Para compradores" title="Encuentra la propiedad correcta" action={<MX.Button variant="dark" size="sm" iconRight="ArrowRight" onClick={() => openModal('contact', { channel: 'general' })}>Iniciar búsqueda personalizada</MX.Button>} /></Reveal>
      <Reveal className="k-mt"><SvcGrid items={D.services.buyers} /></Reveal>
    </div></section>
    <section className="k-section k-dark"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader tone="dark" eyebrow="Para propietarios" title="Vende con la presentación que merece" action={<MX.Button size="sm" iconRight="ArrowRight" onClick={() => openModal('seller', { valuation: true })}>Solicitar valuación</MX.Button>} /></Reveal>
      <Reveal className="k-mt"><SvcGrid items={D.services.owners} /></Reveal>
    </div></section>
    <section className="k-section"><div className="k-container k-cta">
      <p className="k-eyebrow">Asesoría sin costo</p><h2>Hablemos de lo que buscas</h2><p>La primera sesión con un asesor no tiene costo ni compromiso.</p>
      <div className="k-hero__ctas"><MX.Button variant="dark" size="lg" iconRight="ArrowRight" href="#/contacto">Contactar a un asesor</MX.Button><MX.Button variant="outline" size="lg" href="#/propiedades">Ver propiedades</MX.Button></div>
    </div></section>
  </>);
}

function About() {
  const D = window.MXData;
  const { openModal } = useApp();
  const HISTORY = [['2016', 'Abrimos la primera oficina en Guadalajara con un portafolio de doce residencias.'], ['2018', 'Llegamos a Monterrey y sumamos el área de desarrollos en preventa.'], ['2020', 'Oficina en Ciudad de México; enfoque en Polanco, Lomas y Condesa.'], ['2023', 'Alianzas en Los Cabos, Cancún y Mérida para inversión vacacional.'], ['2026', 'Lanzamos la plataforma digital Mextas para buscar, comparar y agendar.']];
  const METHOD = [['Escuchamos', 'Definimos contigo presupuesto, zona y prioridades reales.'], ['Seleccionamos', 'Filtramos el mercado y descartamos lo que no cumple.'], ['Verificamos', 'Revisamos documentación, uso de suelo y estado de la propiedad.'], ['Acompañamos', 'Negociamos y coordinamos el cierre ante notario.']];
  const VALUES = [['Eye', 'Criterio', 'Recomendamos menos opciones, mejor elegidas.'], ['Scale', 'Transparencia', 'Precios, comisiones y riesgos explicados desde el inicio.'], ['Compass', 'Conocimiento local', 'Asesores que viven y conocen cada zona.'], ['Handshake', 'Relación a largo plazo', 'Muchos clientes vuelven para su segunda operación.']];
  return (<>
    <section className="k-hero k-hero--page" aria-label="Nosotros">
      <img className="k-hero__img" src={D.IMG.lomas} alt="Residencia contemporánea con vista a la montaña" />
      <div className="k-hero__shade" />
      <div className="k-container k-wide k-hero__content">
        <p className="k-eyebrow k-fadeup">Nosotros</p>
        <h1 className="k-fadeup" style={{ animationDelay: '100ms' }}>Arquitectura, ubicación <em>y criterio.</em></h1>
        <p className="k-hero__lead k-fadeup" style={{ animationDelay: '200ms' }}>Mextas es una inmobiliaria mexicana enfocada en propiedades residenciales y desarrollos de alto nivel.</p>
      </div>
    </section>
    <section className="k-section"><div className="k-container k-wide">
      <Reveal><p className="k-eyebrow">Filosofía</p><p className="k-statement">Una propiedad se elige por cómo se vive, <em>no solo por lo que mide.</em></p></Reveal>
      <Reveal className="k-cols2"><p className="k-prose">Seleccionamos propiedades y desarrollos con criterios de ubicación, arquitectura y potencial de inversión. Preferimos presentar pocas opciones bien analizadas que un catálogo interminable.</p><p className="k-prose">Cada asesor trabaja una zona específica, conoce su oferta y sus precios reales, y acompaña al cliente hasta la entrega de llaves.</p></Reveal>
    </div></section>
    <section className="k-section k-white k-bt"><div className="k-container k-wide">
      <MX.SectionHeader eyebrow="Historia" title="Diez años de oficio" description="Contenido de demostración." />
      <ol className="k-timeline">{HISTORY.map(([y, t]) => <li key={y}><b>{y}</b><span>{t}</span></li>)}</ol>
    </div></section>
    <section className="k-section k-dark"><div className="k-container k-wide">
      <MX.SectionHeader tone="dark" eyebrow="Metodología" title="Cómo trabajamos" />
      <ol className="k-process k-mt" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>{METHOD.map(([t, x], i) => <li key={t}><span className="k-process__n">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{x}</p></li>)}</ol>
    </div></section>
    <section className="k-section"><div className="k-container k-wide">
      <MX.SectionHeader eyebrow="Valores" title="Lo que no negociamos" />
      <div className="k-values k-mt">{VALUES.map(([i, t, x]) => <Reveal key={t}><MX.Icon name={i} size={28} strokeWidth={1.25} /><h3>{t}</h3><p>{x}</p></Reveal>)}</div>
    </div></section>
    <section className="k-section k-white k-bt"><div className="k-container k-wide">
      <MX.SectionHeader eyebrow="Equipo" title="Asesores Mextas" />
      <div className="k-team k-mt">{D.agents.map((a) => <div key={a.id} className="k-member"><span className="k-avatar k-avatar--lg">{a.initials}</span><b>{a.name}</b><small>{a.role}</small><MX.Button size="sm" variant="outline" iconLeft="Mail" onClick={() => openModal('contact', { channel: 'general' })}>Contactar</MX.Button></div>)}</div>
    </div></section>
    <section className="k-section k-dark"><div className="k-container k-wide"><StatsRow /><p className="k-demo-note">Cifras demostrativas para este prototipo.</p></div></section>
    <section className="k-section"><div className="k-container k-cta">
      <h2>¿Buscas comprar, vender o invertir?</h2><p>Te asignamos un asesor especializado en la zona que te interesa.</p>
      <div className="k-hero__ctas"><MX.Button variant="dark" size="lg" iconRight="ArrowRight" href="#/contacto">Hablar con un asesor</MX.Button><MX.Button variant="outline" size="lg" href="#/vender">Vender mi propiedad</MX.Button></div>
    </div></section>
  </>);
}

function Sell() {
  const D = window.MXData;
  const { openModal } = useApp();
  const REASONS = [['Calculator', 'Valuación', 'Opinión de valor basada en comparables reales de tu zona.'], ['Sparkles', 'Marketing premium', 'Presentación editorial y campañas segmentadas por perfil de comprador.'], ['Camera', 'Fotografía profesional', 'Fotografía arquitectónica, video y recorrido virtual.'], ['Globe', 'Difusión', 'Publicación en Mextas, portales principales y red de asesores aliados.'], ['Users', 'Acompañamiento', 'Un asesor dedicado de principio a fin.'], ['Handshake', 'Negociación', 'Filtramos ofertas y negociamos con base en datos.']];
  const PROCESS = [['Conocemos tu propiedad', 'Visita, levantamiento y revisión de documentos.'], ['Analizamos el mercado', 'Comparables, demanda y tiempo estimado de venta.'], ['Diseñamos la estrategia', 'Precio de salida, público objetivo y canales.'], ['Publicamos', 'Fotografía, ficha editorial y lanzamiento.'], ['Encontramos compradores', 'Visitas calificadas y seguimiento semanal.'], ['Cerramos contigo', 'Negociación, due diligence y firma ante notario.']];
  return (<>
    <section className="k-hero k-hero--page" aria-label="Vender con Mextas">
      <img className="k-hero__img" src={D.IMG.interior} alt="Interior de residencia con iluminación cálida" />
      <div className="k-hero__shade" />
      <div className="k-container k-wide k-hero__content">
        <p className="k-eyebrow k-fadeup">Vender con Mextas</p>
        <h1 className="k-fadeup" style={{ animationDelay: '100ms' }}>Vende tu propiedad con la <em>presentación que merece.</em></h1>
        <p className="k-hero__lead k-fadeup" style={{ animationDelay: '200ms' }}>Conoce el valor de tu propiedad y llega a más compradores calificados.</p>
        <div className="k-hero__ctas k-fadeup" style={{ animationDelay: '300ms' }}><MX.Button size="lg" iconRight="ArrowRight" onClick={() => openModal('seller', { valuation: true })}>Solicitar valuación</MX.Button><MX.Button size="lg" variant="outline-inverse" onClick={() => scrollToId('proceso')}>Ver el proceso</MX.Button></div>
      </div>
    </section>
    <section className="k-section"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Propietarios" title="¿Por qué vender con Mextas?" /></Reveal>
      <Reveal className="k-mt"><SvcGrid items={REASONS.map(([icon, title, text]) => ({ icon, title, text }))} /></Reveal>
    </div></section>
    <section className="k-section k-dark" id="proceso"><div className="k-container k-wide">
      <MX.SectionHeader tone="dark" eyebrow="Proceso" title="Seis pasos, un solo equipo" />
      <ol className="k-process k-mt">{PROCESS.map(([t, x], i) => <li key={t}><span className="k-process__n">{i + 1}</span><h3>{t}</h3><p>{x}</p></li>)}</ol>
    </div></section>
    <section className="k-section"><div className="k-container k-wide k-split">
      <div><p className="k-eyebrow">Empieza hoy</p><h2>Cuéntanos sobre tu propiedad</h2><p className="k-split__text">Con estos datos preparamos una primera opinión de valor y agendamos la visita.</p>
        <ul className="k-checks">{['Valuación inicial sin costo', 'Respuesta en menos de 24 horas', 'Sin exclusividad obligatoria en la primera reunión'].map((x) => <li key={x}><MX.Icon name="Check" size={16} />{x}</li>)}</ul></div>
      <div className="k-card"><h3>Datos de la propiedad</h3><p>Todos los campos marcados con * son obligatorios.</p><SellerForm inline valuation /></div>
    </div></section>
  </>);
}

function Contact() {
  return (<>
    <PageHead eyebrow="Contacto" title="Hablemos de tu próxima propiedad" crumbs={[{ label: 'Inicio', href: '#/' }, { label: 'Contacto' }]} text="Escríbenos o visítanos. Un asesor te responde en menos de 2 horas hábiles." />
    <ContactSection />
  </>);
}

/* Datos de contacto, mapa y formulario. En la portada lleva encabezado propio. */
function ContactSection({ home }) {
  return (
    <section className={home ? 'k-section k-white k-bt' : 'k-section k-pt0'} id={home ? 'contacto' : undefined}>
      {home ? <div className="k-container k-wide"><Reveal><MX.SectionHeader eyebrow="Contacto" title="Hablemos de tu próxima propiedad" /></Reveal></div> : null}
      <div className={'k-container k-wide k-contact' + (home ? ' k-mt' : '')}>
        <div>
          <div className="k-info">
            <div><MX.Icon name="Phone" size={20} /><small>Teléfono</small><a href="tel:+523312345678">33 1234 5678</a><span>También por WhatsApp</span></div>
            <div><MX.Icon name="Mail" size={20} /><small>Correo</small><a href="mailto:hola@mextas.mx">hola@mextas.mx</a><span>Respuesta el mismo día</span></div>
            <div><MX.Icon name="Clock" size={20} /><small>Horarios</small><b>Lun – Vie · 9:00 – 19:00</b><span>Sáb · 10:00 – 14:00</span></div>
            <div><MX.Icon name="MapPin" size={20} /><small>Oficinas</small><b>Guadalajara · Monterrey · CDMX</b><span>Visitas con cita</span></div>
          </div>
          <MockMap label="Oficina Guadalajara · Av. Patria, Zapopan" />
        </div>
        <div className="k-card"><h3>Envíanos un mensaje</h3><p>Selecciona el tipo de consulta para canalizarte con el área correcta.</p><ContactForm inline showType channel="general" /></div>
      </div>
    </section>
  );
}

function Blog() {
  const D = window.MXData;
  const [cat, setCat] = useState('Todos');
  const cats = ['Todos', ...new Set(D.posts.map((p) => p.category))];
  const list = D.posts.filter((p) => cat === 'Todos' || p.category === cat);
  const [first, ...rest] = list;
  return (<>
    <PageHead eyebrow="Blog Mextas" title="Consejos para tomar mejores decisiones inmobiliarias" crumbs={[{ label: 'Inicio', href: '#/' }, { label: 'Blog' }]}>
      <div className="k-chiprow" style={{ marginTop: 28 }}>{cats.map((c) => <MX.Chip key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</MX.Chip>)}</div>
    </PageHead>
    <section className="k-section k-pt0"><div className="k-container k-wide">
      {first ? <a className="k-post k-blog-feature" href={'#/blog/' + first.slug}>
        <div className="k-post__img"><img src={first.image} alt="" /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><p className="k-post__meta">{first.category} · {first.read} · {first.date}</p><h3>{first.title}</h3><p>{first.excerpt}</p><span className="k-post__cta">Leer artículo<MX.Icon name="ArrowRight" size={14} /></span></div>
      </a> : null}
      {rest.length ? <div className="k-grid k-grid--3">{rest.map((p) => <PostCard key={p.slug} post={p} />)}</div> : null}
    </div></section>
  </>);
}

function BlogPost({ slug }) {
  const D = window.MXData;
  const post = D.posts.find((p) => p.slug === slug);
  if (!post) return <NotFound what="publicación" />;
  const more = D.posts.filter((p) => p.slug !== slug).slice(0, 3);
  return (<>
    <section className="k-pagehead"><div className="k-container"><article className="k-article">
      <MX.Breadcrumbs items={[{ label: 'Inicio', href: '#/' }, { label: 'Blog', href: '#/blog' }, { label: post.title }]} />
      <p className="k-eyebrow">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="k-lead">{post.excerpt}</p>
      <div className="k-article__meta" style={{ marginTop: 20 }}><span>{post.date}</span><span>·</span><span>{post.read} de lectura</span><span>·</span><span>Equipo Mextas</span></div>
      <div className="k-article__img"><img src={post.image} alt="" /></div>
      {post.body.map((t, i) => <p key={i} className="k-prose" style={{ fontSize: 17 }}>{t}</p>)}
      <div className="k-note"><MX.Icon name="MessagesSquare" size={18} />¿Tienes dudas sobre tu caso? <a href="#/contacto">Habla con un asesor →</a></div>
    </article></div></section>
    <section className="k-section k-white k-bt"><div className="k-container k-wide"><MX.SectionHeader eyebrow="Sigue leyendo" title="Más guías" /><div className="k-grid k-grid--3 k-mt">{more.map((p) => <PostCard key={p.slug} post={p} />)}</div></div></section>
  </>);
}

Object.assign(window, { Services, ServicesTeaser, About, ContactSection, Sell, Contact, Blog, BlogPost });
})();
