'use client';

import { useState } from 'react';

const mockProblems = [
  {
    id: 1,
    problem: 'Two Sum',
    topic: 'Array',
    difficulty: 'Easy',
    company: 'Google, Amazon',
    status: 'solved',
    dateSolved: '2024-01-15',
    notes: 'Use hash map for O(n) solution',
  },
  {
    id: 2,
    problem: 'Longest Substring Without Repeating Characters',
    topic: 'String',
    difficulty: 'Medium',
    company: 'Google, Adobe',
    status: 'solved',
    dateSolved: '2024-01-14',
    notes: 'Sliding window approach works well',
  },
  {
    id: 3,
    problem: 'Binary Tree Level Order Traversal',
    topic: 'Tree',
    difficulty: 'Medium',
    company: 'Microsoft, Apple',
    status: 'solved',
    dateSolved: '2024-01-13',
    notes: 'BFS with queue',
  },
  {
    id: 4,
    problem: 'Merge K Sorted Lists',
    topic: 'Linked List',
    difficulty: 'Hard',
    company: 'Amazon, Google',
    status: 'attempted',
    dateSolved: null,
    notes: 'Need to review merge logic',
  },
  {
    id: 5,
    problem: 'Word Ladder',
    topic: 'Graph',
    difficulty: 'Hard',
    company: 'Google, Facebook',
    status: 'todo',
    dateSolved: null,
    notes: '',
  },
  {
    id: 6,
    problem: 'Valid Parentheses',
    topic: 'Stack',
    difficulty: 'Easy',
    company: 'Google, Amazon',
    status: 'solved',
    dateSolved: '2024-01-12',
    notes: 'Classic stack problem',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-700';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'Hard':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'solved':
      return 'bg-green-50 text-green-700';
    case 'attempted':
      return 'bg-yellow-50 text-yellow-700';
    case 'todo':
      return 'bg-gray-50 text-gray-700';
    default:
      return 'bg-gray-50 text-gray-700';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'solved':
      return '✓';
    case 'attempted':
      return '○';
    case 'todo':
      return '−';
    default:
      return '?';
  }
};

export default function CodingTrackerPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const solvedCount = mockProblems.filter(p => p.status === 'solved').length;
  const attemptedCount = mockProblems.filter(p => p.status === 'attempted').length;
  const totalCount = mockProblems.length;

  const topics = [...new Set(mockProblems.map(p => p.topic))];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  let filteredProblems = mockProblems;
  if (selectedTopic) {
    filteredProblems = filteredProblems.filter(p => p.topic === selectedTopic);
  }
  if (selectedDifficulty) {
    filteredProblems = filteredProblems.filter(p => p.difficulty === selectedDifficulty);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Coding Tracker</h1>
        <p className="text-gray-600">Track your problem-solving progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card-bg border border-border rounded-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Total Problems</div>
          <div className="text-3xl font-bold text-foreground">{totalCount}</div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Solved</div>
          <div className="text-3xl font-bold text-green-600">{solvedCount}</div>
          <div className="text-xs text-gray-500 mt-2">
            {((solvedCount / totalCount) * 100).toFixed(0)}% completion
          </div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Current Streak</div>
          <div className="text-3xl font-bold text-blue-600">12 days</div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Attempted</div>
          <div className="text-3xl font-bold text-yellow-600">{attemptedCount}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card-bg border border-border rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Topic</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTopic(null)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTopic === null
                    ? 'bg-primary text-white'
                    : 'bg-muted-light text-foreground hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {topics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTopic === topic
                      ? 'bg-primary text-white'
                      : 'bg-muted-light text-foreground hover:bg-gray-300'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Difficulty</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDifficulty(null)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedDifficulty === null
                    ? 'bg-primary text-white'
                    : 'bg-muted-light text-foreground hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedDifficulty === diff
                      ? 'bg-primary text-white'
                      : 'bg-muted-light text-foreground hover:bg-gray-300'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Problems Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted-light">
              <th className="text-left px-4 py-3 font-semibold text-foreground">Problem</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Topic</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Difficulty</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Company</th>
              <th className="text-center px-4 py-3 font-semibold text-foreground">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Date Solved</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map(problem => (
              <tr key={problem.id} className="border-b border-border hover:bg-muted-light transition-colors">
                <td className="px-4 py-4 font-medium text-foreground">{problem.problem}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{problem.topic}</td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{problem.company}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${getStatusColor(problem.status)}`}>
                    {getStatusIcon(problem.status)}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  {problem.dateSolved ? new Date(problem.dateSolved).toLocaleDateString() : '−'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Problem Button */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors">
          Add Problem
        </button>
        <button className="px-6 py-3 border border-border text-foreground hover:bg-muted-light rounded-lg font-semibold transition-colors">
          Export Progress
        </button>
      </div>
    </div>
  );
}
