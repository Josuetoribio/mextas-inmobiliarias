import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function CategoryTile({ icon, label, count, unit = 'propiedades', href, onClick, active, className = '' }) {
  return (
    <a href={href || '#'} onClick={onClick} className={'mx-cat' + (active ? ' is-active' : '') + ' ' + className}>
      <Icon name={icon} size={26} strokeWidth={1.25} className="mx-cat__icon" />
      <span className="mx-cat__text">
        <span className="mx-cat__label">{label}</span>
        {count != null ? <span className="mx-cat__count">{count} {unit}</span> : null}
      </span>
    </a>
  );
}
