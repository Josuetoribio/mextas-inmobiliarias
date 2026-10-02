export interface LocationCardProps {
  /** "Monterrey" */
  name: string;
  /** "Nuevo León" */
  region: string;
  image: string;
  count?: number;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** CSS aspect-ratio. Default "16 / 10" */
  aspect?: string;
  className?: string;
}
export declare function LocationCard(props: LocationCardProps): JSX.Element;
