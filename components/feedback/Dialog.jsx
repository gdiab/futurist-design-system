import React from 'react';

export function Dialog({ open, onClose, title, description, footer, width = 460, children }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onMouseDown={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10vh 16px', background: 'oklch(0.2 0.02 262 / 0.45)', backdropFilter: 'blur(2px)' }}>
      <div onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{ width: '100%', maxWidth: width + 'px', background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-3)', overflow: 'hidden' }}>
        {(title || description) ? (
          <div style={{ padding: 'var(--space-5) var(--space-5) var(--space-4)', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {title ? <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' }}>{title}</h3> : null}
            {description ? <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-3)', lineHeight: 1.5 }}>{description}</p> : null}
          </div>
        ) : null}
        {children ? <div style={{ padding: '0 var(--space-5) var(--space-5)' }}>{children}</div> : null}
        {footer ? <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
