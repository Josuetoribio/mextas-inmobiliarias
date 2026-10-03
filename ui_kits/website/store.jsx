/* App state: hash router, favorites, compare, toasts, modals. */
const { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext } = React;
const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);

function parseHash() {
  const h = location.hash.replace(/^#/, '') || '/';
  const [path, qs] = h.split('?');
  return { path: path || '/', parts: (path || '/').split('/').filter(Boolean), query: new URLSearchParams(qs || '') };
}
const readLS = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const writeLS = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

/* Desplaza a una sección de la portada. Al terminar corrige la posición por si alguna
   imagen diferida cambió la altura de lo que hay arriba durante el desplazamiento. */
function scrollToSection(id, smooth) {
  const behavior = smooth ? 'smooth' : 'instant';
  if (id === 'inicio') { window.scrollTo({ top: 0, behavior }); return; }
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: 'start' });
  const t0 = performance.now();
  let t;
  const settle = () => {
    clearTimeout(t);
    t = setTimeout(() => {
      window.removeEventListener('scroll', settle);
      if (performance.now() - t0 > 2500) return;
      const off = el.getBoundingClientRect().top - (parseFloat(getComputedStyle(el).scrollMarginTop) || 0);
      if (Math.abs(off) > 4) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 160);
  };
  window.addEventListener('scroll', settle, { passive: true });
  settle();
}

function AppProvider({ children }) {
  const D = window.MXData;
  const [route, setRoute] = useState(parseHash);
  const [favs, setFavs] = useState(() => readLS('mextas:favs', ['casa-en-valle-real', 'penthouse-en-cabo']));
  const [cmp, setCmp] = useState(() => readLS('mextas:compare', []));
  const [toasts, setToasts] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const on = () => { const r = parseHash(); setRoute((prev) => { if (prev.path !== r.path) window.scrollTo({ top: 0, behavior: 'instant' }); return r; }); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  useEffect(() => { writeLS('mextas:favs', favs); }, [favs]);
  useEffect(() => { writeLS('mextas:compare', cmp); }, [cmp]);

  const navigate = useCallback((to, opts) => {
    if (opts && opts.replace) { history.replaceState(null, '', '#' + to); setRoute(parseHash()); }
    else location.hash = to;
  }, []);
  /* El menú baja a su sección de la portada; desde otra página, vuelve a la portada y baja. */
  const routeRef = useRef(route);
  routeRef.current = route;
  const pendingSection = useRef(null);
  const goSection = useCallback((id) => {
    if (routeRef.current.path === '/') { scrollToSection(id, true); return; }
    pendingSection.current = id;
    navigate('/');
  }, [navigate]);
  const takePendingSection = useCallback(() => { const id = pendingSection.current; pendingSection.current = null; return id; }, []);
  const toast = useCallback((t) => {
    const id = Date.now() + Math.random();
    setToasts((l) => [...l.slice(-2), { id, ...t }]);
    setTimeout(() => setToasts((l) => l.filter((x) => x.id !== id)), 4200);
  }, []);
  const dismiss = useCallback((id) => setToasts((l) => l.filter((t) => t.id !== id)), []);

  const toggleFav = (p) => {
    const on = favs.includes(p.slug);
    setFavs(on ? favs.filter((s) => s !== p.slug) : [...favs, p.slug]);
    toast(on ? { title: 'Eliminada de favoritos', message: p.title, icon: 'HeartOff' }
      : { tone: 'favorite', title: 'Guardada en favoritos', message: p.title, action: <a className="k-toast-link" href="#/favoritos">Ver</a> });
  };
  const toggleCompare = (p) => {
    if (cmp.includes(p.slug)) { setCmp(cmp.filter((s) => s !== p.slug)); return; }
    if (cmp.length >= 3) { toast({ tone: 'error', title: 'Máximo 3 propiedades', message: 'Quita una para agregar otra al comparador.' }); return; }
    setCmp([...cmp, p.slug]);
    if (cmp.length === 0) toast({ icon: 'Scale', title: 'Agregada al comparador', message: 'Selecciona al menos una propiedad más.' });
  };

  const bySlug = useMemo(() => Object.fromEntries(D.properties.map((p) => [p.slug, p])), []);
  const value = {
    route, navigate, goSection, takePendingSection, favs, isFav: (p) => favs.includes(p.slug), toggleFav, cmp, isCmp: (p) => cmp.includes(p.slug), toggleCompare,
    clearCompare: () => setCmp([]), setCompareList: (l) => setCmp(l.slice(0, 3)), cmpItems: cmp.map((s) => bySlug[s]).filter(Boolean), favItems: favs.map((s) => bySlug[s]).filter(Boolean), bySlug,
    toasts, toast, dismiss, modal, openModal: (kind, props) => setModal({ kind, props: props || {}, id: Date.now() }), closeModal: () => setModal(null),
  };
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

function useMedia(q) {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => { const mq = window.matchMedia(q); const h = () => setM(mq.matches); mq.addEventListener('change', h); return () => mq.removeEventListener('change', h); }, [q]);
  return m;
}

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!('IntersectionObserver' in window)) { setIn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIn(true); io.disconnect(); } }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    io.observe(el);
    const t = setTimeout(() => setIn(true), 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return <Tag ref={ref} className={'k-reveal ' + (inView ? 'is-in ' : '') + className} style={{ transitionDelay: delay + 'ms' }} {...rest}>{children}</Tag>;
}

