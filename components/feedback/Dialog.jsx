import React, { useEffect, useRef, useState } from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open, onClose, title, description, eyebrow, placement = 'center', size = 'md', tone = 'light', footer, hideClose, children, labelledBy, className = '' }) {
  const [mounted, setMounted] = useState(open);
  const [closing, setClosing] = useState(false);
  const panel = useRef(null);
  const prev = useRef(null);
  useEffect(() => {
    if (open) { setMounted(true); setClosing(false); }
    else if (mounted) { setClosing(true); const t = setTimeout(() => { setMounted(false); setClosing(false); }, 280); return () => clearTimeout(t); }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    prev.current = document.activeElement;
    const ov = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      const f = panel.current && panel.current.querySelector('input,select,textarea,button:not([data-close]),[href],[tabindex]:not([tabindex="-1"])');
      (f || panel.current) && (f || panel.current).focus();
    }, 30);
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose && onClose(); }
      if (e.key === 'Tab' && panel.current) {
        const els = [...panel.current.querySelectorAll('input,select,textarea,button,[href],[tabindex]:not([tabindex="-1"])')].filter((el) => !el.disabled);
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ov; document.removeEventListener('keydown', onKey); clearTimeout(t); prev.current && prev.current.focus && prev.current.focus(); };
  }, [open]);
  if (!mounted) return null;
  const tid = labelledBy || (title ? 'mx-dlg-title' : undefined);
  return (
    <div className={['mx-dialog', 'mx-dialog--' + placement, 'mx-dialog--' + size, 'mx-dialog--' + tone, closing ? 'is-closing' : '', className].join(' ')}>
      <div className="mx-dialog__scrim" onClick={onClose} aria-hidden="true" />
      <div ref={panel} className="mx-dialog__panel" role="dialog" aria-modal="true" aria-labelledby={tid} tabIndex={-1}>
        {!hideClose ? <IconButton data-close icon="X" label="Cerrar" variant={tone === 'dark' || placement === 'full' ? 'ghost' : 'ghost'} className="mx-dialog__close" onClick={onClose} /> : null}
        {title || description ? (
          <header className="mx-dialog__head">
            {eyebrow ? <p className="mx-dialog__eyebrow">{eyebrow}</p> : null}
            {title ? <h2 id={tid} className="mx-dialog__title">{title}</h2> : null}
            {description ? <p className="mx-dialog__desc">{description}</p> : null}
          </header>
        ) : null}
        <div className="mx-dialog__body">{children}</div>
        {footer ? <footer className="mx-dialog__foot">{footer}</footer> : null}
      </div>
    </div>
  );
}
