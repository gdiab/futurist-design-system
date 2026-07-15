import * as React from 'react';
/** Single-line text field with label, hint, error, and prefix/suffix affixes. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  hint?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export declare function Input(props: InputProps): JSX.Element;
