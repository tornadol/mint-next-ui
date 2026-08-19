import React from 'react';
export function ContextMenu({ items = [], mode = 'light', style }) {
  const dark = mode === 'dark';
  return (
    <div style={{
      minWidth: 220, padding: 6, borderRadius: 8,
      background: dark ? 'var(--ink-800)' : '#fff',
      color: dark ? '#fff' : 'var(--ink-1000)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.16), 0 0 0 1px ' + (dark ? 'rgba(255,255,255,0.06)' : 'var(--ink-100)'),
      fontFamily: 'var(--font-utility)', fontSize: 14,
      ...style,
    }}>
      {items.map((it, i) => it === '---'
        ? <hr key={i} style={{ border: 0, borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,0.08)' : 'var(--ink-50)'), margin: '4px 0' }} />
        : (
          <div key={i} style={{
            padding: '8px 10px', borderRadius: 4,
            display: 'flex', justifyContent: 'space-between', gap: 24, cursor: 'pointer',
          }}
          onMouseOver={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'var(--ink-25)'}
          onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            <span>{it.label || it}</span>
            {it.shortcut && <span style={{ opacity: 0.5, fontSize: 12 }}>{it.shortcut}</span>}
          </div>
        )
      )}
    </div>
  );
}
export default ContextMenu;
