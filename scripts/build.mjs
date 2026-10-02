#!/usr/bin/env node
// Build de producción para GitHub Pages.
//
// El export original de Claude Design no se modifica: este script solo lo lee
// y genera dist/ con la landing en la raíz del sitio.
//   1. Copia la landing (ui_kits/<kit>/) a la raíz de dist/ y reescribe "../../" → "./".
//   2. Quita de _ds_bundle.js las copias embebidas de ui_kits/ (en la landing de
//      cocina provocaban un bucle infinito que recargaba el bundle sin parar).
//   3. Precompila el JSX con @babel/standalone 7.29.0 y las mismas opciones que
//      aplica en el navegador, así que el código ejecutado es idéntico pero ya no
//      hace falta cargar Babel en producción.
//   4. Cambia React/ReactDOM de desarrollo por sus builds de producción (con SRI).
//   5. Si package.json define mextas.publicUrl, añade canonical y la redirección desde github.io.
//   6. Convierte las fotos PNG de assets/ a WebP y hace que la web pida el .webp.
//   7. Si existe overrides.css en la raíz del repo, lo publica y lo enlaza al final del <head>.
//   8. Verifica que todas las rutas locales existan y que no queden restos de desarrollo.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const Babel = require('@babel/standalone/babel.min.js');

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = path.join(ROOT, 'dist');
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));

// Opciones que usa @babel/standalone para <script type="text/babel"> (buildBabelOptions),
// salvo el sourcemap inline, que solo añade un comentario al final.
const BABEL_OPTIONS = {
  presets: ['react', 'env'],
  plugins: ['transform-class-properties', 'transform-object-rest-spread', 'transform-flow-strip-types'],
  targets: { browsers: undefined },
  sourceMaps: false,
};

const REACT_PROD = {
  'react@18.3.1/umd/react.development.js': {
    src: 'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
    integrity: 'sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z',
  },
  'react-dom@18.3.1/umd/react-dom.development.js': {
    src: 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
    integrity: 'sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1',
  },
};

const MEDIA_EXT = /\.(?:jpe?g|png|webp|avif|gif|svg|mp4|webm|woff2?|ttf|otf)$/i;

