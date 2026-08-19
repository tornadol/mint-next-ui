// Button — Singapore Mint / underlying UI-kit primitive.
// Variants: primary (brand red), secondary (iris blue), outline, ghost, link, destructive.
// Sizes: sm, md (default), lg (hero CTA), icon. State handled via CSS pseudo.
import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

const sizeMap = {
  sm:  { h: 32, px: 12, fs: 14, gap: 6 },
  md:  { h: 36, px: 16, fs: 14, gap: 8 },
  lg:  { h: 48, px: 16, fs: 16, gap: 8 },
  icon:{ h: 40, px: 0,  fs: 16, gap: 0 },
};

const variantStyle = (variant) => {
  switch (variant) {
    case 'primary': return { bg: 'var(--brand-red-800)', color: '#fff', border: 'none' };
    case 'secondary': return { bg: 'var(--iris-11)', color: '#fff', border: 'none' };
    case 'destructive': return { bg: 'var(--brand-red-700)', color: '#fff', border: 'none' };
    case 'outline': return { bg: '#fff', color: 'var(--ink-800)', border: '1px solid var(--ink-100)', boxShadow: 'var(--shadow-xs)' };
    case 'ghost': return { bg: 'transparent', color: 'var(--ink-800)', border: 'none' };
    case 'link': return { bg: 'transparent', color: 'var(--iris-11)', border: 'none', textDecoration: 'underline' };
    default: return { bg: 'var(--brand-red-800)', color: '#fff', border: 'none' };
  }
};

export function Button({
  children, variant = 'primary', size = 'md', icon, iconTrailing,
  disabled, uppercase, style, ...rest
}) {
  const s = sizeMap[size] || sizeMap.md;
  const v = variantStyle(variant);
  const isIcon = size === 'icon';
  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap,
        height: s.h,
        padding: isIcon ? 0 : `0 ${s.px}px`,
        width: isIcon ? s.h : undefined,
        background: v.bg,
        color: v.color,
        border: v.border || 'none',
        boxShadow: v.boxShadow,
        borderRadius: variant === 'link' ? 0 : (size === 'lg' ? 0 : 4),
        fontFamily: uppercase || size === 'lg' ? 'var(--font-label)' : 'var(--font-utility)',
        fontWeight: uppercase || size === 'lg' ? 700 : 500,
        fontSize: s.fs,
        lineHeight: '24px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        textTransform: uppercase ? 'uppercase' : 'none',
        letterSpacing: uppercase ? '0.02em' : 0,
        transition: 'opacity .15s, background .15s',
        ...style,
      }}
      onMouseOver={e => { if (!disabled) e.currentTarget.style.opacity = 0.9; }}
      onMouseOut={e => { if (!disabled) e.currentTarget.style.opacity = 1; }}
      {...rest}
    >
      {icon && <Icon name={icon} size={size === 'lg' ? 24 : 20} />}
      {children}
      {iconTrailing && <Icon name={iconTrailing} size={size === 'lg' ? 24 : 20} />}
    </button>
  );
}
export default Button;
