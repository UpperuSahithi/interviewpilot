'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Lightbulb,
  Search,
  Upload,
  CheckCircle,
  AlertTriangle,
  Download,
  RotateCcw,
  FileText,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';
import { CircularScore } from '@/components/premium/circular-score';

export default function ResumeAnalyzerPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    setAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAnalyzing(false);
    setAnalysisComplete(true);
  };

  const pageWrap = 'relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8';
  const container = 'relative max-w-7xl mx-auto space-y-16 md:space-y-24';

  if (analysisComplete && uploadedFile) {
    return (
      <div className={pageWrap}>
        <PageAtmosphere />
        <div className={cn(container, 'pt-4 md:pt-8')}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Analysis Complete</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">Resume Analysis</h1>
            <p className="text-muted">AI-powered insights for <span className="text-foreground font-medium">{uploadedFile.name}</span></p>
          </motion.div>

          <GlassCard className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold text-foreground mb-1">Overall ATS Score</h2>
                <p className="text-sm text-muted max-w-sm">How well your resume will be parsed by Applicant Tracking Systems</p>
              </div>
              <CircularScore value={82} size={120} strokeWidth={8} />
            </div>
            <ProgressBar value={82} size="lg" className="mt-8" />
          </GlassCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle className="w-5 h-5 text-success" aria-hidden />
                <h3 className="font-semibold text-foreground">Strengths</h3>
              </div>
              <ul className="space-y-3">
                {['Clear job titles and company names', 'Quantifiable achievements included', 'Good use of action verbs'].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="text-success shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="w-5 h-5 text-warning" aria-hidden />
                <h3 className="font-semibold text-foreground">Areas for Improvement</h3>
              </div>
              <ul className="space-y-3">
                {['Add more metrics and percentages', 'Include relevant keywords from job descriptions', 'Expand on technical skills section'].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="text-warning shrink-0">!</span>{item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-6 sm:p-8">
            <h3 className="font-semibold text-foreground mb-6">Recommendations</h3>
            <div className="space-y-4">
              {[
                { title: 'Use Specific Metrics', desc: 'Replace vague descriptions with numbers. Instead of "increased sales," write "increased sales by 35% ($2M ARR)"' },
                { title: 'Keyword Optimization', desc: 'Add keywords from your target job postings to improve ATS parsing and recruiter searches' },
                { title: 'Use Strong Action Verbs', desc: 'Replace weak verbs like "responsible for" with strong ones like "led," "built," or "accelerated"' },
              ].map((rec) => (
                <div key={rec.title} className="rounded-2xl border-l-2 border-primary bg-primary-light/30 pl-5 py-3">
                  <h4 className="font-medium text-foreground text-sm">{rec.title}</h4>
                  <p className="text-muted text-sm mt-1">{rec.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Keywords Detected</h3>
            <div className="flex flex-wrap gap-2">
              {['Leadership', 'Project Management', 'Python', 'AWS', 'Data Analysis', 'Agile', 'Communication', 'Problem Solving'].map((keyword) => (
                <Badge key={keyword} variant="info">{keyword}</Badge>
              ))}
            </div>
          </GlassCard>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button icon={<Download className="w-4 h-4" />}>Download Report (PDF)</Button>
            <Button
              variant="outline"
              icon={<RotateCcw className="w-4 h-4" />}
              onClick={() => { setAnalysisComplete(false); setUploadedFile(null); }}
            >
              Analyze Another Resume
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const features = [
    { icon: BarChart3, title: 'ATS Score', description: 'See how well your resume parses through applicant tracking systems', stat: '82% avg' },
    { icon: Lightbulb, title: 'Personalized Tips', description: 'Get specific, actionable recommendations to improve your resume', stat: '12+ tips' },
    { icon: Search, title: 'Keyword Analysis', description: 'Find keywords that match your industry and target job roles', stat: '50+ keywords' },
  ];

  return (
    <div className={pageWrap}>
      <PageAtmosphere />
      <div className={container}>
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4 md:pt-8"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">AI Resume Intelligence</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Optimize Your Resume for{' '}
              <span className="brand-gradient-text">ATS & Recruiters</span>
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              Upload your resume and receive instant ATS scoring, keyword analysis, and personalized recommendations to land more interviews.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Target, text: 'ATS-Optimized' },
                { icon: Zap, text: 'Instant Analysis' },
                { icon: Sparkles, text: 'AI-Powered' },
              ].map((b) => (
                <GlassCard key={b.text} className="px-4 py-2 flex items-center gap-2 text-sm font-medium">
                  <b.icon className="w-4 h-4 text-primary" aria-hidden />
                  {b.text}
                </GlassCard>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 brand-gradient opacity-20 blur-3xl rounded-full scale-150" aria-hidden />
              <GlassCard className="p-10 relative">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden />
                <p className="text-center text-sm text-muted">Drop your resume to begin</p>
              </GlassCard>
            </div>
          </motion.div>
        </motion.section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard hover className="p-6 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl brand-gradient mb-4">
                    <Icon className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted mb-3 leading-relaxed">{f.description}</p>
                  <p className="text-xs font-semibold text-primary">{f.stat}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </section>

        {/* Upload */}
        <section className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <GlassCard className="p-2">
              <label
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={cn(
                  'block cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300',
                  dragActive
                    ? 'border-primary bg-primary-light/50 scale-[1.01]'
                    : 'border-border/60 hover:border-primary/40 hover:bg-muted-light/20'
                )}
              >
                <div className="p-12 sm:p-16 text-center">
                  <motion.div
                    animate={dragActive ? { scale: 1.05 } : { scale: 1 }}
                    className={cn(
                      'flex h-20 w-20 items-center justify-center rounded-3xl mx-auto mb-6 transition-colors',
                      dragActive ? 'bg-primary-light' : 'bg-muted-light'
                    )}
                  >
                    <Upload className={cn('h-9 w-9', dragActive ? 'text-primary' : 'text-muted')} aria-hidden />
                  </motion.div>
                  {uploadedFile ? (
                    <div>
                      <p className="text-lg font-semibold text-foreground mb-1">{uploadedFile.name}</p>
                      <p className="text-sm text-muted">Ready to analyze</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg font-semibold text-foreground mb-1">Drag and drop your resume</p>
                      <p className="text-sm text-muted">PDF, DOC, or DOCX — up to 10MB</p>
                    </div>
                  )}
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                </div>
              </label>
            </GlassCard>

            {uploadedFile && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <Button onClick={handleAnalyze} loading={analyzing} className="w-full" size="lg" icon={<Sparkles className="w-4 h-4" />}>
                  {analyzing ? 'Analyzing your resume...' : 'Analyze Resume'}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
