import React from 'react';
import { Button } from './Button.jsx';
const BG = '../../assets/imagery/hero-bg.png';
const COINS = '../../assets/imagery/hero-coins.png';
export function Hero({ eyebrow, title = 'SALE NOW ON', body, cta = 'GET COLLECTING', bg = BG, art = COINS, style }) {
  return (
    <section style={{
      position: 'relative', width: '100%', height: 780, overflow: 'hidden',
      background: `url("${bg}") 50% 50% / cover no-repeat`,
      ...style,
    }}>
      <img src={art} alt="" style={{ position: 'absolute', right: -40, top: 60, width: 780, height: 'auto', transform: 'rotate(8deg)', filter: 'drop-shadow(18px 8px 30px rgba(40,35,27,0.12))' }} />
      <div style={{ position: 'relative', padding: '316px 80px 0' }}>
        {eyebrow && <div style={{ font: 'var(--text-eyebrow)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>{eyebrow}</div>}
        <h1 style={{ font: 'var(--text-hero)', margin: 0 }}>{title}</h1>
        {body && <p style={{ font: 'var(--text-body-lg)', margin: '8px 0 24px', maxWidth: 820, whiteSpace: 'pre-line' }}>{body}</p>}
        <Button variant="primary" size="lg" uppercase iconTrailing="ArrowLongRight">{cta}</Button>
      </div>
    </section>
  );
}
export default Hero;
