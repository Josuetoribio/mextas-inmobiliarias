Label + control + hint/error wrapper. Input and Select already use it via their label/hint/error props; use Field directly around custom controls.

```jsx
<Field label="Fecha" htmlFor="f" error={err}><input id="f" /></Field>
```
