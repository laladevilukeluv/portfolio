"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, Briefcase, User, Menu, X } from "lucide-react"

export default function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false) // Close mobile menu when navigating
    if (pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      window.location.href = `/#${sectionId}`
    } else {
      // If on homepage, just scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        const navHeight = 80 // Account for sticky nav height
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <ul className="nav-section desktop-nav">
        <li>
          <button onClick={() => scrollToSection("home")} className="nav-button">
            <Home size={18} className="nav-icon" />
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("work-showcase")} className="nav-button">
            <Briefcase size={18} className="nav-icon" />
            Work
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("career-showcase")} className="nav-button">
            <User size={18} className="nav-icon" />
            Career
          </button>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-list">
              <li>
                <button onClick={() => scrollToSection("home")} className="nav-button">
                  <Home size={20} className="nav-icon" />
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("work-showcase")} className="nav-button">
                  <Briefcase size={20} className="nav-icon" />
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("career-showcase")} className="nav-button">
                  <User size={20} className="nav-icon" />
                  Career
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
