import React from 'react';

export function StatBlock({ value, label, tone = 'dark', size = 'md', className = '' }) {
  return (
    <div className={['mx-stat', 'mx-stat--' + tone, 'mx-stat--' + size, className].join(' ')}>
      <span className="mx-stat__v">{value}</span>
      <span className="mx-stat__l">{label}</span>
    </div>
  );
}
