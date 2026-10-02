import React, { useId } from 'react';
import { Icon } from '../core/Icon.jsx';

export function Radio({ label, description, icon, name, value, checked, onChange, variant = 'default', disabled, id, className = '' }) {
  const auto = useId();
  const fid = id || 'mx-rd-' + auto;
  return (
    <label htmlFor={fid} className={['mx-radio', 'mx-radio--' + variant, checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].join(' ')}>
      <input id={fid} type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} />
      <span className="mx-radio__dot" aria-hidden="true" />
      {icon ? <Icon name={icon} size={20} strokeWidth={1.25} className="mx-radio__icon" /> : null}
      <span className="mx-radio__text"><span>{label}</span>{description ? <span className="mx-radio__desc">{description}</span> : null}</span>
    </label>
  );
}
