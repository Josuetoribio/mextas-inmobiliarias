export interface CategoryTileProps {
  /** Lucide icon, e.g. "House", "Building2", "LandPlot", "Briefcase", "Store" */
  icon: string;
  label: string;
  count?: number;
  /** "propiedades" (default) or "proyectos" */
  unit?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  active?: boolean;
  className?: string;
}
export declare function CategoryTile(props: CategoryTileProps): JSX.Element;
