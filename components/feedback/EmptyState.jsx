import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'Search', title, description, action, tone = 'light', compact }) {
  return (
    <div className={'mx-empty mx-empty--' + tone + (compact ? ' mx-empty--compact' : '')}>
      <span className="mx-empty__icon"><Icon name={icon} size={24} strokeWidth={1.25} /></span>
      <h3 className="mx-empty__title">{title}</h3>
      {description ? <p className="mx-empty__desc">{description}</p> : null}
      {action ? <div className="mx-empty__action">{action}</div> : null}
    </div>
  );
}
