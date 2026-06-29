import { cn } from '@/lib/utils';
import { brandGradient } from '@/lib/styles';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: cn(brandGradient, 'text-white shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 border-0'),
  secondary: 'bg-muted-light text-foreground hover:bg-border border border-border',
  ghost: 'bg-transparent text-muted hover:text-foreground hover:bg-muted-light',
  danger: 'bg-danger-light text-danger border border-danger/20 hover:bg-danger/20',
  outline: 'bg-transparent border border-border text-foreground hover:bg-muted-light hover:border-border-subtle',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5 rounded-lg',
  md: 'h-10 px-4 text-sm gap-2 rounded-xl',
  lg: 'h-11 px-5 text-sm gap-2 rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, icon, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin shrink-0" /> : icon}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
