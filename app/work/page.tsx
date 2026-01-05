"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Palette, Music } from "lucide-react"

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="work" id="work">
      <h1 className="headings">
        <Palette className="section-icon" />
        UI/UX Design Portfolio
      </h1>
      <div className="row-work">
        <div
          className="box-work"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop')",
          }}
        >
          <div className="work-icon">
            <Music size={32} />
          </div>
          <h2 className="work-title">Music Room</h2>
          <p className="work-description">Musician Networking App</p>
          <Link href="/work/music-room">
            <button className="more-btn">View Case Study</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
