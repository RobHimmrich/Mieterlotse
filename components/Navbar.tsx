'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

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

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }} aria-label="MieterPilot Startseite">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <rect width="34" height="34" rx="7" fill="var(--obsidian)"/>
            <path d="M17 6.5L5.5 15V27.5H13V21.5H21V27.5H28.5V15L17 6.5Z" fill="var(--brass)"/>
            <rect x="13" y="21.5" width="8" height="6" rx="1" fill="var(--obsidian)"/>
          </svg>
          <div>
            <span style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 19, color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1 }}>
              MieterPilot
            </span>
          </div>
          <span className="tag-pill" style={{ fontSize: 10 }}>Executive</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 36 }}>
          {[
            { label: 'Dashboard', href: '#dashboard' },
            { label: 'ROI-Rechner', href: '#roi' },
            { label: 'Über uns', href: '#team' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ color: 'var(--ink-400)', fontSize: 13.5, fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-instrument)', transition: 'color 0.2s', letterSpacing: '0.01em' }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--ink-900)')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'var(--ink-400)')}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-obsidian" style={{ padding: '10px 20px', fontSize: 13 }}>
            Strategie-Gespräch anfragen
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} color="var(--ink-900)" /> : <Menu size={22} color="var(--ink-900)" />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'var(--obsidian)', borderTop: '1px solid var(--obsidian-border)', padding: '20px 28px 28px', display: 'flex', flexDirection: 'column', gap: 4 }} className="md:hidden">
          {[
            { label: 'Dashboard', href: '#dashboard' },
            { label: 'ROI-Rechner', href: '#roi' },
            { label: 'Über uns', href: '#team' },
          ].map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, fontWeight: 500, textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid var(--obsidian-border)', display: 'block', fontFamily: 'var(--font-instrument)' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-obsidian" style={{ marginTop: 16, justifyContent: 'center', fontSize: 14, border: '1.5px solid var(--brass)' }}>
            Strategie-Gespräch anfragen
          </a>
        </div>
      )}
    </nav>
  )
}
