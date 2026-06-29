'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ListChecks,
  CheckCircle,
  Flame,
  AlertCircle,
  Plus,
  Download,
  Code2,
  Target,
  Zap,
  Trophy,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

const mockProblems = [
  { id: 1, problem: 'Two Sum', topic: 'Array', difficulty: 'Easy', company: 'Google, Amazon', status: 'solved', dateSolved: '2024-01-15' },
  { id: 2, problem: 'Longest Substring Without Repeating Characters', topic: 'String', difficulty: 'Medium', company: 'Google, Adobe', status: 'solved', dateSolved: '2024-01-14' },
  { id: 3, problem: 'Binary Tree Level Order Traversal', topic: 'Tree', difficulty: 'Medium', company: 'Microsoft, Apple', status: 'solved', dateSolved: '2024-01-13' },
  { id: 4, problem: 'Merge K Sorted Lists', topic: 'Linked List', difficulty: 'Hard', company: 'Amazon, Google', status: 'attempted', dateSolved: null },
  { id: 5, problem: 'Word Ladder', topic: 'Graph', difficulty: 'Hard', company: 'Google, Facebook', status: 'todo', dateSolved: null },
  { id: 6, problem: 'Valid Parentheses', topic: 'Stack', difficulty: 'Easy', company: 'Google, Amazon', status: 'solved', dateSolved: '2024-01-12' },
];

const getDifficultyVariant = (d: string): 'success' | 'warning' | 'danger' => {
  if (d === 'Easy') return 'success';
  if (d === 'Medium') return 'warning';
  return 'danger';
};

const getStatusVariant = (s: string): 'success' | 'warning' | 'outline' => {
  if (s === 'solved') return 'success';
  if (s === 'attempted') return 'warning';
  return 'outline';
};

const getStatusLabel = (s: string) => {
  if (s === 'solved') return 'Solved';
  if (s === 'attempted') return 'Attempted';
  return 'Todo';
};

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all focus-ring',
        active
          ? 'brand-gradient text-white shadow-sm'
          : 'bg-card/60 border border-border text-muted hover:text-foreground hover:border-border-subtle'
      )}
    >
      {children}
    </button>
  );
}

