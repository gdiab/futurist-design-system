import * as React from 'react';
/**
 * Primary action trigger. Use one primary per view; secondary/ghost for the rest.
 * @startingPoint section="Actions" subtitle="Primary / secondary / ghost / danger" viewport="700x120"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
