export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">InterviewPilot</h1>
            <p className="text-sm text-gray-600 mt-1">AI-Powered Interview Preparation</p>
          </div>
          {children}
        </div>
      </div>

      {/* Right side - Brand messaging (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-900 items-center justify-center p-8">
        <div className="text-white text-center max-w-md">
          <h2 className="text-4xl font-bold mb-6">Master Your Interviews</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>AI-powered mock interviews</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Resume optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Real-time feedback</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Performance analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
