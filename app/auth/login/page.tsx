'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login attempt:', { email, password, rememberMe });
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Sign In</h2>
        <p className="text-sm text-muted mt-1">Welcome back! Enter your credentials.</p>
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

        <Input
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
        />

        <div className="flex items-center">
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
          />
          <label htmlFor="rememberMe" className="ml-2.5 text-sm text-muted">
            Remember me
          </label>
        </div>

        <Button type="submit" loading={isLoading} className="w-full" icon={!isLoading ? <LogIn className="w-4 h-4" /> : undefined}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6 space-y-3 text-center text-sm">
        <div>
          <Link href="/auth/forgot-password" className="text-primary hover:text-primary-dark font-medium transition-colors">
            Forgot your password?
          </Link>
        </div>
        <div className="text-muted">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-primary hover:text-primary-dark font-medium transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
