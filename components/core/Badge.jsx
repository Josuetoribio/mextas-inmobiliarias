import React from 'react';

export function Badge({ tone = 'champagne', children, style, className = '' }) {
  return <span className={'mx-badge mx-badge--' + tone + ' ' + className} style={style}>{children}</span>;
}
