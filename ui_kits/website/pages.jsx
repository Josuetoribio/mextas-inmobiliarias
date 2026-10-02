(() => {
const { useState } = React;
const MX = window.MX;

function NotFound({ what = 'página' }) {
  return <div style={{ paddingTop: 140, paddingBottom: 80 }}><MX.EmptyState icon="Compass" title={'No encontramos esta ' + what} description="Es posible que el enlace haya cambiado o que la publicación ya no esté disponible." action={<MX.Button variant="dark" iconRight="ArrowRight" href="#/propiedades">Explorar propiedades</MX.Button>} /></div>;
}

function Favorites() {
  const { favItems, setCompareList, navigate } = useApp();
  const n = favItems.length;
  return (<>
    <PageHead eyebrow="Tu colección" title="Favoritos" crumbs={[{ label: 'Inicio', href: '#/' }, { label: 'Favoritos' }]}
      text={n ? n + (n === 1 ? ' propiedad guardada' : ' propiedades guardadas') + '. Se conservan en este dispositivo.' : null} />
    <section className="k-section k-pt0"><div className="k-container k-wide">
      {n ? (<>
        {n >= 2 ? <div className="k-cmp-bar"><span className="k-fine">¿Indeciso? Compara hasta tres de tus favoritas lado a lado.</span><MX.Button variant="outline" size="sm" iconLeft="Scale" onClick={() => { setCompareList(favItems.map((p) => p.slug)); navigate('/comparar'); }}>Comparar favoritas</MX.Button></div> : null}
        <div className="k-grid k-grid--3">{favItems.map((p) => <PCard key={p.id} p={p} />)}</div>
      </>) : (
        <div className="k-card"><MX.EmptyState icon="Heart" title="Tu colección está vacía" description="Guarda las propiedades que más te interesen para encontrarlas fácilmente." action={<MX.Button variant="dark" iconRight="ArrowRight" href="#/propiedades">Explorar propiedades</MX.Button>} /></div>
      )}
    </div></section>
  </>);
}

function Compare() {
  const { cmpItems: items, toggleCompare, clearCompare } = useApp();
  const D = window.MXData;
  const crumbs = [{ label: 'Inicio', href: '#/' }, { label: 'Comparar' }];
  if (!items.length) {
    return (<><PageHead eyebrow="Comparador" title="Comparar propiedades" crumbs={crumbs} />
      <section className="k-section k-pt0"><div className="k-container k-wide"><div className="k-card"><MX.EmptyState icon="Scale" title="Aún no hay propiedades para comparar" description="Marca “Comparar” en hasta tres propiedades para verlas lado a lado." action={<MX.Button variant="dark" iconRight="ArrowRight" href="#/propiedades">Explorar propiedades</MX.Button>} /></div></div></section></>);
  }
  const sale = items.filter((p) => p.operation === 'venta');
  const bestPpm = sale.length > 1 ? Math.min(...sale.map((p) => p.price / p.area)) : null;
  const maxArea = items.length > 1 ? Math.max(...items.map((p) => p.area)) : null;
  const amen = [...new Set(items.flatMap((p) => p.amenities))];
  const rows = [
    ['Precio', (p) => <span className="k-cmp__price">{D.fmtPrice(p)}</span>],
    ['Precio por m²', (p) => p.operation === 'venta' ? <>{D.fmt(p.price / p.area)} MXN{bestPpm && p.price / p.area === bestPpm ? <MX.Badge tone="success" className="k-cmp__best">Mejor valor</MX.Badge> : null}</> : '—'],
    ['Ubicación', (p) => p.location], ['Tipo', (p) => p.type], ['Operación', (p) => (p.operation === 'renta' ? 'Renta' : 'Venta')],
    ['Recámaras', (p) => p.beds || '—'], ['Baños', (p) => p.baths || '—'],
    ['Superficie', (p) => <>{p.area} m²{maxArea && p.area === maxArea ? <MX.Badge tone="outline" className="k-cmp__best">Mayor</MX.Badge> : null}</>],
    ['Estacionamientos', (p) => p.parking || '—'], ['Antigüedad', (p) => ageLabel(p.year)],
    ['Amenidades', (p) => <ul>{amen.map((a) => { const on = p.amenities.includes(a); return <li key={a} className={on ? '' : 'is-off'}><MX.Icon name={on ? 'Check' : 'Minus'} size={14} />{a}</li>; })}</ul>],
    ['Características', (p) => p.features.length ? <ul>{p.features.map((x) => <li key={x}><MX.Icon name="Check" size={14} />{x}</li>)}</ul> : '—'],
  ];
  const empty = Math.max(0, 3 - items.length);
  return (<>
    <PageHead eyebrow="Comparador" title="Comparar propiedades" crumbs={crumbs} text={items.length < 2 ? 'Agrega al menos una propiedad más para una comparación completa.' : 'Revisa precio, superficie y amenidades lado a lado.'} />
    <section className="k-section k-pt0"><div className="k-container k-wide">
      <div className="k-cmp-bar"><span className="k-fine">{items.length} de 3 propiedades seleccionadas</span><MX.Button variant="ghost" size="sm" iconLeft="RotateCcw" onClick={clearCompare}>Vaciar comparador</MX.Button></div>
      <div className="k-cmp" role="region" aria-label="Tabla comparativa" tabIndex={0}>
        <table>
          <thead><tr><th scope="row">Propiedad</th>
            {items.map((p) => <td key={p.id}><div className="k-cmp__head">
              <div className="k-cmp__img"><img src={p.image} alt="" /><MX.IconButton icon="X" label={'Quitar ' + p.title} variant="glass" size="sm" onClick={() => toggleCompare(p)} /></div>
              <a href={'#/propiedades/' + p.slug}>{p.title}</a><small>{p.id}</small>
            </div></td>)}
            {Array.from({ length: empty }).map((_, i) => <td key={'e' + i}><a className="k-cmp__add" href="#/propiedades"><MX.Icon name="Plus" size={18} />Agregar propiedad</a></td>)}
          </tr></thead>
          <tbody>{rows.map(([label, fn]) => <tr key={label}><th scope="row">{label}</th>{items.map((p) => <td key={p.id}>{fn(p)}</td>)}{Array.from({ length: empty }).map((_, i) => <td key={'e' + i} />)}</tr>)}
            <tr><th scope="row" /> {items.map((p) => <td key={p.id}><MX.Button size="sm" variant="dark" iconRight="ArrowRight" href={'#/propiedades/' + p.slug}>Ver propiedad</MX.Button></td>)}{Array.from({ length: empty }).map((_, i) => <td key={'e' + i} />)}</tr>
          </tbody>
        </table>
      </div>
    </div></section>
  </>);
}

const DEV_STATUSES = [{ value: 'all', label: 'Todos' }, { value: 'Preventa', label: 'Preventa' }, { value: 'En construcción', label: 'En construcción' }, { value: 'Entrega inmediata', label: 'Entrega inmediata' }];
function Developments() {
  const { route, navigate } = useApp();
  const D = window.MXData;
  const zone = route.query.get('ubicacion') || '';
  const [status, setStatus] = useState('all');
  const list = D.developments.filter((d) => (!zone || d.zone === zone) && (status === 'all' || d.status === status));
  return (<>
    <PageHead eyebrow="Desarrollos" title="Proyectos residenciales seleccionados" crumbs={[{ label: 'Inicio', href: '#/' }, { label: 'Desarrollos' }]}
      text="Preventa y entrega inmediata en las ciudades con mayor dinamismo del país. Revisamos desarrollador, permisos, avance de obra y calendario de entrega de cada proyecto." />
    <section className="k-section k-pt0"><div className="k-container k-wide">
      <div className="k-filterbar">
        <MX.Tabs variant="segmented" size="sm" label="Estatus" value={status} onChange={setStatus} items={DEV_STATUSES.map((s) => ({ ...s, count: s.value === 'all' ? D.developments.length : D.developments.filter((d) => d.status === s.value).length }))} />
        {zone ? <MX.Chip icon="MapPin" onRemove={() => navigate('/desarrollos', { replace: true })}>{locLabel(zone)}</MX.Chip> : null}
      </div>
      {list.length ? <div>{list.map((d, i) => <DevRow key={d.slug} d={d} i={i} />)}</div>
        : <MX.EmptyState icon="Building" title="No hay desarrollos con este criterio" description="Prueba con otro estatus o revisa todas las ciudades." action={<MX.Button variant="dark" onClick={() => { setStatus('all'); navigate('/desarrollos', { replace: true }); }}>Ver todos los desarrollos</MX.Button>} />}
    </div></section>
  </>);
}

function DevelopmentsTeaser() {
  const D = window.MXData;
  return (
    <section className="k-section" id="desarrollos"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Desarrollos" title="Proyectos residenciales seleccionados" action={<MX.Button variant="outline" size="sm" iconRight="ArrowRight" href="#/desarrollos">Ver todos</MX.Button>} /></Reveal>
      <div className="k-mt">{D.developments.slice(0, 2).map((d, i) => <DevRow key={d.slug} d={d} i={i + 1} />)}</div>
    </div></section>
  );
}

function DevRow({ d, i }) {
  const D = window.MXData;
  return (
    <Reveal as="article" className="k-devrow">
      <a className="k-devrow__img" href={'#/desarrollos/' + d.slug} aria-label={'Explorar ' + d.name}><img src={d.image} alt={'Vista de ' + d.name} loading={i ? 'lazy' : 'eager'} /><MX.Badge tone="light">{d.status}</MX.Badge></a>
      <div>
        <p className="k-eyebrow">{d.location}</p>
        <h2>{d.name}</h2>
        <p className="k-devrow__tag">{d.tagline}</p>
        <dl className="k-devmeta">
          <div><dt>Desde</dt><dd>{D.fmtShort(d.from)}</dd></div>
          <div><dt>Disponibles</dt><dd>{d.units} <small>de {d.total}</small></dd></div>
          <div><dt>Entrega</dt><dd>{d.delivery}</dd></div>
        </dl>
        <div className="k-progress-lbl"><span>Avance de obra</span><b>{d.progress}%</b></div>
        <div className="k-progress" role="progressbar" aria-valuenow={d.progress} aria-valuemin={0} aria-valuemax={100} aria-label="Avance de obra"><span style={{ width: d.progress + '%' }} /></div>
        <ul className="k-devamen">{d.amenities.slice(0, 5).map((a) => <li key={a}><MX.Icon name={D.amenityIcons[a] || 'Check'} size={15} />{a}</li>)}</ul>
        <MX.Button variant="dark" iconRight="ArrowRight" href={'#/desarrollos/' + d.slug}>Explorar desarrollo</MX.Button>
      </div>
    </Reveal>
  );
}

function DevelopmentDetail({ slug }) {
  const D = window.MXData;
  const { openModal } = useApp();
  const [lb, setLb] = useState(-1);
  const d = D.developments.find((x) => x.slug === slug);
  if (!d) return <NotFound what="desarrollo" />;
  const avail = (n) => (n === 0 ? <MX.Badge tone="danger">Agotado</MX.Badge> : n <= 4 ? <MX.Badge tone="warning">Últimas {n}</MX.Badge> : <MX.Badge tone="success">{n} disponibles</MX.Badge>);
  return (<>
    <section className="k-hero k-hero--page" aria-label={d.name}>
      <img className="k-hero__img" src={d.image} alt={'Vista de ' + d.name} />
      <div className="k-hero__shade k-hero__shade--b" />
      <div className="k-container k-wide k-hero__content">
        <MX.Breadcrumbs tone="dark" items={[{ label: 'Inicio', href: '#/' }, { label: 'Desarrollos', href: '#/desarrollos' }, { label: d.name }]} />
        <p className="k-eyebrow k-fadeup">{d.status} · {d.location}</p>
        <h1 className="k-fadeup" style={{ animationDelay: '100ms', textTransform: 'uppercase' }}>{d.name}</h1>
        <p className="k-hero__lead k-fadeup" style={{ animationDelay: '200ms' }}>{d.tagline}</p>
        <div className="k-hero__ctas k-fadeup" style={{ animationDelay: '300ms' }}>
          <MX.Button size="lg" iconRight="ArrowRight" onClick={() => scrollToId('dev-form')}>Solicitar información</MX.Button>
          <MX.Button size="lg" variant="outline-inverse" onClick={() => scrollToId('modelos')}>Ver modelos</MX.Button>
        </div>
        <dl className="k-herostats k-fadeup" style={{ animationDelay: '400ms' }}>
          <div><dt>Desde</dt><dd>{D.fmtShort(d.from)}</dd></div><div><dt>Unidades disponibles</dt><dd>{d.units}</dd></div>
          <div><dt>Entrega estimada</dt><dd>{d.delivery}</dd></div><div><dt>Avance de obra</dt><dd>{d.progress}%</dd></div>
        </dl>
      </div>
    </section>
    <section className="k-section"><div className="k-container k-wide k-split">
      <Reveal><p className="k-eyebrow">El proyecto</p><h2>{d.tagline}</h2><p className="k-split__text">{d.description}</p></Reveal>
      <Reveal delay={120}><dl className="k-facts">
        <div><dt>Ubicación</dt><dd>{d.location}</dd></div><div><dt>Ciudad</dt><dd>{d.city}, {d.state}</dd></div><div><dt>Estatus</dt><dd>{d.status}</dd></div>
        <div><dt>Total de unidades</dt><dd>{d.total}</dd></div><div><dt>Precio desde</dt><dd>{D.fmt(d.from)} MXN</dd></div><div><dt>Entrega</dt><dd>{d.delivery}</dd></div>
      </dl><div style={{ marginTop: 20 }}><div className="k-progress-lbl"><span>Avance de obra</span><b>{d.progress}%</b></div><div className="k-progress"><span style={{ width: d.progress + '%' }} /></div></div></Reveal>
    </div></section>
    <section className="k-section k-white k-bt"><div className="k-container k-wide">
      <MX.SectionHeader eyebrow="Galería" title="Recorre el desarrollo" />
      <div className="k-galgrid k-mt">{d.gallery.map((src, i) => <button key={i} type="button" onClick={() => setLb(i)} aria-label={'Ver imagen ' + (i + 1)}><img src={src} alt="" loading="lazy" /></button>)}</div>
      <div className="k-sub"><MX.SectionHeader eyebrow="Amenidades" title="Diseñado para vivirse" /><div className="k-amen-grid k-mt">{d.amenities.map((a) => <MX.AmenityItem key={a} icon={D.amenityIcons[a] || 'Check'} label={a} />)}</div></div>
    </div></section>
    <section className="k-section" id="modelos"><div className="k-container k-wide">
      <MX.SectionHeader eyebrow="Modelos" title="Unidades y disponibilidad" description="Precios de lista vigentes. Consulta esquemas de pago en preventa." />
      <div className="k-table-wrap k-mt"><table className="k-table">
        <thead><tr><th>Tipo</th><th>Superficie</th><th>Recámaras</th><th>Precio desde</th><th>Disponibilidad</th><th><span className="mx-sr">Acción</span></th></tr></thead>
        <tbody>{d.models.map((m) => <tr key={m.type}>
          <td className="k-serif">{m.type}</td><td>{m.area} m²</td><td>{m.beds}</td><td className="k-gold">{D.fmt(m.price)} MXN</td><td>{avail(m.available)}</td>
          <td style={{ textAlign: 'right' }}><MX.Button size="sm" variant={m.available ? 'outline' : 'ghost'} onClick={() => openModal('contact', { channel: 'dev', devName: d.name, model: m.type })}>{m.available ? 'Cotizar' : 'Lista de espera'}</MX.Button></td>
        </tr>)}</tbody>
      </table></div>
    </div></section>
    <section className="k-section k-dark" id="dev-form"><div className="k-container k-wide k-split">
      <div><p className="k-eyebrow">{d.name}</p><h2>Solicita información</h2><p className="k-split__text">Recibe la carpeta comercial con planos, lista de precios, esquemas de pago y calendario de obra.</p>
        <ul className="k-checks">{['Planos y acabados por modelo', 'Lista de precios vigente', 'Esquemas de pago en preventa', 'Visita al showroom o recorrido virtual'].map((x) => <li key={x}><MX.Icon name="Check" size={16} />{x}</li>)}</ul></div>
      <div className="k-card"><h3>Recibe la carpeta comercial</h3><p>Un asesor te responde hoy mismo.</p><ContactForm inline channel="dev" devName={d.name} /></div>
    </div></section>
    <Lightbox images={d.gallery} index={lb} onIndex={setLb} title={d.name} />
  </>);
}

Object.assign(window, { NotFound, Favorites, Compare, Developments, DevelopmentsTeaser, DevelopmentDetail });
})();
