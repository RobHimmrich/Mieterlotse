'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const integrations = [
  { name: 'Telefon', color: '#16A34A' },
  { name: 'E-Mail', color: '#DC2626' },
  { name: 'Weitere auf Anfrage', color: 'var(--brass)', custom: true },
]

export default function IntegrationsRow() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.int-row-content', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: '.int-row-content', start: 'top 88%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: 'var(--bg-base)', padding: '56px 28px', borderBottom: '1px solid rgba(184,148,58,0.08)' }} aria-label="Kompatible Systeme">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="int-row-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 15, fontWeight: 600, color: 'var(--ink-900)', display: 'block', marginBottom: 4 }}>
              Funktioniert mit Ihren bestehenden Tools.
            </span>
            <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, color: 'var(--ink-400)' }}>
              Integration in gängige Verwaltungssoftware auf Anfrage möglich.
            </span>
          </div>

          <div className="integrations-row" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {integrations.map((intg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 18px',
                  background: intg.custom ? 'var(--brass-pale)' : 'var(--white)',
                  border: intg.custom ? '1px solid var(--brass-border)' : '1px solid rgba(26,22,18,0.08)',
                  borderRadius: 8,
                  boxShadow: '0 1px 4px rgba(26,22,18,0.04)',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: intg.color, flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, fontWeight: 600, color: intg.custom ? 'var(--brass)' : 'var(--ink-900)', whiteSpace: 'nowrap' }}>
                  {intg.name}
                </span>
                {intg.custom && (
                  <span style={{ fontSize: 10, color: 'var(--brass)', fontFamily: 'var(--font-instrument)', marginLeft: 2 }}>+ API</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
