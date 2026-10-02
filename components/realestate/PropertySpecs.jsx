import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function PropertySpecs({ beds, baths, area, parking, variant = 'inline', tone = 'light', className = '' }) {
  const items = [
    beds != null && { icon: 'BedDouble', value: beds, label: beds === 1 ? 'recámara' : 'recámaras' },
    baths != null && { icon: 'Bath', value: baths, label: 'baños' },
    area != null && { icon: 'Square', value: area + ' m²', label: 'superficie' },
    parking != null && { icon: 'Car', value: parking, label: 'estacionamientos' },
  ].filter(Boolean);
  return (
    <ul className={['mx-specs', 'mx-specs--' + variant, 'mx-specs--' + tone, className].join(' ')}>
      {items.map((it) => (
        <li key={it.icon} title={it.value + ' ' + it.label}>
          <Icon name={it.icon} size={variant === 'blocks' ? 22 : 15} strokeWidth={variant === 'blocks' ? 1.25 : 1.5} />
          <span className="mx-specs__v">{it.value}</span>
          <span className={variant === 'blocks' ? 'mx-specs__l' : 'mx-sr'}>{it.label}</span>
        </li>
      ))}
    </ul>
  );
}
