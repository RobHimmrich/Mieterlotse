'use client'

import { Mail, Phone, ArrowRight } from 'lucide-react'

export default function LiveDemoTeaser() {
  return (
    <section style={{ background: 'var(--obsidian-mid)', borderTop: '1px solid var(--obsidian-border)', borderBottom: '1px solid var(--obsidian-border)', padding: '72px 28px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="eyebrow eyebrow-brass">LIVE DEMO</span>
          <div className="divider-brass" style={{ margin: '16px auto 0' }} />
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 34px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.2, marginTop: 20, marginBottom: 14 }}>
            Überzeugen Sie sich selbst — jetzt, live.
          </h2>
          <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Schreiben Sie eine E-Mail oder rufen Sie an. Erleben Sie in Echtzeit, was Ihre Mieter zukünftig erhalten.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/test" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 28px', background: 'var(--brass)', color: 'var(--obsidian)', borderRadius: 12, textDecoration: 'none', fontFamily: 'var(--font-instrument)', fontSize: 15, fontWeight: 700, transition: 'background 0.2s' }}>
            <Mail size={16} aria-hidden="true" />
            E-Mail Demo testen
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a href="/test" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 28px', background: 'transparent', color: '#0BDBC8', border: '1.5px solid rgba(11,219,200,0.4)', borderRadius: 12, textDecoration: 'none', fontFamily: 'var(--font-instrument)', fontSize: 15, fontWeight: 700, transition: 'border-color 0.2s' }}>
            <Phone size={16} aria-hidden="true" />
            Voice Agent anrufen
          </a>
        </div>
      </div>
    </section>
  )
}
