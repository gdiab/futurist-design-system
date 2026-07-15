import React from 'react';

export function Switch({ label, checked, defaultChecked, disabled, onChange, id, style, ...rest }) {
  const rid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  const track = {
    width: '30px', height: '18px', borderRadius: 'var(--radius-full)', flexShrink: 0, position: 'relative',
    background: on ? 'var(--accent)' : 'var(--bg-3)', border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-3)'),
    transition: 'background var(--dur-base) var(--ease-standard)',
  };
  const knob = {
    position: 'absolute', top: '2px', left: on ? '13px' : '2px', width: '13px', height: '13px',
    borderRadius: 'var(--radius-full)', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
    transition: 'left var(--dur-base) var(--ease-standard)',
  };
  return (
    <label htmlFor={rid} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontSize: 'var(--text-sm)', color: 'var(--fg-1)', ...style }}>
      <input id={rid} type="checkbox" checked={on} disabled={disabled} onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={track}><span style={knob} /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
