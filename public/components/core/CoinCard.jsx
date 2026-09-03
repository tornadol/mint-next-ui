import React from 'react';
export function CoinCard({ image, meta, name, price, badge, style }) {
  return (
    <div style={{
      width: 332, height: 468,
      boxShadow: 'inset 0 0 0 1px var(--ink-200)',
      background: 'var(--white)',
      position: 'relative',
      display: 'flex', flexDirection: 'column',
      padding: '66px 16px 24px',
      ...style,
    }}>
      {badge && <span style={{
        position: 'absolute', top: 16, left: 16,
        padding: '4px 10px',
        fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 11, lineHeight: '16px',
        textTransform: 'uppercase', letterSpacing: '0.06em',
        background: 'var(--brand-red-800)', color: '#fff',
      }}>{badge}</span>}
      <div style={{
        width: 200, height: 200, margin: '0 auto',
        background: image ? `url("${image}") 50% 50% / contain no-repeat` : 'var(--ink-25)',
        boxShadow: 'var(--shadow-soft)',
        borderRadius: '50%',
      }} />
      <div style={{ marginTop: 62 }}>
        <div style={{ font: 'var(--text-meta)', color: 'var(--ink-500)' }}>{meta}</div>
        <div style={{ font: 'var(--text-body)', color: 'var(--ink-1000)', marginTop: 4, minHeight: 48 }}>{name}</div>
        <div style={{ font: 'var(--text-price)', color: 'var(--ink-1000)', marginTop: 12 }}>{price}</div>
      </div>
    </div>
  );
}
export default CoinCard;
