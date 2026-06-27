import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">InterviewPilot</h1>
          <div className="flex gap-4">
            <Link
              href="/auth/login"
              className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Master Your Interviews with AI-Powered Practice
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get real-time feedback, optimize your resume, and track your progress. Practice with interviews tailored to your target roles and get personalized coaching to land your dream job.
          </p>
          <div className="flex gap-4">
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors"
            >
              Start Practicing Free
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Why InterviewPilot?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to ace your interviews and land your dream job
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <span className="text-4xl mb-4 block">🎤</span>
              <h3 className="text-xl font-bold text-foreground mb-3">Mock Interviews</h3>
              <p className="text-gray-600">
                Practice with AI-powered interviews across multiple categories: tech, PM, design, HR, and more. Get instant feedback on your responses.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <span className="text-4xl mb-4 block">📄</span>
              <h3 className="text-xl font-bold text-foreground mb-3">Resume Analyzer</h3>
              <p className="text-gray-600">
                Optimize your resume with AI analysis. Get an ATS score, identify keywords, and receive actionable recommendations to improve.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <span className="text-4xl mb-4 block">📈</span>
              <h3 className="text-xl font-bold text-foreground mb-3">Analytics & Tracking</h3>
              <p className="text-gray-600">
                Track your progress over time with detailed analytics. See performance trends and get personalized recommendations to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
            <p className="text-gray-600">Interviews Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to ace your next interview?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of job seekers who have successfully landed their dream roles with InterviewPilot.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">InterviewPilot</h4>
              <p className="text-sm">AI-powered interview preparation platform</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 InterviewPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
