import React from 'react';

export function Stat({ label, value, unit, delta, trend, style, ...rest }) {
  const color = trend === 'up' ? 'var(--success)' : trend === 'down' ? 'var(--danger)' : 'var(--fg-3)';
  const arrow = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.02em', color: 'var(--fg-1)', lineHeight: 1 }}>{value}</span>
        {unit ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--fg-3)' }}>{unit}</span> : null}
      </div>
      {delta != null ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color, display: 'inline-flex', gap: '3px' }}>{arrow} {delta}</span>
      ) : null}
    </div>
  );
}
