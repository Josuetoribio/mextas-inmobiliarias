export interface StatBlockProps {
  /** "+500" */
  value: React.ReactNode;
  label: React.ReactNode;
  /** dark = champagne serif on ink band · light = ink serif on sand */
  tone?: 'dark' | 'light';
  size?: 'md' | 'lg';
  className?: string;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
