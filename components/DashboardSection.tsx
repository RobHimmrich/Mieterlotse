'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2, BarChart3, Bell, Lock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const benefits = [
  { icon: <BarChart3 size={16} aria-hidden="true" />, title: 'Alles an einem Ort', text: 'Anrufe, E-Mails, Eskalationen und Auswertungen — übersichtlich in einem einzigen Dashboard zusammengefasst.' },
  { icon: <Bell size={16} aria-hidden="true" />, title: 'Keine Einarbeitung notwendig', text: 'Das Dashboard ist bewusst einfach gehalten. Keine Schulungen, keine IT-Kenntnisse erforderlich — sofort einsatzbereit.' },
  { icon: <CheckCircle2 size={16} aria-hidden="true" />, title: 'Von uns eingerichtet und betreut', text: 'Wir kümmern uns um Einrichtung, Updates und Support. Sie müssen sich um nichts kümmern.' },
  { icon: <Lock size={16} aria-hidden="true" />, title: 'DSGVO-konform & sicher', text: 'Alle Daten werden auf EU-Servern gespeichert. Kein Drittanbieter-Zugriff, AVV nach Art. 28 DSGVO inklusive.' },
]

export default function DashboardSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const dur = isMobile ? 0.6 : 1.1
      const offsetX = isMobile ? 20 : 40
      gsap.fromTo('.db-left-col', { x: -offsetX, opacity: 0 }, { x: 0, opacity: 1, duration: dur, ease: 'power4.out', scrollTrigger: { trigger: '.db-layout', start: 'top 80%' } })
      gsap.fromTo('.db-right-col', { x: offsetX, opacity: 0 }, { x: 0, opacity: 1, duration: dur, ease: 'power4.out', scrollTrigger: { trigger: '.db-layout', start: 'top 80%' } })
      gsap.fromTo('.db-benefit', { y: isMobile ? 10 : 20, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.8, ease: 'power3.out', stagger: isMobile ? 0.07 : 0.12, scrollTrigger: { trigger: '.db-benefits', start: 'top 82%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="dashboard" style={{ background: 'var(--obsidian)', padding: '100px 28px' }} aria-labelledby="dashboard-heading">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="db-layout hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* Left — Dashboard im Mieterlotse-Design (Brass/Obsidian) */}
          <div className="db-left-col">
            <div style={{ background: 'var(--obsidian-card)', borderRadius: 12, border: '1px solid var(--obsidian-border)', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.6)' }}>

              {/* Brass Akzentlinie */}
              <div className="dashboard-glow-top" aria-hidden="true" />

              {/* Browser-Chrome */}
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--obsidian-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF6058' }} aria-hidden="true" />
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFBD2E' }} aria-hidden="true" />
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C841' }} aria-hidden="true" />
                </div>
                <span style={{ fontSize: 10, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>dashboard.mieterlotse.de</span>
                <span className="tag-pill" style={{ fontSize: 9, padding: '2px 8px' }}>● Live</span>
              </div>

              {/* Header */}
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--obsidian-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brass)', flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-instrument)', fontWeight: 700, fontSize: 12, color: '#fff' }}>Mieterlotse Dashboard</span>
                </div>
                <span style={{ fontSize: 10, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>14:22 Uhr</span>
              </div>

              {/* Filter-Tabs */}
              <div style={{ padding: '8px 14px', borderBottom: '1px solid var(--obsidian-border)', display: 'flex', gap: 14 }}>
                {['Alle Tickets', 'Offen', 'Eskaliert', 'KI erledigt'].map((t, i) => (
                  <span key={t} style={{ fontSize: 10, fontFamily: 'var(--font-instrument)', fontWeight: i === 0 ? 700 : 400, color: i === 0 ? 'var(--brass)' : 'var(--ink-400)', borderBottom: i === 0 ? '1.5px solid var(--brass)' : 'none', paddingBottom: 4, cursor: 'pointer', whiteSpace: 'nowrap' }}>{t}</span>
                ))}
              </div>

              {/* KPI-Streifen */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--obsidian-border)' }}>
                {[
                  { label: 'Tickets heute', value: '52', color: 'var(--brass)' },
                  { label: 'KI erledigt', value: '44', color: '#4ADE80' },
                  { label: 'Weitergeleitet', value: '5', color: 'var(--ink-400)' },
                  { label: 'Eskaliert', value: '3', color: '#F87171' },
                ].map((k, i) => (
                  <div key={i} style={{ background: 'var(--obsidian)', padding: '10px 12px' }}>
                    <div style={{ fontFamily: 'var(--font-instrument)', fontWeight: 800, fontSize: 18, color: k.color, lineHeight: 1, marginBottom: 3 }}>{k.value}</div>
                    <div style={{ fontSize: 9, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', lineHeight: 1.3 }}>{k.label}</div>
                  </div>
                ))}
              </div>

              {/* Ticket-Liste */}
              <div style={{ padding: '10px 14px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.2fr 0.6fr 0.9fr', gap: 6, padding: '3px 6px', marginBottom: 3 }}>
                  {['Ticket-ID', 'Kategorie', 'Kanal', 'Status'].map(h => (
                    <div key={h} style={{ fontSize: 8, fontWeight: 700, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{h}</div>
                  ))}
                </div>
                {[
                  { id: 'TKT-2026-8345', kat: 'Schadensmeldung', kanal: '✉', status: 'KI erledigt', sc: '#4ADE80' },
                  { id: 'TKT-2026-8344', kat: 'Notfall', kanal: '📞', status: 'Eskaliert', sc: '#F87171' },
                  { id: 'TKT-2026-8343', kat: 'Zahlungsfrage', kanal: '✉', status: 'Weitergeleitet', sc: 'var(--ink-400)' },
                  { id: 'TKT-2026-8342', kat: 'Allg. Fragen', kanal: '📞', status: 'KI erledigt', sc: '#4ADE80' },
                  { id: 'TKT-2026-8341', kat: 'Kündigung', kanal: '✉', status: 'In Bearbeitung', sc: 'var(--brass-light)' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.2fr 0.6fr 0.9fr', gap: 6, padding: '6px 6px', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderRadius: 4 }}>
                    <div style={{ fontSize: 9, color: 'var(--brass-light)', fontFamily: 'var(--font-instrument)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.id}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-instrument)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.kat}</div>
                    <div style={{ fontSize: 11 }}>{row.kanal}</div>
                    <div style={{ fontSize: 8, color: row.sc, fontFamily: 'var(--font-instrument)', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.status}</div>
                  </div>
                ))}
              </div>

              {/* Aktivitätsfeed */}
              <div style={{ padding: '10px 14px 12px', borderTop: '1px solid var(--obsidian-border)', marginTop: 8 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--ink-400)', textTransform: 'uppercase', marginBottom: 6, fontFamily: 'var(--font-instrument)' }}>Letzte Aktivitäten</div>
                {[
                  { time: '14:18', text: 'Schadensmeldung — KI erledigt', ok: true },
                  { time: '13:55', text: 'Nebenkostenfrage — KI erledigt', ok: true },
                  { time: '13:41', text: 'Wasserschaden — eskaliert', ok: false },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '3px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: a.ok ? 'var(--brass)' : '#F87171', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontSize: 9, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', width: 30, flexShrink: 0 }}>{a.time}</span>
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-instrument)' }}>{a.text}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{ padding: '6px 14px 10px', borderTop: '1px solid var(--obsidian-border)', fontSize: 9, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', textAlign: 'center' }}>
                Alle Daten verschlüsselt · EU-Server · DSGVO-konform
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
              Wir stellen Ihnen ein klares Dashboard bereit — kein Schulungsaufwand, keine IT-Abteilung nötig. Alle Vorgänge, Anrufe und Eskalationen an einem einzigen Ort.
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
