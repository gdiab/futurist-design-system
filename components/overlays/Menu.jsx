import React from 'react';

export function Menu({ trigger, items = [], align = 'start' }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const listRef = React.useRef(null);
  const initialFocus = React.useRef('first');
  const menuId = React.useId();

  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const itemEls = () => (listRef.current ? Array.prototype.slice.call(listRef.current.querySelectorAll('[role="menuitem"]:not([disabled])')) : []);
  const focusTrigger = () => {
    const t = ref.current && ref.current.querySelector('[aria-haspopup="menu"]');
    t && t.focus();
  };
  const closeAndRestore = () => { setOpen(false); focusTrigger(); };

  /* Move focus into the menu when it opens. */
  React.useEffect(() => {
    if (!open) return;
    const els = itemEls();
    const target = initialFocus.current === 'last' ? els[els.length - 1] : els[0];
    target && target.focus();
    initialFocus.current = 'first';
  }, [open]);

  const moveFocus = (dir) => {
    const els = itemEls();
    if (!els.length) return;
    const i = els.indexOf(document.activeElement);
    const next = i === -1 ? (dir > 0 ? 0 : els.length - 1) : (i + dir + els.length) % els.length;
    els[next].focus();
  };

  const onTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); initialFocus.current = 'first'; setOpen(true); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); initialFocus.current = 'last'; setOpen(true); }
    /* Enter / Space activate the native button (onClick toggle) by default. */
  };

  const onMenuKeyDown = (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); closeAndRestore(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); moveFocus(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveFocus(-1); }
    else if (e.key === 'Home') { e.preventDefault(); const els = itemEls(); els[0] && els[0].focus(); }
    else if (e.key === 'End') { e.preventDefault(); const els = itemEls(); const l = els[els.length - 1]; l && l.focus(); }
    else if (e.key === 'Tab') { setOpen(false); }
  };

  const triggerProps = {
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    'aria-controls': open ? menuId : undefined,
    onKeyDown: onTriggerKeyDown,
  };

  /* Real, focusable trigger: merge props into a provided element (e.g. <Button>),
     otherwise wrap plain content in an unstyled native <button>. */
  const triggerNode = React.isValidElement(trigger)
    ? React.cloneElement(trigger, {
        ...triggerProps,
        onClick: (e) => { trigger.props.onClick && trigger.props.onClick(e); setOpen(o => !o); },
        onKeyDown: (e) => { trigger.props.onKeyDown && trigger.props.onKeyDown(e); onTriggerKeyDown(e); },
      })
    : (
      <button type="button" {...triggerProps} onClick={() => setOpen(o => !o)}
        style={{ display: 'inline-flex', alignItems: 'center', padding: 0, margin: 0, border: 'none', background: 'transparent', font: 'inherit', color: 'inherit', cursor: 'pointer' }}>
        {trigger}
      </button>
    );

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex' }}>
      {triggerNode}
      {open ? (
        <div ref={listRef} id={menuId} role="menu" onKeyDown={onMenuKeyDown} style={{ position: 'absolute', top: '100%', [align === 'end' ? 'right' : 'left']: 0, marginTop: '8px', zIndex: 60, minWidth: '180px', padding: '4px', background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-3)' }}>
          {items.map((it, i) => it.divider ? (
            <div key={i} role="separator" style={{ height: '1px', background: 'var(--border-1)', margin: '4px 0' }} />
          ) : (
            <button key={i} type="button" role="menuitem" tabIndex={-1} disabled={it.disabled}
              onClick={() => { it.onClick && it.onClick(); closeAndRestore(); }}
              onMouseEnter={(e) => e.currentTarget.style.background = it.danger ? 'var(--danger-subtle)' : 'var(--bg-2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              onFocus={(e) => e.currentTarget.style.background = it.danger ? 'var(--danger-subtle)' : 'var(--bg-2)'}
              onBlur={(e) => e.currentTarget.style.background = 'transparent'}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '8px', border: 'none', background: 'transparent', borderRadius: 'var(--radius-sm)', cursor: it.disabled ? 'not-allowed' : 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: it.danger ? 'var(--danger)' : it.disabled ? 'var(--fg-4)' : 'var(--fg-1)' }}>
              {it.icon ? <span style={{ display: 'inline-flex', color: it.danger ? 'var(--danger)' : 'var(--fg-3)' }}>{it.icon}</span> : null}
              <span style={{ flex: 1 }}>{it.label}</span>
              {it.shortcut ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--fg-3)' }}>{it.shortcut}</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
