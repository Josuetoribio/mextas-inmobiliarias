export interface TrustItemProps {
  /** Lucide icon */
  icon: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}
export declare function TrustItem(props: TrustItemProps): JSX.Element;
