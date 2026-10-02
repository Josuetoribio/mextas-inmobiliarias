import React, { useEffect, useId, useRef, useState } from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, hint, error, required, id, value, onChange, options = [], placeholder = 'Selecciona', size = 'md', tone = 'light', disabled, className = '', fieldStyle }) {
  const auto = useId();
  const fid = id || 'mx-sel-' + auto;
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(-1);
  const ref = useRef(null);
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const selIdx = opts.findIndex((o) => o.value === value);
  const sel = opts[selIdx];
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const choose = (o) => { onChange && onChange(o.value); setOpen(false); };
  const onKey = (e) => {
    if (disabled) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) { setOpen(true); setHi(selIdx < 0 ? 0 : selIdx); return; }
      setHi((h) => Math.max(0, Math.min(opts.length - 1, h + (e.key === 'ArrowDown' ? 1 : -1))));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (open && hi >= 0) choose(opts[hi]); else { setOpen(true); setHi(selIdx < 0 ? 0 : selIdx); }
    } else if (e.key === 'Escape' || e.key === 'Tab') setOpen(false);
  };
  return (
    <Field label={label} htmlFor={fid} hint={hint} error={error} required={required} tone={tone} style={fieldStyle}>
      <div ref={ref} className={['mx-select', 'mx-input', 'mx-input--' + size, 'mx-input--' + tone, open ? 'is-open' : '', error ? 'is-invalid' : '', className].join(' ')}>
        <button id={fid} type="button" className="mx-select__trigger" disabled={disabled} aria-haspopup="listbox" aria-expanded={open}
          aria-controls={fid + '-list'} onClick={() => { setOpen((o) => !o); setHi(selIdx); }} onKeyDown={onKey}>
          <span className={sel ? '' : 'mx-select__ph'}>{sel ? sel.label : placeholder}</span>
          <Icon name="ChevronDown" size={16} className="mx-select__chev" />
        </button>
        {open ? (
          <ul id={fid + '-list'} role="listbox" className="mx-select__list" aria-labelledby={fid}>
            {opts.map((o, i) => (
              <li key={String(o.value)} role="option" aria-selected={o.value === value} className={(i === hi ? 'is-hi ' : '') + (o.value === value ? 'is-sel' : '')}
                onMouseEnter={() => setHi(i)} onMouseDown={(e) => { e.preventDefault(); choose(o); }}>
                <span className="mx-select__opt">
                  <span>{o.label}</span>
                  {o.description ? <span className="mx-select__desc">{o.description}</span> : null}
                </span>
                {o.value === value ? <Icon name="Check" size={14} /> : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Field>
  );
}
