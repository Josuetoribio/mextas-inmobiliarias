export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Lucide icon names */
  iconLeft?: string;
  iconRight?: string;
  /** Renders a <textarea> */
  multiline?: boolean;
  rows?: number;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'light' | 'dark';
  fieldStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
