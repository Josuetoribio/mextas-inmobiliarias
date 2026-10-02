import React from 'react';
import { Icon } from './Icon.jsx';

export function Chip({ children, selected, icon, onClick, onRemove, removeLabel, tone = 'light', className = '' }) {
  const cls = ['mx-chip', 'mx-chip--' + tone, selected ? 'is-selected' : '', onClick ? 'is-interactive' : '', className].join(' ');
  const Tag = onClick ? 'button' : 'span';
  return (
    <Tag type={onClick ? 'button' : undefined} className={cls} onClick={onClick} aria-pressed={onClick ? !!selected : undefined}>
      {icon ? <Icon name={icon} size={14} /> : null}
      <span>{children}</span>
      {onRemove ? (
        <span role="button" tabIndex={0} aria-label={removeLabel || 'Quitar filtro'} className="mx-chip__x"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRemove(e); } }}>
          <Icon name="X" size={12} />
        </span>
      ) : null}
    </Tag>
  );
}
