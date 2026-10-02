export interface LogoProps {
  /** "light" = light text for dark grounds (header, footer bands). "dark" = ink text for light grounds. */
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
