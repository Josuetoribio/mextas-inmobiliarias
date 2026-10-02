export interface CheckboxProps {
  label: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  /** Called with the new checked boolean */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
