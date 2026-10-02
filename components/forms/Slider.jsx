import React, { useId } from 'react';

export function Slider({ label, value, onChange, min = 0, max = 100, step = 1, format, id, tone = 'light', className = '' }) {
  const auto = useId();
  const fid = id || 'mx-sl-' + auto;
  const p = ((value - min) / (max - min)) * 100;
  return (
    <div className={['mx-slider', 'mx-slider--' + tone, className].join(' ')}>
      <div className="mx-slider__head">
        {label ? <label htmlFor={fid}>{label}</label> : <span />}
        <output htmlFor={fid}>{format ? format(value) : value}</output>
      </div>
      <input id={fid} type="range" min={min} max={max} step={step} value={value} style={{ '--_p': p + '%' }}
        onChange={(e) => onChange && onChange(Number(e.target.value))} />
    </div>
  );
}
