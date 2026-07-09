'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Show, UserButton } from '@clerk/nextjs';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { applyTheme, getPreferredTheme, type Theme } from '@/lib/theme';
import { brandGradient } from '@/lib/styles';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTheme(getPreferredTheme());

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setTheme(next);
  }, [theme]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        scrolled
          ? 'glass border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
        aria-label="Main"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 focus-ring rounded-lg"
        >
          <div
            className={cn(
              'w-8 h-8 rounded-xl flex items-center justify-center shadow-sm',
              brandGradient
            )}
          >
            <span className="text-white font-semibold text-sm">IP</span>
          </div>

          <span className="font-semibold text-base text-foreground">
            InterviewPilot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: '#features', label: 'Features' },
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#faq', label: 'FAQ' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleTheme}
            className="p-2 rounded-xl hover:bg-muted-light transition-colors focus-ring"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px] text-muted" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-muted" />
            )}
          </button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-lg focus-ring"
              >
                Sign In
              </Link>

              <Link href="/sign-up">
                <Button size="sm">Get Started</Button>
              </Link>
            </Show>

            <Show when="signed-in">
              <Link
                href="/dashboard"
                className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-lg focus-ring"
              >
                Dashboard
              </Link>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-8 h-8',
                  },
                }}
              />
            </Show>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted-light transition-colors focus-ring"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-1">
          {[
            { href: '#features', label: 'Features' },
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#faq', label: 'FAQ' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm text-muted hover:text-foreground rounded-lg hover:bg-muted-light transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Show when="signed-out">
            <div className="flex gap-2 pt-3 border-t border-border mt-2">
              <Link
                href="/sign-in"
                className="flex-1"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>

              <Link
                href="/sign-up"
                className="flex-1"
                onClick={() => setIsOpen(false)}
              >
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </Show>

          <Show when="signed-in">
            <div className="flex items-center gap-2 pt-3 border-t border-border mt-2">
              <Link
                href="/dashboard"
                className="flex-1"
                onClick={() => setIsOpen(false)}
              >
                <Button size="sm" className="w-full">
                  Dashboard
                </Button>
              </Link>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-8 h-8',
                  },
                }}
              />
            </div>
          </Show>
        </div>
      )}
    </header>
  );
}