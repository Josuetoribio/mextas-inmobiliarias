export interface IconProps {
  /** Lucide icon name, PascalCase or kebab-case — e.g. "Heart", "bed-double", "ArrowRight". */
  name: string;
  /** Pixel size. Default 18. */
  size?: number;
  /** Stroke width. Brand default 1.5 (thin, architectural). */
  strokeWidth?: number;
  color?: string;
  /** Fill color — use "currentColor" for filled states (favorited heart). */
  fill?: string;
  /** Accessible title; omit for decorative icons. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
