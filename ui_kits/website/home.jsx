(() => {
const MX = window.MX;

function Home() {
  const { openModal, takePendingSection } = useApp();
  const D = window.MXData;
  const featured = D.properties.filter((p) => p.badge).slice(0, 4);
  React.useEffect(() => { const id = takePendingSection(); if (id) requestAnimationFrame(() => scrollToSection(id, false)); }, []);
  return (<>
    <section className="k-hero" id="inicio" aria-label="Presentación">
      <img className="k-hero__img" src={D.IMG.hero} alt="Residencia contemporánea de concreto y madera iluminada al anochecer" fetchpriority="high" />
      <div className="k-hero__shade" />
      <div className="k-container k-wide k-hero__content">
        <p className="k-eyebrow k-fadeup">Espacios que inspiran</p>
        <h1 className="k-fadeup" style={{ animationDelay: '120ms' }}>Encuentra el lugar<br />donde comienzan<br />tus <em>mejores historias.</em></h1>
        <p className="k-hero__lead k-fadeup" style={{ animationDelay: '240ms' }}>Propiedades seleccionadas en las mejores ubicaciones. Asesoría personalizada para ayudarte a encontrar tu próximo hogar o inversión.</p>
        <div className="k-hero__ctas k-fadeup" style={{ animationDelay: '360ms' }}>
          <MX.Button size="lg" iconRight="ArrowRight" href="#/propiedades">Ver propiedades</MX.Button>
          <MX.Button size="lg" variant="outline-inverse" href="#/desarrollos">Explorar desarrollos</MX.Button>
        </div>
        <div className="k-trust k-fadeup" style={{ animationDelay: '480ms' }}>{window.MX_TRUST.map(([i, t, s]) => <MX.TrustItem key={t} icon={i} title={t} subtitle={s} />)}</div>
      </div>
    </section>
    <div className="k-container k-wide k-search-wrap"><PropertySearch /></div>

    <section className="k-section" id="propiedades"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Propiedades destacadas" title="Descubre nuestras propiedades exclusivas" action={<MX.Button variant="outline" size="sm" iconRight="ArrowRight" href="#/propiedades">Ver todas</MX.Button>} /></Reveal>
      <div className="k-grid k-grid--4 k-mt">{featured.map((p, i) => <Reveal key={p.id} delay={i * 90}><PCard p={p} /></Reveal>)}</div>
    </div></section>

    <section className="k-section k-white k-bt"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Explora por categoría" title="Encuentra el espacio que buscas" /></Reveal>
      <Reveal className="k-cats k-mt">{D.categories.map((c) => {
        const dev = c.type === 'Desarrollo';
        const n = dev ? D.developments.length : D.properties.filter((p) => p.type === c.type).length;
        return <MX.CategoryTile key={c.type} icon={c.icon} label={c.label} count={n} unit={dev ? 'proyectos' : n === 1 ? 'propiedad' : 'propiedades'} href={dev ? '#/desarrollos' : '#/propiedades?tipo=' + c.type} />;
      })}</Reveal>
      <div className="k-sub">
        <Reveal><MX.SectionHeader eyebrow="Ubicaciones" title="Encuentra propiedades en las mejores zonas" action={<MX.Button variant="outline" size="sm" iconRight="ArrowRight" href="#/propiedades">Todas las zonas</MX.Button>} /></Reveal>
        <Reveal className="k-locs k-mt">{D.locations.map((l) => <MX.LocationCard key={l.slug} name={l.name} region={l.region} image={l.image} aspect="4 / 5" count={D.properties.filter((p) => p.zones.includes(l.slug)).length} href={'#/propiedades?ubicacion=' + l.slug} />)}</Reveal>
      </div>
    </div></section>

    <DevelopmentsTeaser />
    <ServicesTeaser />

    <section className="k-section k-dark" id="nosotros"><div className="k-container k-wide k-why">
      <Reveal>
        <p className="k-eyebrow">Por qué elegir Mextas</p>
        <h2>Más que propiedades,<br />creamos <em>oportunidades.</em></h2>
        <p className="k-why__lead">Seleccionamos propiedades y desarrollos con criterios de ubicación, arquitectura y potencial de inversión, y acompañamos cada operación de principio a fin.</p>
        <MX.Button variant="outline-inverse" iconRight="ArrowRight" href="#/nosotros">Conoce Mextas</MX.Button>
      </Reveal>
      <Reveal delay={150}><StatsRow /><p className="k-demo-note">Cifras demostrativas para este prototipo.</p></Reveal>
    </div></section>

    <section className="k-sell" id="vender" aria-label="Vende tu propiedad">
      <img src={D.IMG.interior} alt="" loading="lazy" /><div className="k-sell__shade" />
      <div className="k-container k-wide k-sell__in"><Reveal className="k-sell__box">
        <p className="k-eyebrow">Propietarios</p>
        <h2>¿Buscas vender<br />tu propiedad?</h2>
        <p>Conoce el valor de tu propiedad<br />y llega a más compradores.</p>
        <div className="k-hero__ctas">
          <MX.Button size="lg" iconRight="ArrowRight" onClick={() => openModal('seller')}>Quiero vender</MX.Button>
          <MX.Button size="lg" variant="outline-inverse" onClick={() => openModal('seller', { valuation: true })}>Solicitar valuación</MX.Button>
        </div>
      </Reveal></div>
    </section>

    <section className="k-section" id="blog"><div className="k-container k-wide">
      <Reveal><MX.SectionHeader eyebrow="Guías Mextas" title="Consejos para tomar mejores decisiones inmobiliarias" action={<MX.Button variant="outline" size="sm" iconRight="ArrowRight" href="#/blog">Ir al blog</MX.Button>} /></Reveal>
      <div className="k-grid k-grid--4 k-mt">{D.posts.map((p, i) => <Reveal key={p.slug} delay={i * 90}><PostCard post={p} /></Reveal>)}</div>
    </div></section>

    <ContactSection home />
  </>);
}

const SORTS = [{ value: 'rel', label: 'Relevancia' }, { value: 'asc', label: 'Precio menor' }, { value: 'desc', label: 'Precio mayor' }, { value: 'new', label: 'Más recientes' }, { value: 'area', label: 'Superficie' }];
const EMPTY_F = { op: '', ubicacion: '', tipo: '', precio: '', pmin: '', pmax: '', rec: '', banos: '', mmin: '', mmax: '', amen: [], q: '' };

function Listings() {
  const { route, navigate } = useApp();
  const D = window.MXData;
  const key = route.query.toString();
  const f = readFilters(route.query);
  const set = (patch) => navigate('/propiedades' + filtersToQuery({ ...f, ...patch }), { replace: true });
  const results = React.useMemo(() => applyFilters(D.properties, f), [key]);
  const [loading, setLoading] = React.useState(true);
  const [adv, setAdv] = React.useState(false);
  const [q, setQ] = React.useState(f.q);
  const isMobile = useMedia('(max-width: 1100px)');
  const listMode = f.view === 'list' && !useMedia('(max-width: 640px)');
  React.useEffect(() => { setLoading(true); const t = setTimeout(() => setLoading(false), 450); return () => clearTimeout(t); }, [key]);
  React.useEffect(() => { setQ(f.q); }, [f.q]);
  React.useEffect(() => { if (q === f.q) return; const t = setTimeout(() => set({ q }), 380); return () => clearTimeout(t); }, [q]);

  const chips = [];
  if (f.op) chips.push([f.op === 'renta' ? 'En renta' : 'En venta', { op: '' }]);
  if (f.ubicacion) chips.push([locLabel(f.ubicacion), { ubicacion: '' }]);
  if (f.tipo) chips.push([f.tipo, { tipo: '' }]);
  if (f.precio) chips.push(['Hasta ' + D.fmtShort(+f.precio), { precio: '' }]);
  if (f.pmin) chips.push(['Desde ' + D.fmtShort(+f.pmin), { pmin: '' }]);
  if (f.pmax) chips.push(['Máx. ' + D.fmtShort(+f.pmax), { pmax: '' }]);
  if (f.rec) chips.push([f.rec + '+ recámaras', { rec: '' }]);
  if (f.banos) chips.push([f.banos + '+ baños', { banos: '' }]);
  if (f.mmin) chips.push(['Desde ' + f.mmin + ' m²', { mmin: '' }]);
  if (f.mmax) chips.push(['Hasta ' + f.mmax + ' m²', { mmax: '' }]);
  f.amen.forEach((a) => chips.push([a, { amen: f.amen.filter((x) => x !== a) }]));
  if (f.q) chips.push(['“' + f.q + '”', { q: '' }]);
  const advCount = ['pmin', 'pmax', 'banos', 'mmin', 'mmax'].filter((k) => f[k]).length + f.amen.length;
  const clearAll = () => { setQ(''); navigate('/propiedades' + filtersToQuery({ ...EMPTY_F, sort: f.sort, view: f.view }), { replace: true }); };

  return (<>
    <PageHead eyebrow="Catálogo Mextas" title="Propiedades" text="Encuentra un espacio que se adapte a tu estilo de vida." crumbs={[{ label: 'Inicio', href: '#/' }, { label: 'Propiedades' }]} />
    <div className="k-toolbar"><div className="k-container k-wide">
      <div className="k-filters">
        <form className="k-qsearch" role="search" onSubmit={(e) => { e.preventDefault(); set({ q }); }}>
          <div className="mx-input mx-input--sm">
            <MX.Icon name="Search" size={16} className="mx-input__icon" />
            <input aria-label="Buscar por nombre, zona o ciudad" placeholder="Buscar por nombre, zona o ciudad" value={q} onChange={(e) => setQ(e.target.value)} />
            {q ? <button type="button" className="k-clearx" aria-label="Borrar búsqueda" onClick={() => { setQ(''); set({ q: '' }); }}><MX.Icon name="X" size={14} /></button> : null}
          </div>
        </form>
        <div className="k-f-desk"><MX.Select size="sm" value={f.op} onChange={(v) => set({ op: v })} options={[{ value: '', label: 'Venta y renta' }, { value: 'venta', label: 'Venta' }, { value: 'renta', label: 'Renta' }]} /></div>
        <div className="k-f-desk"><MX.Select size="sm" value={f.ubicacion} onChange={(v) => set({ ubicacion: v })} options={[{ value: '', label: 'Todas las zonas' }, ...D.locationOptions]} /></div>
        <div className="k-f-desk"><MX.Select size="sm" value={f.tipo} onChange={(v) => set({ tipo: v })} options={[{ value: '', label: 'Todos los tipos' }, ...D.types.filter((t) => t !== 'Desarrollo').map((t) => ({ value: t, label: t }))]} /></div>
        <div className="k-f-desk"><MX.Select size="sm" value={f.precio} onChange={(v) => set({ precio: v, pmax: '' })} options={D.priceOptions.map((o) => (o.value ? o : { value: '', label: 'Cualquier precio' }))} /></div>
        <div className="k-f-desk"><MX.Select size="sm" value={f.rec} onChange={(v) => set({ rec: v })} options={D.bedOptions.map((o) => (o.value ? { value: o.value, label: o.label + ' recámaras' } : { value: '', label: 'Recámaras' }))} /></div>
        <MX.Button size="sm" variant={isMobile ? 'dark' : 'outline'} iconLeft="SlidersHorizontal" onClick={() => setAdv(true)}>
          {isMobile ? 'Filtros' + (chips.length ? ' (' + chips.length + ')' : '') : 'Más filtros' + (advCount ? ' (' + advCount + ')' : '')}
        </MX.Button>
      </div>
      {chips.length ? <div className="k-activechips">
        {chips.map(([l, patch]) => <MX.Chip key={l} onRemove={() => set(patch)} removeLabel={'Quitar filtro ' + l}>{l}</MX.Chip>)}
        <MX.Button variant="ghost" size="sm" onClick={clearAll}>Limpiar filtros</MX.Button>
      </div> : null}
    </div></div>

    <section className="k-section k-pt0"><div className="k-container k-wide">
      <div className="k-resbar">
        <div>
          <p className="k-rescount" aria-live="polite">{loading ? 'Buscando…' : results.length + (results.length === 1 ? ' propiedad' : ' propiedades')}</p>
          <p className="k-ressub">{f.ubicacion ? 'en ' + locLabel(f.ubicacion) : 'en todo México'}{f.op ? (f.op === 'renta' ? ' · en renta' : ' · en venta') : ''}</p>
        </div>
        <div className="k-restools">
          <span className="k-sortlbl">Ordenar por</span>
          <MX.Select size="sm" value={f.sort} onChange={(v) => set({ sort: v })} options={SORTS} />
          <MX.Tabs variant="segmented" size="sm" label="Vista" value={f.view} onChange={(v) => set({ view: v })} items={[{ value: 'grid', label: 'Cuadrícula' }, { value: 'list', label: 'Lista' }]} />
        </div>
      </div>
      {f.tipo === 'Desarrollo' ? <div className="k-note" style={{ marginTop: 0, marginBottom: 20 }}><MX.Icon name="Building" size={18} />Los desarrollos tienen su propio catálogo con preventa, avance de obra y modelos. <a href="#/desarrollos">Ver desarrollos →</a></div> : null}
      {loading ? (
        <div className={listMode ? 'k-list' : 'k-grid k-grid--3'}>{[0, 1, 2, 3, 4, 5].slice(0, listMode ? 3 : 6).map((i) => <MX.Skeleton key={i} variant="card" />)}</div>
      ) : results.length ? (
        <div className={listMode ? 'k-list' : 'k-grid k-grid--3'}>{results.map((p, i) => <PCard key={p.id} p={p} layout={listMode ? 'list' : 'grid'} eager={i < 3} />)}</div>
      ) : (
        <MX.EmptyState icon="SearchX" title="No encontramos propiedades con estos filtros." description="Prueba ampliar el rango de precio, cambiar de zona o quitar algunas amenidades." action={<MX.Button variant="dark" iconLeft="RotateCcw" onClick={clearAll}>Limpiar filtros</MX.Button>} />
      )}
    </div></section>
    <AdvancedFilters open={adv} onClose={() => setAdv(false)} f={f} mobile={isMobile} onApply={(d) => { setAdv(false); setQ(d.q); navigate('/propiedades' + filtersToQuery({ ...d, sort: f.sort, view: f.view }), { replace: true }); }} />
  </>);
}

function AdvancedFilters({ open, onClose, f, onApply, mobile }) {
  const D = window.MXData;
  const [d, setD] = React.useState(f);
  React.useEffect(() => { if (open) setD(f); }, [open]);
  const count = applyFilters(D.properties, d).length;
  const up = (patch) => setD((s) => ({ ...s, ...patch }));
  const chipRow = (key, opts) => <div className="k-chiprow">{opts.map(([v, l]) => <MX.Chip key={v} selected={d[key] === v} onClick={() => up({ [key]: d[key] === v ? '' : v })}>{l}</MX.Chip>)}</div>;
  const money = (v) => (v ? Number(v).toLocaleString('en-US') : '');
  const digits = (e) => e.target.value.replace(/\D/g, '');
  return (
    <MX.Dialog open={open} onClose={onClose} placement={mobile ? 'bottom' : 'right'} title="Filtros avanzados" description="El conteo de resultados se actualiza al instante."
      footer={<><MX.Button variant="ghost" onClick={() => setD({ ...EMPTY_F })}>Limpiar todo</MX.Button><span className="k-spacer" /><MX.Button variant="dark" disabled={!count} onClick={() => onApply(d)}>{count ? 'Ver ' + count + (count === 1 ? ' resultado' : ' resultados') : 'Sin resultados'}</MX.Button></>}>
      <div className="k-adv">
        {mobile ? <LocationAutocomplete id="adv-loc" value={d.ubicacion} onChange={(v) => up({ ubicacion: v })} /> : null}
        <fieldset className="k-fs"><legend className="k-label">Operación</legend>{chipRow('op', [['venta', 'Venta'], ['renta', 'Renta']])}</fieldset>
        <fieldset className="k-fs"><legend className="k-label">Tipo de propiedad</legend>{chipRow('tipo', D.types.filter((t) => t !== 'Desarrollo').map((t) => [t, t]))}</fieldset>
        <fieldset className="k-fs"><legend className="k-label">Precio (MXN)</legend><div className="k-form__2">
          <MX.Input size="sm" label="Precio mínimo" inputMode="numeric" placeholder="$0" value={money(d.pmin)} onChange={(e) => up({ pmin: digits(e) })} />
          <MX.Input size="sm" label="Precio máximo" inputMode="numeric" placeholder="Sin límite" value={money(d.pmax || d.precio)} onChange={(e) => up({ pmax: digits(e), precio: '' })} />
        </div></fieldset>
        <fieldset className="k-fs"><legend className="k-label">Recámaras</legend>{chipRow('rec', [['1', '1+'], ['2', '2+'], ['3', '3+'], ['4', '4+'], ['5', '5+']])}</fieldset>
        <fieldset className="k-fs"><legend className="k-label">Baños</legend>{chipRow('banos', [['1', '1+'], ['2', '2+'], ['3', '3+'], ['4', '4+']])}</fieldset>
        <fieldset className="k-fs"><legend className="k-label">Superficie (m²)</legend><div className="k-form__2">
          <MX.Input size="sm" label="m² mínimos" inputMode="numeric" placeholder="0" value={d.mmin} onChange={(e) => up({ mmin: digits(e) })} />
          <MX.Input size="sm" label="m² máximos" inputMode="numeric" placeholder="Sin límite" value={d.mmax} onChange={(e) => up({ mmax: digits(e) })} />
        </div></fieldset>
        <fieldset className="k-fs"><legend className="k-label">Amenidades</legend><div className="k-chiprow">
          {D.amenityList.map((a) => { const on = d.amen.includes(a); return <MX.Chip key={a} icon={D.amenityIcons[a]} selected={on} onClick={() => up({ amen: on ? d.amen.filter((x) => x !== a) : [...d.amen, a] })}>{a}</MX.Chip>; })}
        </div></fieldset>
      </div>
    </MX.Dialog>
  );
}

Object.assign(window, { Home, Listings });
})();
