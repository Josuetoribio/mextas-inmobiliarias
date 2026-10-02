import React from 'react';

export function Tooltip({ content, side = 'top', children }) {
  return (
    <span className={'mx-tooltip mx-tooltip--' + side}>
      {children}
      <span role="tooltip" className="mx-tooltip__bubble">{content}</span>
    </span>
  );
}
