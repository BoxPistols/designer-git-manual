import { ArrowRight, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';
import InfoBox from '@/components/InfoBox';
import OSToggle from '@/components/OSToggle';
import { useState } from 'react';

/**
 * Git ワークフロー実践 - ファイル作成と Commit
 * デザイン方針: ジャーニーマップ
 * - ファイル作成の手順
 * - git add と git commit の概念
 * - コミットメッセージの書き方
 */

export default function CommitWorkflow() {
  const [selectedOS, setSelectedOS] = useState<'mac' | 'windows'>('mac');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
            STEP 8 / 8
          </div>
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">
            ファイル作成と Commit を実践しよう
          </h1>
          <p className="text-lg text-muted-foreground">
            実際にファイルを作成し、Git で管理します。
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* OS Toggle */}
        <div className="mb-12 flex justify-center">
          <OSToggle onOSChange={setSelectedOS} />
        </div>

        {/* What is Commit */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            Commit とは
          </h2>
          <div className="bg-white border border-border rounded-lg p-8 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Commit は、ファイルの変更を Git に記録する操作です。「保存」ボタンを押すのと似ていますが、Git では変更内容とメッセージを一緒に記録します。これにより、後で「いつ、誰が、何を変更したか」を確認できます。
            </p>

            <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded">
              <h3 className="font-semibold text-foreground mb-3">Commit のメリット</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>変更内容を詳しく記録できる</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>過去のバージョンに戻すことができる</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>複数人での共同作業が容易になる</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>変更の理由を後で確認できる</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Create a File */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            ファイルを作成
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-foreground self-center">
                  Cursor でファイルを作成
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Cursor の左パネルで、リポジトリフォルダを右クリック → 「New File」を選択します。
              </p>
              <p className="text-muted-foreground mb-4">
                ファイル名を「hello.txt」と入力してください。
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-foreground self-center">
                  ファイルに内容を追加
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                作成した hello.txt ファイルに、以下の内容を入力してください：
              </p>

              <CodeBlock
                code={`Hello, Git!\nThis is my first Git project.\nI'm learning Git and GitHub.`}
                language="text"
                title="hello.txt の内容"
              />

              <p className="text-muted-foreground mt-4">
                入力後、Cmd + S（Mac）または Ctrl + S（Windows）で保存してください。
              </p>
            </div>
          </div>
        </section>

        {/* Git Workflow */}
        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            Git ワークフロー：add → commit → push
          </h2>

          <div className="bg-white border border-border rounded-lg p-8 space-y-6 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Git でファイルを管理するには、以下の3つのステップを実行します：
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">git add</h4>
                  <p className="text-muted-foreground text-sm">
                    変更したファイルを「ステージング」します。これは、どのファイルを Commit するかを指定する操作です。
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">git commit</h4>
                  <p className="text-muted-foreground text-sm">
                    ステージングされたファイルを Git に記録します。このとき、変更内容を説明するメッセージを添付します。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">git push</h4>
                  <p className="text-muted-foreground text-sm">
                    ローカルの Commit を GitHub にアップロードします。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Step 1: git add */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-foreground self-center">
                  git add でファイルをステージング
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Cursor のターミナルで、以下のコマンドを実行してください。
              </p>

              <CodeBlock
                code={`git add hello.txt`}
                language={selectedOS === 'mac' ? 'bash' : 'powershell'}
                title="ファイルをステージング"
              />

              <p className="text-muted-foreground mt-4">
                または、すべての変更をステージングする場合：
              </p>

              <CodeBlock
                code={`git add .`}
                language={selectedOS === 'mac' ? 'bash' : 'powershell'}
                title="すべてのファイルをステージング"
              />

              <InfoBox type="info">
                「.」は「現在のフォルダ内のすべてのファイル」を意味します。
              </InfoBox>
            </div>

            {/* Step 2: git commit */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-foreground self-center">
                  git commit で変更を記録
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                以下のコマンドを実行して、変更を Commit します。
              </p>

              <CodeBlock
                code={`git commit -m "Add hello.txt file"`}
                language={selectedOS === 'mac' ? 'bash' : 'powershell'}
                title="ファイルを Commit"
              />

              <p className="text-muted-foreground mt-4">
                「-m」オプションの後に、変更内容を説明するメッセージを入力します。
              </p>

              <div className="mt-6 space-y-4">
                <h4 className="font-semibold text-foreground">コミットメッセージの書き方</h4>
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                  <p className="text-muted-foreground text-sm mb-3">
                    良いコミットメッセージの例：
                  </p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>✓ Add hello.txt file</li>
                    <li>✓ Fix typo in README</li>
                    <li>✓ Update user profile page</li>
                  </ul>
                </div>

                <div className="bg-destructive/5 border-l-4 border-destructive p-4 rounded">
                  <p className="text-muted-foreground text-sm mb-3">
                    避けるべきコミットメッセージの例：
                  </p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>✗ update</li>
                    <li>✗ fix stuff</li>
                    <li>✗ asdfghjkl</li>
                  </ul>
                </div>
              </div>

              <InfoBox type="info" title="コミットメッセージのコツ">
                コミットメッセージは、後で「何を変更したか」を思い出すために重要です。具体的で、わかりやすいメッセージを心がけましょう。
              </InfoBox>
            </div>

            {/* Step 3: Verify Commit */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-foreground self-center">
                  Commit が成功したか確認
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                以下のコマンドを実行して、Commit が成功したか確認します。
              </p>

              <CodeBlock
                code={`git log`}
                language={selectedOS === 'mac' ? 'bash' : 'powershell'}
                title="Commit 履歴を表示"
              />

              <p className="text-muted-foreground mt-4">
                実行結果に、先ほど作成した Commit が表示されれば、成功です。
              </p>

              <CodeBlock
                code={`commit abc123def456... (HEAD -> main)\nAuthor: Your Name <your.email@example.com>\nDate:   Mon Jan 15 10:30:00 2024 +0900\n\n    Add hello.txt file`}
                language="bash"
                title="git log の出力例"
              />

              <InfoBox type="info">
                「q」キーを押すと、ログ表示を終了できます。
              </InfoBox>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <InfoBox type="success" title="Commit 成功！">
            ファイルを作成し、Git で Commit しました。次は、この Commit を GitHub に Push（アップロード）します。
          </InfoBox>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Button variant="outline" onClick={() => window.location.href = "/github/first-repo"}>戻る</Button>
          <Button className="gap-2" onClick={() => window.location.href = "/workflow/push-pull"}>
              次へ：Push と Pull
              
              <ArrowRight size={20} />
            </Button>
        </div>
      </div>
    </div>
  );
}
