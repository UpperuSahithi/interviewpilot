'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Password reset requested for:', email);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to process request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mb-4 text-5xl">✓</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Check Your Email</h2>
        <p className="text-gray-600 mb-6">
          We&apos;ve sent password reset instructions to <strong>{email}</strong>
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Click the link in the email to reset your password. The link will expire in 24 hours.
        </p>
        <Link
          href="/auth/login"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Reset Password</h2>
      <p className="text-gray-600 text-sm mb-6">
        Enter your email address and we&apos;ll send you a link to reset your password.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded-lg transition-colors duration-200"
        >
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Remember your password?{' '}
        <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
          Sign In
        </Link>
      </div>
    </div>
  );
}
