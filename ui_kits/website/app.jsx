(() => {
const MX = window.MX;

function Router() {
  const { route } = useApp();
  const [a, b] = route.parts;
  let page;
  if (!a) page = <Home />;
  else if (a === 'propiedades') page = b ? <PropertyDetail key={b} slug={b} /> : <Listings />;
  else if (a === 'favoritos') page = <Favorites />;
  else if (a === 'comparar') page = <Compare />;
  else if (a === 'desarrollos') page = b ? <DevelopmentDetail key={b} slug={b} /> : <Developments />;
  else if (a === 'servicios') page = <Services />;
  else if (a === 'nosotros') page = <About />;
  else if (a === 'vender') page = <Sell />;
  else if (a === 'contacto') page = <Contact />;
  else if (a === 'blog') page = b ? <BlogPost key={b} slug={b} /> : <Blog />;
  else page = <NotFound />;
  return <main id="main" tabIndex={-1} key={route.path} className="k-page" style={{ outline: 'none' }}>{page}</main>;
}

function Tray() {
  const { cmpItems, toggleCompare, clearCompare, navigate, route } = useApp();
  if (route.path === '/comparar') return null;
  return <MX.CompareTray items={cmpItems} onRemove={toggleCompare} onClear={clearCompare} onCompare={() => navigate('/comparar')} />;
}

function Toasts() {
  const { toasts, dismiss } = useApp();
  return <div className="mx-toast-stack mx-toast-stack--top-center">{toasts.map((t) => <MX.Toast key={t.id} {...t} duration={0} onClose={() => dismiss(t.id)} />)}</div>;
}

function App() {
  return (<>
    <a className="k-skip" href="#main" onClick={(e) => { e.preventDefault(); const m = document.getElementById('main'); m && m.focus(); }}>Saltar al contenido</a>
    <Header /><Router /><Footer /><ModalHost /><Tray /><Toasts />
  </>);
}

window.MX_READY.then(() => ReactDOM.createRoot(document.getElementById('root')).render(<AppProvider><App /></AppProvider>));
})();
