import * as React from 'react';
/** Boolean checkbox; controlled via checked or uncontrolled via defaultChecked. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
