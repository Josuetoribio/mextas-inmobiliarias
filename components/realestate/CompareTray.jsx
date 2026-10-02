import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

export function CompareTray({ items = [], max = 3, onRemove, onCompare, onClear, fixed = true }) {
  if (!items.length) return null;
  const slots = Array.from({ length: max });
  return (
    <div className={'mx-ctray' + (fixed ? ' is-fixed' : '')} role="region" aria-label="Comparador de propiedades">
      <div className="mx-ctray__label">
        <span className="mx-ctray__t">Comparar propiedades ({items.length})</span>
        <span className="mx-ctray__s">{items.length < max ? 'Puedes agregar ' + (max - items.length) + ' más' : 'Máximo alcanzado'}</span>
      </div>
      <ul className="mx-ctray__slots">
        {slots.map((_, i) => {
          const it = items[i];
          return it ? (
            <li key={it.id} className="mx-ctray__item">
              <img src={it.image} alt="" />
              <span className="mx-ctray__name">{it.title}</span>
              <button type="button" aria-label={'Quitar ' + it.title} onClick={() => onRemove && onRemove(it)}><Icon name="X" size={12} /></button>
            </li>
          ) : <li key={'e' + i} className="mx-ctray__empty" aria-hidden="true"><Icon name="Plus" size={14} /></li>;
        })}
      </ul>
      <div className="mx-ctray__actions">
        {onClear ? <button type="button" className="mx-ctray__clear" onClick={onClear}>Limpiar</button> : null}
        <Button size="sm" iconRight="ArrowRight" disabled={items.length < 2} onClick={onCompare}>Ver comparación</Button>
      </div>
    </div>
  );
}
