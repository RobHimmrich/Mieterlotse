'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const kpis = [
  { number: '16+', unit: 'Std./Woche', label: 'gespart pro Verwaltung', sub: 'bei Ø 300 Einheiten' },
  { number: '70%', unit: '', label: 'Anfragen automatisch gelöst', sub: 'lt. McKinsey AI-Studie 2023' },
  { number: '< 20', unit: 'Sek.', label: 'Reaktionszeit per Mail', sub: 'Direkt per Anruf, 24/7' },
  { number: '100%', unit: '', label: 'Vorgänge dokumentiert', sub: 'im Dashboard, jederzeit abrufbar' },
]

export default function KennzahlenStrip() {
  const stripRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.kpi-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12,
          scrollTrigger: { trigger: '.kpi-strip', start: 'top 85%' } }
      )
    }, stripRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={stripRef} style={{ background: 'var(--obsidian)', padding: '64px 28px', borderTop: '1px solid var(--obsidian-border)' }} aria-label="Leistungskennzahlen">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="kpi-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--obsidian-border)', border: '1px solid var(--obsidian-border)', borderRadius: 10, overflow: 'hidden' }}>
          {kpis.map((k, i) => (
            <div key={i} className="kpi-item" style={{ background: 'var(--obsidian)', padding: '36px 28px', position: 'relative' }}>
              {i < kpis.length - 1 && (
                <div style={{ position: 'absolute', top: '20%', right: 0, height: '60%', width: 1, background: 'var(--obsidian-border)' }} aria-hidden="true" />
              )}
              <div className="kpi-number">
                {k.number}<span style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>{k.unit}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-instrument)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 8, lineHeight: 1.3 }}>{k.label}</div>
              <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 12, color: 'var(--ink-400)', marginTop: 4 }}>{k.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
