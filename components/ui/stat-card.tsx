import { cn } from '@/lib/utils';
import { iconGradients } from '@/lib/styles';
import { LucideIcon, TrendingDown, TrendingUp } from 'lucide-react';

type IconGradientKey = keyof typeof iconGradients;

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  iconVariant?: IconGradientKey;
  className?: string;
  delay?: number;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp = true,
  iconVariant = 'primary',
  className,
  delay = 0,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-border-subtle hover:shadow-md animate-slide-up opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-1.5 min-w-0">
          <p className="text-sm font-medium text-muted truncate">{label}</p>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground tabular-nums">{value}</p>
          {trend && (
            <div className={cn('flex items-center gap-1 text-xs font-medium', trendUp ? 'text-success' : 'text-danger')}>
              {trendUp ? <TrendingUp className="w-3 h-3 shrink-0" aria-hidden /> : <TrendingDown className="w-3 h-3 shrink-0" aria-hidden />}
              <span className="truncate">{trend}</span>
            </div>
          )}
        </div>
        <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm', iconGradients[iconVariant])}>
          <Icon className="h-[18px] w-[18px] text-white" aria-hidden />
        </div>
      </div>
    </div>
  );
}
