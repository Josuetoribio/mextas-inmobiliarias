import React, { useId } from 'react';

export function Switch({ label, checked, onChange, disabled, id, className = '' }) {
  const auto = useId();
  const fid = id || 'mx-sw-' + auto;
  return (
    <label htmlFor={fid} className={['mx-switch', disabled ? 'is-disabled' : '', className].join(' ')}>
      <input id={fid} type="checkbox" role="switch" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} />
      <span className="mx-switch__track" aria-hidden="true"><span className="mx-switch__thumb" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
