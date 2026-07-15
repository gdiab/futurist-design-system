import * as React from 'react';
/** Square button holding a single icon. Always pass aria-label. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Shows an inline spinner in place of the icon, sets aria-busy, and blocks clicks. @default false */
  loading?: boolean;
  'aria-label': string;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
