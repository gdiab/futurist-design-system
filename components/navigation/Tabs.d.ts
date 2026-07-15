import * as React from 'react';
/** Underlined tab bar. Controlled (value) or uncontrolled (defaultValue). */
export interface TabItem { value: string; label: React.ReactNode; count?: number; }
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
