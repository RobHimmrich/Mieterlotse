'use client'

import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-v2-content > *', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out', stagger: 0.15, scrollTrigger: { trigger: '.team-v2-content', start: 'top 82%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" style={{ background: 'var(--obsidian)', padding: '96px 28px', borderTop: '1px solid var(--obsidian-border)' }} aria-labelledby="team-heading">
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="team-v2-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className="eyebrow eyebrow-brass">IHR ANSPRECHPARTNER AUF GESCHÄFTSFÜHRUNGSEBENE</span>
          <div className="divider-brass" style={{ margin: '0 auto' }} />

          <h2 id="team-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 34px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 20 }}>
            Persönlich. Direkt. Verantwortlich.
          </h2>

          <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', maxWidth: 640, marginBottom: 48 }}>
            Mit meiner Erfahrung aus der Start-up-Szene im KI-Bereich habe ich erkannt: Immobilienverwaltungen haben enormen Automatisierungsbedarf — besonders bei der täglichen Mieterkommunikation. Ich helfe mittelständischen Verwaltungen, diesen Engpass zu lösen. Persönlich, ohne Umwege, mit Technologie die funktioniert.
          </p>

          {/* Note about direct contact */}
          <div style={{ padding: '14px 24px', background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', borderRadius: 8, marginBottom: 40, maxWidth: 540 }}>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, color: 'var(--brass)', fontWeight: 500, lineHeight: 1.6 }}>
              Alle Gespräche werden direkt mit der Gründungsleitung geführt — kein Sales-Team, kein Call-Center, kein Account-Manager.
            </p>
          </div>

          {/* Card */}
          <div style={{ background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 14, padding: '40px 44px', display: 'inline-block', maxWidth: 400, width: '100%' }}>
            {/* Photo */}
            <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
              <div style={{ padding: 3, background: 'linear-gradient(135deg, var(--brass), var(--brass-light))', borderRadius: '50%', display: 'inline-block' }}>
                <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(184,148,58,0.15), rgba(212,173,92,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Foto von Robin Himmrich">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
                    <circle cx="25" cy="19" r="10" fill="rgba(184,148,58,0.35)" />
                    <path d="M5 44c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="rgba(184,148,58,0.35)" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>Robin Himmrich</div>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, color: 'var(--brass)', fontWeight: 600, marginBottom: 16, letterSpacing: '0.02em' }}>Gründer, MieterPilot</div>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
              Ihr direkter Ansprechpartner für Einrichtung, Strategie-Gespräch und laufenden Support — von Anfang an.
            </p>

            <div style={{ height: 1, background: 'var(--obsidian-border)', marginBottom: 20 }} aria-hidden="true" />

            <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
              <a href="mailto:robin@immobilienverwaltung-automation.com" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', borderRadius: 6, color: 'var(--brass)', textDecoration: 'none', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-instrument)' }} aria-label="E-Mail an Robin Himmrich">
                <Mail size={13} aria-hidden="true" /> E-Mail
              </a>
              <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--obsidian-border)', borderRadius: 6, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-instrument)' }}>
                Gespräch buchen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
