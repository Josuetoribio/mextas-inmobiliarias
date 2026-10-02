(() => {
const { useState, useEffect, useRef, useMemo } = React;
const MX = window.MX;
const NAV = [['/', 'Inicio'], ['/propiedades', 'Propiedades'], ['/desarrollos', 'Desarrollos'], ['/servicios', 'Servicios'], ['/nosotros', 'Nosotros'], ['/contacto', 'Contacto']];
const TRUST = [['ShieldCheck', 'Propiedades verificadas', '100% confiables'], ['Headset', 'Asesoría personalizada', 'Expertos a tu servicio'], ['TrendingUp', 'Inversión segura', 'Plusvalía garantizada'], ['Gem', 'Atención premium', 'Acompañamiento total']];
const STATS = [['+500', 'Propiedades', 'disponibles'], ['+10', 'Años de', 'experiencia'], ['+1,200', 'Clientes', 'satisfechos'], ['+30', 'Zonas premium', 'en México']];
const isHeroRoute = (r) => r.path === '/' || r.path === '/vender' || r.path === '/nosotros' || (r.parts[0] === 'desarrollos' && !!r.parts[1]);
const isActive = (route, to) => (to === '/' ? route.path === '/' : route.path.startsWith(to));

function Header() {
  const { route, favs, openModal } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const on = () => setScrolled(window.scrollY > 40); on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on); }, []);
  useEffect(() => setMenu(false), [route.path]);
  const top = isHeroRoute(route) && !scrolled;
  const mnav = [...NAV, ['/vender', 'Vender'], ['/blog', 'Blog'], ['/favoritos', 'Favoritos (' + favs.length + ')']];
  return (<>
    <header className={'k-header ' + (top ? 'is-top' : 'is-solid')}>
      <div className="k-container k-wide k-header__in">
        <MX.Logo tone="light" size="sm" href="#/" />
        <nav className="k-nav" aria-label="Principal">
          {NAV.map(([to, l]) => <a key={to} href={'#' + to} className={isActive(route, to) ? 'is-active' : ''} aria-current={isActive(route, to) ? 'page' : undefined}>{l}</a>)}
        </nav>
        <div className="k-header__right">
          <a href="#/favoritos" className="k-favlink" aria-label={'Favoritos, ' + favs.length + ' guardadas'}>
            <MX.Icon name="Heart" size={17} fill={favs.length ? 'currentColor' : 'none'} color={favs.length ? 'var(--accent)' : 'currentColor'} />
            <span className="k-favtext">Favoritos</span>
            {favs.length ? <span key={favs.length} className="k-count">{favs.length}</span> : null}
          </a>
          <MX.Button size="sm" className="k-header__cta" onClick={() => openModal('contact', { channel: 'general' })}>Consultar propiedad</MX.Button>
          <MX.IconButton className="k-menu-btn" icon="Menu" label="Abrir menú" variant="ghost" onClick={() => setMenu(true)} />
        </div>
      </div>
    </header>
    <MX.Dialog open={menu} onClose={() => setMenu(false)} placement="full" tone="dark" hideClose>
      <div className="k-mmenu">
        <div className="k-mmenu__top"><MX.Logo tone="light" size="sm" /><MX.IconButton icon="X" label="Cerrar menú" variant="ghost" onClick={() => setMenu(false)} /></div>
        <nav aria-label="Menú móvil">
          {mnav.map(([to, l]) => <a key={to} href={'#' + to} className={isActive(route, to) ? 'is-active' : ''} onClick={() => setMenu(false)}>{l}<MX.Icon name="ArrowRight" size={18} /></a>)}
        </nav>
        <MX.Button fullWidth size="lg" onClick={() => { setMenu(false); openModal('contact', { channel: 'general' }); }}>Consultar propiedad</MX.Button>
      </div>
    </MX.Dialog>
  </>);
}

