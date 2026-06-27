'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MockInterviewPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const categories = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Technical interview for software engineering roles',
      icon: '💻',
      duration: '45 min',
      questions: 10,
      color: 'bg-blue-50 border-blue-200',
    },
    {
      id: 2,
      title: 'Product Manager',
      description: 'PM-specific questions and case studies',
      icon: '📊',
      duration: '50 min',
      questions: 8,
      color: 'bg-purple-50 border-purple-200',
    },
    {
      id: 3,
      title: 'Data Scientist',
      description: 'Data analysis and ML-focused questions',
      icon: '🤖',
      duration: '45 min',
      questions: 10,
      color: 'bg-green-50 border-green-200',
    },
    {
      id: 4,
      title: 'Business Analyst',
      description: 'Business acumen and analytical questions',
      icon: '📈',
      duration: '40 min',
      questions: 8,
      color: 'bg-orange-50 border-orange-200',
    },
    {
      id: 5,
      title: 'HR Interview',
      description: 'Behavioral and culture fit questions',
      icon: '👥',
      duration: '30 min',
      questions: 6,
      color: 'bg-pink-50 border-pink-200',
    },
    {
      id: 6,
      title: 'Design Interview',
      description: 'UI/UX design and portfolio-based questions',
      icon: '🎨',
      duration: '50 min',
      questions: 10,
      color: 'bg-indigo-50 border-indigo-200',
    },
  ];

  const difficulties = [
    { id: 'easy', label: 'Easy', description: 'Great for beginners' },
    { id: 'medium', label: 'Medium', description: 'Intermediate level' },
    { id: 'hard', label: 'Hard', description: 'Advanced challenges' },
  ];

  const previousInterviews = [
    { id: 1, title: 'Tech Interview - Round 1', score: 82, date: '2 days ago', status: 'completed' },
    { id: 2, title: 'HR Interview', score: 75, date: '1 week ago', status: 'completed' },
    { id: 3, title: 'Tech Interview - Round 2', score: 88, date: '2 weeks ago', status: 'completed' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Mock Interview</h1>
        <p className="text-gray-600">Practice interviews with AI feedback to prepare for your next opportunity.</p>
      </div>

      {/* Interview Categories */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Select Interview Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} border-2 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{category.icon}</span>
                <span className="text-xs font-medium bg-white px-2 py-1 rounded-full text-gray-700">
                  {category.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>{category.questions} questions</span>
              </div>
              <Link
                href={`/mock-interview/start?category=${category.id}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-center transition-colors duration-200"
              >
                Start Interview
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Selector */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Or Create Custom Interview</h2>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 mb-4">Select difficulty level:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedDifficulty === diff.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-bold text-foreground">{diff.label}</p>
                <p className="text-xs text-gray-600 mt-1">{diff.description}</p>
              </button>
            ))}
          </div>
          {selectedDifficulty && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200 mt-4">
              Create Custom Interview
            </button>
          )}
        </div>
      </div>

      {/* Previous Interviews */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-foreground">Previous Interviews</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {previousInterviews.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-600">
              No interviews completed yet. Start your first interview above!
            </div>
          ) : (
            previousInterviews.map((interview) => (
              <div key={interview.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{interview.title}</p>
                    <p className="text-sm text-gray-600">{interview.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{interview.score}%</p>
                        <p className="text-xs text-gray-600">Score</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
