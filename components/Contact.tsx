'use client'

import { useState, useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  units: string
  software: string
  privacy: boolean
}

const FORMSPREE_URL = 'https://formspree.io/f/mzdyzyde'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', phone: '', units: '', software: '', privacy: false })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-v2-content > *', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12, scrollTrigger: { trigger: '.contact-v2-content', start: 'top 82%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!formData.firstName.trim()) e.firstName = 'Pflichtfeld'
    if (!formData.lastName.trim()) e.lastName = 'Pflichtfeld'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Gültige E-Mail erforderlich'
    if (!formData.units) e.units = 'Bitte auswählen'
    if (!formData.privacy) e.privacy = 'Datenschutz muss akzeptiert werden'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSending(true)
    setSendError(false)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vorname: formData.firstName,
          nachname: formData.lastName,
          email: formData.email,
          telefon: formData.phone || '—',
          einheiten: formData.units,
          software: formData.software || '—',
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setSendError(true)
      }
    } catch {
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 8, fontFamily: 'var(--font-instrument)', letterSpacing: '0.04em', textTransform: 'uppercase' }
  const errorStyle: React.CSSProperties = { fontSize: 11, color: '#F87171', marginTop: 5, fontFamily: 'var(--font-instrument)' }

  return (
    <section ref={sectionRef} id="contact" style={{ background: 'var(--obsidian-mid)', borderTop: '1px solid var(--obsidian-border)', padding: '96px 28px' }} aria-labelledby="contact-heading">
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div className="contact-v2-content">
          <div>
            <span className="eyebrow eyebrow-brass">STRATEGIE-GESPRÄCH</span>
            <div className="divider-brass" />
            <h2 id="contact-heading" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 34px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 14 }}>
              Jetzt unverbindlich beraten lassen
            </h2>
            <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 40 }}>
              Kein Sales-Team. Kein Call-Center. Sie sprechen direkt mit dem Gründer — innerhalb von 24 Stunden.
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '44px', background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', borderRadius: 12, textAlign: 'center' }} role="alert" aria-live="polite">
              <CheckCircle2 size={44} color="var(--brass)" style={{ marginBottom: 16 }} aria-hidden="true" />
              <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10 }}>Anfrage eingegangen.</div>
              <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Vielen Dank, {formData.firstName}. Robin Himmrich meldet sich persönlich innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Name row */}
              <div className="contact-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {[
                  { id: 'firstName', label: 'Vorname', placeholder: 'Max', autoComplete: 'given-name' },
                  { id: 'lastName', label: 'Nachname', placeholder: 'Mustermann', autoComplete: 'family-name' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={labelStyle}>{f.label} <span style={{ color: 'var(--brass)' }}>*</span></label>
                    <input id={f.id} name={f.id} type="text" className="form-field" placeholder={f.placeholder} autoComplete={f.autoComplete}
                      value={(formData as unknown as Record<string, string>)[f.id]} onChange={handleChange}
                      aria-required="true" aria-invalid={!!errors[f.id as keyof FormData]} />
                    {errors[f.id as keyof FormData] && <div style={errorStyle} role="alert">{errors[f.id as keyof FormData]}</div>}
                  </div>
                ))}
              </div>

              {/* Email + Phone */}
              <div className="contact-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label htmlFor="email" style={labelStyle}>E-Mail <span style={{ color: 'var(--brass)' }}>*</span></label>
                  <input id="email" name="email" type="email" className="form-field" placeholder="max@verwaltung.de" autoComplete="email"
                    value={formData.email} onChange={handleChange} aria-required="true" aria-invalid={!!errors.email} />
                  {errors.email && <div style={errorStyle} role="alert">{errors.email}</div>}
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Telefon <span style={{ color: 'var(--ink-400)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                  <input id="phone" name="phone" type="tel" className="form-field" placeholder="+49 40 123456" autoComplete="tel"
                    value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              {/* Units + Software */}
              <div className="contact-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label htmlFor="units" style={labelStyle}>Verwaltete Einheiten <span style={{ color: 'var(--brass)' }}>*</span></label>
                  <select id="units" name="units" className="form-select" value={formData.units} onChange={handleChange}
                    aria-required="true" aria-invalid={!!errors.units}>
                    <option value="">Bitte wählen …</option>
                    <option value="<200">Unter 200</option>
                    <option value="200-500">200 – 500</option>
                    <option value="500-1000">500 – 1.000</option>
                    <option value="1000-2000">1.000 – 2.000</option>
                    <option value=">2000">Über 2.000</option>
                  </select>
                  {errors.units && <div style={errorStyle} role="alert">{errors.units}</div>}
                </div>
                <div>
                  <label htmlFor="software" style={labelStyle}>Aktuelle Verwaltungssoftware</label>
                  <input id="software" name="software" type="text" className="form-field" placeholder="z.B. DOMUS, Haufe, …"
                    value={formData.software} onChange={handleChange} />
                </div>
              </div>

              {/* Privacy */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
                  <input id="privacy" name="privacy" type="checkbox" checked={formData.privacy} onChange={handleChange}
                    aria-required="true" style={{ width: 17, height: 17, marginTop: 2, accentColor: 'var(--brass)', flexShrink: 0, cursor: 'pointer' }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-instrument)', lineHeight: 1.6 }}>
                    Ich akzeptiere die <a href="/datenschutz" style={{ color: 'var(--brass)', textDecoration: 'underline' }}>Datenschutzerklärung</a> und bin damit einverstanden, dass meine Daten zur Kontaktaufnahme genutzt werden. <span style={{ color: 'var(--brass)' }}>*</span>
                  </span>
                </label>
                {errors.privacy && <div style={{ ...errorStyle, marginLeft: 29 }} role="alert">{errors.privacy}</div>}
              </div>

              {sendError && (
                <div style={{ marginBottom: 16, padding: '12px 16px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 8, fontSize: 13, color: '#F87171', fontFamily: 'var(--font-instrument)' }} role="alert">
                  Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an robin@mieterlotse.de
                </div>
              )}
              <button type="submit" className="btn-brass-solid" disabled={sending} style={{ opacity: sending ? 0.7 : 1 }}>
                {sending ? 'Wird gesendet …' : 'Anfrage senden →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
