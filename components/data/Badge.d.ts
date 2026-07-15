import * as React from 'react';
/** Small status label. Mono type, subtle tinted background. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
  dot?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
