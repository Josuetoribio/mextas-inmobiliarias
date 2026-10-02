export interface EmptyStateProps {
  /** Lucide icon */
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Usually a Button */
  action?: React.ReactNode;
  tone?: 'light' | 'dark';
  compact?: boolean;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
