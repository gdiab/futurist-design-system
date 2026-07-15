import React from 'react';

const SIZES = { sm: '26px', md: '32px', lg: '40px' };
const VARIANTS = {
  secondary: { rest: { background: 'var(--bg-1)', color: 'var(--fg-2)', border: '1px solid var(--border-3)' }, hover: { background: 'var(--bg-2)', color: 'var(--fg-1)' },   active: { background: 'var(--bg-3)', color: 'var(--fg-1)' } },
  ghost:     { rest: { background: 'transparent', color: 'var(--fg-3)', border: '1px solid transparent' },      hover: { background: 'var(--bg-2)', color: 'var(--fg-1)' },   active: { background: 'var(--bg-3)', color: 'var(--fg-1)' } },
  primary:   { rest: { background: 'var(--accent)', color: 'var(--accent-fg)', border: '1px solid transparent' }, hover: { background: 'var(--accent-hover)' },               active: { background: 'var(--accent-active)' } },
};

/* Inline spinner — self-contained (SMIL rotation, no keyframes needed). */
function IconButtonSpinner({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="0.7s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export function IconButton({ variant = 'ghost', size = 'md', disabled = false, loading = false, 'aria-label': ariaLabel, children, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const interactive = !disabled && !loading;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: dim, height: dim, padding: 0, borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
    ...v.rest,
    ...(hover && interactive ? v.hover : null),
    ...(press && interactive ? v.active : null),
    ...style,
  };
  const handleClick = (e) => {
    if (!interactive) { e.preventDefault(); e.stopPropagation(); return; }
    onClick && onClick(e);
  };
  return (
    <button type="button" aria-label={ariaLabel} disabled={disabled} aria-disabled={disabled || loading || undefined} aria-busy={loading || undefined} style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setPress(true); }}
      onKeyUp={() => setPress(false)}
      onBlur={() => setPress(false)}
      onClick={handleClick}
      {...rest}>
      {loading ? <IconButtonSpinner /> : children}
    </button>
  );
}
