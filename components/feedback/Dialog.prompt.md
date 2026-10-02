Modal / drawer / bottom sheet / fullscreen overlay with scrim, Esc, focus trap and scroll lock. One component for every overlay surface.

```jsx
<Dialog open={o} onClose={close} eyebrow="Casa en Valle Real" title="Solicitar información" footer={<Button variant="dark">Enviar solicitud</Button>}>…</Dialog>
<Dialog open={f} onClose={close} placement="right" title="Filtros avanzados">…</Dialog>
<Dialog open={g} onClose={close} placement="full" tone="dark" hideClose>…gallery…</Dialog>
```

- Slow fade + 12px rise (center), slide (right/bottom). Don't nest inside transformed ancestors.
