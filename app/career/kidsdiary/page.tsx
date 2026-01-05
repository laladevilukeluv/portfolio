"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Target, Lightbulb, Palette, Briefcase } from "lucide-react"

export default function KidsDiaryCaseStudy() {
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
              <span className="company-name">キッズコネクト株式会社</span>
              <h1 className="project-title">KidsDiary</h1>
              <p className="project-subtitle">保育ICTシステム</p>
              <p className="project-description">
                出退席の登降管理を可能にさせる。登園状況が一目でわかり、保育業務の効率化を実現させる保育ICTシステムの
                UI/UX デザインを担当。
              </p>
            </div>
            <div className="project-hero">
              <Image
                src="/images/kidsdiary-project.png"
                alt="KidsDiary App Interface"
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
              <p>09/2022 - 12/2022</p>
            </div>
            <div className="meta-card">
              <Users className="meta-icon" />
              <h3>役割</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="meta-card">
              <Target className="meta-icon" />
              <h3>対象</h3>
              <p>保育園・幼稚園</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Lightbulb className="section-icon" />
            <h2>プロジェクト概要</h2>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <h3>プロジェクトについて</h3>
              <p>
                KidsDiaryは保育園や幼稚園向けの包括的なICTシステムです。出退席管理、登園状況の可視化、保育業務の効率化を目的として開発されました。
              </p>
              <p>
                このプロジェクトでは、保育士の方々が日常的に使用するシステムとして、直感的で使いやすいインターフェースの設計に重点を置きました。
              </p>

              <div className="role-details">
                <h3>担当業務</h3>
                <p>
                  UI/UXデザイナーとしてインターンで参加。新しい機能のUI考案、作成や既存のUI/UXの改善に直接貢献しました。
                </p>

                <h3>使用ツール</h3>
                <p>Figma、Illustrator</p>

                <h3>デザインアプローチ</h3>
                <p>iPadやiPhoneといった様々な端末でも簡単に操作できるようにデザインを工夫して作成しました。</p>
              </div>
            </div>
            <div className="content-image">
              <Image
                src="/images/kidsdiary-overview.png"
                alt="KidsDiary Project Overview"
                width={600}
                height={400}
                className="section-image"
              />
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
              <h3>デザインツール</h3>
              <p>
                デザインツールは主にFigmaとIllustratorを使用して作成している。iPadやiPhoneといった様々な端末でも簡単に操作できるようにデザインを工夫して作成した。
              </p>

              <h3>アピールポイント</h3>
              <p>
                デザインのチーム内だけでなく、エンジニアとも連携して新機能や既存のUIの改修に従事した。特にUXで気になったことは自主的に動き改善した。
              </p>

              <h3>学んだこと</h3>
              <p>
                保育業界特有のニーズを理解し、実際の保育現場で使われるシステムのデザインを通じて、ユーザー中心設計の重要性を学びました。エンジニアとの密な連携により、実装可能性を考慮したデザインの重要性も理解できました。
              </p>
            </div>
            <div className="content-image">
              <Image
                src="/images/kidsdiary-work-content.png"
                alt="KidsDiary Work Content"
                width={600}
                height={400}
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Palette className="section-icon" />
            <h2>主な機能とデザイン</h2>
          </div>
          <div className="system-text-full">
            <h3>出退席管理システム</h3>
            <p>
              保育園の出退席管理を効率化するため、直感的なインターフェースを設計しました。タッチ操作に最適化されたデザインにより、保育士の方々が素早く正確に出席状況を記録できるようになりました。
            </p>

            <h3>登園状況の可視化</h3>
            <p>
              園児の登園状況を一目で把握できるダッシュボードを設計。色分けやアイコンを効果的に使用し、情報の視認性を向上させました。
            </p>

            <h3>マルチデバイス対応</h3>
            <p>
              iPad、iPhone、タブレットなど様々なデバイスで一貫した使用体験を提供するため、レスポンシブデザインを採用。デバイスの特性を活かしたインターフェースを設計しました。
            </p>

            <h3>成果</h3>
            <p>
              保育業務の効率化に貢献し、保育士の方々からは「使いやすい」「直感的」といった好評をいただきました。また、エンジニアチームとの連携により、デザインから実装までスムーズに進行することができました。
            </p>
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
