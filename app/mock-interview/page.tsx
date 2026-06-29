'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BarChart3,
  Bot,
  TrendingUp,
  Users,
  Palette,
  Clock,
  Sparkles,
  Brain,
  Mic,
  MessageSquare,
  Star,
  Target,
  Zap,
  Trophy,
  Flame,
  Gem,
  Eye,
  Play,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ProgressBar } from '@/components/ui/progress-bar';
import { fieldStyles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const categories = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Technical interview for software engineering roles with system design and coding focus.',
    icon: Code2,
    duration: '45 min',
    questions: 10,
    difficulty: 'Medium',
    popular: true,
    featured: true,
  },
  {
    id: 2,
    title: 'Product Manager',
    description: 'PM-specific questions and case studies.',
    icon: BarChart3,
    duration: '50 min',
    questions: 8,
    difficulty: 'Medium',
    popular: false,
    featured: false,
  },
  {
    id: 3,
    title: 'Data Scientist',
    description: 'Data analysis and ML-focused questions.',
    icon: Bot,
    duration: '45 min',
    questions: 10,
    difficulty: 'Hard',
    popular: true,
    featured: false,
  },
  {
    id: 4,
    title: 'Business Analyst',
    description: 'Business acumen and analytical questions.',
    icon: TrendingUp,
    duration: '40 min',
    questions: 8,
    difficulty: 'Easy',
    popular: false,
    featured: false,
  },
  {
    id: 5,
    title: 'HR Interview',
    description: 'Behavioral and culture fit questions.',
    icon: Users,
    duration: '30 min',
    questions: 6,
    difficulty: 'Easy',
    popular: true,
    featured: false,
  },
  {
    id: 6,
    title: 'Design Interview',
    description: 'UI/UX design and portfolio-based questions.',
    icon: Palette,
    duration: '50 min',
    questions: 10,
    difficulty: 'Medium',
    popular: false,
    featured: false,
  },
];

const difficulties = [
  { id: 'easy', label: 'Easy', description: 'Great for beginners' },
  { id: 'medium', label: 'Medium', description: 'Intermediate level' },
  { id: 'hard', label: 'Hard', description: 'Advanced challenges' },
];

const previousInterviews = [
  { id: 1, title: 'Tech Interview - Round 1', score: 82, date: '2 days ago', badge: 'Strong' },
  { id: 2, title: 'HR Interview', score: 75, date: '1 week ago', badge: 'Good' },
  { id: 3, title: 'Tech Interview - Round 2', score: 88, date: '2 weeks ago', badge: 'Excellent' },
];

const achievements = [
  { icon: Trophy, label: 'First Interview', emoji: '🏆' },
  { icon: Flame, label: '7 Day Streak', emoji: '🔥' },
  { icon: Star, label: 'Avg Score 80%+', emoji: '⭐' },
  { icon: Gem, label: 'AI Interview Expert', emoji: '💎' },
];

