import React from 'react';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 10px', fontSize: 'var(--text-xs)', gap: '6px' },
  md: { height: 'var(--control-h)',    padding: '0 14px', fontSize: 'var(--text-sm)', gap: '7px' },
  lg: { height: 'var(--control-h-lg)', padding: '0 18px', fontSize: 'var(--text-base)', gap: '8px' },
};

const VARIANTS = {
  primary:   { rest: { background: 'var(--accent)', color: 'var(--accent-fg)', border: '1px solid transparent' },        hover: { background: 'var(--accent-hover)' } },
  secondary: { rest: { background: 'var(--bg-1)', color: 'var(--fg-1)', border: '1px solid var(--border-3)' },           hover: { background: 'var(--bg-2)', borderColor: 'var(--fg-4)' } },
  ghost:     { rest: { background: 'transparent', color: 'var(--fg-2)', border: '1px solid transparent' },               hover: { background: 'var(--bg-2)', color: 'var(--fg-1)' } },
  danger:    { rest: { background: 'var(--danger)', color: 'var(--danger-fg)', border: '1px solid transparent' },        hover: { filter: 'brightness(0.94)' } },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, fullWidth = false, iconLeft, iconRight, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : 'auto',
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    height: s.height, padding: s.padding, fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
    lineHeight: 1, letterSpacing: '0.005em', whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), filter var(--dur-fast)',
    opacity: disabled ? 0.45 : 1, userSelect: 'none',
    ...v.rest, ...(hover && !disabled ? v.hover : null), ...style,
  };
  return (
    <button type="button" disabled={disabled} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {iconLeft ? <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconRight}</span> : null}
    </button>
  );
}
