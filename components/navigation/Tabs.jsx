import React from 'react';

export function Tabs({ tabs = [], value, defaultValue, onChange, style, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const [hover, setHover] = React.useState(null);
  const select = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };
  return (
    <div style={{ display: 'flex', gap: '2px', borderBottom: '1px solid var(--border-1)', ...style }} {...rest}>
      {tabs.map((t) => {
        const on = t.value === active;
        const hot = hover === t.value;
        return (
          <button key={t.value} type="button" onClick={() => select(t.value)}
            onMouseEnter={() => setHover(t.value)} onMouseLeave={() => setHover(null)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '6px', height: '34px', padding: '0 12px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)', color: on ? 'var(--fg-1)' : hot ? 'var(--fg-2)' : 'var(--fg-3)', transition: 'color var(--dur-fast)' }}>
            {t.label}
            {t.count != null ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--fg-4)' }}>{t.count}</span> : null}
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: '-1px', height: '2px', background: on ? 'var(--accent)' : 'transparent', borderRadius: '2px 2px 0 0' }} />
          </button>
        );
      })}
    </div>
  );
}
