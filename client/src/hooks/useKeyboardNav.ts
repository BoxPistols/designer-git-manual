import { useEffect } from 'react';
import { useLocation } from 'wouter';
import {
  getNextPage,
  getPreviousPage,
  getNextSectionFirstPage,
  getPrevSectionFirstPage,
} from '@/lib/navigation';

export function useKeyboardNav() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      // Cmd+K (Mac) / Ctrl+K (Win) → 検索フォーカス
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('focus-search'));
        return;
      }

      // input / textarea にフォーカス中はナビショートカットを無視
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      // Ctrl + ↑↓ でページ / セクション移動
      if (e.ctrlKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();

        if (e.shiftKey) {
          // Shift+Ctrl+↑↓ → セクション単位移動
          const target =
            e.key === 'ArrowDown'
              ? getNextSectionFirstPage(location)
              : getPrevSectionFirstPage(location);
          if (target) setLocation(target.path);
        } else {
          // Ctrl+↑↓ → ページ単位移動
          const target =
            e.key === 'ArrowDown'
              ? getNextPage(location)
              : getPreviousPage(location);
          if (target) setLocation(target.path);
        }
      }
    }

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [location, setLocation]);
}
