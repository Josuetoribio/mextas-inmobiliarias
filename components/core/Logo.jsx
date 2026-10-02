import React from 'react';

/** MEXTAS / INMOBILIARIA typographic wordmark (no logo file supplied — plain type). */
export function Logo({ tone = 'light', size = 'md', href, onClick, style }) {
  const s = { sm: [18, 6.5], md: [22, 7.5], lg: [34, 10.5] }[size] || [22, 7.5];
  const color = tone === 'light' ? 'var(--fg-inverse)' : 'var(--fg-1)';
  const inner = (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, color, ...style }}>
      <span style={{ font: `300 ${s[0]}px/1 var(--font-sans)`, letterSpacing: 'var(--ls-wordmark)', marginRight: '-0.3em' }}>MEXTAS</span>
      <span style={{ font: `500 ${s[1]}px/1 var(--font-sans)`, letterSpacing: 'var(--ls-sub)', marginTop: s[0] * 0.28, marginRight: '-0.44em', opacity: .85 }}>INMOBILIARIA</span>
    </span>
  );
  if (href || onClick) return <a href={href || '#'} onClick={onClick} aria-label="Mextas Inmobiliaria — inicio" style={{ textDecoration: 'none', display: 'inline-flex' }}>{inner}</a>;
  return inner;
}
