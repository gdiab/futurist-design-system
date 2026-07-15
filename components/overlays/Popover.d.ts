import * as React from 'react';
/** Click-to-open floating panel anchored to a trigger. Richer than a Tooltip. */
export interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  width?: number;
  align?: 'start' | 'end';
}
export declare function Popover(props: PopoverProps): JSX.Element;
