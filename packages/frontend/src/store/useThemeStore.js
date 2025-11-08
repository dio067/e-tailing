import { create } from 'zustand';

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

const initial = localStorage.getItem('theme') || 'light';
applyTheme(initial);

export const useThemeStore = create((set) => ({
  theme: initial,
  toggleTheme: () =>
    set((s) => {
      const next = s.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      applyTheme(next);
      return { theme: next };
    }),
}));
