import React from 'react';
export function Tooltip({ label, side = 'top', children }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' },
  }[side];
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      {open ? (
        <span role="tooltip" style={{ position: 'absolute', zIndex: 50, ...pos, whiteSpace: 'nowrap', padding: '4px 8px', background: 'var(--bg-inverse)', color: 'var(--fg-inverse)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-sans)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-2)', pointerEvents: 'none' }}>{label}</span>
      ) : null}
    </span>
  );
}
