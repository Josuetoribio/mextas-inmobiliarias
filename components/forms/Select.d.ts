export interface SelectOption { value: string | number; label: string; description?: string }
export interface SelectProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  id?: string;
  value?: string | number | null;
  /** Called with the option value */
  onChange?: (value: any) => void;
  /** Strings or {value,label,description} */
  options: Array<string | SelectOption>;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'light' | 'dark';
  disabled?: boolean;
  className?: string;
  fieldStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
