import React from 'react';

const TONES = {
  neutral: { background: 'var(--bg-3)', color: 'var(--fg-2)' },
  accent:  { background: 'var(--accent-subtle)', color: 'var(--accent-subtle-fg)' },
  success: { background: 'var(--success-subtle)', color: 'var(--success-subtle-fg)' },
  warning: { background: 'var(--warning-subtle)', color: 'var(--warning-subtle-fg)' },
  danger:  { background: 'var(--danger-subtle)', color: 'var(--danger-subtle-fg)' },
  info:    { background: 'var(--info-subtle)', color: 'var(--info-subtle-fg)' },
};

export function Badge({ tone = 'neutral', dot = false, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', height: '18px', padding: '0 8px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-medium)', letterSpacing: '0.03em', lineHeight: 1, whiteSpace: 'nowrap', ...t, ...style }} {...rest}>
      {dot ? <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor' }} /> : null}
      {children}
    </span>
  );
}