/* Filtering shared by search, listings and categories */
function readFilters(q) {
  return {
    op: q.get('op') || '', ubicacion: q.get('ubicacion') || '', tipo: q.get('tipo') || '', precio: q.get('precio') || '',
    rec: q.get('rec') || '', banos: q.get('banos') || '', pmin: q.get('pmin') || '', pmax: q.get('pmax') || '',
    mmin: q.get('mmin') || '', mmax: q.get('mmax') || '', amen: (q.get('amen') || '').split(',').filter(Boolean),
    q: q.get('q') || '', sort: q.get('sort') || 'rel', view: q.get('view') || 'grid',
  };
}
function filtersToQuery(f) {
  const p = new URLSearchParams();
  Object.entries(f).forEach(([k, v]) => {
    if (Array.isArray(v)) { if (v.length) p.set(k, v.join(',')); }
    else if (v && !(k === 'sort' && v === 'rel') && !(k === 'view' && v === 'grid')) p.set(k, v);
  });
  const s = p.toString();
  return s ? '?' + s : '';
}
function applyFilters(list, f) {
  const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let r = list.filter((p) => {
    if (f.op && p.operation !== f.op) return false;
    if (f.ubicacion && !p.zones.includes(f.ubicacion)) return false;
    if (f.tipo && f.tipo !== 'Desarrollo' && p.type !== f.tipo) return false;
    const max = Number(f.pmax || f.precio || 0);
    if (max && p.price > max) return false;
    if (f.pmin && p.price < Number(f.pmin)) return false;
    if (f.rec && p.beds < Number(f.rec)) return false;
    if (f.banos && p.baths < Number(f.banos)) return false;
    if (f.mmin && p.area < Number(f.mmin)) return false;
    if (f.mmax && p.area > Number(f.mmax)) return false;
    if (f.amen.length && !f.amen.every((a) => p.amenities.includes(a))) return false;
    if (f.q) { const n = norm(f.q); if (!norm(p.title + ' ' + p.location + ' ' + p.type + ' ' + p.zones.join(' ')).includes(n)) return false; }
    return true;
  });
  const s = { asc: (a, b) => a.price - b.price, desc: (a, b) => b.price - a.price, new: (a, b) => b.publishedAt.localeCompare(a.publishedAt), area: (a, b) => b.area - a.area };
  if (s[f.sort]) r = [...r].sort(s[f.sort]);
  else r = [...r].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
  return r;
}
const locLabel = (slug) => {
  const D = window.MXData;
  const o = D.locationOptions.find((x) => x.value === slug) || D.suggestions.find((x) => x.value === slug);
  return o ? o.label : slug;
};

Object.assign(window, { AppProvider, useApp, useMedia, Reveal, readFilters, filtersToQuery, applyFilters, locLabel });
