import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function AmenityItem({ icon, label, detail, variant = 'tile', className = '' }) {
  return (
    <div className={'mx-amen mx-amen--' + variant + ' ' + className}>
      <Icon name={icon} size={variant === 'tile' ? 28 : 18} strokeWidth={1.25} className="mx-amen__icon" />
      <span className="mx-amen__text"><span className="mx-amen__l">{label}</span>{detail ? <span className="mx-amen__d">{detail}</span> : null}</span>
    </div>
  );
}
