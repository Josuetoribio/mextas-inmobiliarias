import React, { useState } from 'react';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { PropertySpecs } from './PropertySpecs.jsx';
import { formatMXN } from './format.js';

export function PropertyCard({ property: p, href, onOpen, favorite, onToggleFavorite, compared, onToggleCompare, compareDisabled, layout = 'grid', eager, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const open = (e) => { if (onOpen) { e.preventDefault(); onOpen(p); } };
  const price = p.priceLabel || formatMXN(p.price, p.currency || 'MXN') + (p.operation === 'renta' ? ' / mes' : '');
  return (
    <article className={['mx-pcard', 'mx-pcard--' + layout, className].join(' ')}>
      <div className="mx-pcard__media">
        <img src={p.image} alt={p.title + ' — ' + p.location} loading={eager ? 'eager' : 'lazy'} onLoad={() => setLoaded(true)} className={loaded ? 'is-loaded' : ''} />
        {p.badge ? <Badge className="mx-pcard__badge">{p.badge}</Badge> : null}
        {onToggleFavorite ? (
          <IconButton className="mx-pcard__fav" icon="Heart" variant="glass" size="md" active={!!favorite}
            label={favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'} onClick={() => onToggleFavorite(p)} />
        ) : null}
      </div>
      <div className="mx-pcard__body">
        <div className="mx-pcard__head">
          <h3 className="mx-pcard__title"><a href={href || '#'} onClick={open}>{p.title}</a></h3>
          <p className="mx-pcard__loc">{p.location}</p>
        </div>
        <PropertySpecs beds={p.beds} baths={p.baths} area={p.area} />
        <p className="mx-pcard__price">{price}</p>
        <div className="mx-pcard__foot">
          <span className="mx-pcard__cta">Ver propiedad<Icon name="ArrowRight" size={15} /></span>
          {onToggleCompare ? (
            <button type="button" className={'mx-pcard__cmp' + (compared ? ' is-on' : '')} aria-pressed={!!compared}
              disabled={compareDisabled && !compared} title={compareDisabled && !compared ? 'Máximo 3 propiedades' : undefined}
              onClick={() => onToggleCompare(p)}>
              <span className="mx-pcard__cmpbox"><Icon name="Check" size={10} strokeWidth={2.5} /></span>Comparar
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
