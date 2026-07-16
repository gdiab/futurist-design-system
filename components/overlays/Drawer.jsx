import React from 'react';
export function Drawer({ open, onClose, side = 'right', width = 400, title, children, footer }) {
  React.useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  const isRight = side === 'right';
  return (
    <div onMouseDown={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start', background: 'var(--scrim)', backdropFilter: 'blur(2px)' }}>
      <div onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{ width: width + 'px', maxWidth: '92vw', height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-1)', borderLeft: isRight ? '1px solid var(--border-1)' : 'none', borderRight: isRight ? 'none' : '1px solid var(--border-1)', boxShadow: 'var(--shadow-3)' }}>
        {title ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--border-1)' }}><h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>{title}</h3></div> : null}
        <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-5)' }}>{children}</div>
        {footer ? <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
