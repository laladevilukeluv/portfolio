"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Music, Calendar, Users, Target } from "lucide-react"

export default function MusicRoom() {
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
              <span className="company-name">University Project</span>
              <h1 className="project-title">Music Room</h1>
              <p className="project-subtitle">ミュージックルーム - ミュージシャン同士で繋がろう</p>
              <p className="project-description">
                大学のミュージシャンを主なユーザーとして扱い、クリエイティブなネットワークを確立し、しかしコラボレーションを促進する��めの指定されたプラットフォーム。
              </p>
            </div>
            <div className="project-hero">
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                alt="Music Room App Interface"
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
              <p>1ヶ月</p>
            </div>
            <div className="meta-card">
              <Users className="meta-icon" />
              <h3>チーム</h3>
              <p>3人</p>
            </div>
            <div className="meta-card">
              <Target className="meta-icon" />
              <h3>ツール</h3>
              <p>Adobe XD, Illustrator, Power Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement & Interview */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Music className="section-icon" />
            <h2>問題提起とインタビュー</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-problem.png"
              alt="Music Room Problem Statement and Interview"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* Required Features & Competitive Analysis */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>必要な機能と競合分析</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-features.png"
              alt="Music Room Required Features and Competitive Analysis"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* Persona & Target Audience */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>ペルソナとターゲット層</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-persona.png"
              alt="Music Room Persona and Target Audience"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* Social Design Overview */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>ソーシャルデザイン</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-social-design.png"
              alt="Music Room Social Design Overview"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* Service Overview & Production Process */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>サービス概要と制作プロセス</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-service.png"
              alt="Music Room Service Overview and Production Process"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* Prototype Screens */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>プロトタイプ</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-prototype.png"
              alt="Music Room Prototype Screens"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>ユーザーフロー</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-userflow.png"
              alt="Music Room User Flow"
              width={1200}
              height={800}
              className="full-width-image"
            />
          </div>
        </div>
      </section>

      {/* Vision & Reflection */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <h2>ビジョンと反省</h2>
          </div>
          <div className="full-width-content">
            <Image
              src="/images/music-room-vision.png"
              alt="Music Room Vision and Reflection"
              width={1200}
              height={800}
              className="full-width-image"
            />
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
