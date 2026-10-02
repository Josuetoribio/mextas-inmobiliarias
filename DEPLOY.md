# Despliegue: Mextas Inmobiliaria

Este repositorio contiene el export original de Claude Design de la landing **Mextas Inmobiliaria**.
Los archivos originales no se modifican. El build genera una versión de producción en `dist/`
y GitHub Actions la publica en GitHub Pages en cada `push` a `main`.

- **URL pública:** https://mextas.com/inmobiliaria/
- **Origen (GitHub Pages):** https://josuetoribio.github.io/mextas-inmobiliarias/ (redirige a la URL pública)
- **Página original:** `ui_kits/website/index.html`
- **Procedencia:** carpeta `mextas/inmobilarias mextas` de la memoria USB

## Cómo se sirve en mextas.com

El Worker de Cloudflare `mextas-router` (repo privado `Josuetoribio/mextas-router`) atiende
`https://mextas.com/inmobiliaria/` y lee el contenido de este GitHub Pages. El visitante solo ve mextas.com.
Cada `push` aquí se refleja en mextas.com en 10 minutos o menos, la misma caché que tiene GitHub
Pages. Actualizar la demo no requiere credenciales de Cloudflare ni tocar el Worker.

## Qué hace el build (`npm run build`)

1. Copia la landing a la raíz de `dist/` y ajusta las rutas `../../` → `./`.
2. Quita de `_ds_bundle.js` las copias embebidas de `ui_kits/`. Duplicaban la landing y en la de
   cocina provocaban un bucle infinito que bloqueaba el navegador.
3. Precompila el JSX con `@babel/standalone` 7.29.0 y exactamente las mismas opciones que usaba
   el navegador. El código que se ejecuta es el mismo, pero ya no se descarga Babel (~3 MB).
4. Usa React/ReactDOM 18.3.1 de producción (con SRI) en lugar de los de desarrollo.
5. Añade `canonical` y `og:url` con la URL pública (`mextas.publicUrl` en `package.json`). Quien
   entra por github.io pasa a esa URL conservando la ruta interna (`#…`).
6. Convierte las fotos PNG de `assets/` a WebP (calidad 85, mismas dimensiones; unas 15 veces más
   ligeras) y la web pasa a pedir el `.webp`. El PNG se publica también, sin referencias, por si
   alguna página sigue en caché justo después de un despliegue. Los originales no se tocan.
7. Verifica que todas las rutas locales existan, respetando mayúsculas y minúsculas, y que no
   queden restos de desarrollo. Si algo falla, el build se detiene y no se publica nada.

`uploads/`, `guidelines/`, `assets/reference*` y la documentación del design system se conservan
en el repositorio, pero no se publican.

## Actualizar la landing

1. Sustituye los archivos por el nuevo export. Conserva `scripts/`, `package.json`,
   `package-lock.json`, `.github/`, `.gitignore` y este archivo.
2. Opcional: pruébala en local (ver abajo).
3. Ejecuta `git add -A && git commit -m "Actualiza la landing" && git push`. El progreso se ve
   en la pestaña **Actions** del repositorio.

## Probar en local

```bash
npm ci
npm run build
npm run preview
```

La vista previa sirve `dist/` en http://127.0.0.1:4173/mextas-inmobiliarias/, con el mismo prefijo que GitHub
Pages. La redirección a mextas.com solo se activa en `*.github.io`, no en local.
