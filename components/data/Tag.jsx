import React from 'react';

export function Tag({ children, onRemove, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', height: '22px', padding: onRemove ? '0 5px 0 9px' : '0 9px', borderRadius: 'var(--radius-full)', background: 'var(--bg-2)', border: '1px solid var(--border-2)', color: 'var(--fg-2)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', whiteSpace: 'nowrap', ...style }} {...rest}>
      {children}
      {onRemove ? (
        <button type="button" aria-label="Remove" onClick={onRemove}
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '15px', height: '15px', padding: 0, border: 'none', borderRadius: 'var(--radius-full)', cursor: 'pointer', background: hover ? 'var(--bg-3)' : 'transparent', color: hover ? 'var(--fg-1)' : 'var(--fg-3)' }}>
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </button>
      ) : null}
    </span>
  );
}
