'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ROIKalkulator() {
  const [units, setUnits] = useState(300)
  const sectionRef = useRef<HTMLElement>(null)

  const hoursPerWeek = Math.round((units / 300) * 16)
  const hourlyRate = 38 // EUR, typical German office staff cost
  const grossMonthlySavings = Math.round(hoursPerWeek * 4.33 * hourlyRate)
  const subscriptionCost = 890
  const monthlySavings = Math.max(0, grossMonthlySavings - subscriptionCost)
  const yearlySavings = monthlySavings * 12

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.roi-content', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out', scrollTrigger: { trigger: '.roi-content', start: 'top 82%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="roi" style={{ background: 'var(--bg-base)', padding: '96px 28px' }} aria-labelledby="roi-heading">
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div className="roi-content">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">ROI-KALKULATOR</span>
            <div className="divider-brass" style={{ margin: '0 auto 24px' }} />
            <h2 id="roi-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 14 }}>
              Was kostet Ihre Routine-Kommunikation wirklich?
            </h2>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 16, lineHeight: 1.75, color: 'var(--ink-600)', maxWidth: 560, margin: '0 auto' }}>
              Hausverwaltungen verlieren durchschnittlich 15 Stunden pro Woche mit Routine-Kommunikation, obwohl diese Zeit bei anderen Aufgaben besser aufgehoben wäre. Berechnen Sie Ihr Einsparpotenzial.
            </p>
          </div>

          {/* Calculator card */}
          <div style={{ background: 'var(--white)', border: '1px solid rgba(184,148,58,0.15)', borderRadius: 14, padding: '44px 48px', boxShadow: '0 8px 40px rgba(26,22,18,0.06)' }}>
            {/* Slider */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <label htmlFor="units-slider" style={{ fontFamily: 'var(--font-instrument)', fontWeight: 600, fontSize: 15, color: 'var(--ink-900)' }}>
                  Verwaltete Einheiten
                </label>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 28, color: 'var(--brass)', letterSpacing: '-0.03em' }}>{units}</span>
              </div>
              <input
                id="units-slider"
                type="range"
                min={50}
                max={2000}
                step={50}
                value={units}
                onChange={e => setUnits(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--brass)', height: 4, cursor: 'pointer' }}
                aria-valuemin={50}
                aria-valuemax={2000}
                aria-valuenow={units}
                aria-valuetext={`${units} Einheiten`}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                {['50', '500', '1.000', '1.500', '2.000'].map(v => (
                  <span key={v} style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>{v}</span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                { label: 'Stunden gespart / Woche', value: `${hoursPerWeek}+`, sublabel: 'durch KI-Automatisierung', highlight: false },
                { label: 'Netto-Einsparung / Monat', value: `${monthlySavings.toLocaleString('de-DE')} €`, sublabel: 'nach Abzug MieterPilot-Abo (890 €)', highlight: true },
                { label: 'Netto-Einsparung / Jahr', value: `${yearlySavings.toLocaleString('de-DE')} €`, sublabel: 'ohne neue Mitarbeiter', highlight: false },
              ].map((r, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '24px 16px', background: r.highlight ? 'var(--obsidian)' : 'var(--bg-surface)', borderRadius: 10, border: r.highlight ? '1px solid var(--brass)' : '1px solid rgba(184,148,58,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(22px, 3vw, 30px)', color: r.highlight ? 'var(--brass)' : 'var(--ink-900)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>
                    {r.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-instrument)', fontWeight: 600, fontSize: 13, color: r.highlight ? 'rgba(255,255,255,0.9)' : 'var(--ink-900)', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 11, color: r.highlight ? 'rgba(255,255,255,0.45)' : 'var(--ink-400)' }}>{r.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Disclaimer + CTA */}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(184,148,58,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 12, color: 'var(--ink-400)', maxWidth: 360 }}>
                Basierend auf Ø 1,5 Anfragen/Einheit/Monat · 20 Min./Anfrage · 70% Automatisierungsquote · abzgl. 890 €/Monat MieterPilot-Abo (Professional). Individuelle Kalkulation im Gespräch.
              </p>
              <a href="#contact" className="btn-obsidian" style={{ fontSize: 13.5 }}>
                Individuellen ROI berechnen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
