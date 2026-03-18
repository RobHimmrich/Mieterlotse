'use client'

import { useEffect, useRef } from 'react'
import { Building2, Moon, FileBadge, TrendingUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cases = [
  {
    icon: <Building2 size={22} aria-hidden="true" />,
    iconColor: 'var(--brass)',
    iconBg: 'var(--brass-pale)',
    iconBorder: 'var(--brass-border)',
    title: 'Portfolio-Übersicht behalten',
    text: 'Alle Objekte, alle Vorgänge auf einen Blick. Ihr Dashboard zeigt, welche Liegenschaften besondere Aufmerksamkeit brauchen — bevor Sie angerufen werden.',
  },
  {
    icon: <Moon size={22} aria-hidden="true" />,
    iconColor: '#A78BFA',
    iconBg: 'rgba(167, 139, 250, 0.1)',
    iconBorder: 'rgba(167, 139, 250, 0.2)',
    title: 'Nachtdienst entlasten',
    text: 'Mieter rufen um 22 Uhr an — die KI nimmt ab, bewertet die Dringlichkeit und eskaliert nur echte Notfälle an den Bereitschaftsdienst. Kein Schlafentzug für Ihr Team.',
  },
  {
    icon: <FileBadge size={22} aria-hidden="true" />,
    iconColor: 'var(--green-ok)',
    iconBg: 'var(--green-ok-pale)',
    iconBorder: 'rgba(46, 158, 107, 0.2)',
    title: 'Compliance-Nachweis führen',
    text: 'Jede Interaktion mit DSGVO-konformer Protokollierung. Im Streitfall haben Sie den vollständigen Kommunikationsverlauf — lückenlos, mit Zeitstempel, exportierbar.',
  },
  {
    icon: <TrendingUp size={22} aria-hidden="true" />,
    iconColor: '#38BDF8',
    iconBg: 'rgba(56, 189, 248, 0.1)',
    iconBorder: 'rgba(56, 189, 248, 0.2)',
    title: 'Skalieren ohne Neueinstellungen',
    text: 'Wachsen Sie von 400 auf 800 Einheiten — die Kapazität der KI wächst automatisch mit. Keine Einarbeitungszeit, keine Personalkosten, keine Fluktuationsrisiken.',
  },
]

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.uc-header', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out', scrollTrigger: { trigger: '.uc-header', start: 'top 85%' } })
      gsap.fromTo('.uc-card', { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: '.usecases-grid', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: 'var(--obsidian)', padding: '96px 28px' }} aria-labelledby="usecases-heading">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="uc-header" style={{ marginBottom: 56, maxWidth: 540 }}>
          <span className="eyebrow eyebrow-brass">EINSATZ IN IHREM UNTERNEHMEN</span>
          <div className="divider-brass" />
          <h2 id="usecases-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 34px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Vier Szenarien, die jeder Geschäftsführer kennt
          </h2>
        </div>

        <div className="usecases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {cases.map((c, i) => (
            <div key={i} className="uc-card feature-card-dark" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: c.iconBg, border: `1px solid ${c.iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: c.iconColor, marginTop: 2 }}>
                {c.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
