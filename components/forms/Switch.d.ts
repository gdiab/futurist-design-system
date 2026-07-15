import * as React from 'react';
/** On/off toggle switch for immediate settings. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
