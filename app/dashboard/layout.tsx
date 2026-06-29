'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Mic,
  History,
  FileText,
  Code2,
  BarChart3,
  BookOpen,
  Bot,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  Sun,
  Moon,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { applyTheme, getPreferredTheme, type Theme } from '@/lib/theme';
import { fieldStyles } from '@/lib/styles';

const navSections = [
  {
    label: 'Overview',
    items: [{ href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'Practice',
    items: [
      { href: '/mock-interview', label: 'Mock Interview', icon: Mic },
      { href: '/interview-history', label: 'Interview History', icon: History },
      { href: '/resume-analyzer', label: 'Resume Analyzer', icon: FileText },
      { href: '/coding-tracker', label: 'Coding Tracker', icon: Code2 },
    ],
  },
  {
    label: 'Insights',
    items: [
      { href: '/analytics', label: 'Analytics', icon: BarChart3 },
      { href: '/study-planner', label: 'Study Planner', icon: BookOpen },
      { href: '/ai-coach', label: 'AI Coach', icon: Bot },
    ],
  },
  {
    label: 'Account',
    items: [
      { href: '/profile', label: 'Profile', icon: User },
      { href: '/settings', label: 'Settings', icon: Settings },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;
    const handleScroll = () => setScrolled(main.scrollTop > 8);
    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setTheme(next);
  }, [theme]);

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <aside
        className={cn(
          'fixed lg:static inset-y-0 left-0 w-[260px] bg-sidebar border-r border-border z-40 flex flex-col transition-transform duration-300 ease-in-out',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3 px-5 h-16 border-b border-border shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl brand-gradient shadow-sm">
            <Sparkles className="h-4 w-4 text-white" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-tight text-foreground truncate">InterviewPilot</p>
            <p className="text-[10px] text-muted font-medium uppercase tracking-wider">AI Prep Platform</p>
          </div>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden ml-auto p-1.5 rounded-lg hover:bg-muted-light transition-colors focus-ring"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-muted" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted/70">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const active = isActive(item.href);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'group relative flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200',
                        active
                          ? 'bg-primary-light text-primary'
                          : 'text-muted hover:text-foreground hover:bg-muted-light'
                      )}
                    >
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 brand-gradient rounded-full" aria-hidden />
                      )}
                      <Icon className={cn('w-[18px] h-[18px] shrink-0', active ? 'text-primary' : '')} aria-hidden />
                      <span className="truncate">{item.label}</span>
                      {active && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-40 shrink-0" aria-hidden />}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-3 border-t border-border shrink-0">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-muted-light/50">
            <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center text-white text-sm font-semibold shrink-0" aria-hidden>
              U
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">User</p>
              <p className="text-xs text-muted truncate">user@example.com</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-2 w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted hover:text-foreground hover:bg-muted-light transition-colors focus-ring"
          >
            <LogOut className="w-4 h-4 shrink-0" aria-hidden />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header
          className={cn(
            'h-16 flex items-center gap-3 px-4 lg:px-6 shrink-0 border-b transition-all duration-200 z-30',
            scrolled ? 'glass border-border shadow-sm' : 'bg-background border-transparent'
          )}
        >
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted-light transition-colors focus-ring"
            aria-label="Toggle sidebar"
            aria-expanded={isSidebarOpen}
          >
            <Menu className="w-5 h-5 text-muted" />
          </button>

          <div className="hidden sm:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" aria-hidden />
              <input
                type="search"
                placeholder="Search interviews, problems..."
                className={cn('w-full pl-10 pr-16 md:pr-[4.5rem]', fieldStyles, 'bg-muted-light/50')}
                aria-label="Search"
              />
              <kbd className="hidden md:inline-flex absolute right-2.5 top-1/2 -translate-y-1/2 items-center rounded-md border border-border bg-card px-1.5 py-0.5 text-[10px] font-medium text-muted">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="flex-1 sm:hidden" />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleToggleTheme}
              className="p-2 rounded-xl hover:bg-muted-light transition-colors focus-ring"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px] text-muted" />
              ) : (
                <Moon className="w-[18px] h-[18px] text-muted" />
              )}
            </button>
            <button
              type="button"
              className="relative p-2 rounded-xl hover:bg-muted-light transition-colors focus-ring"
              aria-label="Notifications"
            >
              <Bell className="w-[18px] h-[18px] text-muted" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full ring-2 ring-background" aria-hidden />
            </button>
            <div className="w-px h-5 bg-border mx-1 hidden sm:block" aria-hidden />
            <button type="button" className="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl hover:bg-muted-light transition-colors focus-ring">
              <div className="w-8 h-8 rounded-xl brand-gradient flex items-center justify-center text-white text-xs font-semibold" aria-hidden>
                U
              </div>
              <span className="hidden md:block text-sm font-medium text-foreground">User</span>
            </button>
          </div>
        </header>

        <main id="main-content" className="flex-1 overflow-auto">
          <div className="relative min-h-full">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-glow pointer-events-none" aria-hidden />
            <div className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-8 max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-30 cursor-default"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}
    </div>
  );
}
