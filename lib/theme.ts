export type Theme = 'light' | 'dark';

export function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem('theme', theme);
}

export function toggleTheme(): Theme {
  const next = getPreferredTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}
