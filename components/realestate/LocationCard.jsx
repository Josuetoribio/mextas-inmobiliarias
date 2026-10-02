import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function LocationCard({ name, region, image, count, href, onClick, aspect = '16 / 10', className = '' }) {
  return (
    <a href={href || '#'} onClick={onClick} className={'mx-loc ' + className} style={{ aspectRatio: aspect }} aria-label={name + ', ' + region + (count != null ? ' — ' + count + ' propiedades' : '')}>
      <img src={image} alt="" loading="lazy" />
      <span className="mx-loc__shade" />
      <span className="mx-loc__text">
        <span className="mx-loc__name">{name}</span>
        <span className="mx-loc__region">{region}</span>
      </span>
      {count != null ? <span className="mx-loc__count">{count} propiedades<Icon name="ArrowRight" size={13} /></span> : null}
    </a>
  );
}
