import * as React from 'react';
/** Native select with a custom chevron; pass options as strings or {value,label}. */
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  options?: (string | SelectOption)[];
}
export declare function Select(props: SelectProps): JSX.Element;
