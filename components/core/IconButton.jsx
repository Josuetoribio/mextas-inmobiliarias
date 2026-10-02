import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon, label, variant = 'surface', size = 'md', active, activeIcon, count, className = '', iconFill, ...rest }) {
  const px = { sm: 14, md: 17, lg: 20 }[size];
  return (
    <button type="button" aria-label={label} title={label} aria-pressed={active === undefined ? undefined : !!active}
      className={['mx-iconbtn', 'mx-iconbtn--' + variant, 'mx-iconbtn--' + size, active ? 'is-active' : '', className].join(' ')} {...rest}>
      <Icon name={active && activeIcon ? activeIcon : icon} size={px} fill={active ? (iconFill || 'currentColor') : 'none'} />
      {count ? <span className="mx-iconbtn__count">{count}</span> : null}
    </button>
  );
}
