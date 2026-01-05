"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Target, Code, Zap, Globe, Smartphone } from "lucide-react"

export default function SISMCyclingCaseStudy() {
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
              <span className="company-name">Personal Project</span>
              <h1 className="project-title">SISM Cycling</h1>
              <p className="project-subtitle">Premium Brompton Adventures</p>
              <p className="project-description">
                BromptonのサイクリングツアーのWebサイト。Next.js、TypeScript、Tailwind
                CSSを使用して構築した、息をのむような景色の中での忘れられないBROMPTON体験を提供するプラットフォーム。
              </p>
            </div>
            <div className="project-hero">
              <Image
                src="https://sismcycling.vercel.app/images/home-hero.jpg"
                alt="SISM Cycling Hero"
                width={600}
                height={400}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="case-study-section">
        <div className="container">
          <div className="section-header">
            <Code className="section-icon" />
            <h2>技術概要</h2>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <p>
                SISM
                Cyclingは、プレミアムなBromptonサイクリング体験を提供するWebプラットフォームです。モダンなWeb技術スタックを使用し、レスポンシブでパフォーマンスの高いユーザー体験を実現しています。
              </p>

              <div className="role-details">
                <h3>技術スタック</h3>
                <ul>
                  <li>
                    <strong>Framework:</strong> Next.js 14 (App Router)
                  </li>
                  <li>
                    <strong>Language:</strong> TypeScript
                  </li>
                  <li>
                    <strong>Styling:</strong> Tailwind CSS
                  </li>
                  <li>
                    <strong>Deployment:</strong> Vercel
                  </li>
                  <li>
                    <strong>Image Optimization:</strong> Next.js Image Component
                  </li>
                </ul>

                <h3>プロジェクトリンク</h3>
                <p>
                  <a
                    href="https://sismcycling.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(255, 193, 7, 0.9)", textDecoration: "underline" }}
                  >
                    https://sismcycling.vercel.app
                  </a>
                </p>
              </div>
            </div>
            <div className="content-image">
              <Image
                src="https://sismcycling.vercel.app/images/home-hero-secondary.jpg"
                alt="SISM Cycling Experience"
                width={600}
                height={800}
                className="section-image"
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
