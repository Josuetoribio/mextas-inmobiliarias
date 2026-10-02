import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumbs({ items = [], tone = 'light', className = '' }) {
  return (
    <nav aria-label="Ruta de navegación" className={'mx-crumbs mx-crumbs--' + tone + ' ' + className}>
      <ol>
        {items.map((it, i) => (
          <li key={i}>
            {i > 0 ? <Icon name="ChevronRight" size={12} /> : null}
            {it.href && i < items.length - 1 ? <a href={it.href} onClick={it.onClick}>{it.label}</a> : <span aria-current={i === items.length - 1 ? 'page' : undefined}>{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
