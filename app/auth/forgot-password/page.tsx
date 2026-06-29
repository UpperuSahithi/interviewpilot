'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

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
      <div className="text-center animate-fade-in">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success-light mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-success" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">Check Your Email</h2>
        <p className="text-muted mb-2">
          We&apos;ve sent password reset instructions to <strong className="text-foreground">{email}</strong>
        </p>
        <p className="text-sm text-muted/70 mb-8">
          Click the link in the email to reset your password. The link will expire in 24 hours.
        </p>
        <Link href="/auth/login">
          <Button variant="primary">Back to Sign In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Reset Password</h2>
        <p className="text-sm text-muted mt-1">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {error && <Alert className="mb-4">{error}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email Address"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
        />

        <Button type="submit" loading={isLoading} className="w-full" icon={!isLoading ? <Mail className="w-4 h-4" /> : undefined}>
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-muted">
        Remember your password?{' '}
        <Link href="/auth/login" className="text-primary hover:text-primary-dark font-medium transition-colors">
          Sign In
        </Link>
      </div>
    </div>
  );
}
