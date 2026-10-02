import React from 'react';
import { Icon } from './Icon.jsx';

export function Button({ variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth, loading, disabled, href, type = 'button', children, className = '', ...rest }) {
  const cls = ['mx-btn', 'mx-btn--' + variant, 'mx-btn--' + size, fullWidth ? 'mx-btn--block' : '', loading ? 'is-loading' : '', className].join(' ');
  const content = (
    <>
      {loading ? <span className="mx-spinner" aria-hidden="true" /> : iconLeft ? <Icon name={iconLeft} size={size === 'sm' ? 14 : 16} /> : null}
      <span>{children}</span>
      {iconRight && !loading ? <Icon name={iconRight} size={size === 'sm' ? 14 : 16} className="mx-btn__icon-r" /> : null}
    </>
  );
  if (href) return <a href={href} className={cls} aria-disabled={disabled || undefined} {...rest}>{content}</a>;
  return <button type={type} className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>{content}</button>;
}
