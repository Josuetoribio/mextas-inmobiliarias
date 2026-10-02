export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  /** block = single bar · text = N lines · card = PropertyCard-shaped placeholder */
  variant?: 'block' | 'text' | 'card';
  lines?: number;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
