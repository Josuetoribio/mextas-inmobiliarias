export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Small uppercase champagne line above the title */
  eyebrow?: React.ReactNode;
  /** center = modal · right = side drawer (filters, favorites) · bottom = mobile bottom sheet · full = cinematic fullscreen (gallery) */
  placement?: 'center' | 'right' | 'bottom' | 'full';
  size?: 'sm' | 'md' | 'lg';
  tone?: 'light' | 'dark';
  footer?: React.ReactNode;
  hideClose?: boolean;
  labelledBy?: string;
  children?: React.ReactNode;
  className?: string;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
