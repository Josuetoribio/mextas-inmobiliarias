import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TrustItem({ icon, title, subtitle, tone = 'dark', className = '' }) {
  return (
    <div className={'mx-trust mx-trust--' + tone + ' ' + className}>
      <Icon name={icon} size={22} strokeWidth={1.25} className="mx-trust__icon" />
      <span className="mx-trust__text"><span className="mx-trust__t">{title}</span><span className="mx-trust__s">{subtitle}</span></span>
    </div>
  );
}
