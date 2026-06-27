import Link from 'next/link';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary-light border border-primary rounded-full">
                <span className="text-primary font-semibold text-sm">Powered by Advanced AI</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ace Your Next{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Technical Interview
                </span>
              </h1>
              <p className="text-xl text-muted max-w-lg leading-relaxed">
                Practice with AI-powered mock interviews, get real-time feedback, and track your progress. Land your dream job with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/signup"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Get Started Free
              </Link>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary-light rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div>
                <p className="font-semibold text-foreground">10,000+</p>
                <p className="text-muted">Active Users</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">500K+</p>
                <p className="text-muted">Interviews Completed</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">92%</p>
                <p className="text-muted">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-2xl blur-2xl" />

              {/* Dashboard Preview Card */}
              <div className="relative bg-card-bg border border-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-primary to-accent h-2" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted">Interview Progress</p>
                      <p className="text-2xl font-bold text-foreground">75%</p>
                    </div>
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">75%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">Current Question</p>
                      <p className="text-muted text-sm">Explain the concept of closures in JavaScript</p>
                    </div>
                    <div className="bg-muted-light rounded-lg p-4 text-sm text-muted">
                      &quot;Your response demonstrates strong understanding...&quot;
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <div className="text-center">
                      <p className="text-sm text-muted">Time</p>
                      <p className="font-semibold text-foreground">2:45</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted">Score</p>
                      <p className="font-semibold text-foreground">8.5/10</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted">Feedback</p>
                      <p className="font-semibold text-primary">Good</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
