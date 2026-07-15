import * as React from 'react';
/** Edge-anchored slide-over panel with scrim + Escape-to-close. */
export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  side?: 'left' | 'right';
  width?: number;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Drawer(props: DrawerProps): JSX.Element | null;
