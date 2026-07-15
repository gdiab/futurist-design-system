import React from 'react';

export function Input({ label, hint, error, size = 'md', prefix, suffix, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  const field = {
    display: 'flex', alignItems: 'center', gap: '7px', height: h,
    padding: '0 10px', background: 'var(--bg-1)',
    border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-3)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? (error ? '0 0 0 3px var(--danger-subtle)' : 'var(--focus-ring)') : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
  };
  const input = {
    flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
    color: 'var(--fg-1)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', padding: 0,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', ...style }}>
      {label ? <label htmlFor={rid} style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: 'var(--fg-2)' }}>{label}</label> : null}
      <div style={field}>
        {prefix ? <span style={{ color: 'var(--fg-3)', display: 'inline-flex', fontSize: 'var(--text-sm)' }}>{prefix}</span> : null}
        <input id={rid} style={input} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
        {suffix ? <span style={{ color: 'var(--fg-3)', display: 'inline-flex', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>{suffix}</span> : null}
      </div>
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-3)' }}>{hint}</span> : null}
    </div>
  );
}
