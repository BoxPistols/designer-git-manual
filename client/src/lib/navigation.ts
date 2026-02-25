export interface PageInfo {
  step: number;
  path: string;
  title: string;
  sectionId: string;
}

export interface SectionInfo {
  id: string;
  title: string;
}

export const sections: SectionInfo[] = [
  { id: 'intro', title: 'はじめに' },
  { id: 'environment', title: '環境準備' },
  { id: 'github-basics', title: 'GitHub 基礎' },
  { id: 'git-workflow', title: 'Git ワークフロー実践' },
  { id: 'react-practice', title: 'React 実践' },
  { id: 'advanced-setup', title: '実践的な環境構築' },
  { id: 'ai-agent', title: 'AI エージェント連携' },
];

export const pages: PageInfo[] = [
  { step: 1, path: '/', title: 'はじめに', sectionId: 'intro' },
  // 環境準備
  { step: 2, path: '/environment/prerequisites', title: '前提知識', sectionId: 'environment' },
  { step: 3, path: '/environment/cursor', title: 'Cursor インストール', sectionId: 'environment' },
  { step: 4, path: '/environment/git', title: 'Git インストール', sectionId: 'environment' },
  { step: 5, path: '/environment/nodejs', title: 'Node.js インストール', sectionId: 'environment' },
  // GitHub 基礎
  { step: 6, path: '/github/account', title: 'GitHub アカウント作成', sectionId: 'github-basics' },
  { step: 7, path: '/github/setup', title: 'Git ローカル設定', sectionId: 'github-basics' },
  { step: 8, path: '/github/first-repo', title: '最初のリポジトリ作成', sectionId: 'github-basics' },
  // Git ワークフロー実践
  { step: 9, path: '/workflow/commit', title: 'ファイル作成と Commit', sectionId: 'git-workflow' },
  { step: 10, path: '/workflow/push-pull', title: 'Push と Pull', sectionId: 'git-workflow' },
  { step: 11, path: '/workflow/history', title: '差分・履歴確認', sectionId: 'git-workflow' },
  { step: 12, path: '/workflow/branch', title: 'ブランチの基本', sectionId: 'git-workflow' },
  // React 実践
  { step: 13, path: '/react/setup', title: 'React 開発環境セットアップ', sectionId: 'react-practice' },
  { step: 14, path: '/react/modify', title: 'デザイン変更と Git 管理', sectionId: 'react-practice' },
  // 実践的な環境構築
  { step: 15, path: '/advanced/wsl2', title: 'WSL2 導入', sectionId: 'advanced-setup' },
  { step: 16, path: '/advanced/wsl2-ssh', title: 'WSL2 での SSH キー接続', sectionId: 'advanced-setup' },
  { step: 17, path: '/advanced/github-cli', title: 'GitHub CLI 導入', sectionId: 'advanced-setup' },
  { step: 18, path: '/advanced/linux-basics', title: 'Linux/Ubuntu 基礎', sectionId: 'advanced-setup' },
  { step: 19, path: '/advanced/vscode', title: 'VSCode 導入', sectionId: 'advanced-setup' },
  { step: 20, path: '/advanced/integration', title: '開発環境の統合確認', sectionId: 'advanced-setup' },
  // AI エージェント連携
  { step: 21, path: '/ai-agent/overview', title: 'AI コーディング環境の全体像', sectionId: 'ai-agent' },
  { step: 22, path: '/ai-agent/claude-code-setup', title: 'Claude Code 導入', sectionId: 'ai-agent' },
  { step: 23, path: '/ai-agent/claude-code-basics', title: 'Claude Code 基本操作', sectionId: 'ai-agent' },
  { step: 24, path: '/ai-agent/cursor-cline', title: 'Cursor + Cline 導入', sectionId: 'ai-agent' },
  { step: 25, path: '/ai-agent/sub-tools', title: '予備ツール（Gemini / Warp / Antigravity）', sectionId: 'ai-agent' },
];

export function getPageByPath(path: string): PageInfo | undefined {
  return pages.find((p) => p.path === path);
}

export function getNextPage(currentPath: string): PageInfo | undefined {
  const current = getPageByPath(currentPath);
  if (!current) return undefined;
  return pages.find((p) => p.step === current.step + 1);
}

export function getPreviousPage(currentPath: string): PageInfo | undefined {
  const current = getPageByPath(currentPath);
  if (!current) return undefined;
  return pages.find((p) => p.step === current.step - 1);
}

export function getSectionPages(sectionId: string): PageInfo[] {
  return pages.filter((p) => p.sectionId === sectionId);
}

export function getNextSectionFirstPage(currentPath: string): PageInfo | undefined {
  const page = getPageByPath(currentPath);
  if (!page) return undefined;
  const sectionIndex = sections.findIndex((s) => s.id === page.sectionId);
  if (sectionIndex === -1 || sectionIndex >= sections.length - 1) return undefined;
  return getSectionPages(sections[sectionIndex + 1].id)[0];
}

export function getPrevSectionFirstPage(currentPath: string): PageInfo | undefined {
  const page = getPageByPath(currentPath);
  if (!page) return undefined;
  const sectionIndex = sections.findIndex((s) => s.id === page.sectionId);
  if (sectionIndex <= 0) return undefined;
  return getSectionPages(sections[sectionIndex - 1].id)[0];
}
