'use client'

import { useState } from 'react'
import { Mail, Phone, CheckCircle2, ArrowRight, Zap, Shield, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const EMAIL = 'robin.himmrich7@gmail.com'
const PHONE = '+4976619759001'
const PHONE_DISPLAY = '+49 7661 9759001'

const EMAIL_SUBJECT = 'Testanfrage: Optio GmbH'
const EMAIL_BODY = `Hallo,

ich habe eine Anfrage an die Optio GmbH:

[Ihre Frage oder Ihr Anliegen hier]

Mit freundlichen Grüßen`

export default function TestPage() {
  const [emailClicked, setEmailClicked] = useState(false)
  const [callClicked, setCallClicked] = useState(false)

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`
  const telHref = `tel:${PHONE}`

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--obsidian)', minHeight: '100vh' }}>

        {/* ── Hero ────────────────────────────────────────── */}
        <section style={{ padding: '120px 28px 64px', borderBottom: '1px solid var(--obsidian-border)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-brass" style={{ marginBottom: 24, display: 'block' }}>
              LIVE DEMO · KEIN FORMULAR · KEINE WARTEZEIT
            </span>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(32px, 4.5vw, 52px)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
              Das System live{' '}
              <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>testen</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto 40px' }}>
              Schreiben Sie eine E-Mail oder rufen Sie an — und erleben Sie in Echtzeit, wie unser System antwortet. Kein Demo-Modus. Echte KI. Echte Reaktion.
            </p>

            {/* Demo-Kontext Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80', flexShrink: 0 }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                Demo-Unternehmen: <strong style={{ color: '#fff' }}>Optio GmbH</strong> · vollständige Wissensdatenbank aktiv
              </span>
            </div>
          </div>
        </section>

        {/* ── Wie es funktioniert ─────────────────────────── */}
        <section style={{ padding: '48px 28px 0' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[
              { icon: <Zap size={14} />, text: 'Antwort in Sekunden' },
              { icon: <Shield size={14} />, text: 'Wie bei echten Kunden' },
              { icon: <Clock size={14} />, text: '24/7 verfügbar' },
              { icon: <CheckCircle2 size={14} />, text: 'Echte KI, kein Script' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-instrument)', fontSize: 13, fontWeight: 500 }}>
                <span style={{ color: 'var(--brass)' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </section>

        {/* ── Zwei Test-Karten ────────────────────────────── */}
        <section style={{ padding: '56px 28px 80px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="test-grid">

            {/* ── E-Mail Agent ─────────────────────────── */}
            <div style={{ background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 20, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', overflow: 'hidden' }}>
              {/* Brass-Glow oben */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--brass), transparent)' }} aria-hidden="true" />

              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brass)', marginBottom: 24 }}>
                <Mail size={22} aria-hidden="true" />
              </div>

              <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 11, fontWeight: 700, color: 'var(--brass)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                AI Email Agent
              </div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
                Test-Mail senden
              </h2>
              <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
                Schreiben Sie eine typische Mieteranfrage — zum Beispiel eine Nebenkostenabrechnung, eine Reparaturmeldung oder eine Frage zur Miete. Genau die Nachrichten, die Hausverwaltungen hundertfach pro Monat erhalten.
              </p>
              <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>
                So testen Sie direkt, ob unser Email Agent in Ihrem Alltag echten Mehrwert bringt.
              </p>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--obsidian-border)', borderRadius: 10, padding: '14px 18px', marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-instrument)', marginBottom: 4 }}>E-Mail-Adresse</div>
                <div style={{ fontSize: 14, color: 'var(--brass)', fontFamily: 'var(--font-instrument)', fontWeight: 600 }}>{EMAIL}</div>
              </div>

              {emailClicked ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 12 }}>
                  <CheckCircle2 size={18} color="#4ADE80" aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, color: '#4ADE80', fontWeight: 600 }}>E-Mail-Programm geöffnet</span>
                </div>
              ) : (
                <a
                  href={mailtoHref}
                  onClick={() => setEmailClicked(true)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '15px 24px', background: 'var(--brass)', color: 'var(--obsidian)', borderRadius: 12, textDecoration: 'none', fontFamily: 'var(--font-instrument)', fontSize: 15, fontWeight: 700, transition: 'background 0.2s' }}
                >
                  <Mail size={16} aria-hidden="true" />
                  Test-Mail senden
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>

            {/* ── Voice Agent ──────────────────────────── */}
            <div style={{ background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 20, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', overflow: 'hidden' }}>
              {/* Teal-Glow oben */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #0BDBC8, transparent)' }} aria-hidden="true" />

              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(11,219,200,0.08)', border: '1px solid rgba(11,219,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0BDBC8', marginBottom: 24 }}>
                <Phone size={22} aria-hidden="true" />
              </div>

              <div style={{ fontFamily: 'var(--font-instrument)', fontSize: 11, fontWeight: 700, color: '#0BDBC8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                AI Voice Agent
              </div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
                Jetzt anrufen
              </h2>
              <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 32, flex: 1 }}>
                Rufen Sie die Demo-Nummer an und sprechen Sie mit dem AI Voice Agent der Optio GmbH. Er nimmt Ihr Anliegen auf, klassifiziert es und reagiert sofort — rund um die Uhr, ohne Wartemusik.
              </p>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--obsidian-border)', borderRadius: 10, padding: '14px 18px', marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-instrument)', marginBottom: 4 }}>Demo-Telefonnummer</div>
                <div style={{ fontSize: 18, color: '#0BDBC8', fontFamily: 'var(--font-fraunces)', fontWeight: 700, letterSpacing: '0.02em' }}>{PHONE_DISPLAY}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-instrument)', marginTop: 8 }}>Optio GmbH · AI Telefonassistent</div>
              </div>

              {callClicked ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', background: 'rgba(11,219,200,0.08)', border: '1px solid rgba(11,219,200,0.25)', borderRadius: 12 }}>
                  <CheckCircle2 size={18} color="#0BDBC8" aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, color: '#0BDBC8', fontWeight: 600 }}>Anruf wird gestartet …</span>
                </div>
              ) : (
                <a
                  href={telHref}
                  onClick={() => setCallClicked(true)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '15px 24px', background: 'transparent', color: '#0BDBC8', border: '1.5px solid rgba(11,219,200,0.5)', borderRadius: 12, textDecoration: 'none', fontFamily: 'var(--font-instrument)', fontSize: 15, fontWeight: 700, transition: 'border-color 0.2s, background 0.2s' }}
                >
                  <Phone size={16} aria-hidden="true" />
                  Jetzt anrufen
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── Wie es funktioniert (Detail) ─────────────────── */}
        <section style={{ padding: '0 28px 80px', borderTop: '1px solid var(--obsidian-border)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 64 }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="eyebrow eyebrow-brass">SO FUNKTIONIERT DER TEST</span>
              <div className="divider-brass" style={{ margin: '16px auto 0' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="how-grid">
              {[
                {
                  step: '01',
                  title: 'Sie senden eine Anfrage',
                  text: 'Stellen Sie eine beliebige Frage als Mieter — Nebenkostenfrage, Reparaturmeldung, Terminwunsch. Je realer, desto besser.',
                  color: 'var(--brass)',
                },
                {
                  step: '02',
                  title: 'KI verarbeitet sofort',
                  text: 'Innerhalb von Sekunden analysiert der Agent Ihr Anliegen, sucht in der Wissensdatenbank der Optio GmbH und formuliert eine Antwort.',
                  color: '#0BDBC8',
                },
                {
                  step: '03',
                  title: 'Sie erhalten die Antwort',
                  text: 'Per E-Mail oder direkt am Telefon — professionell, präzise und ohne menschliches Zutun. Exakt das, was Ihre Mieter zukünftig erleben.',
                  color: '#4ADE80',
                },
              ].map((s, i) => (
                <div key={i} style={{ padding: '28px 24px', background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 14 }}>
                  <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 36, color: s.color, opacity: 0.3, lineHeight: 1, marginBottom: 16 }}>{s.step}</div>
                  <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA unten ───────────────────────────────────── */}
        <section style={{ padding: '48px 28px 80px', borderTop: '1px solid var(--obsidian-border)', textAlign: 'center' }}>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(22px, 3vw, 30px)', color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
              Überzeugt?
            </h2>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
              Wenn das System schon in der Demo überzeugt — stellen Sie sich vor, was es für Ihre echten Mieter bedeutet.
            </p>
            <a href="https://calendly.com/robin-himmrich/30min" target="_blank" rel="noopener noreferrer" className="btn-brass-solid" style={{ display: 'inline-flex', width: 'auto', padding: '15px 36px', fontSize: 15 }}>
              Erstgespräch buchen →
            </a>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 680px) {
          .test-grid { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
