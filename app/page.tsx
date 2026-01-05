import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, User, Palette, Briefcase, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="main">
          <h1 className="headings">Crafting Digital Experiences</h1>
          <p className="hero-subtitle">Where Design Meets Innovation</p>
          <div className="hero-taglines">
            <span className="tagline">✨ Creative Problem Solver</span>
            <span className="tagline">🎨 UI/UX Enthusiast</span>
            <span className="tagline">🚀 Product Visionary</span>
          </div>
        </div>
      </section>

      <section className="about-me" id="about-me">
        <h1 className="headings">
          <User className="section-icon" />
          ABOUT ME
        </h1>
        <div className="pic">
          <Image
            src="/images/about-me-profile.jpeg"
            alt="Profile picture"
            width={300}
            height={300}
            className="profile-image"
          />
        </div>
        <div className="intro">
          <h2>島田拓海</h2>
          <div className="bio">
            <p>
              <strong>大学:</strong> University of Washington Informatics （ワシントン大学）
            </p>
            <p>
              <strong>専攻:</strong> HCI
            </p>
            <p>
              <strong>言語:</strong> 英語・日本語
            </p>
          </div>
          <div className="motto">
            <p>
              私は経験豊富なUI/UXデザイナーで、直感的なユーザー体験の設計と魅力的なコンテンツの創出に情熱を注いでいます。アメリカの大学での数年間の学びや、北米でのプロジェクト経験を通じて、インターフェース設計、ワイヤーフレーム作成、プロトタイピング、ユーザーテスト、そしてコンテンツ戦略の立案・実行に高いスキルを培ってきました。業務とは別にコーディングにも勤しんでいる。
            </p>
          </div>
        </div>
      </section>

      <section className="work-showcase" id="work-showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h1 className="headings">
              <Palette className="section-icon" />
              MY WORK
            </h1>
            <p className="showcase-subtitle">Crafting digital experiences through design and research</p>
          </div>

          <div className="showcase-grid">
            {/* UI/UX Design Section - Match Career Project Size */}
            <div className="work-showcase-container">
              <div className="work-showcase-section">
                <div className="work-showcase-content">
                  <div className="work-project-grid">
                    <div className="work-project-image">
                      <Image
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                        alt="Music Room project"
                        width={600}
                        height={400}
                        className="zapshot-image"
                      />
                    </div>
                    <div className="work-project-details">
                      <div className="work-project-header">
                        <span className="work-project-number">01.</span>
                        <h3 className="work-project-category">University Project</h3>
                      </div>
                      <h2 className="work-project-name">Music Room</h2>
                      <p className="work-project-tagline">ミュージシャン・ネットワーキングアプリ</p>

                      <div className="work-project-description">
                        大学生のミュージシャン同士を、創造的なコラボレーションとソーシャルネットワーキングを通じてつなぐアプリ。テキストではなく音楽を通じたコミュニケーションを重視した設計。
                      </div>

                      <div className="project-skills">
                        <span className="skill-tag">UI/UX Design</span>
                        <span className="skill-tag">User Research</span>
                        <span className="skill-tag">Prototyping</span>
                        <span className="skill-tag">Social Network</span>
                      </div>

                      <div className="view-case-study">
                        <Link href="/work/music-room">
                          <button className="work-project-btn">
                            View Project <ArrowRight size={16} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-showcase-container">
              <div className="work-showcase-section">
                <div className="work-showcase-content">
                  <div className="work-project-grid">
                    <div className="work-project-image">
                      <Image
                        src="https://sismcycling.vercel.app/images/home-hero.jpg"
                        alt="SISM Cycling project"
                        width={600}
                        height={400}
                        className="zapshot-image"
                      />
                    </div>
                    <div className="work-project-details">
                      <div className="work-project-header">
                        <span className="work-project-number">02.</span>
                        <h3 className="work-project-category">Personal Project - Coding</h3>
                      </div>
                      <h2 className="work-project-name">SISM Cycling</h2>
                      <p className="work-project-tagline">Premium Brompton Adventures</p>

                      <div className="work-project-description">
                        Next.js
                        14とTypeScriptで構築したプレミアムサイクリングツアーのWebサイト。レスポンシブデザイン、画像最適化、SEO最適化を実装し、高いパフォーマンスを実現。
                      </div>

                      <div className="project-skills">
                        <span className="skill-tag">Next.js 14</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">Tailwind CSS</span>
                        <span className="skill-tag">Vercel</span>
                      </div>

                      <div className="view-case-study">
                        <Link href="/work/sism-cycling">
                          <button className="work-project-btn">
                            View Project <ArrowRight size={16} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-showcase" id="career-showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h1 className="headings">
              <Briefcase className="section-icon" />
              CAREER JOURNEY
            </h1>
            <p className="showcase-subtitle">Professional experience and growth in design</p>
          </div>

          <div className="career-timeline">
            {/* Zapshot Project - Clickable */}
            <div className="career-project">
              <Link href="/career/zapshot" className="project-showcase-link">
                <div className="project-showcase">
                  <div className="project-content">
                    <div className="project-image-section">
                      <Image
                        src="/images/zapshot-project.png"
                        alt="Zapshot - Make Friends Closer"
                        width={600}
                        height={400}
                        className="zapshot-image"
                      />
                    </div>
                    <div className="project-details">
                      <div className="project-header">
                        <span className="project-number">01.</span>
                        <h3 className="project-company">株式会社レアゾンホールディングス</h3>
                      </div>
                      <h2 className="project-name">Zapshot</h2>
                      <p className="project-tagline">Make Friends Closer</p>

                      <div className="project-meta">
                        <div className="meta-item">
                          <span className="meta-label">期間</span>
                          <span className="meta-value">08/2023 - 現在</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">概要</span>
                          <span className="meta-value">
                            北米のユーザーをターゲットにした新しいSNSアプリ。テキストではなく声でコミュニケーションを円滑にさせるアプリ。チャットだけでなく動画を撮影して投稿することもできる
                          </span>
                        </div>
                      </div>

                      <div className="project-skills">
                        <span className="skill-tag">Mobile App Design</span>
                        <span className="skill-tag">Voice UI/UX</span>
                        <span className="skill-tag">Social Media</span>
                        <span className="skill-tag">User Research</span>
                      </div>

                      <div className="view-case-study">
                        <button className="case-study-btn">
                          View Project <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* KidsDiary Project - Clickable */}
            <div className="career-project">
              <Link href="/career/kidsdiary" className="project-showcase-link">
                <div className="project-showcase">
                  <div className="project-content">
                    <div className="project-image-section">
                      <Image
                        src="/images/kidsdiary-project.png"
                        alt="KidsDiary - 保育ICTシステム"
                        width={600}
                        height={400}
                        className="zapshot-image"
                      />
                    </div>
                    <div className="project-details">
                      <div className="project-header">
                        <span className="project-number">02.</span>
                        <h3 className="project-company">キッズコネクト株式会社</h3>
                      </div>
                      <h2 className="project-name">KidsDiary</h2>
                      <p className="project-tagline">保育ICTシステム</p>

                      <div className="project-meta">
                        <div className="meta-item">
                          <span className="meta-label">期間</span>
                          <span className="meta-value">09/2022 - 12/2022</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">概要</span>
                          <span className="meta-value">
                            出退席の登降管理を可能にさせる。登園状況が一目でわかり、保育業務の効率化を実現させる
                          </span>
                        </div>
                      </div>

                      <div className="project-skills">
                        <span className="skill-tag">UI/UX Design</span>
                        <span className="skill-tag">ICT System</span>
                        <span className="skill-tag">Childcare</span>
                        <span className="skill-tag">Tablet Design</span>
                      </div>

                      <div className="view-case-study">
                        <button className="case-study-btn">
                          View Project <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <Link href="#career-showcase" className="view-all-link">
            <button className="view-all-btn career-btn">
              View Full Career Details <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="headings">
          <Mail className="section-icon" />
          CONTACT
        </h1>
        <div className="my-info">
          <p>
            <Mail className="contact-icon" />
            <strong>Email:</strong> shimada.t0717@gmail.com
          </p>
          <p>
            <MapPin className="contact-icon" />
            <strong>Location:</strong> Tokyo, Japan
          </p>
        </div>
      </section>
    </>
  )
}
