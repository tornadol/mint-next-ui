import React from 'react';
export function MenuItem({ children, active, href = '#', style, ...rest }) {
  return (
    <a href={href}
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '12px', borderRadius: 6,
        fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 16, lineHeight: '24px',
        color: 'var(--ink-1000)',
        textTransform: 'uppercase', letterSpacing: '0.02em',
        opacity: active ? 1 : 0.85,
        transition: 'opacity .15s',
        ...style,
      }}
      onMouseOver={e => e.currentTarget.style.opacity = 1}
      onMouseOut={e => e.currentTarget.style.opacity = active ? 1 : 0.85}
      {...rest}
    >{children}</a>
  );
}
export default MenuItem;
