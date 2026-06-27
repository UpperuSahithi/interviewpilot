'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.style.colorScheme = 'dark';
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.style.colorScheme = 'light';
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IP</span>
            </div>
            <span className="font-bold text-xl text-foreground">InterviewPilot</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-muted-light rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-muted" />
              ) : (
                <Moon className="w-5 h-5 text-muted" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted-light rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a
              href="#features"
              className="block px-4 py-2 text-muted hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-4 py-2 text-muted hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block px-4 py-2 text-muted hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block px-4 py-2 text-muted hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="flex gap-3 pt-3">
              <Link
                href="/auth/login"
                className="flex-1 px-4 py-2 text-center text-foreground hover:bg-muted-light rounded-lg transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="flex-1 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-center rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
