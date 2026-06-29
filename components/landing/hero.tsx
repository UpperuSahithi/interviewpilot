import Link from 'next/link';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center px-3 py-1.5 bg-primary-light border border-primary/20 rounded-full">
                <span className="text-primary font-medium text-xs sm:text-sm">Powered by Advanced AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight">
                Ace Your Next{' '}
                <span className="brand-gradient-text">Technical Interview</span>
              </h1>
              <p className="text-base sm:text-lg text-muted max-w-lg leading-relaxed">
                Practice with AI-powered mock interviews, get real-time feedback, and track your progress. Land your dream job with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/auth/signup">
                <Button size="lg" className="w-full sm:w-auto">Get Started Free</Button>
              </Link>
              <Button variant="outline" size="lg" icon={<Play className="w-4 h-4" />} className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm pt-2">
              {[
                { value: '10,000+', label: 'Active Users' },
                { value: '500K+', label: 'Interviews Completed' },
                { value: '92%', label: 'Success Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-semibold text-foreground tabular-nums">{stat.value}</p>
                  <p className="text-muted text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 brand-gradient opacity-15 rounded-2xl blur-2xl" aria-hidden />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="brand-gradient h-1" aria-hidden />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted">Interview Progress</p>
                    <p className="text-2xl font-semibold text-foreground tabular-nums">75%</p>
                  </div>
                  <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-lg font-semibold text-primary tabular-nums">75%</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">Current Question</p>
                    <p className="text-muted text-sm">Explain the concept of closures in JavaScript</p>
                  </div>
                  <div className="bg-muted-light rounded-xl p-4 text-sm text-muted">
                    &quot;Your response demonstrates strong understanding...&quot;
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border">
                  {[
                    { label: 'Time', value: '2:45' },
                    { label: 'Score', value: '8.5/10' },
                    { label: 'Feedback', value: 'Good', accent: true },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className={cn('text-sm font-semibold tabular-nums', item.accent ? 'text-primary' : 'text-foreground')}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
