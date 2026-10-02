import React from 'react';

export function Field({ label, htmlFor, hint, error, required, tone = 'light', children, className = '', style }) {
  return (
    <div className={'mx-field mx-field--' + tone + ' ' + className} style={style}>
      {label ? <label className="mx-field__label" htmlFor={htmlFor}>{label}{required ? <span aria-hidden="true" className="mx-field__req"> *</span> : null}</label> : null}
      {children}
      {error ? <p className="mx-field__error" role="alert">{error}</p> : hint ? <p className="mx-field__hint">{hint}</p> : null}
    </div>
  );
}
