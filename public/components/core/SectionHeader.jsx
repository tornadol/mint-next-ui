import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';
export function SectionHeader({ children, trailing, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 56px', margin: '80px 0 32px', ...style }}>
      <h2 style={{ font: 'var(--text-section)', margin: 0, color: 'var(--ink-1000)' }}>{children}</h2>
      {trailing !== false && (
        <div style={{ display: 'flex', gap: 8 }}>
          <button aria-label="Previous" style={{ width: 48, height: 48, background: '#fff', border: '1px solid var(--ink-200)', cursor: 'pointer' }}>
            <Icon name="ArrowLongRight" size={24} style={{ transform: 'scaleX(-1)' }} />
          </button>
          <button aria-label="Next" style={{ width: 48, height: 48, background: '#fff', border: '1px solid var(--ink-200)', cursor: 'pointer' }}>
            <Icon name="ArrowLongRight" size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
export default SectionHeader;
