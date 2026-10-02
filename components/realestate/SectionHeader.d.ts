export interface SectionHeaderProps {
  /** Uppercase tracked kicker, e.g. "Propiedades destacadas" */
  eyebrow?: React.ReactNode;
  /** Serif headline */
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned action, typically <Button variant="outline" size="sm" iconRight="ArrowRight">Ver todas</Button> */
  action?: React.ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
