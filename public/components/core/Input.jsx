import React from 'react';
export function Input({ label, placeholder, error, style, ...rest }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <span style={{ font: 'var(--text-util)', color: 'var(--ink-700)' }}>{label}</span>}
      <input placeholder={placeholder}
        style={{
          height: 40, padding: '0 12px',
          border: '1px solid ' + (error ? 'var(--brand-red-700)' : 'var(--ink-100)'),
          borderRadius: 6, background: '#fff',
          fontFamily: 'var(--font-utility)', fontSize: 14, color: 'var(--ink-1000)',
          outline: 'none',
        }}
        {...rest} />
      {error && <span style={{ font: 'var(--text-util-sm)', color: 'var(--brand-red-700)' }}>{error}</span>}
    </label>
  );
}
export default Input;
