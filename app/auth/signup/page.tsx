'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return 'No password';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'from-red-500 to-red-400';
    if (passwordStrength === 2) return 'from-amber-500 to-amber-400';
    if (passwordStrength === 3) return 'from-blue-500 to-blue-400';
    return 'from-emerald-500 to-emerald-400';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!agreedToTerms) {
      setError('Please agree to the terms of service');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Sign up attempt:', { name: formData.name, email: formData.email });
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Create Account</h2>
        <p className="text-sm text-muted mt-1">Join InterviewPilot to get started</p>
      </div>

      {error && <Alert className="mb-4">{error}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Full Name" id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" />
        <Input label="Email Address" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="you@example.com" />

        <div>
          <Input label="Password" id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} required placeholder="••••••••" />
          {formData.password && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">Password strength</span>
                <span className="text-xs font-medium text-muted">{getPasswordStrengthText()}</span>
              </div>
              <div className="h-1.5 bg-muted-light rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getStrengthColor()} transition-all duration-300 rounded-full`}
                  style={{ width: `${(passwordStrength / 4) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <Input label="Confirm Password" id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required placeholder="••••••••" />

        <div className="flex items-start gap-2.5">
          <input
            id="terms"
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30 mt-0.5"
          />
          <label htmlFor="terms" className="text-sm text-muted leading-relaxed">
            I agree to the{' '}
            <a href="#" className="text-primary hover:text-primary-dark font-medium">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:text-primary-dark font-medium">Privacy Policy</a>
          </label>
        </div>

        <Button type="submit" loading={isLoading} className="w-full" icon={!isLoading ? <UserPlus className="w-4 h-4" /> : undefined}>
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-muted">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-primary hover:text-primary-dark font-medium transition-colors">
          Sign In
        </Link>
      </div>
    </div>
  );
}
