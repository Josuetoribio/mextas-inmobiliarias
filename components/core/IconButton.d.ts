export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name */
  icon: string;
  /** Required accessible label (also tooltip). */
  label: string;
  /** surface = white w/ hairline · glass = translucent on photos · dark = ink · ghost = bare */
  variant?: 'surface' | 'glass' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Toggled state — fills icon (e.g. favorited heart) and sets aria-pressed. */
  active?: boolean;
  activeIcon?: string;
  iconFill?: string;
  /** Small numeric badge */
  count?: number;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
