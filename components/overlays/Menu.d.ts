import * as React from 'react';
/** Click-to-open dropdown menu. Provide a trigger and a list of items. */
export interface MenuItem {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
}
export interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  align?: 'start' | 'end';
}
export declare function Menu(props: MenuProps): JSX.Element;
