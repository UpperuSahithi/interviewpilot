import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

type AlertVariant = 'error' | 'success' | 'warning' | 'info';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
}

const config: Record<AlertVariant, { icon: typeof AlertCircle; classes: string }> = {
  error: { icon: XCircle, classes: 'bg-danger-light border-danger/20 text-danger' },
  success: { icon: CheckCircle, classes: 'bg-success-light border-success/20 text-success' },
  warning: { icon: AlertCircle, classes: 'bg-warning-light border-warning/20 text-warning' },
  info: { icon: Info, classes: 'bg-primary-light border-primary/20 text-primary' },
};

export function Alert({ children, variant = 'error', className }: AlertProps) {
  const { icon: Icon, classes } = config[variant];

  return (
    <div className={cn('flex items-start gap-3 rounded-xl border p-4 text-sm', classes, className)}>
      <Icon className="w-4 h-4 mt-0.5 shrink-0" />
      <div className="flex-1 text-foreground">{children}</div>
    </div>
  );
}
