import React from 'react';

export function Card({ title, eyebrow, action, padding = 'md', interactive = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pad = padding === 'none' ? '0' : padding === 'sm' ? 'var(--space-4)' : padding === 'lg' ? 'var(--space-6)' : 'var(--card-pad)';
  const base = {
    background: 'var(--bg-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)',
    boxShadow: interactive && hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
    borderColor: interactive && hover ? 'var(--border-2)' : 'var(--border-1)',
    transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
    overflow: 'hidden', ...style,
  };
  const hasHeader = title || eyebrow || action;
  return (
    <div style={base} onMouseEnter={() => interactive && setHover(true)} onMouseLeave={() => interactive && setHover(false)} {...rest}>
      {hasHeader ? (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', padding: pad, paddingBottom: children ? 'var(--space-3)' : pad }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
            {eyebrow ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{eyebrow}</span> : null}
            {title ? <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-1)' }}>{title}</span> : null}
          </div>
          {action ? <div style={{ flexShrink: 0 }}>{action}</div> : null}
        </div>
      ) : null}
      {children ? <div style={{ padding: pad, paddingTop: hasHeader ? 0 : pad }}>{children}</div> : null}
    </div>
  );
}
