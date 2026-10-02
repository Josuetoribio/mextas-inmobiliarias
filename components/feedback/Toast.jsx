import React, { useEffect } from 'react';
import { Icon } from '../core/Icon.jsx';

const ICONS = { default: 'Info', success: 'CheckCircle2', error: 'AlertCircle', favorite: 'Heart' };

export function Toast({ tone = 'default', title, message, icon, action, onClose, duration = 3800 }) {
  useEffect(() => {
    if (!duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);
  return (
    <div className={'mx-toast mx-toast--' + tone} role="status" aria-live="polite">
      <Icon name={icon || ICONS[tone]} size={18} fill={tone === 'favorite' ? 'currentColor' : 'none'} className="mx-toast__icon" />
      <div className="mx-toast__text">
        {title ? <strong>{title}</strong> : null}
        {message ? <span>{message}</span> : null}
      </div>
      {action || null}
      {onClose ? <button type="button" className="mx-toast__x" aria-label="Cerrar notificación" onClick={onClose}><Icon name="X" size={14} /></button> : null}
    </div>
  );
}

export function ToastStack({ toasts = [], onDismiss, position = 'bottom-center' }) {
  return (
    <div className={'mx-toast-stack mx-toast-stack--' + position}>
      {toasts.map((t) => <Toast key={t.id} {...t} onClose={() => onDismiss && onDismiss(t.id)} />)}
    </div>
  );
}
