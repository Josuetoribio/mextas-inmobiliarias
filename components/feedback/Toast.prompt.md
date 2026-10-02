Dark ink notification pill for confirmations ("Guardada en favoritos", "Solicitud enviada"). ToastStack positions & auto-dismisses a list.

```jsx
<ToastStack toasts={toasts} onDismiss={(id) => setToasts((t) => t.filter((x) => x.id !== id))} />
<Toast tone="favorite" title="Guardada en favoritos" message="Casa en Valle Real" />
```
