import { Zap, BarChart3, Brain, Target, BookOpen, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'AI Mock Interviews',
    description: 'Practice with AI-powered interviews across tech, product management, design, and more.',
    icon: Zap,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Resume Analyzer',
    description: 'Get an ATS score, keyword analysis, and actionable improvements for your resume.',
    icon: Target,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 3,
    title: 'Coding Tracker',
    description: 'Track your progress through coding problems and weak areas to focus on.',
    icon: BarChart3,
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 4,
    title: 'Performance Analytics',
    description: 'Visualize your progress over time with detailed performance metrics and trends.',
    icon: Brain,
    color: 'from-green-400 to-green-600'
  },
  {
    id: 5,
    title: 'Study Planner',
    description: 'Get personalized study recommendations based on your goals and current level.',
    icon: BookOpen,
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 6,
    title: 'AI Career Coach',
    description: 'Receive personalized guidance and tips from your AI career coach.',
    icon: Users,
    color: 'from-pink-400 to-pink-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything you need to master interviews and land your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-card-bg border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