const floatingIcons = [
  { Icon: Bot, className: 'top-8 left-8', delay: 0 },
  { Icon: Sparkles, className: 'top-4 right-16', delay: 0.5 },
  { Icon: Brain, className: 'bottom-16 left-12', delay: 1 },
  { Icon: Mic, className: 'bottom-8 right-8', delay: 1.5 },
  { Icon: MessageSquare, className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', delay: 0.8 },
  { Icon: Code2, className: 'top-1/3 right-4', delay: 1.2 },
  { Icon: BarChart3, className: 'bottom-1/3 left-4', delay: 0.3 },
];

function getScoreBadgeVariant(score: number): 'success' | 'warning' | 'info' {
  if (score >= 85) return 'success';
  if (score >= 70) return 'info';
  return 'warning';
}

export default function MockInterviewPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [customTopic, setCustomTopic] = useState('');
  const [customDuration, setCustomDuration] = useState(45);
  const [customQuestions, setCustomQuestions] = useState(8);
  const [voiceInterview, setVoiceInterview] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [aiFollowUp, setAiFollowUp] = useState(true);

  const featured = categories.find((c) => c.featured)!;
  const otherCategories = categories.filter((c) => !c.featured);
  const avgScore = Math.round(previousInterviews.reduce((s, i) => s + i.score, 0) / previousInterviews.length);

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8">
      <PageAtmosphere />

      <div className="relative max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-4 md:pt-8"
        >
          <div className="space-y-8">
            <motion.div custom={0} variants={fadeUp} className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-foreground leading-[1.08]">
                Master Your Next Interview with{' '}
                <span className="brand-gradient-text">AI</span>
              </h1>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Practice role-specific interviews, receive real-time AI feedback, improve communication skills, and build confidence before your dream interview.
              </p>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} className="flex flex-wrap gap-3">
              <Link href={`/mock-interview/start?category=${featured.id}`}>
                <Button size="lg" icon={<Play className="w-4 h-4" />}>
                  Start Mock Interview
                </Button>
              </Link>
              <a href="#featured-tracks">
                <Button variant="outline" size="lg">
                  Explore Interview Types
                </Button>
              </a>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                { icon: Star, text: '15,000+ Interviews' },
                { icon: Target, text: '94% Success Rate' },
                { icon: Zap, text: 'AI Feedback in Seconds' },
              ].map((stat) => (
                <GlassCard key={stat.text} className="px-4 py-2.5 flex items-center gap-2 text-sm font-medium text-foreground">
                  <stat.icon className="w-4 h-4 text-primary shrink-0" aria-hidden />
                  {stat.text}
                </GlassCard>
              ))}
            </motion.div>
          </div>

          <motion.div custom={3} variants={fadeUp} className="relative h-[320px] sm:h-[380px] hidden sm:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-border/40" />
            {floatingIcons.map(({ Icon, className, delay }, i) => (
              <motion.div
                key={i}
                className={cn('absolute', className)}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay }}
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl glass border border-border/50 shadow-lg">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden />
                </div>
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-24 w-24 items-center justify-center rounded-3xl brand-gradient shadow-xl shadow-primary/20"
              >
                <Sparkles className="w-10 h-10 text-white" aria-hidden />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Tracks */}
        <section id="featured-tracks" className="scroll-mt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Interview Tracks</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Featured Interview Types</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <GlassCard hover className="p-6 sm:p-8 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient shadow-lg">
                      <featured.icon className="w-8 h-8 text-white" aria-hidden />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="info">Featured</Badge>
                      <Badge variant="outline">{featured.difficulty}</Badge>
                      <Badge variant="success">Popular</Badge>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{featured.title}</h3>
                  <p className="text-muted leading-relaxed mb-6 max-w-lg">{featured.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted mb-8">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden />{featured.duration}</span>
                    <span>{featured.questions} questions</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/mock-interview/start?category=${featured.id}`}>
                      <Button icon={<Play className="w-4 h-4" />}>Start Interview</Button>
                    </Link>
                    <Link href={`/mock-interview/start?category=${featured.id}`}>
                      <Button variant="outline" icon={<Eye className="w-4 h-4" />}>Preview</Button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {otherCategories.slice(0, 3).map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <GlassCard hover className="p-5 group">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl brand-gradient">
                          <Icon className="w-5 h-5 text-white" aria-hidden />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-1.5 mb-1">
                            <Badge variant="outline" className="text-[10px]">{cat.difficulty}</Badge>
                            {cat.popular && <Badge variant="info" className="text-[10px]">Popular</Badge>}
                          </div>
                          <h4 className="font-medium text-foreground text-sm truncate">{cat.title}</h4>
                          <p className="text-xs text-muted mt-1 line-clamp-2">{cat.description}</p>
                          <div className="flex items-center justify-between mt-3 gap-2">
                            <span className="text-xs text-muted">{cat.duration}</span>
                            <Link href={`/mock-interview/start?category=${cat.id}`}>
                              <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">
                                Start <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {otherCategories.slice(3).map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <GlassCard hover className="p-5 h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient mb-3">
                      <Icon className="w-5 h-5 text-white" aria-hidden />
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{cat.title}</h4>
                    <p className="text-xs text-muted mb-3 line-clamp-2">{cat.description}</p>
                    <Link href={`/mock-interview/start?category=${cat.id}`}>
                      <Button size="sm" className="w-full">Start</Button>
                    </Link>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Promotional Banner */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl brand-gradient p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="text-white/90 text-lg sm:text-xl font-medium mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" aria-hidden />
              AI analyzes more than your answers.
            </p>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
              Our AI evaluates confidence, communication, technical knowledge, speaking pace and provides personalized suggestions after every interview.
            </p>
            <Button variant="secondary" className="bg-white/15 border-white/20 text-white hover:bg-white/25">
              Learn More
            </Button>
          </div>
        </motion.section>

        {/* Custom Interview */}
        <section className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[700px]"
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Create Custom Interview</h2>
                <p className="text-sm text-muted">Tailor difficulty, duration, and AI behavior to your goals</p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Difficulty</p>
                  <div className="grid grid-cols-3 gap-2">
                    {difficulties.map((diff) => (
                      <button
                        key={diff.id}
                        type="button"
                        onClick={() => setSelectedDifficulty(diff.id)}
                        className={cn(
                          'p-3 rounded-2xl border text-left transition-all focus-ring',
                          selectedDifficulty === diff.id
                            ? 'border-primary bg-primary-light shadow-sm'
                            : 'border-border hover:border-border-subtle hover:bg-muted-light/40'
                        )}
                      >
                        <p className="font-medium text-sm text-foreground">{diff.label}</p>
                        <p className="text-[11px] text-muted mt-0.5">{diff.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="custom-topic" className="text-sm font-medium text-foreground mb-2 block">Topic (optional)</label>
                  <input
                    id="custom-topic"
                    type="text"
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    placeholder="e.g. System Design, Behavioral..."
                    className={cn('w-full', fieldStyles)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="duration" className="text-sm font-medium text-foreground mb-2 flex justify-between">
                      <span>Duration</span>
                      <span className="text-muted tabular-nums">{customDuration} min</span>
                    </label>
                    <input
                      id="duration"
                      type="range"
                      min={15}
                      max={90}
                      step={5}
                      value={customDuration}
                      onChange={(e) => setCustomDuration(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="questions" className="text-sm font-medium text-foreground mb-2 flex justify-between">
                      <span>Questions</span>
                      <span className="text-muted tabular-nums">{customQuestions}</span>
                    </label>
                    <input
                      id="questions"
                      type="range"
                      min={3}
                      max={15}
                      value={customQuestions}
                      onChange={(e) => setCustomQuestions(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Toggle checked={voiceInterview} onChange={setVoiceInterview} label="Voice Interview" description="Practice speaking your answers aloud" />
                  <Toggle checked={cameraEnabled} onChange={setCameraEnabled} label="Camera" description="Enable video for body language feedback" />
                  <Toggle checked={aiFollowUp} onChange={setAiFollowUp} label="AI Follow-up Questions" description="Dynamic probing based on your responses" />
                </div>

                {selectedDifficulty && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <Button type="button" className="w-full" size="lg" icon={<Sparkles className="w-4 h-4" />}>
                      Generate Interview
                    </Button>
                  </motion.div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Previous Interviews + Progress */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          <div className="xl:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-1">Previous Interviews</h2>
              <p className="text-sm text-muted">Review performance and retake sessions</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previousInterviews.map((interview, i) => (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard hover className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="min-w-0">
                        <h3 className="font-medium text-foreground text-sm truncate">{interview.title}</h3>
                        <p className="text-xs text-muted mt-1">{interview.date}</p>
                        <Badge variant={getScoreBadgeVariant(interview.score)} className="mt-2">{interview.badge}</Badge>
                      </div>
                      <CircularScore value={interview.score} size={64} strokeWidth={4} />
                    </div>
                    <div className="flex gap-2">
                      <Link href="/interview-history" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">View Report</Button>
                      </Link>
                      <Link href="/mock-interview/start" className="flex-1">
                        <Button size="sm" className="w-full">Retake</Button>
                      </Link>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 h-full">
              <h2 className="text-lg font-semibold text-foreground mb-6">Your Progress</h2>
              <div className="space-y-6">
                {[
                  { label: 'Average Score', value: `${avgScore}%`, progress: avgScore },
                  { label: 'Current Streak', value: '7 days', progress: 70 },
                  { label: 'Total Interviews', value: '12', progress: 60 },
                  { label: 'Hours Practiced', value: '18h', progress: 45 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted">{item.label}</span>
                      <span className="font-semibold text-foreground tabular-nums">{item.value}</span>
                    </div>
                    <ProgressBar value={item.progress} size="sm" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Achievements</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard className="p-5 text-center">
                  <span className="text-2xl mb-2 block" aria-hidden>{a.emoji}</span>
                  <p className="text-sm font-medium text-foreground">{a.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 brand-gradient opacity-[0.07]" aria-hidden />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Ready to ace your dream interview?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8 leading-relaxed">
              Practice unlimited AI interviews and receive detailed feedback after every session.
            </p>
            <Link href={`/mock-interview/start?category=${featured.id}`}>
              <Button size="lg" icon={<Mic className="w-4 h-4" />}>
                Start Practicing
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
