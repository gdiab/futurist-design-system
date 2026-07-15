import * as React from 'react';
/** Hover/focus tooltip. Wrap the trigger element as its child. */
export interface TooltipProps {
  label: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
