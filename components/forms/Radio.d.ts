export interface RadioProps {
  label: React.ReactNode;
  description?: React.ReactNode;
  /** Lucide icon — shown in the card variant */
  icon?: string;
  name: string;
  value: string;
  checked?: boolean;
  /** Called with this radio's value */
  onChange?: (value: string) => void;
  /** default = dot + label · card = bordered selectable tile (visit type, operation) */
  variant?: 'default' | 'card';
  disabled?: boolean;
  id?: string;
  className?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;
