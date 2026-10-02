#!/usr/bin/env node
// Vista previa local de dist/ bajo /<nombre-del-repo>/, igual que la sirve GitHub Pages
// (https://<usuario>.github.io/<repo>/). Así se detectan rutas que solo fallan con ese prefijo.
// Uso: npm run build && npm run preview   (puerto configurable con PORT=…)

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const BASE = `/${pkg.name}/`;
const PORT = Number(process.env.PORT || 4173);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm', '.txt': 'text/plain; charset=utf-8',
};

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('No existe dist/index.html. Ejecuta primero: npm run build');
  process.exit(1);
}

http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  if (pathname === '/' || pathname === BASE.slice(0, -1)) {
    res.writeHead(301, { Location: BASE });
    return res.end();
  }
  let file = null;
  if (pathname.startsWith(BASE)) {
    let relPath;
    try { relPath = decodeURIComponent(pathname.slice(BASE.length)); } catch { relPath = null; }
    if (relPath !== null) {
      if (relPath === '' || relPath.endsWith('/')) relPath += 'index.html';
      const candidate = path.join(DIST, relPath);
      if (candidate.startsWith(DIST)) file = candidate;
    }
  }
  fs.readFile(file || '', (err, data) => {
    if (err || !file) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log(`Vista previa: http://127.0.0.1:${PORT}${BASE}`);
});
