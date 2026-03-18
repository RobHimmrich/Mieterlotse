'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2, BarChart3, Bell, Lock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const benefits = [
  { icon: <BarChart3 size={16} aria-hidden="true" />, title: 'Alles an einem Ort', text: 'Anrufe, E-Mails, Eskaliationen und Auswertungen — übersichtlich in einem einzigen Dashboard zusammengefasst.' },
  { icon: <Bell size={16} aria-hidden="true" />, title: 'Keine Einarbeitung notwendig', text: 'Das Dashboard ist bewusst einfach gehalten. Keine Schulungen, keine IT-Kenntnisse erforderlich — sofort einsatzbereit.' },
  { icon: <CheckCircle2 size={16} aria-hidden="true" />, title: 'Von uns eingerichtet und betreut', text: 'Wir kümmern uns um Einrichtung, Updates und Support. Sie müssen sich um nichts kümmern.' },
  { icon: <Lock size={16} aria-hidden="true" />, title: 'DSGVO-konform & sicher', text: 'Alle Daten werden auf EU-Servern gespeichert. Kein Drittanbieter-Zugriff, AVV nach Art. 28 DSGVO inklusive.' },
]

export default function DashboardSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.db-left-col', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1, ease: 'power4.out', scrollTrigger: { trigger: '.db-layout', start: 'top 80%' } })
      gsap.fromTo('.db-right-col', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1, ease: 'power4.out', scrollTrigger: { trigger: '.db-layout', start: 'top 80%' } })
      gsap.fromTo('.db-benefit', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: '.db-benefits', start: 'top 82%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="dashboard" style={{ background: 'var(--obsidian)', padding: '100px 28px' }} aria-labelledby="dashboard-heading">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="db-layout hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* Left — expanded dashboard mockup */}
          <div className="db-left-col">
            <div style={{ background: 'var(--obsidian-card)', borderRadius: 12, border: '1px solid var(--obsidian-border)', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
              <div className="dashboard-glow-top" aria-hidden="true" />

              {/* Top bar */}
              <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--obsidian-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF6058' }} aria-hidden="true" />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} aria-hidden="true" />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C841' }} aria-hidden="true" />
                </div>
                <span style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>dashboard.mieterpilot.de</span>
                <span className="tag-pill" style={{ fontSize: 10, padding: '2px 8px' }}>Live</span>
              </div>

              {/* Nav */}
              <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--obsidian-border)', display: 'flex', gap: 20 }}>
                {['Übersicht', 'Objekte', 'Vorgänge', 'Berichte', 'Einstellungen'].map((n, i) => (
                  <span key={n} style={{ fontSize: 12, fontFamily: 'var(--font-instrument)', fontWeight: i === 0 ? 700 : 400, color: i === 0 ? 'var(--brass)' : 'var(--ink-400)', borderBottom: i === 0 ? '1.5px solid var(--brass)' : 'none', paddingBottom: 4, cursor: 'pointer' }}>
                    {n}
                  </span>
                ))}
              </div>

              {/* Chart area */}
              <div style={{ padding: '18px 18px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', marginBottom: 4 }}>Vorgänge letzte 8 Wochen</div>
                    <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 24, color: '#fff' }}>1.284</div>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--green-ok)', fontFamily: 'var(--font-instrument)', fontWeight: 600 }}>↑ 12% vs. Vormonat</div>
                </div>
                {/* Bar chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 60 }}>
                  {[38, 52, 44, 68, 72, 58, 85, 92].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? 'var(--brass)' : 'rgba(184,148,58,0.25)', borderRadius: '3px 3px 0 0', transition: 'height 0.3s' }} aria-hidden="true" />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                  {['KW 8', 'KW 9', 'KW 10', 'KW 11', 'KW 12', 'KW 13', 'KW 14', 'KW 15'].map(w => (
                    <span key={w} style={{ fontSize: 9, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>{w}</span>
                  ))}
                </div>
              </div>

              {/* Two mini KPI cards */}
              <div style={{ padding: '0 18px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Automatisch gelöst', value: '70%', icon: '✓', color: 'var(--green-ok)' },
                  { label: 'Eskaliationen heute', value: '3', icon: '!', color: '#F87171' },
                ].map((c, i) => (
                  <div key={i} style={{ background: 'var(--obsidian)', border: '1px solid var(--obsidian-border)', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: c.color, flexShrink: 0 }} aria-hidden="true">{c.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 18, color: c.color, lineHeight: 1 }}>{c.value}</div>
                      <div style={{ fontSize: 10, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', marginTop: 2 }}>{c.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="db-right-col">
            <span className="eyebrow eyebrow-brass">IHR DASHBOARD — VON UNS GESTELLT</span>
            <div className="divider-brass" />
            <h2 id="dashboard-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 20 }}>
              Einfach. Übersichtlich.<br /><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>Ohne Schulungen.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 36 }}>
              Wir stellen Ihnen ein klares Dashboard bereit — kein Schulungsaufwand, keine IT-Abteilung nötig. Alle Vorgänge, Anrufe und Eskaliationen an einem einzigen Ort.
            </p>

            <div className="db-benefits" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {benefits.map((b, i) => (
                <div key={i} className="db-benefit" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--obsidian-border)', borderRadius: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brass)' }}>
                    {b.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-instrument)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 4 }}>{b.title}</div>
                    <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
