import React from 'react';

export function Stat({ label, value, unit, delta, trend, lowerIsBetter = false, style, ...rest }) {
  // Delta color is valence-based, not direction-based: an improving metric is
  // --success, a worsening one --danger. For metrics where down is good
  // (latency, error rate), pass lowerIsBetter. Default (false) keeps the
  // legacy behavior: up → success, down → danger.
  const improving = trend === 'up' ? !lowerIsBetter : trend === 'down' ? lowerIsBetter : null;
  const color = improving == null ? 'var(--fg-3)' : improving ? 'var(--success)' : 'var(--danger)';
  const arrow = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.02em', color: 'var(--fg-1)', lineHeight: 1 }}>{value}</span>
        {unit ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--fg-3)' }}>{unit}</span> : null}
      </div>
      {delta != null ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color, display: 'inline-flex', gap: '4px' }}>{arrow} {delta}</span>
      ) : null}
    </div>
  );
}
