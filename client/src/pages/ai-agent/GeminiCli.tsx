import { ChevronLeft, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';
import InfoBox from '@/components/InfoBox';
import OSToggle from '@/components/OSToggle';
import { useOS } from '@/contexts/OSContext';

export default function GeminiCli() {
  const { selectedOS } = useOS();

  return (
    <div className="min-h-screen bg-background">
      {/* ヘッダーバナー */}
      <div className="bg-primary/5 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
            AI AGENT 3 / 3
          </div>
          <div className="inline-block mb-4 ml-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
            おまけ
          </div>
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">
            Gemini CLI 導入
          </h1>
          <p className="text-lg text-muted-foreground">
            Google の AI「Gemini」もターミナルから使えます。
            Claude Code のトークンが足りなくなった時の予備として、セットアップしておきましょう。
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-12 flex justify-center">
          <OSToggle />
        </div>

        {/* Gemini CLI とは */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            Gemini CLI とは？
          </h2>
          <div className="bg-white border border-border rounded-lg p-8 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gemini CLI は、Google が提供するターミナルベースの AI ツールです。
              Claude Code と似た使い方ができ、コードの質問やファイル操作をAIに頼めます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <Sparkles className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold text-foreground mb-1">無料で使える</h4>
                <p className="text-sm text-muted-foreground">
                  Google アカウントがあれば無料で利用可能。毎分60リクエスト、1日1,000リクエストまで無料
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4">
                <Sparkles className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Claude Code の予備に</h4>
                <p className="text-sm text-muted-foreground">
                  Claude Code のクレジットが尽きた時でも、Gemini CLI で作業を続けられる
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ステップ1: Google アカウント確認 */}
        <div className="bg-white border border-border rounded-lg p-8 mb-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              1
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Google アカウントを確認する</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gemini CLI は Google アカウントで認証します。
            普段使っている Google アカウント（Gmail）があればOKです。
            新規作成は不要です。
          </p>
        </div>

        {/* ステップ2: Gemini CLI インストール */}
        <div className="bg-white border border-border rounded-lg p-8 mb-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              2
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Gemini CLI をインストールする</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Claude Code と同様に npm でインストールします。
          </p>

          <CodeBlock
            code={`# Gemini CLI をグローバルインストール
npm install -g @google/gemini-cli`}
            language={selectedOS === 'mac' ? 'bash' : 'powershell'}
            title={selectedOS === 'mac' ? 'ターミナル' : 'PowerShell'}
          />

          <p className="text-muted-foreground leading-relaxed">
            インストール後、バージョンを確認します。
          </p>

          <CodeBlock
            code={`# バージョン確認
gemini --version`}
            language={selectedOS === 'mac' ? 'bash' : 'powershell'}
            title={selectedOS === 'mac' ? 'ターミナル' : 'PowerShell'}
          />
        </div>

        {/* ステップ3: 初回認証 */}
        <div className="bg-white border border-border rounded-lg p-8 mb-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              3
            </div>
            <h3 className="text-2xl font-semibold text-foreground">初回認証（ログイン）</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gemini CLI を初めて起動すると、Google アカウントでの認証が求められます。
            Claude Code と同じくブラウザが開くので、ログインして許可します。
          </p>

          <CodeBlock
            code={`# Gemini CLI を起動（初回は認証画面が開く）
gemini`}
            language={selectedOS === 'mac' ? 'bash' : 'powershell'}
            title={selectedOS === 'mac' ? 'ターミナル' : 'PowerShell'}
          />

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                a
              </div>
              <div>
                <p className="text-foreground font-medium">ブラウザが自動で開く</p>
                <p className="text-muted-foreground">
                  Google の認証ページが表示されます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                b
              </div>
              <div>
                <p className="text-foreground font-medium">Google アカウントでログイン</p>
                <p className="text-muted-foreground">
                  普段使っている Google アカウントを選択して許可します。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                c
              </div>
              <div>
                <p className="text-foreground font-medium">ターミナルに戻る</p>
                <p className="text-muted-foreground">
                  認証完了後、ターミナルで Gemini CLI が使えるようになります。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ステップ4: 動作確認 */}
        <div className="bg-white border border-border rounded-lg p-8 mb-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              4
            </div>
            <h3 className="text-2xl font-semibold text-foreground">動作確認 - Hello World</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gemini CLI が起動したら、簡単な対話をしてみましょう。
          </p>

          <CodeBlock
            code={`# 簡単な質問をしてみる
> こんにちは！自己紹介してください

# リポジトリの状態を聞いてみる
> このリポジトリの状態を教えて`}
            language="text"
            title="Gemini CLI の対話画面"
          />

          <InfoBox type="success" title="動作確認完了！">
            Gemini が応答すれば、セットアップは完了です。
            終了は <code>/exit</code> または <code>Ctrl + C</code> で行えます。
          </InfoBox>
        </div>

        {/* Claude Code と Gemini CLI の比較 */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            Claude Code と Gemini CLI の比較
          </h2>
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">項目</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Claude Code</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Gemini CLI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['提供元', 'Anthropic', 'Google'],
                    ['起動コマンド', 'claude', 'gemini'],
                    ['認証', 'Anthropic アカウント', 'Google アカウント'],
                    ['無料枠', 'あり（初回クレジット）', 'あり（1日1,000リクエスト）'],
                    ['得意分野', 'コード生成・修正全般', 'コード生成・情報検索'],
                    ['終了方法', '/exit または Ctrl+C', '/exit または Ctrl+C'],
                  ].map(([item, claude, gemini], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="border border-border px-4 py-3 font-medium text-foreground">{item}</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">{claude}</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">{gemini}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 使い分けのポイント */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            使い分けのポイント
          </h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-lg p-8 space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>メインは <strong className="text-foreground">Claude Code</strong> を使う（コード理解・修正の精度が高い）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Claude Code のトークン（クレジット）が足りなくなったら <strong className="text-foreground">Gemini CLI</strong> に切り替える</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>どちらも同じフォルダで起動すれば、同じリポジトリに対して作業できる</span>
              </li>
            </ul>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            このページのまとめ
          </h2>
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="space-y-3">
              {[
                'Gemini CLI をインストールした',
                'Google アカウントで認証を完了した',
                'Gemini CLI と対話できることを確認した',
                'Claude Code と Gemini CLI の使い分けを理解した',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ナビゲーション */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Button variant="outline" onClick={() => (window.location.href = '/ai-agent/claude-code-basics')}>
            <ChevronLeft size={20} />
            前へ
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = '/')}>
            トップに戻る
          </Button>
        </div>
      </div>
    </div>
  );
}
