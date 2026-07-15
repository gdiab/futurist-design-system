import * as React from 'react';
/** Transient notification card. Render inside a fixed-position stack you manage. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;
