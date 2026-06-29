'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus, Download, Calendar, CheckCircle2, Target, BookOpen, Zap } from 'lucide-react';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

const mockTasks = [
  { id: 1, title: 'Practice Array Problems', topic: 'Data Structures', duration: '60 min', priority: 'high', completed: true, dueDate: '2024-01-15' },
  { id: 2, title: 'System Design: Load Balancing', topic: 'System Design', duration: '90 min', priority: 'high', completed: false, dueDate: '2024-01-15' },
  { id: 3, title: 'Mock Interview - Senior Role', topic: 'Interview Practice', duration: '45 min', priority: 'high', completed: false, dueDate: '2024-01-15' },
  { id: 4, title: 'Review Weak Topics', topic: 'Review', duration: '45 min', priority: 'medium', completed: false, dueDate: '2024-01-16' },
];

const mockWeeklyGoals = [
  { goal: 'Complete 20 coding problems', progress: 65 },
  { goal: 'Do 3 mock interviews', progress: 50 },
  { goal: 'Review system design notes', progress: 80 },
  { goal: 'Read 2 technical articles', progress: 100 },
];

const mockSuggestedPlan = [
  { time: '09:00 AM', activity: 'Morning Standup & Goal Review', duration: '15 min' },
  { time: '09:15 AM', activity: 'Solve 5 LeetCode Problems', duration: '60 min' },
  { time: '10:15 AM', activity: 'Break', duration: '15 min' },
  { time: '10:30 AM', activity: 'System Design Study', duration: '60 min' },
  { time: '11:30 AM', activity: 'Mock Interview Practice', duration: '45 min' },
  { time: '12:15 PM', activity: 'Lunch', duration: '60 min' },
  { time: '01:15 PM', activity: 'Behavioral Interview Prep', duration: '45 min' },
  { time: '02:00 PM', activity: 'Review & Consolidate Learning', duration: '30 min' },
];

const priorityBorder = (p: string) => {
  if (p === 'high') return 'border-l-danger';
  if (p === 'medium') return 'border-l-warning';
  return 'border-l-success';
};

export default function StudyPlannerPage() {
  const [completedTasks, setCompletedTasks] = useState(mockTasks.filter(t => t.completed).map(t => t.id));

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]);
  };

  const completedCount = completedTasks.length;
  const totalTasks = mockTasks.length;
  const completionPercentage = Math.round((completedCount / totalTasks) * 100);

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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Smart Planning</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Your AI-Powered{' '}
              <span className="brand-gradient-text">Study Planner</span>
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              Organize your interview preparation journey with daily tasks, weekly goals, and an AI-optimized study schedule.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Target, text: '4 Tasks Today' },
                { icon: BookOpen, text: '4 Weekly Goals' },
                { icon: Zap, text: 'AI Schedule' },
              ].map((b) => (
                <GlassCard key={b.text} className="px-4 py-2 flex items-center gap-2 text-sm font-medium">
                  <b.icon className="w-4 h-4 text-primary" aria-hidden />
                  {b.text}
                </GlassCard>
              ))}
            </div>
          </div>

          <GlassCard className="p-8">
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground mb-1">Today&apos;s Progress</h2>
                <p className="text-sm text-muted mb-4">
                  {completionPercentage === 100 ? 'All tasks completed!' : `${completionPercentage}% complete`}
                </p>
                <div className="text-3xl font-semibold tabular-nums text-foreground">
                  {completedCount}<span className="text-muted text-xl">/{totalTasks}</span>
                </div>
              </div>
              <CircularScore value={completionPercentage} size={120} strokeWidth={8} />
            </div>
          </GlassCard>
        </motion.section>

        {/* Weekly goals */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6">This Week&apos;s Goals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockWeeklyGoals.map((item, i) => (
              <motion.div
                key={item.goal}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard hover className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className="font-medium text-foreground text-sm leading-snug">{item.goal}</h3>
                    <span className="text-sm font-semibold gradient-text tabular-nums shrink-0">{item.progress}%</span>
                  </div>
                  <ProgressBar value={item.progress} />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Two column: tasks + AI plan */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">Today&apos;s Tasks</h2>
            <div className="space-y-3">
              {mockTasks.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <label
                    className={cn(
                      'flex items-center gap-3 rounded-2xl border border-border/60 border-l-4 p-4 cursor-pointer transition-all hover:bg-muted-light/30 backdrop-blur-sm bg-card/50',
                      priorityBorder(task.priority),
                      completedTasks.includes(task.id) && 'opacity-60'
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={completedTasks.includes(task.id)}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className={cn('font-medium text-foreground text-sm block', completedTasks.includes(task.id) && 'line-through')}>
                        {task.title}
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        <Badge variant="outline">{task.topic}</Badge>
                        <Badge variant="outline">{task.duration}</Badge>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted shrink-0 tabular-nums">
                      {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </label>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <GlassCard className="p-6 h-full border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" aria-hidden />
                <h2 className="text-lg font-semibold text-foreground">AI Suggested Study Plan</h2>
              </div>
              <p className="text-sm text-muted mb-5">Optimized daily schedule based on your goals</p>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                {mockSuggestedPlan.map((slot, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 rounded-xl bg-muted-light/30 border border-border/40">
                    <time className="font-mono text-xs font-medium text-primary min-w-[72px] pt-0.5 shrink-0">{slot.time}</time>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm">{slot.activity}</p>
                      <p className="text-xs text-muted mt-0.5">{slot.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Calendar */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-primary" aria-hidden />
            <h2 className="text-xl font-semibold text-foreground">Calendar View</h2>
          </div>
          <GlassCard className="p-6">
            <div className="grid grid-cols-7 gap-1.5 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-[11px] font-medium text-muted py-2 uppercase tracking-wider">{day}</div>
              ))}
              {Array.from({ length: 35 }).map((_, idx) => {
                const date = idx + 1;
                const isPast = idx < 15;
                const isToday = idx === 14;
                return (
                  <div
                    key={idx}
                    className={cn(
                      'aspect-square flex items-center justify-center rounded-xl text-sm transition-colors',
                      isToday && 'brand-gradient text-white font-semibold shadow-sm',
                      !isToday && isPast && 'bg-success-light text-success',
                      !isToday && !isPast && 'bg-muted-light/40 text-muted hover:bg-muted-light/60'
                    )}
                  >
                    {date <= 28 ? date : ''}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 brand-gradient opacity-[0.06]" aria-hidden />
          <div className="relative flex flex-wrap gap-3 justify-center">
            <Button type="button" icon={<Plus className="w-4 h-4" />}>Create Custom Plan</Button>
            <Button type="button" variant="outline" icon={<Download className="w-4 h-4" />}>Export Schedule</Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
