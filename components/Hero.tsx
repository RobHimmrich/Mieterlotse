'use client'

import { useEffect, useRef } from 'react'
import { ShieldCheck, Server, Users } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    if (eyebrowRef.current) tl.fromTo(eyebrowRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.2)
    if (headRef.current) tl.fromTo(headRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, 0.38)
    if (textRef.current) tl.fromTo(textRef.current, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 }, 0.55)
    if (ctaRef.current) tl.fromTo(ctaRef.current.children, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0.7)
    if (trustRef.current) tl.fromTo(trustRef.current.children, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 0.88)
    if (cardRef.current) tl.fromTo(cardRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 0.4)
  }, [])

  return (
    <section style={{ background: 'var(--bg-base)', paddingTop: 128, paddingBottom: 96, position: 'relative', overflow: 'hidden' }} aria-label="Hero-Bereich">
      {/* Subtle geometric accent */}
      <div style={{ position: 'absolute', top: -80, right: -120, width: 600, height: 600, border: '1px solid rgba(184,148,58,0.07)', borderRadius: '50%', pointerEvents: 'none' }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: 40, right: -60, width: 400, height: 400, border: '1px solid rgba(184,148,58,0.05)', borderRadius: '50%', pointerEvents: 'none' }} aria-hidden="true" />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left */}
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
              MieterPilot gibt Geschäftsführern mittelständischer Hausverwaltungen vollständige Betriebsübersicht — automatisierte Mieterkommunikation, proprietäres Dashboard, keine neue Software für Ihr Team.
            </p>

            <div ref={ctaRef} className="hero-cta-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
              <a href="#contact" className="btn-obsidian">Strategie-Gespräch anfragen →</a>
              <a href="#dashboard" className="btn-brass-outline">Dashboard ansehen</a>
            </div>

            <div ref={trustRef} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Server size={14} aria-hidden="true" />, text: 'Proprietäres Dashboard — Ihre Daten, Ihre Kontrolle' },
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

          {/* Right — Dashboard Mockup */}
          <div ref={cardRef}>
            <div style={{ background: 'var(--obsidian)', borderRadius: 14, border: '1px solid var(--obsidian-border)', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}>
              <div className="dashboard-glow-top" aria-hidden="true" />

              {/* Header */}
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--obsidian-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brass)', animation: 'pulse 2s infinite' }} aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: '-0.01em' }}>MieterPilot Dashboard</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div className="status-ok"><span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green-ok)', display: 'inline-block' }} aria-hidden="true" />Live</div>
                  <span style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>Heute, 14:22</span>
                </div>
              </div>

              {/* KPI row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--obsidian-border)' }}>
                {[
                  { label: 'Anrufe heute', value: '47', color: 'var(--brass)' },
                  { label: 'Eskaliationen', value: '3', color: '#F87171' },
                  { label: 'Ø Antwortzeit', value: '8.2s', color: 'var(--brass-light)' },
                  { label: 'Erledigt', value: '44', color: '#4ADE80' },
                ].map((k, i) => (
                  <div key={i} style={{ background: 'var(--obsidian)', padding: '14px 16px' }}>
                    <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 22, color: k.color, lineHeight: 1, marginBottom: 4 }}>{k.value}</div>
                    <div style={{ fontSize: 10, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', fontWeight: 500, lineHeight: 1.3 }}>{k.label}</div>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div style={{ padding: '16px 20px 0' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--ink-400)', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'var(--font-instrument)' }}>
                  Objektübersicht
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {/* Table header */}
                  <div className="dashboard-table-row" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: 8, padding: '6px 10px' }}>
                    {['Objekt', 'Anrufe/Mo.', 'Eskalationen', 'Status'].map(h => (
                      <div key={h} style={{ fontSize: 10, fontWeight: 600, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</div>
                    ))}
                  </div>
                  {/* Table rows */}
                  {[
                    { name: 'Musterstr. 12–18, HH', calls: 142, esc: 4, status: 'ok' },
                    { name: 'Parkweg 3–7, München', calls: 89, esc: 1, status: 'ok' },
                    { name: 'Am Teich 2, Frankfurt', calls: 61, esc: 7, status: 'alert' },
                    { name: 'Gartenring 44, Berlin', calls: 114, esc: 2, status: 'ok' },
                  ].map((row, i) => (
                    <div key={i} className="dashboard-table-row" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: 8, padding: '8px 10px', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderRadius: 6 }}>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-instrument)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--brass-light)', fontFamily: 'var(--font-instrument)', fontWeight: 600 }}>{row.calls}</div>
                      <div style={{ fontSize: 12, color: row.esc > 5 ? '#F87171' : 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-instrument)', fontWeight: row.esc > 5 ? 700 : 400 }}>{row.esc}</div>
                      <div>{row.status === 'ok' ? <span className="status-ok" style={{ fontSize: 10, padding: '1px 8px' }}>Aktiv</span> : <span className="status-alert" style={{ fontSize: 10, padding: '1px 8px' }}>Prüfen</span>}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini activity feed */}
              <div style={{ padding: '14px 20px 18px', borderTop: '1px solid var(--obsidian-border)', marginTop: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--ink-400)', textTransform: 'uppercase', marginBottom: 8, fontFamily: 'var(--font-instrument)' }}>Letzte Aktivitäten</div>
                {[
                  { time: '14:18', text: 'Reparaturmeldung — beantwortet', ok: true },
                  { time: '13:55', text: 'Nebenkostenfrage — beantwortet', ok: true },
                  { time: '13:41', text: 'Wasserschaden — eskaliert', ok: false },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.ok ? 'var(--green-ok)' : '#F87171', flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', width: 36, flexShrink: 0 }}>{a.time}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-instrument)' }}>{a.text}</span>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div style={{ padding: '10px 20px 14px', borderTop: '1px solid var(--obsidian-border)', fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)', textAlign: 'center' }}>
                Alle Daten in Ihrer eigenen, geschützten Umgebung.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
