'use client';

export default function ProfilePage() {
  const badges = [
    { name: 'Quick Learner', icon: '⚡', description: 'Completed 10 interviews in 1 week' },
    { name: 'Consistent', icon: '🔥', description: '7-day practice streak' },
    { name: 'Tech Master', icon: '💻', description: 'Scored 85%+ on tech interviews' },
    { name: 'Communication Expert', icon: '💬', description: 'Top communication score' },
  ];

  const recentInterviews = [
    { title: 'Tech Interview - Round 1', score: 82, date: '2 days ago' },
    { title: 'HR Interview', score: 75, date: '1 week ago' },
    { title: 'Tech Interview - Round 2', score: 88, date: '2 weeks ago' },
    { title: 'PM Interview', score: 79, date: '2 weeks ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div className="px-6 pb-6">
          <div className="flex items-end gap-6 -mt-16 mb-6">
            <div className="w-24 h-24 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-4xl font-bold text-white">
              JD
            </div>
            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
              <p className="text-gray-600">Software Engineer | Aspiring Product Manager</p>
            </div>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
              Edit Profile
            </button>
          </div>

          <div className="flex gap-8 mb-6 pb-6 border-b border-gray-200">
            <div>
              <p className="text-gray-600 text-sm">Location</p>
              <p className="font-medium text-foreground">San Francisco, CA</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Member Since</p>
              <p className="font-medium text-foreground">January 2024</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Bio</p>
              <p className="font-medium text-foreground">Passionate about building great products</p>
            </div>
          </div>

          {/* Share Profile */}
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              Share Profile
            </button>
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-gray-600 text-sm mb-1">Interviews Completed</p>
          <p className="text-3xl font-bold text-blue-600">18</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-gray-600 text-sm mb-1">Average Score</p>
          <p className="text-3xl font-bold text-green-600">81%</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-gray-600 text-sm mb-1">Resumes Analyzed</p>
          <p className="text-3xl font-bold text-purple-600">5</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-gray-600 text-sm mb-1">Current Streak</p>
          <p className="text-3xl font-bold text-orange-600">12 days</p>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Achievement Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <span className="text-4xl mb-2 block">{badge.icon}</span>
              <h3 className="font-bold text-foreground mb-1">{badge.name}</h3>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interview History */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Interview History</h2>
        <div className="space-y-4">
          {recentInterviews.map((interview, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-1">
                <p className="font-medium text-foreground">{interview.title}</p>
                <p className="text-sm text-gray-600">{interview.date}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{interview.score}%</div>
                <p className="text-xs text-gray-600">Score</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Top Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'System Design', 'Problem Solving', 'Communication', 'Leadership', 'Data Structures', 'Project Management'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
