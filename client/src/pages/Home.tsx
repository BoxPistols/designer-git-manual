import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Zap, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ホームページ - ランディング
 * デザイン方針: ジャーニーマップ - 段階的な進行を視覚的に表現
 * - 大きなヒーロー領域で学習の全体像を表示
 * - 学習フロー全体を視覚的に表現
 * - 各セクションへの明確なナビゲーション
 */

export default function Home() {
  const learningPath = [
    {
      number: 1,
      title: '環境準備',
      description: 'Cursor、Git、Node.js をインストール',
      duration: '30分',
      icon: '⚙️',
    },
    {
      number: 2,
      title: 'GitHub 基礎',
      description: 'アカウント作成と初期設定',
      duration: '20分',
      icon: '🔐',
    },
    {
      number: 3,
      title: 'Git ワークフロー',
      description: 'Commit、Push、Pull を実践',
      duration: '40分',
      icon: '🔄',
    },
    {
      number: 4,
      title: 'React 実践',
      description: 'コンポーネント作成と Git 管理',
      duration: '45分',
      icon: '⚛️',
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: '実践的な学習',
      description: '実際に手を動かしながら学べます',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'デザイナー向け',
      description: 'コーディング未経験者を想定した説明',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: '達成感',
      description: '各ステップで成功体験を得られます',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'わかりやすい',
      description: 'スクリーンショット付きの詳細ガイド',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-secondary font-medium text-sm">デザイナーのための開発入門</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6 leading-tight">
            GitHub & React
            <span className="block text-primary">完全ガイド</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            コーディング未経験のデザイナーでも、ステップバイステップで GitHub と React を習得できます。実践的な開発体験を通じて、自信を持って開発に参加できるようになります。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/environment/prerequisites">
              <Button size="lg" className="gap-2">
                学習を始める
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          {/* Learning Duration */}
          <div className="inline-block bg-white border border-border rounded-lg px-6 py-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">総学習時間：</span> 約 2 時間 45 分
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">学習フロー</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPath.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Connector Line */}
                {index % 2 === 0 && index < learningPath.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}

                {/* Card */}
                <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  {/* Step Number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-poppins font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            このガイドの特徴
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
            準備はいいですか？
          </h2>
          <p className="text-muted-foreground mb-8">
            では、GitHub と React の世界へ一歩踏み出しましょう。
          </p>
          <Link href="/environment/prerequisites">
            <Button size="lg" className="gap-2">
              今すぐ始める
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
