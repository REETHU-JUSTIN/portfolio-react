import { useEffect, useState } from 'react';

/**
 * Dark / light theme with persistence.
 * - Stores the choice in localStorage under "rj-theme".
 * - Applies/removes the `.dark` class on <html>, which flips every
 *   CSS variable defined in index.css (and therefore every Tailwind color).
 * - Defaults to dark.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('rj-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('rj-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
