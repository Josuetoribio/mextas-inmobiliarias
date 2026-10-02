# Despliegue en GitHub Pages: Mextas Inmobiliaria

Este repositorio contiene el export original de Claude Design de la landing **Mextas Inmobiliaria**.
Los archivos originales no se modifican: el build genera una versión de producción en `dist/`
y GitHub Actions la publica en GitHub Pages en cada `push` a `main`.

- **URL pública:** https://josuetoribio.github.io/mextas-inmobiliarias/
- **Página original:** `ui_kits/website/index.html`
- **Origen:** carpeta `mextas/inmobilarias mextas` de la memoria USB

## Qué hace el build (`npm run build`)

1. Copia la landing a la raíz de `dist/` y ajusta las rutas `../../` → `./`.
2. Quita de `_ds_bundle.js` las copias embebidas de `ui_kits/` (duplicaban la landing; en la de
   cocina provocaban un bucle infinito que bloqueaba el navegador).
3. Precompila el JSX con `@babel/standalone` 7.29.0 y exactamente las mismas opciones que usaba
   el navegador: el código que se ejecuta es el mismo, pero ya no se descarga Babel (~3 MB).
4. Usa React/ReactDOM 18.3.1 de producción (con SRI) en lugar de los de desarrollo.
5. Verifica que todas las rutas locales existan (respetando mayúsculas/minúsculas) y que no
   queden restos de desarrollo; si algo falla, el build se detiene y no se publica nada.

`uploads/`, `guidelines/`, `assets/reference*` y la documentación del design system se conservan
en el repositorio pero no se publican.

## Actualizar la landing

1. Sustituye los archivos por el nuevo export (conserva `scripts/`, `package.json`,
   `package-lock.json`, `.github/`, `.gitignore` y este archivo).
2. Opcional: pruébala en local (ver abajo).
3. `git add -A && git commit -m "Actualiza la landing" && git push`. El progreso se ve en la
   pestaña **Actions** del repositorio.

## Probar en local

```bash
npm ci
npm run build
npm run preview
```

La vista previa sirve `dist/` en http://127.0.0.1:4173/mextas-inmobiliarias/, con el mismo prefijo que GitHub Pages.

## Dominio propio con Cloudflare (opcional, no configurado)

1. En Cloudflare → DNS, crea un `CNAME` para el subdominio (por ejemplo `inmobiliaria.tudominio.com`)
   apuntando a `josuetoribio.github.io`. Empieza con el proxy desactivado (nube gris) para que
   GitHub pueda emitir el certificado HTTPS; si después activas el proxy, usa SSL/TLS en modo *Full*.
   Para un dominio raíz (apex) se usan registros `A`/`AAAA` hacia las IP de GitHub Pages.
2. En GitHub → **Settings → Pages → Custom domain**, escribe el dominio y guarda. Cuando el
   certificado esté listo, activa **Enforce HTTPS**.
3. No reutilices un hostname que ya publique tu Cloudflare Tunnel: no hace falta tocar el Tunnel,
   solo usar un nombre distinto.

Con el despliegue por GitHub Actions no hace falta un archivo `CNAME` en el repositorio.
