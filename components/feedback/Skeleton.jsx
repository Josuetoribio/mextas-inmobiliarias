import React from 'react';

export function Skeleton({ width = '100%', height = 14, radius, variant = 'block', lines = 3, tone = 'light', style }) {
  if (variant === 'text') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width }}>
        {Array.from({ length: lines }).map((_, i) => <span key={i} className={'mx-skel mx-skel--' + tone} style={{ height, width: i === lines - 1 ? '62%' : '100%' }} />)}
      </div>
    );
  }
  if (variant === 'card') {
    return (
      <div className="mx-skel-card" aria-hidden="true" style={{ width, ...style }}>
        <span className={'mx-skel mx-skel--' + tone} style={{ aspectRatio: '3 / 2', borderRadius: 0 }} />
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="mx-skel" style={{ height: 14, width: '70%' }} />
          <span className="mx-skel" style={{ height: 11, width: '45%' }} />
          <span className="mx-skel" style={{ height: 11, width: '60%', marginTop: 6 }} />
          <span className="mx-skel" style={{ height: 18, width: '50%', marginTop: 6 }} />
        </div>
      </div>
    );
  }
  return <span aria-hidden="true" className={'mx-skel mx-skel--' + tone} style={{ width, height, borderRadius: radius, ...style }} />;
}
