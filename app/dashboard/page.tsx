'use client';

import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    { label: 'Interviews Completed', value: '12', icon: '🎤', color: 'bg-blue-50' },
    { label: 'Average Score', value: '78%', icon: '⭐', color: 'bg-green-50' },
    { label: 'Resumes Analyzed', value: '5', icon: '📄', color: 'bg-purple-50' },
    { label: 'Streak', value: '7 days', icon: '🔥', color: 'bg-orange-50' },
  ];

  const recentActivity = [
    { title: 'Completed Tech Interview', date: '2 hours ago', type: 'interview' },
    { title: 'Analyzed Resume - v3.pdf', date: '1 day ago', type: 'resume' },
    { title: 'Completed HR Interview', date: '3 days ago', type: 'interview' },
    { title: 'Analyzed Resume - v2.pdf', date: '1 week ago', type: 'resume' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
        <p className="text-gray-600">Ready to ace your next interview? Here&apos;s your progress.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} rounded-lg p-6 border border-gray-200`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/mock-interview"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 transition-colors duration-200 flex flex-col items-center justify-center text-center gap-3"
        >
          <span className="text-4xl">🎤</span>
          <div>
            <h3 className="font-bold text-lg">Start Mock Interview</h3>
            <p className="text-blue-100 text-sm">Practice for your next interview</p>
          </div>
        </Link>

        <Link
          href="/resume-analyzer"
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-6 transition-colors duration-200 flex flex-col items-center justify-center text-center gap-3"
        >
          <span className="text-4xl">📄</span>
          <div>
            <h3 className="font-bold text-lg">Analyze Resume</h3>
            <p className="text-purple-100 text-sm">Optimize your resume with AI</p>
          </div>
        </Link>

        <Link
          href="/analytics"
          className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-6 transition-colors duration-200 flex flex-col items-center justify-center text-center gap-3"
        >
          <span className="text-4xl">📈</span>
          <div>
            <h3 className="font-bold text-lg">View Analytics</h3>
            <p className="text-green-100 text-sm">Track your progress over time</p>
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">
                    {activity.type === 'interview' ? '🎤' : '📄'}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}