function Footer() {
  const { openModal, toast } = useApp();
  const col = (t, items) => (
    <div><h4>{t}</h4><ul>{items.map(([l, h]) => <li key={l}>{typeof h === 'function' ? <button type="button" className="k-linkbtn" onClick={h}>{l}</button> : <a href={h}>{l}</a>}</li>)}</ul></div>
  );
  const social = (l) => toast({ icon: 'Globe', title: l + ' · Mextas', message: 'Perfil de demostración: los enlaces sociales se conectan al publicar el sitio.' });
  return (
    <footer className="k-footer">
      <div className="k-container k-wide">
        <div className="k-footer__grid">
          <div className="k-footer__brand">
            <MX.Logo tone="light" />
            <p>Conectamos personas con oportunidades<br />inmobiliarias únicas. Asesoría experta,<br />transparente y personalizada.</p>
            <div className="k-social">{[['Facebook', 'Facebook'], ['Instagram', 'Instagram'], ['Linkedin', 'LinkedIn']].map(([i, l]) => <button key={l} type="button" aria-label={l} onClick={() => social(l)}><MX.Icon name={i} size={16} /></button>)}</div>
          </div>
          {col('Navegación', NAV.map(([to, l]) => [l, '#' + to]))}
          {col('Tipo de propiedad', [['Casas', '#/propiedades?tipo=Casa'], ['Departamentos', '#/propiedades?tipo=Departamento'], ['Terrenos', '#/propiedades?tipo=Terreno'], ['Oficinas', '#/propiedades?tipo=Oficina'], ['Locales', '#/propiedades?tipo=Local'], ['Desarrollos', '#/desarrollos']])}
          {col('Información', [['Blog', '#/blog'], ['Guía de compra', '#/blog/que-revisar-antes-de-comprar-una-casa'], ['Guía de venta', '#/vender'], ['Términos y condiciones', () => openModal('legal', { doc: 'terminos' })], ['Aviso de privacidad', () => openModal('legal', { doc: 'privacidad' })]])}
          <div><h4>Contacto</h4><ul>
            <li><a href="tel:+523312345678">33 1234 5678</a></li>
            <li><a href="mailto:hola@mextas.mx">hola@mextas.mx</a></li>
            <li>Lun – Vie · 9:00 – 19:00</li><li>Sáb · 10:00 – 14:00</li>
          </ul></div>
        </div>
        <div className="k-footer__bottom"><span>© 2026 Mextas Inmobiliaria</span><span>Sitio de demostración · propiedades y cifras ficticias</span></div>
      </div>
    </footer>
  );
}

function PageHead({ eyebrow, title, text, crumbs, children }) {
  return (
    <section className="k-pagehead"><div className="k-container k-wide">
      {crumbs ? <MX.Breadcrumbs items={crumbs} /> : null}
      {eyebrow ? <p className="k-eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {text ? <p className="k-lead">{text}</p> : null}
      {children}
    </div></section>
  );
}

function PCard({ p, layout, eager }) {
  const { navigate, isFav, toggleFav, isCmp, toggleCompare, cmp } = useApp();
  const cp = { ...p, beds: p.beds || undefined, baths: p.baths || undefined };
  return <MX.PropertyCard property={cp} layout={layout} eager={eager} href={'#/propiedades/' + p.slug} onOpen={() => navigate('/propiedades/' + p.slug)}
    favorite={isFav(p)} onToggleFavorite={() => toggleFav(p)} compared={isCmp(p)} onToggleCompare={() => toggleCompare(p)} compareDisabled={cmp.length >= 3} />;
}

function PostCard({ post }) {
  return (
    <a className="k-post" href={'#/blog/' + post.slug}>
      <div className="k-post__img"><img src={post.image} alt="" loading="lazy" /></div>
      <p className="k-post__meta">{post.category} · {post.read}</p>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="k-post__cta">Leer artículo<MX.Icon name="ArrowRight" size={14} /></span>
    </a>
  );
}

function StatsRow({ tone = 'dark' }) {
  return <div className={'k-stats' + (tone === 'light' ? ' k-stats--light' : '')}>{STATS.map(([v, a, b]) => <MX.StatBlock key={v} value={v} tone={tone} label={<>{a}<br />{b}</>} />)}</div>;
}

const normTxt = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function LocationAutocomplete({ value, onChange, label = 'Ubicación', id = 'loc', size, placeholder = 'Ciudad, zona o colonia' }) {
  const D = window.MXData;
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const ref = useRef(null);
  const inp = useRef(null);
  const list = useMemo(() => { const n = normTxt(q); return (n ? D.suggestions.filter((s) => normTxt(s.label + ' ' + s.sub).includes(n)) : D.suggestions.slice(0, 6)).slice(0, 7); }, [q]);
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const sel = value ? (D.suggestions.find((s) => s.value === value) || { value, label: locLabel(value), sub: '' }) : null;
  const choose = (s) => { onChange(s.value); setQ(''); setOpen(false); };
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setHi((h) => Math.min(list.length - 1, h + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHi((h) => Math.max(0, h - 1)); }
    else if (e.key === 'Enter' && open && list[hi]) { e.preventDefault(); choose(list[hi]); }
    else if (e.key === 'Escape') setOpen(false);
  };
  return (
    <MX.Field label={label} htmlFor={id}>
      <div ref={ref} className={'k-ac mx-input' + (size === 'sm' ? ' mx-input--sm' : '')}>
        {sel ? (
          <MX.Chip icon="MapPin" removeLabel="Quitar ubicación" onRemove={() => { onChange(''); setTimeout(() => inp.current && inp.current.focus(), 30); }}>
            {sel.label}{sel.sub ? <span className="k-ac__sub"> · {sel.sub}</span> : null}
          </MX.Chip>
        ) : (<>
          <MX.Icon name="MapPin" size={16} className="mx-input__icon" />
          <input ref={inp} id={id} value={q} placeholder={placeholder} autoComplete="off" role="combobox" aria-expanded={open} aria-controls={id + '-list'} aria-autocomplete="list"
            onChange={(e) => { setQ(e.target.value); setOpen(true); setHi(0); }} onFocus={() => setOpen(true)} onKeyDown={onKey} />
        </>)}
        {open && !sel ? (
          <ul id={id + '-list'} role="listbox" className="k-ac__list">
            {list.length ? list.map((s, i) => (
              <li key={s.value + s.label} role="option" aria-selected={i === hi} className={'k-ac__item' + (i === hi ? ' is-hi' : '')} onMouseEnter={() => setHi(i)} onMouseDown={(e) => { e.preventDefault(); choose(s); }}>
                <MX.Icon name="MapPin" size={15} /><span><b>{s.label}</b><small>{s.sub}</small></span>
              </li>
            )) : <li className="k-ac__none">Sin coincidencias para “{q}”</li>}
          </ul>
        ) : null}
      </div>
    </MX.Field>
  );
}

const RENT_PRICES = [{ value: '20000', label: 'Hasta $20,000 / mes' }, { value: '40000', label: 'Hasta $40,000 / mes' }, { value: '80000', label: 'Hasta $80,000 / mes' }, { value: '150000', label: 'Hasta $150,000 / mes' }, { value: '', label: 'Sin límite' }];
function PropertySearch() {
  const { navigate } = useApp();
  const D = window.MXData;
  const [tab, setTab] = useState('comprar');
  const [loc, setLoc] = useState('');
  const [tipo, setTipo] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [rec, setRec] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    if (tab === 'desarrollos' || tipo === 'Desarrollo') { navigate('/desarrollos' + (loc ? '?ubicacion=' + loc : '')); return; }
    navigate('/propiedades' + filtersToQuery({ op: tab === 'rentar' ? 'renta' : 'venta', ubicacion: loc, tipo, precio, rec, amen: [] }));
  };
  return (
    <form className="k-search" onSubmit={submit} role="search" aria-label="Buscar propiedades">
      <MX.Tabs label="Operación" value={tab} onChange={(v) => { setTab(v); setPrecio(null); }} items={[{ value: 'comprar', label: 'Comprar' }, { value: 'rentar', label: 'Rentar' }, { value: 'desarrollos', label: 'Desarrollos' }]} />
      <div className="k-search__grid">
        <LocationAutocomplete id="hs-loc" value={loc} onChange={setLoc} />
        <MX.Select label="Tipo de propiedad" placeholder="Selecciona tipo" value={tipo} onChange={setTipo} options={[{ value: '', label: 'Todos los tipos' }, ...D.types.map((t) => ({ value: t, label: t }))]} />
        <MX.Select label="Precio máximo" placeholder="Sin límite" value={precio} onChange={setPrecio} options={tab === 'rentar' ? RENT_PRICES : D.priceOptions} />
        <MX.Select label="Recámaras" placeholder="Cualquiera" value={rec} onChange={setRec} options={D.bedOptions} />
        <MX.Button type="submit" variant="dark" iconRight="Search" className="k-search__btn">Buscar propiedades</MX.Button>
      </div>
    </form>
  );
}

