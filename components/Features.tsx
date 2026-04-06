'use client'

import { useEffect, useRef } from 'react'
import { LayoutDashboard, SlidersHorizontal, FileCheck2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cards = [
  {
    icon: <LayoutDashboard size={21} aria-hidden="true" />,
    iconColor: 'var(--brass)',
    iconBg: 'var(--brass-pale)',
    iconBorder: 'var(--brass-border)',
    title: 'Vollständige Betriebsübersicht',
    text: 'Unser Dashboard zeigt alle Objekte, Anrufe, E-Mails und Eskalationen in Echtzeit. Einfach gehalten, ohne Schulungen bedienbar — Sie sehen auf einen Blick, was in Ihrer gesamten Verwaltung passiert.',
  },
  {
    icon: <SlidersHorizontal size={21} aria-hidden="true" />,
    iconColor: '#A78BFA',
    iconBg: 'rgba(167, 139, 250, 0.1)',
    iconBorder: 'rgba(167, 139, 250, 0.2)',
    title: 'Eskalation nach Ihren Regeln',
    text: 'Sie entscheiden, welche Fälle automatisch gelöst werden und welche Sie persönlich informieren. Wasserschaden, Mietausfall, juristisch relevante Anfragen — Ihr Eskalationsprotokoll, Ihre Kontrolle.',
  },
  {
    icon: <FileCheck2 size={21} aria-hidden="true" />,
    iconColor: 'var(--green-ok)',
    iconBg: 'var(--green-ok-pale)',
    iconBorder: 'rgba(46, 158, 107, 0.2)',
    title: 'Lückenlose Compliance-Dokumentation',
    text: 'Jeder Vorgang wird automatisch mit Zeitstempel, Inhalt und Ergebnis erfasst. Ihre DSGVO-konforme Datenablage auf EU-Servern, AVV inklusive — bereit für Betriebsprüfungen und Audits.',
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-header-v2', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out', scrollTrigger: { trigger: '.feature-header-v2', start: 'top 85%' } })
      gsap.fromTo('.feature-card-v2', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: '.features-grid-v2', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: 'var(--bg-surface)', padding: '96px 28px' }} aria-labelledby="features-heading">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="feature-header-v2" style={{ maxWidth: 580, marginBottom: 56 }}>
          <span className="eyebrow">WAS DER GESCHÄFTSFÜHRER SIEHT UND KONTROLLIERT</span>
          <div className="divider-brass" />
          <h2 id="features-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 16 }}>
            Automatisierung ohne Kontrollverlust
          </h2>
          <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 16, lineHeight: 1.8, color: 'var(--ink-600)' }}>
            MieterPilot arbeitet im Hintergrund — sichtbar nur dann, wenn Sie es wollen. Ihr Dashboard, Ihre Regeln, Ihre Daten.
          </p>
        </div>

        <div className="features-grid features-grid-v2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map((c, i) => (
            <div key={i} className="feature-card-v2 feature-card-light">
              <div style={{ width: 44, height: 44, borderRadius: 10, background: c.iconBg, border: `1px solid ${c.iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.iconColor, marginBottom: 22 }}>
                {c.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)', lineHeight: 1.3, marginBottom: 12, letterSpacing: '-0.02em' }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, lineHeight: 1.8, color: 'var(--ink-600)' }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
