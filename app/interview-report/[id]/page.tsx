'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertTriangle, ArrowRight, ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const mockReports: Record<string, any> = {
  '1': {
    id: 1, role: 'Senior Software Engineer', date: '2024-01-15', overallScore: 87, duration: '45 min', questionCount: 5,
    technical: 85, communication: 89, confidence: 86,
    questions: [
      { number: 1, text: 'Tell me about yourself and your background.', type: 'Behavioral', score: 90, feedback: 'Great introduction with clear career progression. Good storytelling.' },
      { number: 2, text: 'How would you design a URL shortening service?', type: 'System Design', score: 82, feedback: 'Good system design approach. Consider more scalability details.' },
      { number: 3, text: 'What are the pros and cons of microservices?', type: 'Technical', score: 88, feedback: 'Comprehensive answer with good trade-off analysis.' },
      { number: 4, text: 'Describe a challenging project you led.', type: 'Behavioral', score: 85, feedback: 'Good STAR method usage. Show more measurable impact.' },
      { number: 5, text: 'How do you handle disagreements with team members?', type: 'Behavioral', score: 87, feedback: 'Thoughtful response showing collaboration and communication.' },
    ],
    strengths: ['Clear and articulate communication', 'Strong system design knowledge', 'Good technical depth', 'Demonstrates leadership experience'],
    weaknesses: ['Could provide more specific metrics', 'Limited discussion of edge cases', 'Could elaborate on team conflict resolution'],
    recommendations: ['Practice system design with more complex scenarios', 'Prepare quantifiable metrics for project impact', 'Work on handling pressure with thoughtful pauses', 'Study advanced architectural patterns'],
  },
  '2': {
    id: 2, role: 'Product Manager', date: '2024-01-14', overallScore: 92, duration: '50 min', questionCount: 4,
    technical: 90, communication: 94, confidence: 92,
    questions: [
      { number: 1, text: 'Walk me through your product strategy.', type: 'Product Sense', score: 92, feedback: 'Excellent product thinking with clear market analysis.' },
      { number: 2, text: 'How would you improve Instagram?', type: 'Product Design', score: 93, feedback: 'Creative ideas backed by user research and data.' },
      { number: 3, text: 'Tell me about a product failure.', type: 'Behavioral', score: 91, feedback: 'Good learning and accountability shown.' },
      { number: 4, text: 'How do you prioritize features?', type: 'Product Sense', score: 92, feedback: 'Strong framework with good trade-off analysis.' },
    ],
    strengths: ['Excellent analytical skills', 'Strong product vision', 'User-focused thinking', 'Clear communication', 'Data-driven approach'],
    weaknesses: ['Could consider more edge cases'],
    recommendations: ['Continue building on competitive analysis skills', 'Study more about AI/ML in product strategy'],
  },
};

export default function InterviewReportPage({ params }: { params: { id: string } }) {
  const report = mockReports[params.id];
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  if (!report) {
    return (
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground">Interview Not Found</h1>
        <Link href="/interview-history" className="text-primary hover:text-primary-dark transition-colors">
          Back to Interview History
        </Link>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-success';
    if (score >= 70) return 'text-warning';
    return 'text-danger';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <Link href="/interview-history" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Interview History
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">{report.role}</h1>
        <p className="text-muted text-sm">
          {new Date(report.date).toLocaleDateString()} • {report.duration} • {report.questionCount} questions
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-5xl font-bold mb-1">{report.overallScore}%</h2>
            <p className="text-white/70">Overall Performance</p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { label: 'Technical', value: report.technical },
              { label: 'Communication', value: report.communication },
              { label: 'Confidence', value: report.confidence },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-success/20 bg-success-light/20">
          <CardHeader className="mb-4 flex-row items-center gap-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <CardTitle className="text-base">Strengths</CardTitle>
          </CardHeader>
          <ul className="space-y-2">
            {report.strengths.map((s: string, idx: number) => (
              <li key={idx} className="flex gap-2 text-sm text-muted">
                <span className="text-success shrink-0">✓</span>{s}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-warning/20 bg-warning-light/20">
          <CardHeader className="mb-4 flex-row items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <CardTitle className="text-base">Areas to Improve</CardTitle>
          </CardHeader>
          <ul className="space-y-2">
            {report.weaknesses.map((w: string, idx: number) => (
              <li key={idx} className="flex gap-2 text-sm text-muted">
                <span className="text-warning shrink-0">!</span>{w}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-primary/20 bg-primary-light/20">
          <CardHeader className="mb-4 flex-row items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <CardTitle className="text-base">Recommendations</CardTitle>
          </CardHeader>
          <ul className="space-y-2">
            {report.recommendations.map((r: string, idx: number) => (
              <li key={idx} className="flex gap-2 text-sm text-muted">
                <span className="text-primary shrink-0">→</span>{r}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Question Breakdown</h2>
        <div className="space-y-2">
          {report.questions.map((q: any) => (
            <Card key={q.number} padding="none" className="overflow-hidden">
              <button
                onClick={() => setExpandedQuestion(expandedQuestion === q.number ? null : q.number)}
                className="w-full p-4 hover:bg-muted-light/30 transition-colors text-left flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white text-sm font-bold">
                      {q.number}
                    </span>
                    <span className="font-medium text-foreground text-sm truncate">{q.text}</span>
                  </div>
                  <div className="mt-2 ml-11 text-xs text-muted">
                    {q.type} • Score: <span className={cn('font-bold', getScoreColor(q.score))}>{q.score}%</span>
                  </div>
                </div>
                <ChevronDown className={cn('w-4 h-4 text-muted shrink-0 transition-transform', expandedQuestion === q.number && 'rotate-180')} />
              </button>
              {expandedQuestion === q.number && (
                <div className="border-t border-border px-4 py-4 bg-muted-light/20">
                  <h4 className="font-semibold text-foreground text-sm mb-2">AI Feedback</h4>
                  <p className="text-sm text-muted">{q.feedback}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/mock-interview" className="flex-1">
          <Button className="w-full">Practice Again</Button>
        </Link>
        <Link href="/interview-history" className="flex-1">
          <Button variant="outline" className="w-full">Back to History</Button>
        </Link>
      </div>
    </div>
  );
}
