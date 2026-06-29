'use client';

import { cn } from '@/lib/utils';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  id?: string;
}

export function Toggle({ checked, onChange, label, description, id }: ToggleProps) {
  const toggleId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-border-subtle">
      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && <p className="font-medium text-foreground text-sm">{label}</p>}
          {description && <p className="text-sm text-muted mt-0.5">{description}</p>}
        </div>
      )}
      <button
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-ring',
          checked ? 'bg-primary' : 'bg-muted-light'
        )}
      >
        <span
          className={cn(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
            checked ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
    </div>
  );
}