function MockMap({ p, label }) {
  const [z, setZ] = useState(1);
  const name = label || (p && p.location);
  return (
    <div className="k-map" role="img" aria-label={'Mapa ilustrativo: ' + name} style={{ '--z': z }}>
      <div className="k-map__roads" /><div className="k-map__park" /><span className="k-map__radius" />
      <span className="k-map__pin"><MX.Icon name="MapPin" size={30} fill="var(--mx-ink-900)" color="var(--mx-champagne-400)" strokeWidth={1.6} /></span>
      <div className="k-map__card"><b>{name}</b><small>{p ? 'Ubicación aproximada · ' + p.lat.toFixed(3) + ', ' + p.lng.toFixed(3) : 'Mapa ilustrativo'}</small></div>
      <div className="k-map__zoom">
        <button type="button" aria-label="Acercar" onClick={() => setZ((v) => Math.min(1.8, v + 0.2))}><MX.Icon name="Plus" size={15} /></button>
        <button type="button" aria-label="Alejar" onClick={() => setZ((v) => Math.max(0.8, v - 0.2))}><MX.Icon name="Minus" size={15} /></button>
      </div>
    </div>
  );
}

function Success({ title, text, children, action }) {
  return (
    <div className="k-success" role="status">
      <span className="k-success__icon"><MX.Icon name="Check" size={26} /></span>
      <h3>{title}</h3>{text ? <p>{text}</p> : null}{children}
      {action ? <div className="k-success__act">{action}</div> : null}
    </div>
  );
}

function scrollToId(id) { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }

Object.assign(window, { Header, Footer, PageHead, PCard, PostCard, StatsRow, LocationAutocomplete, PropertySearch, MockMap, Success, scrollToId, isHeroRoute, MX_TRUST: TRUST });
})();
