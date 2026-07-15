import React from 'react';
export function Popover({ trigger, children, width = 260, align = 'start' }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex' }}>
      <span onClick={() => setOpen(o => !o)}>{trigger}</span>
      {open ? (
        <div style={{ position: 'absolute', top: '100%', [align === 'end' ? 'right' : 'left']: 0, marginTop: '8px', zIndex: 60, width: width + 'px', padding: '14px', background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-3)' }}>{children}</div>
      ) : null}
    </div>
  );
}
