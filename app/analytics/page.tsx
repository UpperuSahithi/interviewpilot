'use client';

import { motion } from 'framer-motion';
import {
  Mic,
  Star,
  Flame,
  Clock,
  Target,
  BookOpen,
  Trophy,
  Download,
  TrendingUp,
  BarChart3,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

export default function AnalyticsPage() {
  const performanceByType = [
    { type: 'Tech Interview', score: 82, interviews: 4 },
    { type: 'HR Interview', score: 88, interviews: 3 },
    { type: 'Design Interview', score: 75, interviews: 2 },
    { type: 'PM Interview', score: 79, interviews: 2 },
  ];

  const monthlyProgress = [
    { month: 'Jan', interviews: 2, avgScore: 72 },
    { month: 'Feb', interviews: 3, avgScore: 75 },
    { month: 'Mar', interviews: 4, avgScore: 78 },
    { month: 'Apr', interviews: 5, avgScore: 80 },
    { month: 'May', interviews: 6, avgScore: 82 },
  ];

  const skillBreakdown = [
    { skill: 'Communication', score: 85 },
    { skill: 'Problem Solving', score: 78 },
    { skill: 'Technical Knowledge', score: 82 },
    { skill: 'Leadership', score: 72 },
    { skill: 'Adaptability', score: 88 },
  ];

  const topMetrics = [
    { label: 'Total Interviews', value: '18', trend: '+3 this month', icon: Mic },
    { label: 'Average Score', value: '81%', trend: '+5% improvement', icon: Star },
    { label: 'Streak', value: '12 days', trend: 'Keep it going!', icon: Flame },
    { label: 'Study Hours', value: '42h', trend: '+8h this week', icon: Clock },
  ];

  const recommendations = [
    { icon: Target, title: 'Focus on Leadership', description: 'Your lowest skill area. Try more PM interviews to practice.' },
    { icon: BookOpen, title: 'Strengthen Technical Knowledge', description: 'Complete 2-3 tech interviews this week to solidify concepts.' },
    { icon: Trophy, title: 'Maintain Your Streak', description: "You're doing great! Keep practicing daily for best results." },
  ];

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8">
      <PageAtmosphere />

      <div className="relative max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4 md:pt-8"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Performance Intelligence</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Analytics &{' '}
              <span className="brand-gradient-text">Insights</span>
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              Track your interview preparation progress, identify skill gaps, and compare your performance against platform benchmarks.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: TrendingUp, text: '+5% This Month' },
                { icon: Zap, text: 'Real-time Data' },
                { icon: Sparkles, text: 'AI Recommendations' },
              ].map((b) => (
                <GlassCard key={b.text} className="px-4 py-2 flex items-center gap-2 text-sm font-medium">
                  <b.icon className="w-4 h-4 text-primary" aria-hidden />
                  {b.text}
                </GlassCard>
              ))}
            </div>
          </div>

          <GlassCard className="p-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <CircularScore value={81} size={140} strokeWidth={10} label="Avg Score" />
            <div className="grid grid-cols-2 gap-4 w-full sm:w-auto">
              {topMetrics.slice(0, 4).map((m) => (
                <div key={m.label} className="text-center p-3 rounded-2xl bg-muted-light/40">
                  <p className="text-lg font-semibold tabular-nums text-foreground">{m.value}</p>
                  <p className="text-[11px] text-muted mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Metric cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {topMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard hover className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient mb-4">
                    <Icon className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <p className="text-xs text-muted mb-1">{metric.label}</p>
                  <p className="text-2xl font-semibold tabular-nums text-foreground">{metric.value}</p>
                  <p className="text-xs text-success mt-1">{metric.trend}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </section>

        {/* Performance trend - featured */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" aria-hidden />
              <h2 className="text-lg font-semibold text-foreground">Performance Trend</h2>
            </div>
            <div className="space-y-5">
              {monthlyProgress.map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2 gap-4">
                    <div>
                      <p className="font-medium text-foreground text-sm">{data.month}</p>
                      <p className="text-xs text-muted">{data.interviews} interviews</p>
                    </div>
                    <span className="font-semibold gradient-text tabular-nums">{data.avgScore}%</span>
                  </div>
                  <ProgressBar value={data.avgScore} />
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Two column charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <GlassCard className="p-6 sm:p-8 h-full">
              <h2 className="text-base font-semibold text-foreground mb-6">Performance by Interview Type</h2>
              <div className="space-y-5">
                {performanceByType.map((item) => (
                  <div key={item.type}>
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <div className="min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">{item.type}</p>
                        <p className="text-xs text-muted">{item.interviews} completed</p>
                      </div>
                      <span className="font-semibold text-primary tabular-nums shrink-0">{item.score}%</span>
                    </div>
                    <ProgressBar value={item.score} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <GlassCard className="p-6 sm:p-8 h-full">
              <h2 className="text-base font-semibold text-foreground mb-6">Skill Breakdown</h2>
              <div className="space-y-5">
                {skillBreakdown.map((skill) => (
                  <div key={skill.skill}>
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <p className="font-medium text-foreground text-sm truncate">{skill.skill}</p>
                      <span className="font-semibold text-success tabular-nums shrink-0">{skill.score}%</span>
                    </div>
                    <ProgressBar value={skill.score} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Compare banner */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl brand-gradient p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent)]" aria-hidden />
          <div className="relative">
            <h2 className="text-xl font-semibold text-white mb-6">How You Compare</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '81%', label: 'Your Average' },
                { value: '75%', label: 'Platform Average' },
                { value: '+6%', label: 'Above Average' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 backdrop-blur-sm p-5 text-center border border-white/10">
                  <p className="text-3xl font-semibold text-white tabular-nums">{item.value}</p>
                  <p className="text-sm text-white/70 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Recommendations */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6">AI Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((rec, i) => {
              const Icon = rec.icon;
              return (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard hover className="p-6 h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light mb-4">
                      <Icon className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">{rec.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{rec.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center">
          <Button size="lg" icon={<Download className="w-4 h-4" />}>Export Report (PDF)</Button>
        </div>
      </div>
    </div>
  );
}
