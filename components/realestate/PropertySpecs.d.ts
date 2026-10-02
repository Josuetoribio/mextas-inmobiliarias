export interface PropertySpecsProps {
  beds?: number;
  baths?: number;
  /** m² */
  area?: number;
  parking?: number;
  /** inline = compact icon row on cards · blocks = large labeled cells on detail pages */
  variant?: 'inline' | 'blocks';
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function PropertySpecs(props: PropertySpecsProps): JSX.Element;
