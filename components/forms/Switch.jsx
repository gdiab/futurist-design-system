import React from 'react';

export function Switch({ label, checked, defaultChecked, disabled, onChange, id, style, ...rest }) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  /* The native input is visually hidden (0×0), so the browser focus ring lands on an
     invisible element — mirror :focus-visible onto the visible track instead. */
  const [focusVisible, setFocusVisible] = React.useState(false);
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  const track = {
    width: '30px', height: '18px', borderRadius: 'var(--radius-full)', flexShrink: 0, position: 'relative',
    background: on ? 'var(--accent)' : 'var(--bg-3)', border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-3)'),
    boxShadow: focusVisible ? 'var(--focus-ring)' : 'none',
    transition: 'background var(--dur-base) var(--ease-standard), box-shadow var(--dur-fast)',
  };
  const knob = {
    position: 'absolute', top: '2px', left: on ? '13px' : '2px', width: '13px', height: '13px',
    borderRadius: 'var(--radius-full)', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
    transition: 'left var(--dur-base) var(--ease-standard)',
  };
  return (
    <label htmlFor={rid} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontSize: 'var(--text-sm)', color: 'var(--fg-1)', ...style }}>
      <input id={rid} type="checkbox" role="switch" checked={on} disabled={disabled} onChange={toggle}
        onFocus={(e) => { try { setFocusVisible(e.target.matches(':focus-visible')); } catch (_) { setFocusVisible(true); } }}
        onBlur={() => setFocusVisible(false)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={track}><span style={knob} /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
