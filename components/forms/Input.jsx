import React, { useId } from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, required, id, iconLeft, iconRight, multiline, rows = 4, size = 'md', tone = 'light', className = '', fieldStyle, ...rest }) {
  const auto = useId();
  const fid = id || 'mx-in-' + auto;
  const Ctl = multiline ? 'textarea' : 'input';
  return (
    <Field label={label} htmlFor={fid} hint={hint} error={error} required={required} tone={tone} style={fieldStyle}>
      <div className={['mx-input', 'mx-input--' + size, 'mx-input--' + tone, error ? 'is-invalid' : '', multiline ? 'is-multiline' : '', className].join(' ')}>
        {iconLeft ? <Icon name={iconLeft} size={16} className="mx-input__icon" /> : null}
        <Ctl id={fid} rows={multiline ? rows : undefined} aria-invalid={error ? true : undefined} required={required} {...rest} />
        {iconRight ? <Icon name={iconRight} size={16} className="mx-input__icon" /> : null}
      </div>
    </Field>
  );
}
