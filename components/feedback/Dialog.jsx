import React from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Dialog({ open, onClose, title, description, footer, width = 460, children }) {
  const panelRef = React.useRef(null);
  const onCloseRef = React.useRef(onClose);
  onCloseRef.current = onClose;
  const titleId = React.useId();

  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const panel = panelRef.current;
    const focusables = () => (panel ? Array.prototype.slice.call(panel.querySelectorAll(FOCUSABLE)) : []);

    /* Initial focus: first focusable element in the panel, else the panel itself. */
    const first = focusables()[0];
    (first || panel) && (first || panel).focus();

    const onKey = (e) => {
      if (e.key === 'Escape') { onCloseRef.current && onCloseRef.current(); return; }
      if (e.key !== 'Tab') return;
      /* Focus trap: cycle Tab / Shift-Tab within the panel. */
      const els = focusables();
      if (!els.length) { e.preventDefault(); panel && panel.focus(); return; }
      const firstEl = els[0], lastEl = els[els.length - 1];
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === firstEl || !panel.contains(active)) { e.preventDefault(); lastEl.focus(); }
      } else {
        if (active === lastEl || !panel.contains(active)) { e.preventDefault(); firstEl.focus(); }
      }
    };
    document.addEventListener('keydown', onKey, true);

    /* Body scroll lock while open. */
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey, true);
      document.body.style.overflow = prevOverflow;
      /* Return focus to the trigger. */
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') previouslyFocused.focus();
    };
  }, [open]);

  if (!open) return null;
  return (
    <div onMouseDown={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10vh 16px', background: 'oklch(0.2 0.02 262 / 0.45)', backdropFilter: 'blur(2px)' }}>
      <div ref={panelRef} tabIndex={-1} onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined}
        style={{ width: '100%', maxWidth: width + 'px', background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-3)', overflow: 'hidden', outline: 'none' }}>
        {(title || description) ? (
          <div style={{ padding: 'var(--space-5) var(--space-5) var(--space-4)', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {title ? <h3 id={titleId} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' }}>{title}</h3> : null}
            {description ? <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-3)', lineHeight: 1.5 }}>{description}</p> : null}
          </div>
        ) : null}
        {children ? <div style={{ padding: '0 var(--space-5) var(--space-5)' }}>{children}</div> : null}
        {footer ? <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
