import React from 'react';

const toPascal = (s) => s.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

/** Lucide icon wrapper. Requires the Lucide UMD script (window.lucide) on the page. */
export function Icon({ name, size = 18, strokeWidth = 1.5, color = 'currentColor', fill = 'none', title, style, className, ...rest }) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib ? (lib[name] || lib[toPascal(name || '')]) : null;
  if (node && node[0] === 'svg') node = node[2];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined} className={className} style={{ flexShrink: 0, display: 'block', ...style }} {...rest}>
      {title ? <title>{title}</title> : null}
      {Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs })) : null}
    </svg>
  );
}