// La demo se publica en GitHub Pages pero se visita en mextas.com/<ruta>/ (Worker mextas-router).
// Si package.json define mextas.publicUrl, se añaden canonical y og:url, y quien entre por
// github.io (enlaces viejos, buscadores) pasa a la URL pública conservando query y hash.
function addPublicUrl(html, entryRel) {
  const publicUrl = pkg.mextas && pkg.mextas.publicUrl;
  if (!publicUrl) return html;
  if (!/^https:\/\/[^/?#]+\/(?:[^?#]*\/)?$/.test(publicUrl)) fail(`mextas.publicUrl debe empezar por https:// y terminar en "/": ${publicUrl}`);
  if (/rel=["']?canonical|property=["']og:url/i.test(html)) fail(`${entryRel} ya tiene canonical u og:url`);
  const charset = html.match(/<meta\s+charset=["']?utf-8["']?\s*\/?>/i);
  if (!charset) fail(`no se encontró <meta charset="utf-8"> en ${entryRel}`);
  const tags = `<script>if(/(^|\\.)github\\.io$/.test(location.hostname))location.replace(${JSON.stringify(publicUrl)}+location.search+location.hash)</script>` +
    `<link rel="canonical" href="${publicUrl}"><meta property="og:url" content="${publicUrl}">`;
  return html.replace(charset[0], charset[0] + tags);
}

// Ajustes propios de la versión publicada (p. ej. correcciones para móvil). Viven en
// overrides.css, fuera del export, para que una nueva exportación de Claude Design no los borre.
function addOverrides(html, entryRel) {
  const file = path.join(ROOT, 'overrides.css');
  if (!fs.existsSync(file)) return html;
  if (!/<\/head>/i.test(html)) fail(`no se encontró </head> en ${entryRel}`);
  emit('overrides.css', fs.readFileSync(file), 'overrides.css');
  return html.replace(/<\/head>/i, '<link rel="stylesheet" href="./overrides.css">\n</head>');
}

function fail(msg) {
  console.error(`\n✗ Build fallido: ${msg}`);
  process.exit(1);
}

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');
const read = (p) => fs.readFileSync(p, 'utf8');
const rewriteRootRefs = (text) => text.split('../../').join('./');

// --- Salida ---------------------------------------------------------------

const written = new Map(); // ruta en dist (minúsculas) → origen, para detectar colisiones
function emit(outRel, data, from) {
  const key = outRel.toLowerCase();
  if (written.has(key)) fail(`colisión en dist/${outRel}: ${written.get(key)} y ${from}`);
  written.set(key, from);
  const dest = path.join(OUT, outRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, data);
}

function copyTree(srcRel, filter = () => true) {
  const src = path.join(ROOT, srcRel);
  if (!fs.existsSync(src)) return 0;
  let n = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const childRel = `${srcRel}/${entry.name}`;
    if (entry.isDirectory()) n += copyTree(childRel, filter);
    else if (filter(childRel)) { emit(childRel, fs.readFileSync(path.join(ROOT, childRel)), childRel); n++; }
  }
  return n;
}

// --- Entrada --------------------------------------------------------------

function findEntry() {
  if (pkg.mextas && pkg.mextas.entry) return pkg.mextas.entry;
  const kits = fs.readdirSync(path.join(ROOT, 'ui_kits'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'ui_kits', d.name, 'index.html')))
    .map((d) => `ui_kits/${d.name}/index.html`);
  if (kits.length !== 1) fail(`se esperaba un único ui_kits/*/index.html y hay ${kits.length}: ${kits.join(', ')}`);
  return kits[0];
}

// --- Bundle del design system ----------------------------------------------

// Cada archivo del proyecto va en el bundle como:
//   // <ruta>\ntry { (() => {\n …código… \n})(); } catch (e) { __ds_ns.__errors.push({ path: "<ruta>", … }); }
// Las secciones de ui_kits/ son copias de la propia landing, que ya se carga desde index.html.
const KIT_SECTION = /\n\/\/ (ui_kits\/[^\n]+)\ntry \{ \(\(\) => \{\n[\s\S]*?\n\}\)\(\); \} catch \(e\) \{ __ds_ns\.__errors\.push\(\{ path: "\1", error: String\(\(e && e\.message\) \|\| e\) \}\); \}\n/g;

function buildBundle() {
  const file = path.join(ROOT, '_ds_bundle.js');
  if (!fs.existsSync(file)) fail('no existe _ds_bundle.js');
  const original = read(file);
  const headers = original.match(/\n\/\/ ui_kits\/[^\n]+\ntry \{/g) || [];
  const removed = [];
  const stripped = original.replace(KIT_SECTION, (section, kitPath) => {
    if (section.includes('__ds_scope')) fail(`la sección ${kitPath} del bundle exporta componentes; no se puede quitar`);
    removed.push(kitPath);
    return '\n';
  });
  if (removed.length !== headers.length) fail(`el bundle tiene ${headers.length} secciones ui_kits/ pero solo se reconocieron ${removed.length}`);
  const out = rewriteRootRefs(stripped);
  try { new vm.Script(out, { filename: '_ds_bundle.js' }); } catch (e) { fail(`_ds_bundle.js resultante no es JS válido: ${e.message}`); }
  emit('_ds_bundle.js', out, '_ds_bundle.js');
  return { removed, before: original.length, after: out.length };
}

// --- Landing ----------------------------------------------------------------

function parseAttrs(attrText) {
  const attrs = {};
  for (const m of attrText.matchAll(/([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
    attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4] ?? '';
  }
  return attrs;
}

function compileJsx(code, filename) {
  try {
    return Babel.transform(code, { ...BABEL_OPTIONS, filename, sourceFileName: filename }).code;
  } catch (e) {
    fail(`error de Babel en ${filename}: ${e.message}`);
  }
}

function buildLanding(entryRel) {
  const kitDir = path.posix.dirname(entryRel);
  const stats = { compiled: [], inline: 0, copied: [] };

  let html = rewriteRootRefs(read(path.join(ROOT, entryRel)));

  // React de desarrollo → producción.
  for (const [dev, prod] of Object.entries(REACT_PROD)) {
    const re = new RegExp(`<script\\b[^>]*\\bsrc="https://unpkg\\.com/${dev.replace(/[.@/]/g, '\\$&')}"[^>]*></script>`, 'g');
    const hits = html.match(re) || [];
    if (hits.length !== 1) fail(`se esperaba un <script> de ${dev} en ${entryRel} y hay ${hits.length}`);
    html = html.replace(re, `<script src="${prod.src}" integrity="${prod.integrity}" crossorigin="anonymous"></script>`);
  }

  // Babel en el navegador ya no hace falta.
  const babelTag = /<script\b[^>]*\bsrc="https:\/\/unpkg\.com\/@babel\/standalone@[^"]+"[^>]*><\/script>(?:\r?\n)?/g;
  if ((html.match(babelTag) || []).length !== 1) fail(`no se encontró el <script> de @babel/standalone en ${entryRel}`);
  html = html.replace(babelTag, '');

  // <script type="text/babel"> → <script> con el código ya compilado (mismo orden).
  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (tag, attrText, body) => {
    const attrs = parseAttrs(attrText);
    const type = (attrs.type || '').split(';')[0].trim().toLowerCase();
    if (type !== 'text/babel' && type !== 'text/jsx') return tag;
    const extra = Object.keys(attrs).filter((a) => a !== 'type' && a !== 'src');
    if (extra.length) fail(`atributos no soportados (${extra.join(', ')}) en ${tag.slice(0, 80)}`);
    if (attrs.src) {
      const srcRel = path.posix.normalize(`${kitDir}/${attrs.src}`);
      const srcFile = path.join(ROOT, srcRel);
      if (!fs.existsSync(srcFile)) fail(`no existe ${srcRel} (referenciado en ${entryRel})`);
      const outName = attrs.src.replace(/\.jsx$/i, '.js');
      if (outName === attrs.src) fail(`se esperaba un .jsx en ${attrs.src}`);
      const code = compileJsx(rewriteRootRefs(read(srcFile)), path.posix.basename(srcRel));
      emit(path.posix.normalize(outName), code, srcRel);
      stats.compiled.push(path.posix.basename(srcRel));
      return `<script src="${outName}"></script>`;
    }
    const code = compileJsx(body, 'Inline Babel script');
    if (/<\/script/i.test(code)) fail('el script inline compilado contiene "</script"');
    stats.inline++;
    return `<script>\n${code}\n</script>`;
  });
  emit('index.html', addOverrides(addPublicUrl(html, entryRel), entryRel), entryRel);

  // Resto de JS y CSS del kit (data.js, ds-loader.js, kit.css, site.css…).
  for (const entry of fs.readdirSync(path.join(ROOT, kitDir), { withFileTypes: true })) {
    if (!entry.isFile() || !/\.(?:js|css)$/i.test(entry.name)) continue;
    const srcRel = `${kitDir}/${entry.name}`;
    emit(entry.name, rewriteRootRefs(read(path.join(ROOT, srcRel))), srcRel);
    stats.copied.push(entry.name);
  }
  return stats;
}

// --- Imágenes -----------------------------------------------------------------

// Las fotos PNG de assets/ pesan varios MB: se publican también en WebP (calidad 85, mismas
// dimensiones) y todas las referencias de dist/ pasan al .webp. El PNG se queda en dist/ sin
// referencias para que una página que siga en caché tras un despliegue no pierda imágenes.
const WEBP_OPTIONS = { quality: 85, effort: 6, smartSubsample: true };
const webpRenames = new Map(); // 'assets/x.png' → 'assets/x.webp'

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const refPattern = (relPath) => new RegExp(`(^|[^\\w-])${escapeRe(relPath)}(?=$|[^\\w.-])`, 'g');

async function convertPngsToWebp() {
  const pngs = listDist().filter((f) => f.startsWith('assets/') && /\.png$/i.test(f));
  if (!pngs.length) return { count: 0 };
  let sharp;
  try { sharp = (await import('sharp')).default; } catch { fail('hay imágenes PNG en assets/ y falta la dependencia "sharp" (ejecuta npm install)'); }
  let before = 0, after = 0;
  for (const png of pngs) {
    const webp = png.replace(/\.png$/i, '.webp');
    const input = fs.readFileSync(path.join(OUT, png));
    const output = await sharp(input).webp(WEBP_OPTIONS).toBuffer();
    emit(webp, output, `${png} (WebP)`);
    webpRenames.set(png, webp);
    before += input.length;
    after += output.length;
  }
  // HTML, CSS y JS (incluido _ds_bundle.js) pasan a pedir el .webp.
  let refs = 0;
  for (const f of listDist().filter((name) => /\.(?:html|css|js)$/i.test(name))) {
    const original = read(path.join(OUT, f));
    let text = original;
    for (const [png, webp] of webpRenames) {
      text = text.replace(refPattern(png), (_, pre) => { refs++; return pre + webp; });
    }
    if (text !== original) fs.writeFileSync(path.join(OUT, f), text);
  }
  return { count: pngs.length, before, after, refs };
}

// --- Verificación de dist/ ----------------------------------------------------

function listDist(dir = OUT, base = '') {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...listDist(path.join(dir, entry.name), r));
    else files.push(r);
  }
  return files;
}

function verifyDist() {
  const files = listDist();
  const exists = new Set(files);
  const problems = [];
  const isLocal = (u) => u && !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(u);
  const resolveFrom = (fromRel, ref) => path.posix.normalize(path.posix.join(path.posix.dirname(fromRel), ref.split(/[?#]/)[0]));
  const check = (fromRel, ref, resolved) => {
    let target = resolved;
    try { target = decodeURIComponent(resolved); } catch { /* se usa tal cual */ }
    if (target.startsWith('../') || !exists.has(target)) problems.push(`${fromRel}: referencia rota "${ref}"`);
  };

  // Directorios base de imágenes definidos en JS (p. ej. const IMG = './assets/img/').
  const textFiles = files.filter((f) => /\.(?:html|css|js)$/i.test(f));
  const sources = new Map(textFiles.map((f) => [f, read(path.join(OUT, f))]));
  const bases = new Set(['']);
  for (const [f, text] of sources) {
    if (!f.endsWith('.js')) continue;
    for (const m of text.matchAll(/['"`]\.\/((?:[\w-]+\/)+)['"`]/g)) bases.add(m[1]);
  }

  for (const [f, text] of sources) {
    if (text.includes('../../')) problems.push(`${f}: todavía contiene "../../"`);
    if (/text\/babel|@babel\/standalone|react(?:-dom)?\.development\.js/.test(text)) problems.push(`${f}: quedan restos de desarrollo (Babel o React dev)`);
    if (/file:\/\/\/|\b[A-Za-z]:\\(?:[\w .-]+\\)/.test(text)) problems.push(`${f}: contiene una ruta local de Windows o file://`);
    for (const png of webpRenames.keys()) {
      if (refPattern(png).test(text)) problems.push(`${f}: sigue pidiendo ${png} en lugar de su versión WebP`);
    }

    if (f.endsWith('.html')) {
      for (const m of text.matchAll(/\b(?:src|href)\s*=\s*"([^"]*)"/g)) {
        if (isLocal(m[1])) check(f, m[1], resolveFrom(f, m[1]));
      }
    } else if (f.endsWith('.css')) {
      for (const m of text.matchAll(/@import\s+(?:url\(\s*)?['"]?([^'")\s;]+)['"]?\s*\)?|url\(\s*['"]?([^'")]+?)['"]?\s*\)/g)) {
        const ref = m[1] || m[2];
        if (isLocal(ref) && !ref.startsWith('data:')) check(f, ref, resolveFrom(f, ref));
      }
    } else {
      for (const m of text.matchAll(/['"`]((?:\.\/)?[\w\-./ %]+\.(?:jpe?g|png|webp|avif|gif|svg|mp4|webm|css|js))['"`]/g)) {
        const ref = m[1];
        if (/^[\w-]+\.js$/i.test(ref) && !ref.startsWith('./')) continue; // texto como "Next.js"
        if (ref.startsWith('./')) { check(f, ref, path.posix.normalize(ref)); continue; }
        if (!MEDIA_EXT.test(ref)) continue;
        const found = [...bases].some((b) => exists.has(path.posix.normalize(b + ref)));
        if (!found) problems.push(`${f}: no se encuentra el archivo "${ref}" en ${[...bases].map((b) => `./${b}`).join(', ')}`);
      }
    }
  }
  if (problems.length) fail(`dist/ tiene ${problems.length} problema(s):\n  - ${[...new Set(problems)].join('\n  - ')}`);
  return files;
}

// --- Main -------------------------------------------------------------------

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const entry = findEntry();
const landing = buildLanding(entry);
const bundle = buildBundle();
// Recursos compartidos de la raíz. Fuera quedan uploads/, guidelines/, la documentación
// del design system y las maquetas de referencia (assets/reference*), que la web no usa.
if (!fs.existsSync(path.join(ROOT, 'styles.css'))) fail('no existe styles.css');
emit('styles.css', fs.readFileSync(path.join(ROOT, 'styles.css')), 'styles.css');
const tokens = copyTree('tokens');
const componentsCss = copyTree('components', (r) => r.endsWith('.css'));
const assets = copyTree('assets', (r) => !/^assets\/reference(?:\/|-)/.test(r));
const images = await convertPngsToWebp();

const files = verifyDist();
const size = files.reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0);

console.log(`✓ Build de ${pkg.name} desde ${entry}`);
console.log(`  JSX precompilado: ${landing.compiled.length} archivo(s) + ${landing.inline} script(s) inline`);
console.log(`  JS/CSS del kit copiados: ${landing.copied.join(', ') || '—'}`);
console.log(`  _ds_bundle.js: quitadas ${bundle.removed.length} secciones ui_kits/ (${(bundle.before / 1024).toFixed(0)} KB → ${(bundle.after / 1024).toFixed(0)} KB)`);
console.log(`  tokens: ${tokens}, CSS de componentes: ${componentsCss}, assets: ${assets}`);
if (images.count) {
  console.log(`  imágenes: ${images.count} PNG → WebP (${(images.before / 1048576).toFixed(1)} MB → ${(images.after / 1048576).toFixed(1)} MB), ${images.refs} referencias actualizadas`);
}
console.log(`  dist/: ${files.length} archivos, ${(size / 1048576).toFixed(1)} MB, todas las referencias locales verificadas`);
