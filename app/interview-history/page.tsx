'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, TrendingUp, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { ProgressBar } from '@/components/ui/progress-bar';
import { fieldStyles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

const mockInterviews = [
  { id: 1, date: '2024-01-15', role: 'Senior Software Engineer', score: 87, difficulty: 'Hard', status: 'completed', type: 'Behavioral' },
  { id: 2, date: '2024-01-14', role: 'Product Manager', score: 92, difficulty: 'Medium', status: 'completed', type: 'Technical' },
  { id: 3, date: '2024-01-13', role: 'Data Scientist', score: 78, difficulty: 'Hard', status: 'completed', type: 'Technical' },
  { id: 4, date: '2024-01-12', role: 'Frontend Engineer', score: 85, difficulty: 'Medium', status: 'completed', type: 'Technical' },
  { id: 5, date: '2024-01-11', role: 'UX Designer', score: 81, difficulty: 'Easy', status: 'completed', type: 'Behavioral' },
  { id: 6, date: '2024-01-10', role: 'DevOps Engineer', score: 88, difficulty: 'Hard', status: 'completed', type: 'Technical' },
];

const getDifficultyVariant = (difficulty: string): 'success' | 'warning' | 'danger' => {
  if (difficulty === 'Easy') return 'success';
  if (difficulty === 'Medium') return 'warning';
  return 'danger';
};

export default function InterviewHistoryPage() {
  const [sortBy, setSortBy] = useState<'date' | 'score'>('date');

  const sortedInterviews = [...mockInterviews].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
    return b.score - a.score;
  });

  const avgScore = Math.round(mockInterviews.reduce((sum, i) => sum + i.score, 0) / mockInterviews.length);
  const bestScore = Math.max(...mockInterviews.map(i => i.score));

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8">
      <PageAtmosphere />

      <div className="relative max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pt-4 md:pt-8"
        >
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Your Journey</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Interview History &{' '}
              <span className="brand-gradient-text">Insights</span>
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              Review every session, track score trends, and identify patterns in your interview performance over time.
            </p>
          </div>
          <GlassCard className="p-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Total', value: mockInterviews.length, icon: Calendar },
              { label: 'Average', value: `${avgScore}%`, icon: TrendingUp },
              { label: 'Best', value: bestScore, icon: Trophy },
              { label: 'Growth', value: '+8%', icon: Sparkles },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 rounded-2xl bg-muted-light/40">
                <s.icon className="w-4 h-4 text-primary mx-auto mb-2" aria-hidden />
                <p className="text-xl font-semibold tabular-nums text-foreground">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </GlassCard>
        </motion.section>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" aria-hidden />
            <input
              type="search"
              placeholder="Search by role..."
              className={cn('w-full pl-10', fieldStyles)}
              aria-label="Search interviews"
            />
          </div>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'score')}
            className="sm:w-48"
            aria-label="Sort interviews"
          >
            <option value="date">Sort by Date</option>
            <option value="score">Sort by Score</option>
          </Select>
        </motion.div>

        {/* Interview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sortedInterviews.map((interview, i) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassCard hover className="p-6 h-full">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground truncate">{interview.role}</h3>
                    <p className="text-sm text-muted mt-1">{new Date(interview.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <Badge variant="outline">{interview.type}</Badge>
                      <Badge variant={getDifficultyVariant(interview.difficulty)}>{interview.difficulty}</Badge>
                      <Badge variant="success">Completed</Badge>
                    </div>
                  </div>
                  <CircularScore value={interview.score} size={72} strokeWidth={5} />
                </div>
                <ProgressBar value={interview.score} size="sm" className="mb-5" />
                <Link href={`/interview-report/${interview.id}`}>
                  <Button className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    View Full Report
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl brand-gradient p-10 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent)]" aria-hidden />
          <div className="relative">
            <h2 className="text-2xl font-semibold text-white mb-2">Keep improving with every session</h2>
            <p className="text-white/75 mb-6 max-w-md mx-auto">Each interview builds momentum toward your dream role.</p>
            <Link href="/mock-interview">
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start New Interview
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
