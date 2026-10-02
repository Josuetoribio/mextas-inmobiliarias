export interface ChipProps {
  children?: React.ReactNode;
  /** Toggle state for amenity/filter chips */
  selected?: boolean;
  icon?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Shows an × — for active-filter chips and selected search terms */
  onRemove?: (e: React.SyntheticEvent) => void;
  removeLabel?: string;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Chip(props: ChipProps): JSX.Element;
