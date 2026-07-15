import React from 'react';

export function Table({ columns = [], rows = [], dense = false, style, ...rest }) {
  const [hoverRow, setHoverRow] = React.useState(-1);
  const cellPad = dense ? '6px 12px' : '9px 14px';
  const align = (c) => c.align || (c.numeric ? 'right' : 'left');
  return (
    <div style={{ border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg-1)', ...style }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
        <thead>
          <tr style={{ background: 'var(--bg-2)' }}>
            {columns.map((c, i) => (
              <th key={i} style={{ textAlign: align(c), padding: cellPad, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-medium)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-3)', borderBottom: '1px solid var(--border-1)', whiteSpace: 'nowrap' }}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} onMouseEnter={() => setHoverRow(ri)} onMouseLeave={() => setHoverRow(-1)}
              style={{ background: hoverRow === ri ? 'var(--bg-2)' : 'transparent', transition: 'background var(--dur-fast)' }}>
              {columns.map((c, ci) => (
                <td key={ci} style={{ textAlign: align(c), padding: cellPad, color: c.numeric ? 'var(--fg-1)' : 'var(--fg-2)', fontFamily: c.numeric ? 'var(--font-mono)' : 'var(--font-sans)', borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--border-1)', whiteSpace: 'nowrap' }}>
                  {c.render ? c.render(r[c.key], r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
