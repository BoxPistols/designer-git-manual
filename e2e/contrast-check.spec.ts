import { test, expect, Page } from '@playwright/test';

/**
 * ダークモード コントラストチェッカー (WCAG 2.1 AA)
 *
 * 実行: pnpm test:contrast
 */

const allPages = [
  '/', '/environment/prerequisites', '/environment/cursor', '/environment/git',
  '/environment/nodejs', '/github/account', '/github/setup', '/github/first-repo',
  '/workflow/commit', '/workflow/push-pull', '/workflow/history', '/workflow/branch',
  '/react/setup', '/react/modify', '/advanced/wsl2', '/advanced/wsl2-ssh',
  '/advanced/github-cli', '/advanced/linux-basics', '/advanced/vscode',
  '/advanced/integration', '/ai-agent/overview', '/ai-agent/claude-code-setup',
  '/ai-agent/claude-code-basics', '/ai-agent/cursor-cline', '/ai-agent/sub-tools',
];

async function checkContrast(page: Page) {
  return page.evaluate(() => {
    function lum(r: number, g: number, b: number) {
      const [rs, gs, bs] = [r, g, b].map(c => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }
    function ratio(l1: number, l2: number) {
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }
    function parse(c: string): [number, number, number, number] {
      const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      return m ? [+m[1], +m[2], +m[3], m[4] ? +m[4] : 1] : [0, 0, 0, 1];
    }

    const isDark = document.documentElement.classList.contains('dark');
    const fallback: [number, number, number] = isDark ? [15, 23, 42] : [255, 255, 255];

    function getBg(el: Element): [number, number, number] {
      let cur: Element | null = el;
      while (cur) {
        const bg = parse(getComputedStyle(cur).backgroundColor);
        if (bg[3] >= 0.95) return [bg[0], bg[1], bg[2]];
        cur = cur.parentElement;
      }
      return fallback;
    }

    const issues: string[] = [];
    const els = document.querySelectorAll('h1,h2,h3,h4,p,span,a,li,td,th,button,kbd');
    for (const el of els) {
      const text = el.textContent?.trim();
      if (!text) continue;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') continue;
      // コードブロック・警告ボックス内はスキップ
      if (el.closest('pre,[class*="bg-slate-9"],[class*="dark:bg-"]')) continue;

      const fg = parse(s.color);
      const bg = getBg(el);
      const fgL = lum(fg[0], fg[1], fg[2]);
      const bgL = lum(...bg);
      const r = ratio(fgL, bgL);
      const fs = parseFloat(s.fontSize);
      const fw = parseInt(s.fontWeight) || 400;
      const req = (fs >= 24 || (fs >= 18.66 && fw >= 700)) ? 3 : 4.5;

      if (r < req) {
        issues.push(`[${r.toFixed(1)}:1 < ${req}:1] "${text.slice(0, 40)}" @ ${el.tagName.toLowerCase()}`);
      }
    }
    return issues;
  });
}

test.describe('ダークモード コントラスト', () => {
  test.use({ colorScheme: 'dark' });

  for (const p of allPages) {
    test(p, async ({ page }) => {
      await page.goto(p);
      await page.evaluate(() => localStorage.setItem('theme', 'dark'));
      await page.reload({ waitUntil: 'networkidle' });
      const issues = await checkContrast(page);
      if (issues.length) console.log(`\n${p}:\n${issues.join('\n')}`);
      expect(issues).toHaveLength(0);
    });
  }
});
