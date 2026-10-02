export interface AmenityItemProps {
  /** Lucide icon — Waves (alberca), Trees (jardín), Sun (terraza), ShieldCheck, Dumbbell, ArrowUpDown (elevador), CookingPot, Car, Flower2 (roof garden), Package (bodega) */
  icon: string;
  label: string;
  detail?: string;
  /** tile = editorial grid cell · inline = compact list row */
  variant?: 'tile' | 'inline';
  className?: string;
}
export declare function AmenityItem(props: AmenityItemProps): JSX.Element;
