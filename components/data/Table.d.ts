import * as React from 'react';
/**
 * Data table with mono uppercase headers, hover rows, and numeric right-align.
 * @startingPoint section="Data" subtitle="Dense data table" viewport="700x300"
 */
export interface TableColumn {
  key: string;
  header: React.ReactNode;
  numeric?: boolean;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => React.ReactNode;
}
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn[];
  rows: Record<string, any>[];
  dense?: boolean;
}
export declare function Table(props: TableProps): JSX.Element;
