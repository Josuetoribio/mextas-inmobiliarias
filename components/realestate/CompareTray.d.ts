export interface CompareTrayItem { id: string | number; title: string; image: string }
export interface CompareTrayProps {
  items: CompareTrayItem[];
  /** Default 3 */
  max?: number;
  onRemove?: (item: CompareTrayItem) => void;
  onCompare?: () => void;
  onClear?: () => void;
  /** Fixed to viewport bottom (default). false = inline for docs. */
  fixed?: boolean;
}
export declare function CompareTray(props: CompareTrayProps): JSX.Element | null;
