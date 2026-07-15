import * as React from 'react';
/** Pill for filters, keywords, and multi-select chips. Optional onRemove adds an ×. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  onRemove?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;
