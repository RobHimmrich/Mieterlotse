'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

const CALENDLY = 'https://calendly.com/robin-himmrich/30min'

// Seiten mit dunklem Hintergrund direkt unter der Navbar
const DARK_BG_PAGES = ['/preise', '/test']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const isDarkPage = DARK_BG_PAGES.includes(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.1 }
    )
  }, [])

  // Logo-Textfarbe: weiß auf dunklen Seiten (ungescrolt), sonst dunkel
  const logoColor = (!scrolled && isDarkPage) ? '#fff' : 'var(--ink-900)'
  // Nav-Links: heller auf dunklen Seiten (ungescrolt)
  const linkColor = (!scrolled && isDarkPage) ? 'rgba(255,255,255,0.65)' : 'var(--ink-400)'
  const linkHover = (!scrolled && isDarkPage) ? '#fff' : 'var(--ink-900)'
  // Burger-Icon-Farbe
  const iconColor = (!scrolled && isDarkPage) ? '#fff' : 'var(--ink-900)'

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }} aria-label="Mieterlotse Startseite">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <rect width="34" height="34" rx="7" fill="var(--obsidian)"/>
            <path d="M17 6.5L5.5 15V27.5H13V21.5H21V27.5H28.5V15L17 6.5Z" fill="var(--brass)"/>
            <rect x="13" y="21.5" width="8" height="6" rx="1" fill="var(--obsidian)"/>
          </svg>
          <div>
            <span style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 19, color: logoColor, letterSpacing: '-0.025em', lineHeight: 1, transition: 'color 0.3s' }}>
              Mieterlotse
            </span>
          </div>
          <span className="tag-pill" style={{ fontSize: 10 }}>Executive</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 36 }}>
          {[
            { label: 'Dashboard', href: pathname === '/' ? '#dashboard' : '/#dashboard' },
            { label: 'Über uns', href: pathname === '/' ? '#team' : '/#team' },
            { label: 'Preise', href: '/preise' },
            { label: 'Demo-Test', href: '/test' },
          ].map(l => (
            <a key={l.label} href={l.href}
              style={{ color: linkColor, fontSize: 13.5, fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-instrument)', transition: 'color 0.2s', letterSpacing: '0.01em' }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = linkHover)}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = linkColor)}>
              {l.label}
            </a>
          ))}
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-obsidian" style={{ padding: '10px 20px', fontSize: 13 }}>
            Erstgespräch buchen
          </a>
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} color={iconColor} /> : <Menu size={22} color={iconColor} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'var(--obsidian)', borderTop: '1px solid var(--obsidian-border)', padding: '20px 28px 28px', display: 'flex', flexDirection: 'column', gap: 4 }} className="md:hidden">
          {[
            { label: 'Dashboard', href: pathname === '/' ? '#dashboard' : '/#dashboard' },
            { label: 'Über uns', href: pathname === '/' ? '#team' : '/#team' },
            { label: 'Preise', href: '/preise' },
            { label: 'Demo-Test', href: '/test' },
          ].map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, fontWeight: 500, textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid var(--obsidian-border)', display: 'block', fontFamily: 'var(--font-instrument)' }}>
              {l.label}
            </a>
          ))}
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
            className="btn-obsidian" style={{ marginTop: 16, justifyContent: 'center', fontSize: 14, border: '1.5px solid var(--brass)' }}>
            Erstgespräch buchen
          </a>
        </div>
      )}
    </nav>
  )
}