export default function CodingTrackerPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const solvedCount = mockProblems.filter(p => p.status === 'solved').length;
  const attemptedCount = mockProblems.filter(p => p.status === 'attempted').length;
  const totalCount = mockProblems.length;
  const completionPct = Math.round((solvedCount / totalCount) * 100);
  const topics = [...new Set(mockProblems.map(p => p.topic))];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  let filtered = mockProblems;
  if (selectedTopic) filtered = filtered.filter(p => p.topic === selectedTopic);
  if (selectedDifficulty) filtered = filtered.filter(p => p.difficulty === selectedDifficulty);

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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Practice Tracker</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Master Coding Problems with{' '}
              <span className="brand-gradient-text">Clarity</span>
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              Track every problem you solve, filter by topic and difficulty, and build the consistency top companies look for.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Target, text: `${totalCount} Problems` },
                { icon: Zap, text: '12 Day Streak' },
                { icon: Trophy, text: `${completionPct}% Complete` },
              ].map((b) => (
                <GlassCard key={b.text} className="px-4 py-2 flex items-center gap-2 text-sm font-medium">
                  <b.icon className="w-4 h-4 text-primary" aria-hidden />
                  {b.text}
                </GlassCard>
              ))}
            </div>
          </div>

          <GlassCard className="p-8 flex flex-col items-center justify-center">
            <CircularScore value={completionPct} size={140} strokeWidth={10} label="Completion" />
            <div className="grid grid-cols-3 gap-6 mt-8 w-full text-center">
              {[
                { label: 'Solved', value: solvedCount, color: 'text-success' },
                { label: 'Attempted', value: attemptedCount, color: 'text-warning' },
                { label: 'Remaining', value: totalCount - solvedCount - attemptedCount, color: 'text-muted' },
              ].map((s) => (
                <div key={s.label}>
                  <p className={cn('text-2xl font-semibold tabular-nums', s.color)}>{s.value}</p>
                  <p className="text-xs text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Stats row */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ListChecks, label: 'Total', value: totalCount },
            { icon: CheckCircle, label: 'Solved', value: solvedCount },
            { icon: Flame, label: 'Streak', value: '12d' },
            { icon: AlertCircle, label: 'Attempted', value: attemptedCount },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassCard className="p-5 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient shrink-0">
                  <s.icon className="w-5 h-5 text-white" aria-hidden />
                </div>
                <div>
                  <p className="text-xs text-muted">{s.label}</p>
                  <p className="text-xl font-semibold tabular-nums text-foreground">{s.value}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </section>

        {/* Filters */}
        <GlassCard className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Filter by Topic</p>
              <div className="flex flex-wrap gap-2">
                <FilterPill active={selectedTopic === null} onClick={() => setSelectedTopic(null)}>All</FilterPill>
                {topics.map(t => (
                  <FilterPill key={t} active={selectedTopic === t} onClick={() => setSelectedTopic(t)}>{t}</FilterPill>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Filter by Difficulty</p>
              <div className="flex flex-wrap gap-2">
                <FilterPill active={selectedDifficulty === null} onClick={() => setSelectedDifficulty(null)}>All</FilterPill>
                {difficulties.map(d => (
                  <FilterPill key={d} active={selectedDifficulty === d} onClick={() => setSelectedDifficulty(d)}>{d}</FilterPill>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Problem cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((problem, i) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <GlassCard hover className="p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted-light">
                      <Code2 className="w-4 h-4 text-primary" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-foreground text-sm truncate">{problem.problem}</h3>
                      <p className="text-xs text-muted mt-0.5">{problem.topic} · {problem.company}</p>
                    </div>
                  </div>
                  <Badge variant={getStatusVariant(problem.status)}>{getStatusLabel(problem.status)}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant={getDifficultyVariant(problem.difficulty)}>{problem.difficulty}</Badge>
                  <span className="text-xs text-muted tabular-nums">
                    {problem.dateSolved ? new Date(problem.dateSolved).toLocaleDateString() : 'Not solved'}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </section>

        {/* Table fallback for desktop detail view */}
        <GlassCard className="overflow-hidden hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted-light/30">
                  <th scope="col" className="text-left px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-muted">Problem</th>
                  <th scope="col" className="text-left px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-muted">Topic</th>
                  <th scope="col" className="text-left px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-muted">Difficulty</th>
                  <th scope="col" className="text-left px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-muted">Company</th>
                  <th scope="col" className="text-center px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-muted">Status</th>
                  <th scope="col" className="text-left px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-muted">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(problem => (
                  <tr key={problem.id} className="border-b border-border/50 last:border-0 hover:bg-muted-light/20 transition-colors">
                    <td className="px-5 py-4 font-medium text-foreground">{problem.problem}</td>
                    <td className="px-5 py-4 text-muted">{problem.topic}</td>
                    <td className="px-5 py-4"><Badge variant={getDifficultyVariant(problem.difficulty)}>{problem.difficulty}</Badge></td>
                    <td className="px-5 py-4 text-muted">{problem.company}</td>
                    <td className="px-5 py-4 text-center"><Badge variant={getStatusVariant(problem.status)}>{getStatusLabel(problem.status)}</Badge></td>
                    <td className="px-5 py-4 text-muted tabular-nums">{problem.dateSolved ? new Date(problem.dateSolved).toLocaleDateString() : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Progress + Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard className="lg:col-span-2 p-6">
            <h3 className="font-semibold text-foreground mb-4">Topic Progress</h3>
            <div className="space-y-4">
              {topics.map(topic => {
                const topicProblems = mockProblems.filter(p => p.topic === topic);
                const solved = topicProblems.filter(p => p.status === 'solved').length;
                const pct = Math.round((solved / topicProblems.length) * 100);
                return (
                  <div key={topic}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted">{topic}</span>
                      <span className="font-medium tabular-nums">{solved}/{topicProblems.length}</span>
                    </div>
                    <ProgressBar value={pct} size="sm" />
                  </div>
                );
              })}
            </div>
          </GlassCard>
          <GlassCard className="p-6 flex flex-col justify-center gap-3">
            <Button type="button" icon={<Plus className="w-4 h-4" />} className="w-full">Add Problem</Button>
            <Button type="button" variant="outline" icon={<Download className="w-4 h-4" />} className="w-full">Export Progress</Button>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
