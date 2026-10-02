Custom listbox dropdown (keyboard: ↑ ↓ Enter Esc) — property type, max price, bedrooms, sort order.

```jsx
<Select label="Tipo de propiedad" placeholder="Selecciona tipo" value={t} onChange={setT}
  options={['Casa','Departamento','Penthouse']} />
<Select size="sm" value={sort} onChange={setSort} options={[{value:'rel',label:'Relevancia'}]} />
```
