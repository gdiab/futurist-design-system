import React from 'react';

const SIZES = { sm: '26px', md: '32px', lg: '40px' };
const VARIANTS = {
  secondary: { rest: { background: 'var(--bg-1)', color: 'var(--fg-2)', border: '1px solid var(--border-3)' }, hover: { background: 'var(--bg-2)', color: 'var(--fg-1)' } },
  ghost:     { rest: { background: 'transparent', color: 'var(--fg-3)', border: '1px solid transparent' },      hover: { background: 'var(--bg-2)', color: 'var(--fg-1)' } },
  primary:   { rest: { background: 'var(--accent)', color: 'var(--accent-fg)', border: '1px solid transparent' }, hover: { background: 'var(--accent-hover)' } },
};

export function IconButton({ variant = 'ghost', size = 'md', disabled = false, 'aria-label': ariaLabel, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: dim, height: dim, padding: 0, borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
    ...v.rest, ...(hover && !disabled ? v.hover : null), ...style,
  };
  return (
    <button type="button" aria-label={ariaLabel} disabled={disabled} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </button>
  );
}
