import React from 'react';
export function Menu({ trigger, items = [], align = 'start' }) {
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
        <div role="menu" style={{ position: 'absolute', top: '100%', [align === 'end' ? 'right' : 'left']: 0, marginTop: '6px', zIndex: 60, minWidth: '180px', padding: '5px', background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-3)' }}>
          {items.map((it, i) => it.divider ? (
            <div key={i} style={{ height: '1px', background: 'var(--border-1)', margin: '5px 0' }} />
          ) : (
            <button key={i} role="menuitem" disabled={it.disabled} onClick={() => { it.onClick && it.onClick(); setOpen(false); }}
              onMouseEnter={(e) => e.currentTarget.style.background = it.danger ? 'var(--danger-subtle)' : 'var(--bg-2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              style={{ display: 'flex', alignItems: 'center', gap: '9px', width: '100%', padding: '7px 9px', border: 'none', background: 'transparent', borderRadius: 'var(--radius-sm)', cursor: it.disabled ? 'not-allowed' : 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: it.danger ? 'var(--danger)' : it.disabled ? 'var(--fg-4)' : 'var(--fg-1)' }}>
              {it.icon ? <span style={{ display: 'inline-flex', color: it.danger ? 'var(--danger)' : 'var(--fg-3)' }}>{it.icon}</span> : null}
              <span style={{ flex: 1 }}>{it.label}</span>
              {it.shortcut ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--fg-4)' }}>{it.shortcut}</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
