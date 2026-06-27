'use client';

import { useState } from 'react';

const mockTasks = [
  {
    id: 1,
    title: 'Practice Array Problems',
    topic: 'Data Structures',
    duration: '60 min',
    priority: 'high',
    completed: true,
    dueDate: '2024-01-15',
  },
  {
    id: 2,
    title: 'System Design: Load Balancing',
    topic: 'System Design',
    duration: '90 min',
    priority: 'high',
    completed: false,
    dueDate: '2024-01-15',
  },
  {
    id: 3,
    title: 'Mock Interview - Senior Role',
    topic: 'Interview Practice',
    duration: '45 min',
    priority: 'high',
    completed: false,
    dueDate: '2024-01-15',
  },
  {
    id: 4,
    title: 'Review Weak Topics',
    topic: 'Review',
    duration: '45 min',
    priority: 'medium',
    completed: false,
    dueDate: '2024-01-16',
  },
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

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-700 border-l-4 border-red-600';
    case 'medium':
      return 'bg-yellow-100 text-yellow-700 border-l-4 border-yellow-600';
    case 'low':
      return 'bg-green-100 text-green-700 border-l-4 border-green-600';
    default:
      return 'bg-gray-100 text-gray-700 border-l-4 border-gray-600';
  }
};

export default function StudyPlannerPage() {
  const [completedTasks, setCompletedTasks] = useState(
    mockTasks.filter(t => t.completed).map(t => t.id)
  );

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const completedCount = completedTasks.length;
  const totalTasks = mockTasks.length;
  const completionPercentage = (completedCount / totalTasks) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Study Planner</h1>
        <p className="text-gray-600">Organize your interview preparation journey</p>
      </div>

      {/* Daily Progress */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Today&apos;s Progress</h2>
          <span className="text-3xl font-bold">{completedCount}/{totalTasks}</span>
        </div>
        <div className="w-full bg-blue-400 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <div className="mt-3 text-sm text-blue-100">
          {completionPercentage === 100 ? '🎉 Great job! All tasks completed!' : `${Math.round(completionPercentage)}% complete`}
        </div>
      </div>

      {/* Weekly Goals */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">This Week&apos;s Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockWeeklyGoals.map((item, idx) => (
            <div key={idx} className="bg-card-bg border border-border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-foreground">{item.goal}</h3>
                <span className="text-sm font-bold text-blue-600">{item.progress}%</span>
              </div>
              <div className="w-full bg-muted-light rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Tasks */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Today&apos;s Tasks</h2>
        <div className="space-y-3">
          {mockTasks.map(task => (
            <div
              key={task.id}
              className={`rounded-lg p-4 flex items-center gap-4 cursor-pointer transition-all ${getPriorityColor(task.priority)} ${
                completedTasks.includes(task.id) ? 'opacity-60' : ''
              }`}
            >
              <input
                type="checkbox"
                checked={completedTasks.includes(task.id)}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <div className="flex-1">
                <h3 className={`font-semibold ${completedTasks.includes(task.id) ? 'line-through' : ''}`}>
                  {task.title}
                </h3>
                <div className="flex gap-3 mt-1 text-xs opacity-75">
                  <span>{task.topic}</span>
                  <span>⏱ {task.duration}</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-white bg-opacity-30 rounded">
                {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggested Study Plan */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">✨ AI Suggested Study Plan</h2>
        <p className="text-gray-600 mb-4">Optimized daily schedule based on your goals and progress</p>
        <div className="space-y-3">
          {mockSuggestedPlan.map((slot, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white p-3 rounded-lg border border-blue-100">
              <div className="font-bold text-blue-600 min-w-[100px]">{slot.time}</div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">{slot.activity}</div>
                <div className="text-sm text-gray-600">{slot.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar View */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Calendar View</h2>
        <div className="bg-card-bg border border-border rounded-lg p-6">
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, idx) => {
              const date = idx + 1;
              const isPast = idx < 15;
              const isToday = idx === 14;
              return (
                <div
                  key={idx}
                  className={`aspect-square flex items-center justify-center rounded-lg border ${
                    isToday
                      ? 'bg-primary text-white border-primary font-bold'
                      : isPast
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-muted-light border-border'
                  }`}
                >
                  {date <= 28 ? date : ''}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors">
          Create Custom Plan
        </button>
        <button className="px-6 py-3 border border-border text-foreground hover:bg-muted-light rounded-lg font-semibold transition-colors">
          Export Schedule
        </button>
      </div>
    </div>
  );
}
