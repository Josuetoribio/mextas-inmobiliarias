export interface BadgeProps {
  /** champagne = listing badges (DESTACADA / NUEVA / PREMIUM) · ink · light · outline · success · warning · danger */
  tone?: 'champagne' | 'ink' | 'light' | 'outline' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Badge(props: BadgeProps): JSX.Element;
