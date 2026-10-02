import React, { useId } from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked, onChange, disabled, id, name, tone = 'light', className = '' }) {
  const auto = useId();
  const fid = id || 'mx-cb-' + auto;
  return (
    <label htmlFor={fid} className={['mx-check', 'mx-check--' + tone, disabled ? 'is-disabled' : '', className].join(' ')}>
      <span className="mx-check__box">
        <input id={fid} name={name} type="checkbox" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked, e)} />
        <span className="mx-check__ui" aria-hidden="true"><Icon name="Check" size={12} strokeWidth={2.25} /></span>
      </span>
      <span className="mx-check__text"><span>{label}</span>{description ? <span className="mx-check__desc">{description}</span> : null}</span>
    </label>
  );
}
