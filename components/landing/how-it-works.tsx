import { UserPlus, Zap, MessageSquare, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Create your free account and set your interview goals',
    icon: UserPlus
  },
  {
    id: 2,
    title: 'Practice',
    description: 'Take AI-powered mock interviews tailored to your role',
    icon: Zap
  },
  {
    id: 3,
    title: 'Get Feedback',
    description: 'Receive real-time AI feedback on your responses',
    icon: MessageSquare
  },
  {
    id: 4,
    title: 'Track Progress',
    description: 'Monitor improvements and refine your skills',
    icon: TrendingUp
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] right-0 h-1 bg-gradient-to-r from-primary to-transparent" />
                )}

                <div className="space-y-4">
                  {/* Step circle */}
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-lg" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Step {step.id}</p>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {step.description}
                    </p>
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
