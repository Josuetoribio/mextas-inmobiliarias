export interface Crumb { label: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void }
export interface BreadcrumbsProps {
  items: Crumb[];
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
