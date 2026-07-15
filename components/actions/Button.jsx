import React from 'react';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 10px', fontSize: 'var(--text-xs)', gap: '6px' },
  md: { height: 'var(--control-h)',    padding: '0 14px', fontSize: 'var(--text-sm)', gap: '7px' },
  lg: { height: 'var(--control-h-lg)', padding: '0 18px', fontSize: 'var(--text-base)', gap: '8px' },
};

const VARIANTS = {
  primary:   { rest: { background: 'var(--accent)', color: 'var(--accent-fg)', border: '1px solid transparent' },        hover: { background: 'var(--accent-hover)' },                     active: { background: 'var(--accent-active)' } },
  secondary: { rest: { background: 'var(--bg-1)', color: 'var(--fg-1)', border: '1px solid var(--border-3)' },           hover: { background: 'var(--bg-2)', borderColor: 'var(--fg-4)' }, active: { background: 'var(--bg-3)', borderColor: 'var(--fg-4)' } },
  ghost:     { rest: { background: 'transparent', color: 'var(--fg-2)', border: '1px solid transparent' },               hover: { background: 'var(--bg-2)', color: 'var(--fg-1)' },       active: { background: 'var(--bg-3)', color: 'var(--fg-1)' } },
  danger:    { rest: { background: 'var(--danger)', color: 'var(--danger-fg)', border: '1px solid transparent' },        hover: { filter: 'brightness(0.94)' },                            active: { filter: 'brightness(0.88)' } },
};

/* Inline spinner — self-contained (SMIL rotation, no keyframes needed). */
function ButtonSpinner({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="0.7s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export function Button({ variant = 'primary', size = 'md', disabled = false, loading = false, fullWidth = false, iconLeft, iconRight, children, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const interactive = !disabled && !loading;
  const base = {
    position: 'relative',
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : 'auto',
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    height: s.height, padding: s.padding, fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
    lineHeight: 1, letterSpacing: '0.005em', whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), filter var(--dur-fast)',
    opacity: disabled ? 0.45 : 1, userSelect: 'none',
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
    <button type="button" disabled={disabled} aria-disabled={disabled || loading || undefined} aria-busy={loading || undefined} style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setPress(true); }}
      onKeyUp={() => setPress(false)}
      onBlur={() => setPress(false)}
      onClick={handleClick}
      {...rest}>
      {loading ? (
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ButtonSpinner />
        </span>
      ) : null}
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, visibility: loading ? 'hidden' : 'visible' }}>
        {iconLeft ? <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconRight}</span> : null}
      </span>
    </button>
  );
}
