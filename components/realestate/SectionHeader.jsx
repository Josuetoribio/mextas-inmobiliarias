import React from 'react';

export function SectionHeader({ eyebrow, title, description, action, tone = 'light', align = 'left', as = 'h2', className = '' }) {
  const H = as;
  return (
    <div className={['mx-sech', 'mx-sech--' + tone, 'mx-sech--' + align, className].join(' ')}>
      <div className="mx-sech__main">
        {eyebrow ? <p className="mx-sech__eyebrow">{eyebrow}</p> : null}
        <H className="mx-sech__title">{title}</H>
        {description ? <p className="mx-sech__desc">{description}</p> : null}
      </div>
      {action ? <div className="mx-sech__action">{action}</div> : null}
    </div>
  );
}
