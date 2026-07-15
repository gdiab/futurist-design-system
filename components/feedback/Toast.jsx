import React from 'react';

const TONES = {
  neutral: 'var(--fg-2)', success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)', info: 'var(--info)',
};

export function Toast({ tone = 'neutral', title, description, onClose, style, ...rest }) {
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', width: '320px', padding: '11px 12px', background: 'var(--bg-1)', border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-3)', ...style }} {...rest}>
      <span style={{ width: '7px', height: '7px', marginTop: '5px', borderRadius: '50%', flexShrink: 0, background: TONES[tone] || TONES.neutral }} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {title ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--fg-1)' }}>{title}</span> : null}
        {description ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-3)', lineHeight: 1.45 }}>{description}</span> : null}
      </div>
      {onClose ? (
        <button type="button" aria-label="Dismiss" onClick={onClose} style={{ flexShrink: 0, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--fg-4)', padding: '2px', display: 'inline-flex' }}>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </button>
      ) : null}
    </div>
  );
}
