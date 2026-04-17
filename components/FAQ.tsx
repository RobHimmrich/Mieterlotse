'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const faqs = [
  {
    q: 'Wie läuft die Einführung ab?',
    a: 'Wir übernehmen die komplette Einrichtung für Sie — Sie müssen nichts konfigurieren oder installieren. Nach einem kurzen Gespräch richten wir alles ein: den KI-Assistenten, die E-Mail-Integration und das Dashboard. In unter 2 Wochen sind Sie einsatzbereit.',
  },
  {
    q: 'Sind meine Daten DSGVO-konform geschützt?',
    a: 'Ja. Alle Daten werden ausschließlich auf europäischen Servern (EU) gespeichert und verarbeitet. Wir arbeiten zu 100% DSGVO-konform und stellen standardmäßig einen Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO bereit. Ihre Mieterdaten verlassen niemals die EU.',
  },
  {
    q: 'Wie lange dauert die Umstellung?',
    a: 'Die Einrichtung dauert in der Regel unter 2 Wochen. Es ist keine Migration bestehender Daten nötig — wir arbeiten mit Ihren vorhandenen Kommunikationskanälen: Ihrer Telefonnummer und Ihrer E-Mail-Adresse. Kein neues System, keine Schulungen für Ihr Team.',
  },
  {
    q: 'Welche Systeme können integriert werden?',
    a: 'Mieterlotse arbeitet direkt über Ihre bestehende Telefonnummer und Ihr E-Mail-Postfach. Die Integration in gängige Hausverwaltungssoftware ist auf Anfrage möglich. Sie brauchen weder neue Software noch neue Hardware.',
  },
  {
    q: 'Wie entlastet die Automatisierung mein Team?',
    a: 'Die häufigsten Mieteranfragen — Nebenkostenfragen, Reparaturmeldungen, Mietbescheinigungen — werden vollautomatisch beantwortet. Ihr Team wird nur eingeschaltet, wenn ein Fall nicht vom KI-Agenten übernommen werden kann — aber egal welcher Fall es ist: Alles wird sauber im Dashboard hinterlegt. So sparen Sie bis zu 16 Stunden pro Woche und können sich auf wichtigere Aufgaben konzentrieren.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-left', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power4.out', scrollTrigger: { trigger: '.faq-layout', start: 'top 82%' } })
      gsap.fromTo('.faq-item', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: '.faq-right', start: 'top 82%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faq" style={{ background: 'var(--bg-base)', padding: '96px 28px' }} aria-labelledby="faq-heading">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="faq-layout" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left */}
          <div className="faq-left" style={{ position: 'sticky', top: 100 }}>
            <span className="eyebrow">HÄUFIGE FRAGEN</span>
            <div className="divider-brass" />
            <h2 id="faq-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(22px, 2.6vw, 30px)', color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: 18 }}>
              Fragen auf Geschäftsführungsebene
            </h2>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, lineHeight: 1.8, color: 'var(--ink-600)', marginBottom: 28 }}>
              Offene Fragen? Wir besprechen alles direkt — ohne Sales-Team, ohne Umwege.
            </p>
            <a href="https://calendly.com/robin-himmrich/30min" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-instrument)', fontWeight: 600, fontSize: 14, color: 'var(--brass)', textDecoration: 'none', borderBottom: '1px solid rgba(184,148,58,0.35)', paddingBottom: 2 }}>
              Erstgespräch buchen →
            </a>
          </div>

          {/* Right */}
          <div className="faq-right">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`}>
                  <span>{f.q}</span>
                  <ChevronDown size={17} className={`faq-arrow ${open === i ? 'open' : ''}`} aria-hidden="true" />
                </button>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`faq-answer ${open === i ? 'open' : ''}`}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
