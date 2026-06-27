'use client';

export default function AnalyticsPage() {
  const performanceByType = [
    { type: 'Tech Interview', score: 82, interviews: 4 },
    { type: 'HR Interview', score: 88, interviews: 3 },
    { type: 'Design Interview', score: 75, interviews: 2 },
    { type: 'PM Interview', score: 79, interviews: 2 },
  ];

  const monthlyProgress = [
    { month: 'Jan', interviews: 2, avgScore: 72 },
    { month: 'Feb', interviews: 3, avgScore: 75 },
    { month: 'Mar', interviews: 4, avgScore: 78 },
    { month: 'Apr', interviews: 5, avgScore: 80 },
    { month: 'May', interviews: 6, avgScore: 82 },
  ];

  const skillBreakdown = [
    { skill: 'Communication', score: 85 },
    { skill: 'Problem Solving', score: 78 },
    { skill: 'Technical Knowledge', score: 82 },
    { skill: 'Leadership', score: 72 },
    { skill: 'Adaptability', score: 88 },
  ];

  const topMetrics = [
    { label: 'Total Interviews', value: '18', change: '+3 this month', icon: '🎤' },
    { label: 'Average Score', value: '81%', change: '+5% improvement', icon: '⭐' },
    { label: 'Streak', value: '12 days', change: 'Keep it going!', icon: '🔥' },
    { label: 'Study Hours', value: '42h', change: '+8h this week', icon: '⏱️' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics & Performance</h1>
        <p className="text-gray-600">Track your interview preparation progress over time</p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topMetrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
              </div>
              <span className="text-3xl">{metric.icon}</span>
            </div>
            <p className="text-xs text-green-600 font-medium">{metric.change}</p>
          </div>
        ))}
      </div>

      {/* Performance Trends */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Performance Trend</h2>
        <div className="space-y-6">
          {monthlyProgress.map((data) => (
            <div key={data.month}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{data.month}</p>
                  <p className="text-xs text-gray-600">{data.interviews} interviews</p>
                </div>
                <span className="font-bold text-lg text-blue-600">{data.avgScore}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${data.avgScore}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance by Interview Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Score by Type */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">Performance by Interview Type</h3>
          <div className="space-y-4">
            {performanceByType.map((item) => (
              <div key={item.type}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{item.type}</p>
                    <p className="text-xs text-gray-600">{item.interviews} completed</p>
                  </div>
                  <span className="font-bold text-lg text-blue-600">{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">Skill Breakdown</h3>
          <div className="space-y-4">
            {skillBreakdown.map((skill) => (
              <div key={skill.skill}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">{skill.skill}</p>
                  <span className="font-bold text-sm text-blue-600">{skill.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison to Benchmarks */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">How You Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">81%</p>
            <p className="text-sm text-gray-700 mt-1">Your Average</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-700">75%</p>
            <p className="text-sm text-gray-700 mt-1">Platform Average</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">+6%</p>
            <p className="text-sm text-gray-700 mt-1">Above Average</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Recommendations</h3>
        <div className="space-y-4">
          <div className="flex gap-4 pb-4 border-b border-gray-200">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-medium text-foreground">Focus on Leadership</p>
              <p className="text-sm text-gray-600">Your lowest skill area. Try more PM interviews to practice.</p>
            </div>
          </div>
          <div className="flex gap-4 pb-4 border-b border-gray-200">
            <span className="text-2xl">📚</span>
            <div>
              <p className="font-medium text-foreground">Strengthen Technical Knowledge</p>
              <p className="text-sm text-gray-600">Complete 2-3 tech interviews this week to solidify concepts.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">🏆</span>
            <div>
              <p className="font-medium text-foreground">Maintain Your Streak</p>
              <p className="text-sm text-gray-600">You&apos;re doing great! Keep practicing daily for best results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Section */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
          Export Report (PDF)
        </button>
      </div>
    </div>
  );
}
