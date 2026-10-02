export interface TabItem { value: string; label: React.ReactNode; count?: number }
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  /** underline = search card (Comprar / Rentar / Desarrollos) · segmented = compact toggles (Grid / Lista, Compradores / Propietarios) */
  variant?: 'underline' | 'segmented';
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  /** aria-label for the tablist */
  label?: string;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
