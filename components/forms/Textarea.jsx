import React from 'react';

export function Textarea({ label, hint, error, rows = 4, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const area = {
    width: '100%', resize: 'vertical', padding: '8px 12px', background: 'var(--bg-1)',
    border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-3)'),
    borderRadius: 'var(--radius-md)', outline: 'none',
    boxShadow: focus ? (error ? '0 0 0 3px var(--danger-subtle)' : 'var(--focus-ring)') : 'none',
    color: 'var(--fg-1)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.5,
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', ...style }}>
      {label ? <label htmlFor={rid} style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: 'var(--fg-2)' }}>{label}</label> : null}
      <textarea id={rid} rows={rows} style={area} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-3)' }}>{hint}</span> : null}
    </div>
  );
}
