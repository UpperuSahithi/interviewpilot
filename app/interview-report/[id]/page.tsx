'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockReports: Record<string, any> = {
  '1': {
    id: 1,
    role: 'Senior Software Engineer',
    date: '2024-01-15',
    overallScore: 87,
    duration: '45 min',
    questionCount: 5,
    technical: 85,
    communication: 89,
    confidence: 86,
    questions: [
      {
        number: 1,
        text: 'Tell me about yourself and your background.',
        type: 'Behavioral',
        score: 90,
        feedback: 'Great introduction with clear career progression. Good storytelling.',
      },
      {
        number: 2,
        text: 'How would you design a URL shortening service?',
        type: 'System Design',
        score: 82,
        feedback: 'Good system design approach. Consider more scalability details.',
      },
      {
        number: 3,
        text: 'What are the pros and cons of microservices?',
        type: 'Technical',
        score: 88,
        feedback: 'Comprehensive answer with good trade-off analysis.',
      },
      {
        number: 4,
        text: 'Describe a challenging project you led.',
        type: 'Behavioral',
        score: 85,
        feedback: 'Good STAR method usage. Show more measurable impact.',
      },
      {
        number: 5,
        text: 'How do you handle disagreements with team members?',
        type: 'Behavioral',
        score: 87,
        feedback: 'Thoughtful response showing collaboration and communication.',
      },
    ],
    strengths: [
      'Clear and articulate communication',
      'Strong system design knowledge',
      'Good technical depth',
      'Demonstrates leadership experience',
    ],
    weaknesses: [
      'Could provide more specific metrics',
      'Limited discussion of edge cases',
      'Could elaborate on team conflict resolution',
    ],
    recommendations: [
      'Practice system design with more complex scenarios',
      'Prepare quantifiable metrics for project impact',
      'Work on handling pressure with thoughtful pauses',
      'Study advanced architectural patterns',
    ],
  },
  '2': {
    id: 2,
    role: 'Product Manager',
    date: '2024-01-14',
    overallScore: 92,
    duration: '50 min',
    questionCount: 4,
    technical: 90,
    communication: 94,
    confidence: 92,
    questions: [
      {
        number: 1,
        text: 'Walk me through your product strategy.',
        type: 'Product Sense',
        score: 92,
        feedback: 'Excellent product thinking with clear market analysis.',
      },
      {
        number: 2,
        text: 'How would you improve Instagram?',
        type: 'Product Design',
        score: 93,
        feedback: 'Creative ideas backed by user research and data.',
      },
      {
        number: 3,
        text: 'Tell me about a product failure.',
        type: 'Behavioral',
        score: 91,
        feedback: 'Good learning and accountability shown.',
      },
      {
        number: 4,
        text: 'How do you prioritize features?',
        type: 'Product Sense',
        score: 92,
        feedback: 'Strong framework with good trade-off analysis.',
      },
    ],
    strengths: [
      'Excellent analytical skills',
      'Strong product vision',
      'User-focused thinking',
      'Clear communication',
      'Data-driven approach',
    ],
    weaknesses: [
      'Could consider more edge cases',
    ],
    recommendations: [
      'Continue building on competitive analysis skills',
      'Study more about AI/ML in product strategy',
    ],
  },
};

export default function InterviewReportPage({ params }: { params: { id: string } }) {
  const report = mockReports[params.id];
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  if (!report) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Interview Not Found</h1>
        <Link href="/interview-history" className="text-primary hover:text-primary-dark">
          Back to Interview History
        </Link>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link href="/interview-history" className="text-primary hover:text-primary-dark mb-4 inline-block">
          ← Back to Interview History
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">{report.role}</h1>
        <div className="text-gray-600">
          {new Date(report.date).toLocaleDateString()} • {report.duration} • {report.questionCount} questions
        </div>
      </div>

      {/* Overall Score Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">{report.overallScore}%</h2>
            <p className="text-blue-100">Overall Performance</p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">{report.technical}</div>
              <div className="text-sm text-blue-100">Technical</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">{report.communication}</div>
              <div className="text-sm text-blue-100">Communication</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">{report.confidence}</div>
              <div className="text-sm text-blue-100">Confidence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strengths */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 text-lg">Strengths</h3>
          <ul className="space-y-2">
            {report.strengths.map((strength: string, idx: number) => (
              <li key={idx} className="flex gap-2 text-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 text-lg">Areas to Improve</h3>
          <ul className="space-y-2">
            {report.weaknesses.map((weakness: string, idx: number) => (
              <li key={idx} className="flex gap-2 text-sm">
                <span className="text-yellow-600 font-bold">!</span>
                <span className="text-gray-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 text-lg">Recommendations</h3>
          <ul className="space-y-2">
            {report.recommendations.map((rec: string, idx: number) => (
              <li key={idx} className="flex gap-2 text-sm">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Question Breakdown */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Question Breakdown</h2>
        <div className="space-y-3">
          {report.questions.map((q: any) => (
            <div
              key={q.number}
              className="bg-card-bg border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedQuestion(expandedQuestion === q.number ? null : q.number)}
                className="w-full p-4 hover:bg-muted-light transition-colors text-left flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {q.number}
                    </span>
                    <span className="font-semibold text-foreground">{q.text}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Type: {q.type} • Score: <span className={`font-bold ${getScoreColor(q.score)}`}>{q.score}%</span>
                  </div>
                </div>
                <div className="text-gray-400">{expandedQuestion === q.number ? '−' : '+'}</div>
              </button>

              {expandedQuestion === q.number && (
                <div className="border-t border-border px-4 py-4 bg-muted-light text-sm text-gray-700">
                  <h4 className="font-semibold text-foreground mb-2">AI Feedback</h4>
                  <p>{q.feedback}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Link
          href="/mock-interview"
          className="flex-1 py-3 px-6 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-center transition-colors"
        >
          Practice Again
        </Link>
        <Link
          href="/interview-history"
          className="flex-1 py-3 px-6 border border-border text-foreground hover:bg-muted-light rounded-lg font-semibold text-center transition-colors"
        >
          Back to History
        </Link>
      </div>
    </div>
  );
}
