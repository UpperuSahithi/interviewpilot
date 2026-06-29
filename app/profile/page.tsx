'use client';

import { motion } from 'framer-motion';
import {
  Mic,
  Star,
  FileText,
  Flame,
  Zap,
  MessageCircle,
  Code,
  Share2,
  Download,
  Pencil,
  MapPin,
  Calendar,
  Trophy,
  Gem,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

export default function ProfilePage() {
  const badges = [
    { name: 'Quick Learner', icon: Zap, description: 'Completed 10 interviews in 1 week', emoji: '⚡' },
    { name: 'Consistent', icon: Flame, description: '7-day practice streak', emoji: '🔥' },
    { name: 'Tech Master', icon: Code, description: 'Scored 85%+ on tech interviews', emoji: '💻' },
    { name: 'Communication Expert', icon: MessageCircle, description: 'Top communication score', emoji: '💬' },
  ];

  const recentInterviews = [
    { title: 'Tech Interview - Round 1', score: 82, date: '2 days ago' },
    { title: 'HR Interview', score: 75, date: '1 week ago' },
    { title: 'Tech Interview - Round 2', score: 88, date: '2 weeks ago' },
    { title: 'PM Interview', score: 79, date: '2 weeks ago' },
  ];

  const skills = ['JavaScript', 'React', 'System Design', 'Problem Solving', 'Communication', 'Leadership', 'Data Structures', 'Project Management'];

  const stats = [
    { label: 'Interviews', value: '18', icon: Mic },
    { label: 'Avg Score', value: '81%', icon: Star },
    { label: 'Resumes', value: '5', icon: FileText },
    { label: 'Streak', value: '12d', icon: Flame },
  ];

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8">
      <PageAtmosphere />

      <div className="relative max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Hero profile card */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4 md:pt-8"
        >
          <GlassCard className="overflow-hidden !p-0">
            <div className="h-36 sm:h-44 brand-gradient relative" aria-hidden>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
            </div>
            <div className="px-6 sm:px-8 pb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 -mt-14 mb-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl brand-gradient border-4 border-card flex items-center justify-center text-3xl font-semibold text-white shadow-xl shrink-0">
                  JD
                </div>
                <div className="flex-1 min-w-0 pt-2 sm:pb-1">
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">John Doe</h1>
                  <p className="text-muted mt-1">Software Engineer · Aspiring Product Manager</p>
                </div>
                <Button icon={<Pencil className="w-4 h-4" />} size="sm" className="shrink-0">Edit Profile</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
                  { icon: Calendar, label: 'Member Since', value: 'January 2024' },
                  { icon: Star, label: 'Bio', value: 'Passionate about building great products' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 rounded-2xl bg-muted-light/40 border border-border/40">
                    <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-[11px] text-muted uppercase tracking-wider">{item.label}</p>
                      <p className="font-medium text-foreground text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" icon={<Share2 className="w-4 h-4" />}>Share Profile</Button>
                <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>Download Resume</Button>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard hover className="p-5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <p className="text-2xl font-semibold tabular-nums text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </section>

        {/* Two column: achievements + recent */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-primary" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground">Achievement Badges</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <GlassCard hover className="p-5 text-center h-full">
                      <span className="text-2xl mb-2 block" aria-hidden>{badge.emoji}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light mx-auto mb-2">
                        <Icon className="w-4 h-4 text-primary" aria-hidden />
                      </div>
                      <h3 className="font-medium text-foreground text-sm mb-1">{badge.name}</h3>
                      <p className="text-xs text-muted leading-relaxed">{badge.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">Recent Interviews</h2>
            <div className="space-y-3">
              {recentInterviews.map((interview, i) => (
                <motion.div
                  key={interview.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <GlassCard hover className="p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">{interview.title}</p>
                      <p className="text-xs text-muted mt-0.5">{interview.date}</p>
                    </div>
                    <CircularScore value={interview.score} size={56} strokeWidth={4} />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Gem className="w-5 h-5 text-primary" aria-hidden />
            <h2 className="text-xl font-semibold text-foreground">Top Skills</h2>
          </div>
          <GlassCard className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Badge variant="info" className="text-sm py-1 px-3">{skill}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl brand-gradient p-10 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" aria-hidden />
          <div className="relative">
            <h2 className="text-2xl font-semibold text-white mb-2">Share your progress with recruiters</h2>
            <p className="text-white/75 mb-6 max-w-md mx-auto">Your profile showcases your interview readiness and achievements.</p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90" icon={<Share2 className="w-4 h-4" />}>
              Share Profile
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
