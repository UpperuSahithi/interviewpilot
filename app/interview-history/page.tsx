'use client';

import Link from 'next/link';
import { useState } from 'react';

const mockInterviews = [
  {
    id: 1,
    date: '2024-01-15',
    role: 'Senior Software Engineer',
    score: 87,
    difficulty: 'Hard',
    status: 'completed',
    type: 'Behavioral',
  },
  {
    id: 2,
    date: '2024-01-14',
    role: 'Product Manager',
    score: 92,
    difficulty: 'Medium',
    status: 'completed',
    type: 'Technical',
  },
  {
    id: 3,
    date: '2024-01-13',
    role: 'Data Scientist',
    score: 78,
    difficulty: 'Hard',
    status: 'completed',
    type: 'Technical',
  },
  {
    id: 4,
    date: '2024-01-12',
    role: 'Frontend Engineer',
    score: 85,
    difficulty: 'Medium',
    status: 'completed',
    type: 'Technical',
  },
  {
    id: 5,
    date: '2024-01-11',
    role: 'UX Designer',
    score: 81,
    difficulty: 'Easy',
    status: 'completed',
    type: 'Behavioral',
  },
  {
    id: 6,
    date: '2024-01-10',
    role: 'DevOps Engineer',
    score: 88,
    difficulty: 'Hard',
    status: 'completed',
    type: 'Technical',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-600 bg-green-50';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'Hard':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 85) return 'text-green-600';
  if (score >= 70) return 'text-yellow-600';
  return 'text-red-600';
};

export default function InterviewHistoryPage() {
  const [sortBy, setSortBy] = useState<'date' | 'score'>('date');

  const sortedInterviews = [...mockInterviews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.score - a.score;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Interview History</h1>
        <p className="text-gray-600">Review your past interviews and track your progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card-bg border border-border rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Total Interviews</div>
          <div className="text-2xl font-bold text-foreground">{mockInterviews.length}</div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Average Score</div>
          <div className="text-2xl font-bold text-foreground">
            {(mockInterviews.reduce((sum, i) => sum + i.score, 0) / mockInterviews.length).toFixed(1)}
          </div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Best Score</div>
          <div className="text-2xl font-bold text-green-600">
            {Math.max(...mockInterviews.map(i => i.score))}
          </div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Improvement</div>
          <div className="text-2xl font-bold text-blue-600">+8%</div>
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by role..."
            className="px-4 py-2 border border-border rounded-lg bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'score')}
            className="px-4 py-2 border border-border rounded-lg bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="date">Sort by Date</option>
            <option value="score">Sort by Score</option>
          </select>
        </div>
      </div>

      {/* Interview List */}
      <div className="space-y-3">
        {sortedInterviews.map((interview) => (
          <div
            key={interview.id}
            className="bg-card-bg border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{interview.role}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                  <span>📅 {new Date(interview.date).toLocaleDateString()}</span>
                  <span>📝 {interview.type}</span>
                  <span className={`px-2 py-1 rounded ${getDifficultyColor(interview.difficulty)}`}>
                    {interview.difficulty}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getScoreColor(interview.score)}`}>
                    {interview.score}
                  </div>
                  <div className="text-xs text-gray-600">Score</div>
                </div>

                <Link
                  href={`/interview-report/${interview.id}`}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
                >
                  View Report
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
