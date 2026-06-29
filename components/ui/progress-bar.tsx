import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  gradient?: boolean;
}

const sizeMap = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-2.5',
};

export function ProgressBar({
  value,
  max = 100,
  className,
  barClassName,
  size = 'md',
  gradient = true,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn('w-full overflow-hidden rounded-full bg-muted-light', sizeMap[size], className)}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          'h-full rounded-full transition-all duration-500 ease-out',
          gradient ? 'brand-gradient' : 'bg-primary',
          barClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
