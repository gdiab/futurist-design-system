import * as React from 'react';
/** Modal dialog with scrim, Escape-to-close, and optional footer actions. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
