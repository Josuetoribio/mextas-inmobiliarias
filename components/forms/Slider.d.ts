export interface SliderProps {
  label?: React.ReactNode;
  value: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Formats the displayed value, e.g. v => v + '%' */
  format?: (value: number) => React.ReactNode;
  id?: string;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Slider(props: SliderProps): JSX.Element;
