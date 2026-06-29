export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8 sm:px-8 lg:px-12">
        <div className="w-full max-w-md animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient shadow-sm">
              <span className="text-white font-semibold text-sm">IP</span>
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-foreground">InterviewPilot</p>
              <p className="text-xs text-muted">AI-Powered Interview Preparation</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            {children}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 brand-gradient" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" aria-hidden />
        <div className="relative text-white max-w-md">
          <h2 className="text-3xl xl:text-4xl font-semibold mb-3 tracking-tight">Master Your Interviews</h2>
          <p className="text-white/75 text-base mb-8 leading-relaxed">Join thousands of students landing their dream roles.</p>
          <ul className="space-y-3">
            {[
              'AI-powered mock interviews',
              'Resume optimization',
              'Real-time feedback',
              'Performance analytics',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 shrink-0">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
