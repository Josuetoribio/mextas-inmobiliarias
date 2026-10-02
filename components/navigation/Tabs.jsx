import React, { useRef } from 'react';

export function Tabs({ items = [], value, onChange, variant = 'underline', tone = 'light', size = 'md', fullWidth, label, className = '' }) {
  const refs = useRef([]);
  const idx = items.findIndex((t) => t.value === value);
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = (idx + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
    onChange && onChange(items[n].value);
    refs.current[n] && refs.current[n].focus();
  };
  return (
    <div role="tablist" aria-label={label} onKeyDown={onKey}
      className={['mx-tabs', 'mx-tabs--' + variant, 'mx-tabs--' + tone, 'mx-tabs--' + size, fullWidth ? 'mx-tabs--full' : '', className].join(' ')}>
      {items.map((t, i) => (
        <button key={t.value} ref={(el) => (refs.current[i] = el)} type="button" role="tab" aria-selected={t.value === value}
          tabIndex={t.value === value ? 0 : -1} className={'mx-tab' + (t.value === value ? ' is-active' : '')} onClick={() => onChange && onChange(t.value)}>
          <span>{t.label}</span>
          {t.count != null ? <span className="mx-tab__count">{t.count}</span> : null}
        </button>
      ))}
    </div>
  );
}
