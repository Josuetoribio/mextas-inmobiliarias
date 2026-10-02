export interface FieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  hint?: React.ReactNode;
  /** Replaces hint; announced via role="alert" */
  error?: React.ReactNode;
  required?: boolean;
  tone?: 'light' | 'dark';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
