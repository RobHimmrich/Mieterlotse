'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const quotes = [
  {
    text: 'Endlich kein Chaos mehr am Montagmorgen. Das Team kommt ins Büro und alles ist bereits bearbeitet.',
    company: 'Hausverwaltung, 450 Einheiten',
    city: 'Hamburg',
  },
  {
    text: 'Das Dashboard gibt mir einen Überblick über mein gesamtes Portfolio, den ich vorher nie hatte.',
    company: 'Inhaber, 320 Einheiten',
    city: 'München',
  },
  {
    text: 'Mein Team hat deutlich mehr Zeit für die wirklich wichtigen Aufgaben. Die Routineanfragen erledigt die KI zuverlässiger als ein Teilzeitkraft.',
    company: 'Geschäftsführer, 680 Einheiten',
    city: 'Frankfurt',
  },
]

export default function Referenzen() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.ref-header', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out', scrollTrigger: { trigger: '.ref-header', start: 'top 85%' } })
      gsap.fromTo('.ref-quote', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.18, scrollTrigger: { trigger: '.ref-grid', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: 'var(--bg-surface)', padding: '96px 28px' }} aria-labelledby="referenzen-heading">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="ref-header" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">STIMMEN AUS DER PRAXIS</span>
          <div className="divider-brass" style={{ margin: '0 auto 24px' }} />
          <h2 id="referenzen-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(24px, 2.8vw, 32px)', color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Was Geschäftsführer berichten
          </h2>
        </div>

        <div className="ref-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {quotes.map((q, i) => (
            <div key={i} className="ref-quote" style={{ background: 'var(--white)', border: '1px solid rgba(184,148,58,0.12)', borderRadius: 12, padding: '36px 32px', position: 'relative' }}>
              {/* Opening quote mark */}
              <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 72, lineHeight: 0.7, color: 'rgba(184,148,58,0.15)', marginBottom: 20, userSelect: 'none' }} aria-hidden="true">
                "
              </div>
              <blockquote>
                <p className="referenz-quote" style={{ marginBottom: 28 }}>
                  "{q.text}"
                </p>
                <footer>
                  <div style={{ width: 28, height: 1.5, background: 'var(--brass)', marginBottom: 14, opacity: 0.5 }} aria-hidden="true" />
                  <div style={{ fontFamily: 'var(--font-instrument)', fontWeight: 600, fontSize: 13, color: 'var(--ink-900)' }}>{q.company}</div>
                  <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 12, color: 'var(--ink-400)', marginTop: 3 }}>{q.city}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{ textAlign: 'center', marginTop: 36, fontFamily: 'var(--font-instrument)', fontSize: 12, color: 'var(--ink-400)' }}>
          Aussagen wurden auf Wunsch anonymisiert. Namen und Unternehmensdaten auf Anfrage verfügbar.
        </p>
      </div>
    </section>
  )
}
