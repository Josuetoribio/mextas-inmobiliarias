The signature Mextas listing card — photo with badge + heart, sans title, stone location, spec row, gold price, "Ver propiedad →". Whole card is clickable (stretched title link).

```jsx
<PropertyCard property={p} href={'#/propiedades/' + p.slug} favorite={isFav} onToggleFavorite={toggleFav}
  compared={inCmp} onToggleCompare={toggleCmp} />
<PropertyCard layout="list" property={p} />
```

- Hover: 1.4s slow image zoom (1.04), border darkens. Image fades in over a stone placeholder.
