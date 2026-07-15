import React from 'react';

export function Checkbox({ label, checked, defaultChecked, disabled, onChange, id, style, ...rest }) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  /* The native input is visually hidden (0×0), so the browser focus ring lands on an
     invisible element — mirror :focus-visible onto the visible box instead. */
  const [focusVisible, setFocusVisible] = React.useState(false);
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  const box = {
    width: '16px', height: '16px', flexShrink: 0, borderRadius: 'var(--radius-xs)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: on ? 'var(--accent)' : 'var(--bg-1)',
    border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-3)'),
    boxShadow: focusVisible ? 'var(--focus-ring)' : 'none',
    transition: 'background var(--dur-fast), border-color var(--dur-fast), box-shadow var(--dur-fast)',
  };
  return (
    <label htmlFor={rid} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontSize: 'var(--text-sm)', color: 'var(--fg-1)', ...style }}>
      <input id={rid} type="checkbox" checked={on} disabled={disabled} onChange={toggle}
        onFocus={(e) => { try { setFocusVisible(e.target.matches(':focus-visible')); } catch (_) { setFocusVisible(true); } }}
        onBlur={() => setFocusVisible(false)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={box}>
        {on ? <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5L4.2 7L8 3" stroke="var(--accent-fg)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
