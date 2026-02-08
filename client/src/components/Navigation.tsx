import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Menu, X } from 'lucide-react';

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
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-border hover:bg-muted"
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
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-lg">G</span>
            </div>
            <span className="font-poppins font-bold text-lg text-foreground">Git Manual</span>
          </Link>

          <div className="space-y-1">
            {sections.map((section) => (
              <div key={section.id}>
                {section.href ? (
                  <Link
                    href={section.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
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
                      className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
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
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 rounded-lg transition-colors"
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
