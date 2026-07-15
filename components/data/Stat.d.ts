import * as React from 'react';
/** Single metric readout — big number, unit, and trend delta. For dashboards. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  unit?: string;
  delta?: React.ReactNode;
  trend?: 'up' | 'down' | 'flat';
}
export declare function Stat(props: StatProps): JSX.Element;
