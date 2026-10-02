export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * primary = champagne fill (main CTA on dark & light) · dark = ink fill (search, forms) ·
   * outline = thin ink border ("Ver todas →") · outline-inverse = on dark photo ·
   * ghost = text-only with hover tint · link = inline text CTA ("Ver propiedad →")
   */
  variant?: 'primary' | 'dark' | 'outline' | 'outline-inverse' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon names */
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
  /** Shows spinner, disables the button ("Enviando…") */
  loading?: boolean;
  /** Renders an <a> instead of <button> */
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
