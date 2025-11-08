import { SunIcon, MoonIcon } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

function ThemeSelector() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button
      onClick={toggleTheme}
      className="icon-btn"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="size-5" />
      ) : (
        <SunIcon className="size-5" />
      )}
    </button>
  );
}
export default ThemeSelector;
