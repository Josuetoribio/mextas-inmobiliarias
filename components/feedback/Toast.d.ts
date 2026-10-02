export interface ToastProps {
  /** default · success (form sent) · error · favorite (champagne heart) */
  tone?: 'default' | 'success' | 'error' | 'favorite';
  title?: React.ReactNode;
  message?: React.ReactNode;
  /** Override Lucide icon */
  icon?: string;
  /** e.g. <Button variant="link" size="sm">Ver</Button> */
  action?: React.ReactNode;
  onClose?: () => void;
  /** Auto-dismiss ms (needs onClose). 0 = sticky. Default 3800. */
  duration?: number;
}
export declare function Toast(props: ToastProps): JSX.Element;

export interface ToastStackProps {
  toasts: Array<ToastProps & { id: string | number }>;
  onDismiss?: (id: string | number) => void;
  position?: 'bottom-center' | 'bottom-right' | 'top-center';
}
export declare function ToastStack(props: ToastStackProps): JSX.Element;
