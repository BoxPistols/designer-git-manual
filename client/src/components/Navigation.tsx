import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown, Menu, X, Search, Sun, Moon } from 'lucide-react';
import { pages, getPageByPath } from '@/lib/navigation';
import { useOS } from '@/contexts/OSContext';
import { useTheme } from '@/contexts/ThemeContext';
import { searchShortcutLabel } from '@/lib/keyLabels';

const sections = [
  {
    id: 'intro',
    title: 'はじめに',
    href: '/',
  },
  {
    id: 'environment',
    title: '環境準備',
    subsections: [
      { title: '前提知識', href: '/environment/prerequisites' },
      { title: 'Cursor インストール', href: '/environment/cursor' },
      { title: 'Git インストール', href: '/environment/git' },
      { title: 'Node.js インストール', href: '/environment/nodejs' },
    ],
  },
  {
    id: 'github-basics',
    title: 'GitHub 基礎',
    subsections: [
      { title: 'GitHub アカウント作成', href: '/github/account' },
      { title: 'Git ローカル設定', href: '/github/setup' },
      { title: '最初のリポジトリ作成', href: '/github/first-repo' },
      { title: 'Markdown 入門', href: '/github/markdown' },
    ],
  },
  {
    id: 'git-workflow',
    title: 'Git ワークフロー実践',
    subsections: [
      { title: 'ファイル作成と Commit', href: '/workflow/commit' },
      { title: 'Push と Pull', href: '/workflow/push-pull' },
      { title: '差分・履歴確認', href: '/workflow/history' },
      { title: 'ブランチの基本', href: '/workflow/branch' },
    ],
  },
  {
    id: 'react-practice',
    title: 'React 実践',
    subsections: [
      { title: 'React 開発環境セットアップ', href: '/react/setup' },
      { title: 'デザイン変更と Git 管理', href: '/react/modify' },
    ],
  },
  {
    id: 'advanced-setup',
    title: '実践的な環境構築',
    subsections: [
      { title: 'WSL2 導入', href: '/advanced/wsl2' },
      { title: 'WSL2 での SSH キー接続', href: '/advanced/wsl2-ssh' },
      { title: 'GitHub CLI 導入', href: '/advanced/github-cli' },
      { title: 'Linux/Ubuntu 基礎', href: '/advanced/linux-basics' },
      { title: 'VSCode 導入', href: '/advanced/vscode' },
      { title: '開発環境の統合確認', href: '/advanced/integration' },
    ],
  },
  {
    id: 'ai-agent',
    title: 'AI エージェント連携',
    subsections: [
      { title: 'AI コーディング環境の全体像', href: '/ai-agent/overview' },
      { title: 'Claude Code 導入', href: '/ai-agent/claude-code-setup' },
      { title: 'Claude Code 基本操作', href: '/ai-agent/claude-code-basics' },
      { title: 'Cursor + Cline 導入', href: '/ai-agent/cursor-cline' },
      { title: '予備ツール（Gemini / Warp / Antigravity）', href: '/ai-agent/sub-tools' },
    ],
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { selectedOS } = useOS();
  const { theme, toggleTheme } = useTheme();
  const isMac = selectedOS === 'mac';
  const [location] = useLocation();

  // 現在ページの情報
  const currentPage = useMemo(() => getPageByPath(location), [location]);

  // 現在ページのセクションを自動展開
  useEffect(() => {
    if (currentPage) {
      setExpandedSection(currentPage.sectionId);
    }
  }, [currentPage]);

  // Cmd+K / Ctrl+K でフォーカス
  useEffect(() => {
    function handleFocusSearch() {
      setIsOpen(true);
      requestAnimationFrame(() => searchInputRef.current?.focus());
    }
    document.addEventListener('focus-search', handleFocusSearch);
    return () => document.removeEventListener('focus-search', handleFocusSearch);
  }, []);

  // 検索結果
  const searchResults = searchQuery.trim()
    ? pages.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasSearch = searchQuery.trim().length > 0;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-background border border-border hover:bg-muted"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto transition-transform duration-300 z-40 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-poppins font-bold text-lg">G</span>
            </div>
            <span className="font-poppins font-bold text-lg text-foreground">Git 入門ガイド</span>
          </Link>

          {/* 検索 */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={`検索... (${searchShortcutLabel(isMac)})`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* ダークモード切替 */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-2 px-4 py-2 mb-4 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === 'dark' ? 'ライトモード' : 'ダークモード'}</span>
          </button>

          {/* 検索結果 */}
          {hasSearch ? (
            <div className="space-y-1">
              <p className="px-4 py-1 text-xs font-semibold text-muted-foreground">
                検索結果 ({searchResults.length}件)
              </p>
              {searchResults.length === 0 ? (
                <p className="px-4 py-2 text-sm text-muted-foreground">
                  該当するページがありません
                </p>
              ) : (
                searchResults.map((page) => (
                  <Link
                    key={page.path}
                    href={page.path}
                    onClick={() => {
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
                  >
                    <span className="text-xs text-primary font-semibold mr-1.5">
                      STEP {page.step}
                    </span>
                    {page.title}
                  </Link>
                ))
              )}
            </div>
          ) : (
            /* 通常のセクションナビ */
            <div className="space-y-1">
              {sections.map((section) => (
                <div key={section.id}>
                  {section.href ? (
                    <Link
                      href={section.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        location === section.href
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      }`}
                    >
                      {section.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setExpandedSection(
                            expandedSection === section.id ? null : section.id
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <span>{section.title}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            expandedSection === section.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedSection === section.id && section.subsections && (
                        <div className="ml-2 mt-1 space-y-1 border-l-2 border-sidebar-border">
                          {section.subsections.map((subsection) => (
                            <Link
                              key={subsection.href}
                              href={subsection.href}
                              onClick={() => setIsOpen(false)}
                              className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                location === subsection.href
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50'
                              }`}
                            >
                              {subsection.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
