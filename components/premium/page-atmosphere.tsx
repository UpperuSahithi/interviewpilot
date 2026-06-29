'use client';

export function PageAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)',
        }}
      />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-[blob_12s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-accent/15 blur-[90px] animate-[blob_15s_ease-in-out_infinite_2s]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-secondary/15 blur-[80px] animate-[blob_18s_ease-in-out_infinite_4s]" />
    </div>
  );
}
