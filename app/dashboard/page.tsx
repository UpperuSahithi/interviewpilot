'use client';

import Link from 'next/link';
import { Mic, Star, FileText, Flame, ChevronRight, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { StatCard } from '@/components/ui/stat-card';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { pageStack } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  const stats = [
    { label: 'Interviews Completed', value: '12', icon: Mic, trend: '+3 this week', iconVariant: 'primary' as const },
    { label: 'Average Score', value: '78%', icon: Star, trend: '+5% improvement', iconVariant: 'success' as const },
    { label: 'Resumes Analyzed', value: '5', icon: FileText, trend: '2 pending review', iconVariant: 'accent' as const },
    { label: 'Streak', value: '7 days', icon: Flame, trend: 'Keep it going!', iconVariant: 'warning' as const },
  ];

  const recentActivity = [
    { title: 'Completed Tech Interview', date: '2 hours ago', type: 'interview' },
    { title: 'Analyzed Resume - v3.pdf', date: '1 day ago', type: 'resume' },
    { title: 'Completed HR Interview', date: '3 days ago', type: 'interview' },
    { title: 'Analyzed Resume - v2.pdf', date: '1 week ago', type: 'resume' },
  ];

  const quickActions = [
    { href: '/mock-interview', title: 'Start Mock Interview', description: 'Practice for your next interview', icon: Mic },
    { href: '/resume-analyzer', title: 'Analyze Resume', description: 'Optimize your resume with AI', icon: FileText },
    { href: '/analytics', title: 'View Analytics', description: 'Track your progress over time', icon: Star },
  ];

  return (
    <div className={pageStack}>
      <PageHeader
        title="Welcome back!"
        description="Ready to ace your next interview? Here's your progress."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 40} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className="group relative overflow-hidden rounded-xl brand-gradient p-6 text-white shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-110"
            >
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{action.title}</h3>
                  <p className="text-white/75 text-sm mt-0.5">{action.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              </div>
            </Link>
          );
        })}
      </div>

      <Card hover={false} padding="none" className="overflow-hidden">
        <CardHeader className="px-5 py-4 border-b border-border">
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <div className="divide-y divide-border">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="group flex items-center justify-between px-5 py-3.5 hover:bg-muted-light/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                  activity.type === 'interview' ? 'bg-primary-light' : 'bg-accent-light'
                )}>
                  {activity.type === 'interview' ? (
                    <Mic className="w-4 h-4 text-primary" aria-hidden />
                  ) : (
                    <FileText className="w-4 h-4 text-accent" aria-hidden />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">{activity.title}</p>
                  <p className="text-xs text-muted mt-0.5">{activity.date}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors shrink-0" aria-hidden />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
