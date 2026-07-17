import React from 'react';

export function Select({ label, hint, error, size = 'md', options = [], id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  const wrap = {
    position: 'relative', display: 'flex', alignItems: 'center', height: h,
    background: 'var(--bg-1)',
    border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-3)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? 'var(--focus-ring)' : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
  };
  const sel = {
    appearance: 'none', WebkitAppearance: 'none', flex: 1, height: '100%',
    border: 'none', outline: 'none', background: 'transparent',
    padding: '0 32px 0 12px', color: 'var(--fg-1)',
    fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', cursor: 'pointer',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', ...style }}>
      {label ? <label htmlFor={rid} style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: 'var(--fg-2)' }}>{label}</label> : null}
      <div style={wrap}>
        <select id={rid} style={sel} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <svg width="10" height="10" viewBox="0 0 10 10" style={{ position: 'absolute', right: '10px', pointerEvents: 'none', color: 'var(--fg-3)' }}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-3)' }}>{hint}</span> : null}
    </div>
  );
}
