"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Target, Lightbulb, TrendingUp, Palette, Briefcase, Smartphone } from "lucide-react"

export default function ZapshotCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study">
      {/* Header */}
      <section className="case-study-header">
        <div className="container">
          <Link href="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <div className="header-content">
            <div className="project-intro">
              <span className="company-name">株式会社レアゾンホールディングス</span>
              <h1 className="project-title">Zapshot</h1>
              <p className="project-subtitle">Bring Friends Closer</p>
              <p className="project-description">
                北米のユーザーをターゲットにした新しいSNSアプリ。テキストではなく声でコミュニケーションを円滑にさせるアプリ。チャットだけでなく動画を撮影して投稿することもできる
              </p>
            </div>
            <div className="project-hero">
              <Image
                src="/images/zapshot-project.png"
                alt="Zapshot App Interface"
                width={600}
                height={400}
                className="hero-image"
              />
            </div>
          </div>

          <div className="project-meta-grid">
            <div className="meta-card">
              <Calendar className="meta-icon" />
              <h3>期間</h3>
              <p>08/2023 - 現在</p>
            </div>
            <div className="meta-card">
              <Users className="meta-icon" />
              <h3>役割</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="meta-card">
              <Target className="meta-icon" />
              <h3>ターゲット</h3>
              <p>北米ユーザー</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Content */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2>業務内容</h2>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <p>
                主に、UIUXデザイナーとして業務に正社員として従事。音声メッセージ機能やコンテンツ投稿機能の
                UX改善や考案に直接関与。また、リサーチやインタビューなども行い、ユーザーのフィードバックを反映するように意識し、より良いプロダクトの改善に取り組んでいる。特に、音声コミュニケーションを中心とした新しいSNS体験の設計に注力している。
              </p>
              <p>
                PMという職種も掛け持ちで担当しており、同じ部署のチームや海外のチームのマネジメントを英語と日本語で行なっている。また、機能の要件定義、プランニングなども合わせて従事
              </p>

              <div className="role-details">
                <h3>役割</h3>
                <p>
                  デザイナーチームのリーダーでリサーチ、UXデザイン、情報設計、UIデザインetcなどを担う。上流から下流工程まで一貫して行うことが多いが、強みは主に上流工程でUX改善。UIUXデザイナーとしてデザインチームのリーダーを担う
                </p>

                <h3>チーム体制</h3>
                <p>
                  エンジニア15名(アプリエンジニア6名、バックエンドエンジニア9名) +
                  デザイナー2名（UIUXデザイナー、UIUXデザイナー）
                </p>

                <h3>ツール</h3>
                <p>Figma、Figjam、Miro</p>
              </div>
            </div>
            <div className="content-image">
              <Image
                src="/images/zapshot-work-content-new.png"
                alt="Zapshot Work Content"
                width={600}
                height={800}
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UX Improvement Case 1 */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Lightbulb className="section-icon" />
            <h2>UIUX改善例①</h2>
          </div>

          <div className="improvement-case">
            <div className="case-content">
              <div className="case-text">
                <h3>問題提起</h3>
                <p>
                  Momentはユーザーが動画を投稿できる機能だが、想定よりも投稿率が低い。ユーザーあたりの1日あたりの投稿率は10%未満と低迷しており、ユーザーが積極的に投稿しない傾向がある。
                </p>

                <h4>仮説:</h4>
                <p>ユーザーがMomentを投稿する際の体験に課題があり、投稿のハードルが高い可能性がある。具体的には、</p>
                <ul>
                  <li>投稿の公開範囲に関する心理的不安</li>
                  <li>→見知らぬ人に動画を見られることへの抵抗感</li>
                  <li>→「友達限定で共有したい」というニーズが満たされていない</li>
                  <li>投稿までの導線がわかりづらい</li>
                  <li>投稿するモチベーション（インセンティブ）が不足している</li>
                </ul>

                <h3>目標</h3>
                <p>
                  公開範囲の選択が、より多くのユーザーにとって使いやすい投稿体験を生み出し、Momentの活性化につながることを目標とする。
                </p>
                <p>
                  Momentの投稿率を、ユーザーユニークで1日30〜40%以上に向上させ、全体のエンゲージメントを高めることを目指す。そのために、投稿時の体験に「公開範囲の選択」を取り入れ、ユーザーがより安心して投稿できる環境を整える。
                </p>
              </div>
              <div className="case-image">
                <Image
                  src="/images/zapshot-ux-improvement-1-problem.png"
                  alt="UX Improvement Case 1"
                  width={600}
                  height={800}
                  className="case-study-image"
                />
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="approach-section">
            <h3>アプローチ</h3>
            <Image
              src="/images/zapshot-ux-improvement-1-approach.png"
              alt="UX Improvement Approach"
              width={1200}
              height={600}
              className="full-width-image"
            />
          </div>

          {/* Results */}
          <div className="results-section">
            <h3>結果</h3>
            <div className="results-content">
              <div className="results-text">
                <p>
                  Iteration
                  3の反映後、Moment動画の投稿率が40%に上昇。決して高くはないが数値が上昇したことにより体験が改善されたことがわかった。
                </p>
                <p>
                  また、ボタンのハイライトによってGlobalよりも投稿率が高かったことから、視覚的なデザインがユーザーの行動に影響を与えることが確認できた。
                </p>

                <h4>今回の反映で得られた知見:</h4>
                <ul>
                  <li>
                    <strong>Friends Onlyの導入による心理的ハードルの低減</strong>
                  </li>
                  <li>
                    友達だけに見せる設定が可能になったことで、安心して投稿できるユーザーが増え、投稿率の向上につながった。
                  </li>
                  <li>
                    <strong>色のハイライトによるユーザー誘導の効果</strong>
                  </li>
                  <li>特定のボタンを視覚的に強調することで、ユーザーの選択を自然に誘導できることが確認された。</li>
                </ul>
              </div>
              <div className="results-image">
                <Image
                  src="/images/zapshot-ux-improvement-1-result.png"
                  alt="UX Improvement Results"
                  width={600}
                  height={800}
                  className="case-study-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Improvement Case 2 */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <TrendingUp className="section-icon" />
            <h2>UIUX改善例②</h2>
          </div>

          <div className="improvement-case">
            <div className="case-content">
              <div className="case-text">
                <h3>問題提起</h3>
                <p>
                  Message機能の新規ユーザーあたりの1日あたりの投稿率は5%未満と低迷しており、ユーザーが積極的にメッセージを送信して会話を続けることができていない。特に、プロフィールページからメッセージ機能への導線や、初回メッセージ送信時のユーザー体験に課題がある。
                </p>

                <h4>仮説:</h4>
                <p>
                  ユーザーがアプリ上でフレンドになった後の体験に課題があり、特にフレンドになったばかりの相手にメッセージを送るハードルが高いことが影響していると考えられる。具体的には、
                </p>
                <ul>
                  <li>何を最初に送ればいいかわからない</li>
                  <li>「Hey」や「What's up」などの簡単なメッセージは思いつくかもしれないが、実際に送るのは難しい</li>
                  <li>メッセージを送る方法が直感的ではない</li>
                  <li>どこから送信すればいいのかが分かりづらい</li>
                </ul>

                <h3>目標</h3>
                <p>
                  Message機能の1日あたりの送信率を20%以上に引き上げることを目指す。そのために、以下の施策を導入する。
                </p>
                <ul>
                  <li>わかりやすく馴染みのある動線を作る</li>
                  <li>
                    ユーザーが他のアプリでも見たことがあるような直感的なUIを設計し、メッセージを送る場所や方法を明確にする。
                  </li>
                  <li>会話のきっかけを提供する</li>
                  <li>
                    「何を送ればいいかわからない」問題を解決する体験を作ることで、最初の一歩を踏み出しやすくする。
                  </li>
                  <li>心理的ハードルを下げ、チャットを促進する</li>
                </ul>
              </div>
              <div className="case-image">
                <Image
                  src="/images/zapshot-ux-improvement-2-problem.png"
                  alt="UX Improvement Case 2"
                  width={600}
                  height={800}
                  className="case-study-image"
                />
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="approach-section">
            <h3>アプローチ</h3>
            <Image
              src="/images/zapshot-ux-improvement-2-approach.png"
              alt="UX Improvement 2 Approach"
              width={1200}
              height={600}
              className="full-width-image"
            />
          </div>

          {/* Results */}
          <div className="results-section">
            <h3>結果</h3>
            <Image
              src="/images/zapshot-ux-improvement-2-results.png"
              alt="UX Improvement 2 Results"
              width={1200}
              height={600}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

