# Mextas Inmobiliaria — Design System

Premium Mexican real-estate brand (MEXTAS / INMOBILIARIA): luxury listings, developments, buyer & seller services. Visual source: `assets/reference/mextas-home-reference.png` (homepage mock supplied by the user) plus 11 supplied photos in `assets/img/` (converted to JPEG ≤1920px). No codebase, Figma or logo file was provided.

## Content fundamentals
- Spanish (MX), **usted-free "tú"** voice: "Encuentra el lugar donde comienzan tus mejores historias."
- Sentence case for titles and buttons; UPPERCASE only for tracked eyebrows and badges (DESTACADA, NUEVA, PREMIUM).
- Specific, sober copy over hype: "Seleccionamos propiedades y desarrollos con criterios de ubicación, arquitectura y potencial de inversión." Never "somos los mejores".
- CTAs end with an arrow icon: "Ver propiedades →", "Ver todas →". No emoji.
- Prices: `$12,850,000 MXN`; rentals add "/ mes". Specs: "4 recámaras · 4.5 baños · 320 m²".
- Stats (+500, +10, +1,200, +30) are DEMO figures — always label as demonstrative.

## Visual foundations
- **Color:** warm white/sand page (#F6F4F0), deep ink (#141311) header/footer/dark bands, stone neutrals, a single champagne→gold accent family (#D3B58B CTA fill, #9E7644 prices/eyebrows on light, #C3A06F on dark). No blue; semantic colors are muted sage/ochre/terracotta.
- **Type:** Cormorant Garamond 500 (serif display/headings, stats) + Manrope (UI, 300 for wordmark). Strong scale contrast: 56–76px display vs 13–15px UI. Highlight one phrase in champagne.
- **Layout:** 1200px container, 20–48px gutter, 64–112px section rhythm. Alternates light sections, full-bleed dark photo bands and editorial whitespace. Header fixed; transparent over hero → compact solid ink with blur on scroll.
- **Imagery:** dusk/night architecture, warm interior light, deep shadows; aerial city photography for locations. Photos are protagonists, never tinted — only a left-side dark scrim on heroes and a bottom shade on tiles.
- **Cards:** white, 1px hairline (#E5E0D7), 4px radius, no resting shadow; hover = faint shadow-2 + border darkens + 1.4s image zoom (1.045).
- **Radii:** 2px controls/badges, 3px chips/tiles, 4px cards/photos, 6px sheets; circles only for icon buttons.
- **Shadows:** nearly none; used for hover, dropdowns, toasts, modals. Borders do the structural work.
- **Motion:** slow ease-out (cubic-bezier(.22,.61,.36,1)); 180ms color, 320ms arrows/tabs, 640ms modals/reveal. Arrows nudge 3px on hover; press = 1px translate. Fade + 12px rise reveals. Respect reduced motion.
- **Hover:** champagne fill lightens; outline buttons invert to ink; links shift to gold. **Transparency/blur:** only the scrolled header and glass icon buttons on photos.

## Iconography
Lucide (CDN, pinned `lucide@0.460.0`), thin 1.25–1.5 stroke, gold on light / champagne on dark. Wrapped by the `Icon` component. No emoji, no unicode glyph icons. Substitution: the reference uses a similar thin line set — Lucide is the closest CDN match (flagged).

## Brand mark
No logo file was supplied. The wordmark is typographic (`Logo` component: MEXTAS in Manrope Light, tracking .3em, over INMOBILIARIA). Note: the reference shows "MEXTA"; the brand name given is MEXTAS.

## Fonts
Google Fonts substitutes (Cormorant Garamond, Manrope) via `tokens/fonts.css`. Provide licensed files if the brand uses different faces.

## Components (`components/`, namespace `MextasDesignSystem_8aabb9`)
- core: Icon, Logo, Button, IconButton, Badge, Chip
- forms: Field, Input, Select, Checkbox, Radio, Switch, Slider
- navigation: Tabs, Breadcrumbs
- feedback: Dialog, Toast, ToastStack, Tooltip, Skeleton, EmptyState
- realestate: PropertyCard, PropertySpecs, LocationCard, CategoryTile, StatBlock, TrustItem, SectionHeader, AmenityItem, CompareTray

Intentional additions (no source inventory existed): all of the above are a from-scratch standard set sized to the brand; Icon wraps Lucide.

## Index
- `styles.css` → tokens/ (colors, typography, spacing, effects, fonts, base) + component CSS
- `guidelines/` foundation cards · `components/` primitives + cards · `assets/img` photography · `assets/reference` source mock
- `ui_kits/website/` — full interactive site (hash routes): `/`, `/propiedades` (+ `?ubicacion=…&tipo=…`), `/propiedades/:slug`, `/favoritos`, `/comparar`, `/desarrollos`, `/desarrollos/:slug`, `/servicios`, `/nosotros`, `/vender`, `/contacto`, `/blog`, `/blog/:slug`. Files: data.js (mock data), store.jsx (router, favorites, compare, toasts, modals — persisted in localStorage), shell.jsx, home.jsx (Home + Listings + AdvancedFilters), detail.jsx (gallery, lightbox, mortgage simulator, agent panel), modals.jsx (contact, visit, seller, legal), pages.jsx, pages2.jsx, app.jsx, kit.css.
- `SKILL.md`, `thumbnail.html`
