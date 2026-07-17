import * as React from 'react';
/** Single metric readout — big number, unit, and trend delta. For dashboards. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  unit?: string;
  delta?: React.ReactNode;
  trend?: 'up' | 'down' | 'flat';
  /** Set for metrics where a downward trend is an improvement (latency, error rate).
      Delta color follows valence: improving → success, worsening → danger. Default false. */
  lowerIsBetter?: boolean;
}
export declare function Stat(props: StatProps): JSX.Element;