{/* UX Improvement Case 3 */}
<section className="case-study-section">
  <div className="container">
    <div className="section-header">
      <Lightbulb className="section-icon" />
      <h2>UIUX改善例③</h2>
    </div>

    <div className="improvement-case">
      <div className="case-content">
        <div className="case-text">
          <h3>問題提起</h3>
          <p>Onboardingの通過率が低く、通過しても各画面の登録が不十分（例：名前未入力）。</p>

          <h4>仮説:</h4>
          <ul>
            <li>画面ごとのステップがスムーズに進まない、文字が多い</li>
            <li>→デザインが分かりづらく、ボタンが押しづらい</li>
            <li>スキップボタンが簡単に押ける → 実際の体験につながらない</li>
          </ul>

          <h3>目標</h3>
          <p>Onboardingの突破率を向上させ、ユーザー登録情報の充実を図る</p>
        </div>

        <div className="case-image">
          <Image
            src="/images/exisiting_onboarding.png"
            alt="UX Improvement Case 3"
            width={1200}
            height={800}
            className="case-study-image"
          />
        </div>
      </div>
    </div>

    {/* Approach */}
    <div className="approach-section">
      <h3>アプローチ</h3>
      <ul>
        <li>UI/UX改善：全体のスタイル統一、文字量や見た目の整理</li>
        <li>体験改善：クローンボイス生成時間を短縮やスキップボタンの出し方を工夫</li>
        <li>→スキップボタンが簡単に押せる → 実際の体験につながらない</li>
      </ul>
    </div>

    {/* Results */}
    <div className="results-section">
      <h3>結果</h3>
      <div className="results-content">
        <div className="results-text">
          <ul>
            <li>Onboarding突破率が<strong>70〜80%</strong>に上昇</li>
            <li>ユーザー登録情報の充実度も向上</li>
          </ul>

          <h4>今回の反映で得られた知見:</h4>

          <ul>
            <li><strong>一画面の情報量を減らす</strong></li>
            <li>
              様々なモチベーションを持ったユーザーがいて、必ずしも文字を読むことが多くないため、文字を減らしてもわかるUIにする。
              また、情報を限定的にして目的を明確に伝える。
            </li>
          </ul>

          <ul>
            <li><strong>時間がかかる処理、UXに影響を与えるものはオンボーディングに入れない</strong></li>
            <li>
              ユーザーがクローンボイスの生成完了を待つ必要があり、そのことがユーザー体験に影響を与えていた。
            </li>
          </ul>
        </div>

        <div className="results-image">
          <Image
            src="/images/new_onboarding.png"
            alt="UX Improvement Results"
            width={1200}
            height={800}
            className="case-study-image"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Design System */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Palette className="section-icon" />
            <h2>デザインシステムの構築</h2>
          </div>

          <div className="system-text-full">
            <h3>問題提起</h3>
            <p>
              プロジェクト開始当初はデザインシステムが存在せず、以前のデザイナーも構築していなかったため、エンジニアやデザイナーにとって開発・実装しづらい状況が続いていた。
            </p>
            <p>そこで、デザインチームリーダーとして提案し、UIデザイナーと協力してデザインシステムを構築した。</p>

            <h4>構築した要素:</h4>
            <ul>
              <li>
                <strong>カラーシステム:</strong> Primary、Transparency、Neutral、Dark/Light
                Sharedの4つのカラースキームを定義し、それぞれDarkとLightモードに対応したカラーパレットを策定
              </li>
              <li>
                <strong>タイポグラフィ:</strong>{" "}
                HeadingXXBold、LatinXXMedium/Semibold、BodyXXRegularの3つのカテゴリーでフォントファミリー、サイズ、ウェイト、行間を体系化し、階層的なテキストスタイルを確立
              </li>
              <li>
                <strong>アイコンライブラリ:</strong>{" "}
                24pxグリッドベースで統一されたアイコンセットを作成し、様々なUIコンポーネントで使用
              </li>
              <li>
                <strong>コンポーネント:</strong> Tab
                Bar、PopUpなどの基本的なUIコンポーネントを標準化し、再利用可能な形で整備
              </li>
            </ul>
            <p>これにより、開発とデザインの効率が向上し、プロダクト全体のUI/UXの統一感を強化することができた。</p>
          </div>

          {/* Design System Documentation */}
          <div className="system-documentation">
            <h3>カラー & タイポグラフィシステム</h3>
            <Image
              src="/images/zapshot-design-system-new.png"
              alt="Complete Design System - Colors and Typography"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>

          <div className="system-documentation">
            <h3>アイコン & コンポーネントライブラリ</h3>
            <Image
              src="/images/zapshot-icons-components.png"
              alt="Icons and Components Library"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>

          {/* Design System Results */}
          <div className="system-results">
            <h3>結果</h3>
            <p>
              アイコンの統一感やコンポーネント化を進めることで、内部のエンジニアから「開発がしやすくなった」「効率が大幅に向上した」といったフィードバックをいただいた。また、アイコンやテーマを統一する前に実施したユーザーインタビューでは、「アイコンがわかりやすくなった」「統一感が出て、デザインが洗練された」「ダークテーマが用意されていてかっこよくなった」などのポジティブな声を多く聞くことができた。
            </p>
            <p>
              さらに、ユーザーからは「インターフェースが一貫していることで使いやすさが増した」といった反応もあり、ユーザーエクスペリエンスの向上にも直接できたと感じている。
            </p>
          </div>
        </div>
      </section>

      {/* UI Design Examples */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Smartphone className="section-icon" />
            <h2>UIデザインの例</h2>
          </div>

          {/* Moment Feature */}
          <div className="ui-design-feature">
            <div className="feature-header">
              <h3>Moment 機能</h3>
            </div>

            <div className="feature-content">
              <div className="feature-description">
                <h4>背景</h4>
                <p>
                  Zapshotは、気軽に日常をシェアできる動画SNSアプリ。ユーザーの「自分らしい瞬間を残したい／共有したい」というニーズに応えるため、デュアルカメラを活用した新機能「Moment」をデザインしました。
                </p>

                <h4>機能概要</h4>
                <ul>
                  <li>
                    <strong>デュアルカメラ動画：</strong>
                    前面・背面カメラを同時に使って、より臨場感のある動画撮影が可能。
                  </li>
                  <li>
                    <strong>公開範囲の選択：</strong>
                  </li>
                  <li style={{ marginLeft: "20px" }}>Friends only：親しい友人にだけ共有</li>
                  <li style={{ marginLeft: "20px" }}>Global：世界中のユーザーに公開</li>
                  <li>→ ユーザーが安心して投稿できるよう、柔軟な公開設定を提供。</li>
                </ul>

                <h4>デザイン上の工夫</h4>
                <ul>
                  <li>撮影画面はシンプルで直感的に操作できるUIを設計。</li>
                  <li>公開範囲の設定を撮影フロー内に自然に組み込み、投稿前に迷わず選択できるよう配置。</li>
                  <li>視覚的に「友達だけ」「全体公開」の違いが分かるアイコンを採用し、安心感を担保。</li>
                </ul>

                <h4>成果</h4>
                <ul>
                  <li>Zapshot内で最も人気のある機能となり、ユーザーの利用率が高い。</li>
                  <li>
                    「日常を気軽に残せる」「共有範囲をコントロールできて安心」といったポジティブなフィードバックを多数獲得。
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-image-section">
              <Image
                src="/images/design-mode/Moment%20-%20Dark.png.jpeg"
                alt="Moment Feature UI Design"
                width={1200}
                height={800}
                className="full-width-image"
              />
            </div>
          </div>

          {/* Countdown Feature */}
          <div className="ui-design-feature">
            <div className="feature-header">
              <h3>カウントダウン撮影機能</h3>
            </div>

            <div className="feature-content">
              <div className="feature-description">
                <h4>背景</h4>
                <p>
                  Zapshotでは、見知らぬ人とも気軽に繋がれる体験を重視。若者の間では「友達作り」や「ナンパ的な出会い」のニーズも存在していました。そこで、カウントダウン撮影機能をデザインし、初対面でも自然に一緒に写真を撮れる体験を提供しました。
                </p>

                <h4>機能概要</h4>
                <ul>
                  <li>
                    <strong>カウントダウン撮影：</strong>
                    撮影ボタンを長押しすると強制的にカウントダウンが始まり、撮影がスタート。準備する間もなく自然な一体感を演出。
                  </li>
                  <li>
                    <strong>友達作りフロー：</strong>
                    撮影後に相手と繋がれるUIを設計。特に「電話番号を気軽に交換できるフロー」を導入。
                  </li>
                  <li>
                    <strong>共有方法の多様性：</strong>
                    電話番号以外の方法（SNSシェア等）も提供しつつ、番号交換を中心に設計することで「確実につながれる」体験を強調。
                  </li>
                </ul>

                <h4>デザイン上の工夫</h4>
                <ul>
                  <li>
                    カウントダウンは「キャンセルできない仕様」にすることで、偶然性や強制力をあえて楽しめるUXを実現。
                  </li>
                  <li>電話番号入力画面はできるだけシンプルにし、心理的ハードルを下げるよう配慮。</li>
                </ul>

                <h4>成果</h4>
                <ul>
                  <li>若者ユーザーから「友達を作りやすい」「自然に連絡先を交換できる」と好評。</li>
                  <li>「キャンセルできない仕様」がスリリングで面白い、というユニークな評価も獲得。</li>
                  <li>一方で「誤って長押しして撮影が始まる」ケースもあり、今後は改善余地があることも確認。</li>
                </ul>
              </div>
            </div>

            <div className="feature-image-section">
              <Image
                src="/images/design-mode/Countdown%20-%20Dark.png.jpeg"
                alt="Countdown Feature UI Design"
                width={1200}
                height={800}
                className="full-width-image"
              />
            </div>
          </div>

          {/* 100 Questions Feature */}
          <div className="ui-design-feature">
            <div className="feature-header">
              <h3>100質問機能</h3>
            </div>

            <div className="feature-content">
              <div className="feature-description">
                <h4>背景</h4>
                <p>
                  Zapshotでは、ユーザー同士がより深くつながる体験を目指した。見た目や日常の共有だけでなく、友達の"意外な一面"や"人となり"を知ることで生まれる関係性に価値があると考え、気軽に自分について答えながら互いを知るきっかけを作る「100質問機能」をデザインした。
                </p>

                <h4>機能概要</h4>
                <p>
                  用意された100の質問に順番に答えていく形式で、回答はすべて声のみ。テキストでは伝わりにくい感情やニュアンスを届けることで、より親近感のあるコミュニケーションを生むことを狙った。質問内容は性格・価値観・日常・関係性など多岐にわたり、自然と会話のきっかけが生まれる構成にしている。
                </p>

                <h4>デザイン上の工夫</h4>
                <p>
                  質問数が多いため、テンポよくストレスなく答えられるUIを重視。スワイプやタップで直感的に進める軽量なフローを採用し、声の録音や再生もワンタップで完結できるようにした。全体を通して、ユーザーが"話すこと"そのものに集中できる体験を目指した。
                </p>

                <h4>成果</h4>
                <p>
                  「友達の意外な一面が知れて面白い」「声が聞けるのが新鮮」などポジティブな反応を多く得た。声で答える体験が、テキストでは得られない親近感や温度感を生み出すことを確認できた。
                </p>

                <h4>改善案</h4>
                <p>
                  質問のバリエーションを増やすほか、自分で質問を作って他のユーザーに聞ける機能を検討中。また、回答結果から共通点や違いを可視化するなど、会話がさらに広がる仕組みも今後の課題としている。
                </p>
              </div>
            </div>

            <div className="feature-image-section">
              <Image
                src="/images/design-mode/100%20Questions.png.jpeg"
                alt="100 Questions Feature UI Design"
                width={1200}
                height={800}
                className="full-width-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="case-study-navigation">
        <div className="container">
          <Link href="/" className="nav-button">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
