import * as React from 'react';
/**
 * Surface container with optional eyebrow/title/action header.
 * @startingPoint section="Data" subtitle="Content surface with header" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  eyebrow?: string;
  action?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
