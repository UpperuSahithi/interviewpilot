import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl shadow-sm',
        hover && 'transition-all duration-300 hover:border-border-subtle hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
