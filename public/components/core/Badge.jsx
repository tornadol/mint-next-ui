import React from 'react';
const map = {
  new: { bg: 'var(--brand-red-800)', color: '#fff' },
  sale: { bg: 'var(--ink-1000)', color: '#fff' },
  gift: { bg: 'var(--warm-3)', color: 'var(--ink-1000)' },
  outline: { bg: 'transparent', color: 'var(--ink-1000)', border: '1px solid var(--ink-200)' },
};
export function Badge({ children, tone = 'new', style }) {
  const s = map[tone] || map.new;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height: 24,
      padding: '0 10px',
      fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 11, lineHeight: 1,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      background: s.bg, color: s.color, border: s.border,
      ...style,
    }}>{children}</span>
  );
}
export default Badge;
