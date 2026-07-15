import * as React from 'react';
/** Multi-line text field, vertically resizable. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
