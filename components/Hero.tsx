'use client'

import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Server, Users, X } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [videoHovered, setVideoHovered] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const s = isMobile ? 0.6 : 1.0
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    if (eyebrowRef.current) tl.fromTo(eyebrowRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 * s }, 0.1)
    if (headRef.current) tl.fromTo(headRef.current, { y: isMobile ? 18 : 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 * s }, 0.22)
    if (textRef.current) tl.fromTo(textRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 * s }, 0.36)
    if (ctaRef.current) tl.fromTo(ctaRef.current.children, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 * s, stagger: 0.1 }, 0.48)
    if (trustRef.current) tl.fromTo(trustRef.current.children, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 * s, stagger: 0.08 }, 0.6)
    if (!isMobile && cardRef.current) tl.fromTo(cardRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1 }, 0.3)
    if (isMobile && cardRef.current) tl.fromTo(cardRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.5)
  }, [])

  const openModal = () => {
    setModalOpen(true)
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0
        // .play() gibt ein Promise zurück — Fehler abfangen damit kein Dev-Overlay erscheint
        modalVideoRef.current.play().catch(() => {})
      }
    }, 60)
  }

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    setModalOpen(false)
  }

  // ESC-Taste schließt Modal
  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalOpen])

  // Body-Scroll sperren wenn Modal offen
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      <section style={{ background: 'var(--bg-base)', paddingTop: 128, paddingBottom: 96, position: 'relative', overflow: 'hidden' }} aria-label="Hero-Bereich">
        {/* Geometrische Akzente */}
        <div style={{ position: 'absolute', top: -80, right: -120, width: 600, height: 600, border: '1px solid rgba(184,148,58,0.07)', borderRadius: '50%', pointerEvents: 'none' }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: 40, right: -60, width: 400, height: 400, border: '1px solid rgba(184,148,58,0.05)', borderRadius: '50%', pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

            {/* Links — Textspalte */}
            <div>
              <div ref={eyebrowRef}>
                <span className="eyebrow">HAUSVERWALTUNG · BETRIEBSSTEUERUNG</span>
              </div>

              <h1 ref={headRef} style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(36px, 4.2vw, 54px)', color: 'var(--ink-900)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24 }}>
                Ihr Unternehmen läuft.{' '}
                <br />
                Auch wenn Sie nicht{' '}
                <br />
                <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>im Büro sind.</em>
              </h1>

              <p ref={textRef} style={{ fontFamily: 'var(--font-instrument)', fontSize: 17, lineHeight: 1.8, color: 'var(--ink-600)', marginBottom: 40, maxWidth: 460 }}>
                Mieterlotse gibt mittelständischen Hausverwaltungen vollständige Betriebsübersicht — automatisierte Mieterkommunikation, einfaches Web-Dashboard von uns bereitgestellt, keine Schulungen für Ihr Team.
              </p>

              <div ref={ctaRef} className="hero-cta-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
                <a href="https://calendly.com/robin-himmrich/30min" target="_blank" rel="noopener noreferrer" className="btn-obsidian">Erstgespräch buchen →</a>
                <a href="#dashboard" className="btn-brass-outline">Dashboard ansehen</a>
              </div>

              <div ref={trustRef} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: <Server size={14} aria-hidden="true" />, text: 'Web-Dashboard von uns — einfach als Web-App erreichbar' },
                  { icon: <ShieldCheck size={14} aria-hidden="true" />, text: 'AVV nach Art. 28 DSGVO standardmäßig inklusive' },
                  { icon: <Users size={14} aria-hidden="true" />, text: 'Keine neue Software, keine Schulungen für Ihr Team' },
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 28, height: 28, background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brass)' }}>
                      {t.icon}
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--ink-600)', fontFamily: 'var(--font-instrument)', fontWeight: 500 }}>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rechts — Video (stumm, Loop) — Klick öffnet Lightbox */}
            <div ref={cardRef}>
              <div
                onClick={openModal}
                onMouseEnter={() => setVideoHovered(true)}
                onMouseLeave={() => setVideoHovered(false)}
                role="button"
                tabIndex={0}
                aria-label="Demo-Video in Vollbild öffnen"
                onKeyDown={e => e.key === 'Enter' && openModal()}
                style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.45)', background: '#0A0E1A', border: '1px solid #1E2A4A', aspectRatio: '16/9', cursor: 'pointer' }}
              >
                {/* Teal Akzentlinie */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #0BDBC8, transparent)', zIndex: 2 }} aria-hidden="true" />

                {/* Stummer Vorschau-Loop */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/MieterlotseDemo.mp4"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Hover-Overlay */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 3,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
                  background: 'rgba(10,14,26,0.45)',
                  opacity: videoHovered ? 1 : 0,
                  transition: 'opacity 0.25s ease',
                  pointerEvents: 'none',
                }} aria-hidden="true">
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(11,219,200,0.15)', border: '2px solid rgba(11,219,200,0.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 3l14 9-14 9V3z" fill="#0BDBC8" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 600, letterSpacing: '0.04em' }}>MIT TON ABSPIELEN</span>
                </div>
              </div>
              <p style={{ marginTop: 10, textAlign: 'center', fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>
                Klicken für vollständige Demo mit Ton
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal — außerhalb der section, kein overflow:hidden-Konflikt ── */}
      {modalOpen && (
        <div
          onClick={closeModal}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          role="dialog"
          aria-modal="true"
          aria-label="Demo-Video"
        >
          {/* Schließen-Button */}
          <button
            onClick={closeModal}
            aria-label="Video schließen"
            style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backdropFilter: 'blur(8px)', zIndex: 1001 }}
          >
            <X size={20} />
          </button>

          {/* Video — Klick auf Video selbst schließt nicht */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 1100, borderRadius: 12, overflow: 'hidden', boxShadow: '0 40px 120px rgba(0,0,0,0.8)', border: '1px solid rgba(184,148,58,0.2)' }}
          >
            <video
              ref={modalVideoRef}
              controls
              playsInline
              src="/MieterlotseDemo.mp4"
              style={{ width: '100%', display: 'block', maxHeight: '80vh', background: '#000' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
