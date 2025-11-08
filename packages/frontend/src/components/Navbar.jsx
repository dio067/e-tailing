import { Link, useResolvedPath } from 'react-router-dom';
import { TagIcon } from 'lucide-react';
import { useProductStore } from '../store/useProductStore';
import ThemeSelector from './ThemeSelector';

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === '/';
  const products = useProductStore((s) => s.products);

  return (
    <div className="sticky top-0 z-40 bg-paper/90 dark:bg-ink/90 backdrop-blur border-b border-line dark:border-white/10">
      {' '}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <TagIcon className="size-6 text-primary" />
          <span className="font-display text-xl tracking-tight">E-Tailing</span>
        </Link>
        <div className="flex items-center gap-2">
          {isHomePage && (
            <span className="font-mono text-xs text-ink-soft border border-line rounded-full px-3 py-1">
              {products.length} item{products.length !== 1 ? 's' : ''}
            </span>
          )}
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
