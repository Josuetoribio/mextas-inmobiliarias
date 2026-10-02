export interface PropertySummary {
  id: string | number;
  title: string;
  /** "Zapopan, Jalisco" */
  location: string;
  price: number;
  currency?: string;
  /** Overrides formatted price */
  priceLabel?: string;
  operation?: 'venta' | 'renta';
  beds?: number;
  baths?: number;
  area?: number;
  image: string;
  /** "Destacada" | "Nueva" | "Premium" */
  badge?: string;
}
/**
 * @startingPoint section="Real estate" subtitle="Listing card with favorite + compare" viewport="700x520"
 */
export interface PropertyCardProps {
  property: PropertySummary;
  href?: string;
  /** Intercepts title/card click (client-side routing) */
  onOpen?: (p: PropertySummary) => void;
  favorite?: boolean;
  onToggleFavorite?: (p: PropertySummary) => void;
  compared?: boolean;
  onToggleCompare?: (p: PropertySummary) => void;
  /** Disables the compare toggle when tray is full */
  compareDisabled?: boolean;
  layout?: 'grid' | 'list';
  /** Skip lazy-loading (above the fold) */
  eager?: boolean;
  className?: string;
}
export declare function PropertyCard(props: PropertyCardProps): JSX.Element;
