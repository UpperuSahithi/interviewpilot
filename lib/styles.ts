/** Shared layout & field class strings for visual consistency */
export const pageStack = 'space-y-8';

export const fieldStyles =
  'rounded-xl border border-border bg-input-bg px-4 py-2.5 text-sm text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed';

export const brandGradient = 'bg-gradient-to-r from-primary via-secondary to-accent';

export const brandGradientBr = 'bg-gradient-to-br from-primary via-secondary to-accent';

export const brandGradientText = 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent';

export const iconGradients = {
  primary: 'from-primary to-secondary',
  success: 'from-success to-emerald-600',
  warning: 'from-warning to-amber-600',
  accent: 'from-accent to-violet-600',
  danger: 'from-danger to-rose-600',
} as const;
