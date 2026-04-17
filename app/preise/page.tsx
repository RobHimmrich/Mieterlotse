'use client'

import { useState } from 'react'
import { Check, Minus, Phone, Globe, Star, Link, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Feature = {
  text?: string
  included?: boolean
  highlight?: boolean
  isSectionHeader?: boolean
  divider?: boolean
}

const plans = [
  {
    name: 'Starter',
    price: '690',
    setup: '990',
    tagline: 'Ihr KI-Assistent – rund um die Uhr',
    description: 'Für Verwaltungen, die sofortige Entlastung bei Anrufen und E-Mails brauchen.',
    featured: false,
    features: [
      { text: 'KI-Telefonannahme 24/7', included: true, highlight: true },
      { text: 'KI-E-Mail-Verarbeitung', included: true, highlight: true },
      { text: 'Auf Ihre Verwaltung trainiert (Wissensdatenbank)', included: true, highlight: true },
      { text: 'Automatische Klassifizierung & Dringlichkeit', included: true },
      { text: 'KI-Antworten auf Standard-Anfragen', included: true },
      { text: 'Ticket-Erstellung mit Zusammenfassung', included: true },
      { text: 'Web-Dashboard mit Übersicht & KPIs', included: true },
      { text: 'Bis zu 200 Anfragen / Monat', included: true },
      { text: '1 Dashboard-Zugang', included: true },
      { divider: true },
      { text: 'Mehrere Nutzer mit Dashboard-Zugang', included: false },
      { text: 'Aufgaben-Zuweisung an Teammitglieder', included: false },
      { text: 'Notfall-Weiterleitung an Handwerker', included: false },
      { text: 'Anpassbare Workflows', included: false },
    ],
    cta: 'Erstgespräch buchen',
  },
  {
    name: 'Professional',
    price: '890',
    setup: '990',
    tagline: 'Ihr Team. Automatisch organisiert.',
    description: 'Anfragen werden nicht nur beantwortet, sondern direkt an die richtige Person weitergeleitet.',
    featured: true,
    badge: 'Empfohlen',
    features: [
      { text: 'Alles aus Starter, plus:', included: true, isSectionHeader: true },
      { text: 'Mehrere Nutzer mit Dashboard-Zugang', included: true, highlight: true },
      { text: 'Aufgaben-Zuweisung an Teammitglieder', included: true, highlight: true },
      { text: 'Notfälle – direkt an Handwerker / Zuständige', included: true, highlight: true },
      { text: 'Status-Tracking mit Verlaufshistorie', included: true },
      { text: 'Anpassbare Workflows pro Kategorie', included: true },
      { text: 'Bis zu 500 Anfragen / Monat', included: true },
      { text: 'Google-Bewertungs-Follow-up', included: true },
    ],
    cta: 'Erstgespräch buchen',
  },
  {
    name: 'Enterprise',
    price: null,
    setup: null,
    tagline: 'Maßgeschneidert für Ihre Organisation',
    description: 'Für große Verwaltungen mit individuellen Anforderungen und komplexen Strukturen.',
    featured: false,
    features: [
      { text: 'Alles aus Professional, plus:', included: true, isSectionHeader: true },
      { text: 'Mehrmandantenfähigkeit', included: true },
      { text: 'Individuelle AI-Logik pro Standort / Mandant', included: true },
      { text: 'Eigene Integrationen (ERP, CRM, SAP)', included: true },
      { text: 'Dediziertes Onboarding & SLA', included: true },
      { text: 'API-Zugriff', included: true },
      { text: 'Unlimitierte Anfragen', included: true },
      { text: 'Persönlicher Ansprechpartner', included: true },
    ],
    cta: 'Kontakt aufnehmen',
  },
]

const addons = [
  { icon: <Phone size={16} />, name: 'Zusätzliche Telefonnummer', price: '49', period: '/Monat' },
  { icon: <Globe size={16} />, name: 'Mehrsprachigkeit (Voice-Agent)', price: '79', period: '/Monat' },
  { icon: <Star size={16} />, name: 'Google-Bewertungs-Automation', price: '39', period: '/Monat' },
  { icon: <Link size={16} />, name: 'CRM-Integration', price: 'auf Anfrage', period: '' },
]

type Plan = {
  name: string
  price: string | null
  setup: string | null
  tagline: string
  description: string
  featured: boolean
  badge?: string
  features: Feature[]
  cta: string
}

function PricingCard({ plan }: { plan: Plan }) {
  const [hovered, setHovered] = useState(false)
  const f = plan.featured

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: f ? 'linear-gradient(168deg, rgba(184,148,58,0.07) 0%, var(--obsidian-card) 100%)' : 'var(--obsidian-card)',
        border: `1px solid ${f ? 'var(--brass-border)' : 'var(--obsidian-border)'}`,
        borderRadius: 20,
        flex: 1,
        minWidth: 280,
        maxWidth: 380,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: f
          ? '0 0 50px rgba(184,148,58,0.12), 0 12px 40px rgba(0,0,0,0.4)'
          : hovered
          ? '0 8px 32px rgba(0,0,0,0.3)'
          : '0 2px 12px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column' as const,
      }}
    >
      {f && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, var(--brass), var(--brass-light))',
          color: 'var(--obsidian)', fontSize: 11, fontWeight: 700, padding: '5px 20px',
          borderRadius: 20, letterSpacing: '0.05em', whiteSpace: 'nowrap' as const,
          fontFamily: 'var(--font-instrument)',
        }}>
          ★ {plan.badge}
        </div>
      )}

      <div style={{ padding: f ? '36px 28px 28px' : '32px 28px 28px', display: 'flex', flexDirection: 'column' as const, flex: 1 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: f ? 'var(--brass)' : 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 8, fontFamily: 'var(--font-instrument)' }}>
            {plan.name}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
            {plan.price ? (
              <>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: 46, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {plan.price}€
                </span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-instrument)' }}>/Monat</span>
              </>
            ) : (
              <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: 30, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                Auf Anfrage
              </span>
            )}
          </div>

          {plan.setup && (
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 14, fontFamily: 'var(--font-instrument)' }}>
              Einmalige Einrichtung: {plan.setup}€
            </div>
          )}

          <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 15, fontWeight: 700, color: f ? 'var(--brass)' : '#fff', marginBottom: 6, lineHeight: 1.3 }}>
            {plan.tagline}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontFamily: 'var(--font-instrument)' }}>
            {plan.description}
          </div>
        </div>

        <div style={{ height: 1, background: f ? 'var(--brass-border)' : 'var(--obsidian-border)', margin: '4px 0 20px' }} />

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10, flex: 1, marginBottom: 28 }}>
          {plan.features.map((feat, i) => {
            if ('divider' in feat && feat.divider) return <div key={i} style={{ height: 1, background: 'var(--obsidian-border)', margin: '4px 0' }} />
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, opacity: feat.included === false ? 0.38 : 1 }}>
                {!feat.isSectionHeader && (
                  <div style={{ flexShrink: 0, marginTop: 1 }}>
                    {feat.included === false
                      ? <Minus size={15} color="rgba(255,255,255,0.3)" />
                      : <Check size={15} color={feat.highlight ? 'var(--brass)' : 'rgba(255,255,255,0.45)'} />
                    }
                  </div>
                )}
                <span style={{
                  fontSize: feat.isSectionHeader ? 11 : 13,
                  color: feat.isSectionHeader ? 'var(--brass)' : feat.included === false ? 'rgba(255,255,255,0.3)' : feat.highlight ? '#fff' : 'rgba(255,255,255,0.6)',
                  fontWeight: feat.isSectionHeader ? 700 : feat.highlight ? 600 : 400,
                  fontFamily: 'var(--font-instrument)',
                  lineHeight: 1.45,
                  letterSpacing: feat.isSectionHeader ? '0.04em' : 0,
                  textTransform: feat.isSectionHeader ? 'uppercase' as const : undefined,
                  textDecoration: feat.included === false ? 'line-through' : 'none',
                }}>
                  {feat.text}
                </span>
              </div>
            )
          })}
        </div>

        <a href="https://calendly.com/robin-himmrich/30min" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          padding: '14px 0', borderRadius: 12, textDecoration: 'none',
          border: f ? 'none' : '1px solid var(--obsidian-border)',
          background: f ? 'linear-gradient(135deg, var(--brass), var(--brass-light))' : 'transparent',
          color: f ? 'var(--obsidian)' : '#fff',
          fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-instrument)',
          transition: 'opacity 0.2s',
        }}>
          {plan.cta}
          {f && <ArrowRight size={15} />}
        </a>
      </div>
    </div>
  )
}

export default function PreisePage() {
  const [showAddons, setShowAddons] = useState(true)
  const [showComparison, setShowComparison] = useState(false)

  const thStyle = { textAlign: 'center' as const, fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-instrument)', padding: '16px 12px' }
  const tdStyle = (highlight?: boolean) => ({ textAlign: 'center' as const, padding: '12px 12px', fontSize: 13, fontFamily: 'var(--font-instrument)', color: highlight ? 'var(--brass)' : 'rgba(255,255,255,0.6)', borderBottom: '1px solid var(--obsidian-border)' })

  const rows: Array<{ label: string; starter: boolean | string; pro: boolean | string; ent: boolean | string; section?: boolean }> = [
    { label: 'KI-KERN', starter: '', pro: '', ent: '', section: true },
    { label: 'KI-Telefonannahme 24/7', starter: true, pro: true, ent: true },
    { label: 'KI-E-Mail-Verarbeitung', starter: true, pro: true, ent: true },
    { label: 'Wissensdatenbank (auf Sie trainiert)', starter: true, pro: true, ent: true },
    { label: 'Klassifizierung & Dringlichkeit', starter: true, pro: true, ent: true },
    { label: 'KI-Antworten auf Standard-Anfragen', starter: true, pro: true, ent: true },
    { label: 'Ticket-Erstellung & Zusammenfassung', starter: true, pro: true, ent: true },
    { label: 'Web-Dashboard & KPIs', starter: true, pro: true, ent: true },
    { label: 'Anfragen / Monat', starter: '200', pro: '500', ent: 'Unlimitiert' },
    { label: 'TEAM & WORKFLOWS', starter: '', pro: '', ent: '', section: true },
    { label: 'Dashboard-Zugänge', starter: '1', pro: 'Unbegrenzt', ent: 'Unbegrenzt' },
    { label: 'Aufgaben-Zuweisung an Mitarbeiter', starter: false, pro: true, ent: true },
    { label: 'Notfälle – direkt an Handwerker', starter: false, pro: true, ent: true },
    { label: 'Status-Tracking & Verlauf', starter: false, pro: true, ent: true },
    { label: 'Anpassbare Workflows', starter: false, pro: true, ent: true },
    { label: 'Google-Bewertungs-Follow-up', starter: false, pro: true, ent: true },
    { label: 'ENTERPRISE', starter: '', pro: '', ent: '', section: true },
    { label: 'Mehrmandantenfähigkeit', starter: false, pro: false, ent: true },
    { label: 'Individuelle AI-Logik pro Mandant', starter: false, pro: false, ent: true },
    { label: 'ERP / CRM / SAP Integration', starter: false, pro: false, ent: true },
    { label: 'API-Zugriff', starter: false, pro: false, ent: true },
    { label: 'Dediziertes Onboarding & SLA', starter: false, pro: false, ent: true },
    { label: 'Persönlicher Ansprechpartner', starter: false, pro: false, ent: true },
  ]

  const renderCell = (val: boolean | string, highlight?: boolean) => {
    if (val === true) return <Check size={15} color={highlight ? 'var(--brass)' : 'rgba(255,255,255,0.45)'} style={{ margin: '0 auto', display: 'block' }} />
    if (val === false) return <Minus size={15} color="rgba(255,255,255,0.2)" style={{ margin: '0 auto', display: 'block' }} />
    return <span style={{ fontWeight: 600, color: highlight ? 'var(--brass)' : '#fff' }}>{val}</span>
  }

  return (
    <>
    <Navbar />
    <main style={{ background: 'var(--obsidian)', minHeight: '100vh', fontFamily: 'var(--font-instrument)', color: '#fff', padding: '120px 24px 80px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', borderRadius: 24, padding: '6px 18px', marginBottom: 24 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brass)' }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--brass)', letterSpacing: '0.04em', fontFamily: 'var(--font-instrument)', textTransform: 'uppercase' }}>
            Transparente Preise · Keine versteckten Kosten
          </span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20, color: '#fff' }}>
          Weniger Anrufe.<br />
          <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>Mehr Zeit für das Wesentliche.</em>
        </h1>

        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto', fontFamily: 'var(--font-instrument)' }}>
          Jeder Plan beinhaltet KI-Telefonannahme, E-Mail-Verarbeitung und eine auf Ihre Verwaltung trainierte Wissensdatenbank – ab Tag 1.
        </p>
      </div>

      {/* Pricing Cards */}
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', maxWidth: 1200, margin: '0 auto 56px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        {plans.map(plan => <PricingCard key={plan.name} plan={plan} />)}
      </div>

      {/* Savings Callout */}
      <div style={{ maxWidth: 760, margin: '0 auto 56px', background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 16, padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(245,197,66,0.08)', border: '1px solid rgba(245,197,66,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 22 }}>
          💰
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>
            Vergleich: Ein Mitarbeiter kostet 3.500–4.500€/Monat
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontFamily: 'var(--font-instrument)' }}>
            Mieterlotse übernimmt 70–80% der eingehenden Anfragen automatisch. Rund um die Uhr, ohne Urlaub, Krankheit oder Einarbeitung. Ab dem ersten Tag produktiv.
          </div>
        </div>
      </div>

      {/* Feature Comparison Toggle */}
      <div style={{ maxWidth: 920, margin: '0 auto 48px' }}>
        <button onClick={() => setShowComparison(!showComparison)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '14px 0', background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 12, color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-instrument)' }}>
          {showComparison ? <><ChevronUp size={15} /> Feature-Vergleich ausblenden</> : <><ChevronDown size={15} /> Detaillierter Feature-Vergleich</>}
        </button>

        {showComparison && (
          <div style={{ marginTop: 16, background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 16, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--obsidian-border)' }}>
                  <th style={{ ...thStyle, textAlign: 'left', padding: '16px 20px', width: '40%' }}></th>
                  <th style={thStyle}>Starter</th>
                  <th style={{ ...thStyle, color: 'var(--brass)' }}>Professional</th>
                  <th style={thStyle}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => r.section ? (
                  <tr key={i} style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <td colSpan={4} style={{ padding: '10px 20px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-instrument)' }}>{r.label}</td>
                  </tr>
                ) : (
                  <tr key={i}>
                    <td style={{ padding: '12px 20px', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-instrument)', borderBottom: '1px solid var(--obsidian-border)' }}>{r.label}</td>
                    <td style={tdStyle()}>{renderCell(r.starter)}</td>
                    <td style={tdStyle(true)}>{renderCell(r.pro, true)}</td>
                    <td style={tdStyle()}>{renderCell(r.ent)}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: '16px 20px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-instrument)' }}>Monatspreis</td>
                  <td style={{ textAlign: 'center', padding: '16px 12px' }}><span style={{ fontFamily: 'var(--font-fraunces)', fontSize: 16, fontWeight: 700, color: '#fff' }}>690€</span></td>
                  <td style={{ textAlign: 'center', padding: '16px 12px' }}><span style={{ fontFamily: 'var(--font-fraunces)', fontSize: 16, fontWeight: 700, color: 'var(--brass)' }}>890€</span></td>
                  <td style={{ textAlign: 'center', padding: '16px 12px' }}><span style={{ fontFamily: 'var(--font-instrument)', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>Auf Anfrage</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add-ons */}
      <div style={{ maxWidth: 920, margin: '0 auto 56px' }}>
        <div onClick={() => setShowAddons(!showAddons)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer', marginBottom: showAddons ? 20 : 0 }}>
          <div style={{ height: 1, flex: 1, maxWidth: 140, background: 'linear-gradient(to right, transparent, var(--obsidian-border))' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-instrument)', display: 'flex', alignItems: 'center', gap: 6 }}>
            Optionale Add-ons {showAddons ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </span>
          <div style={{ height: 1, flex: 1, maxWidth: 140, background: 'linear-gradient(to left, transparent, var(--obsidian-border))' }} />
        </div>

        {showAddons && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {addons.map((a, i) => (
              <div key={i} style={{ background: 'var(--obsidian-card)', border: '1px solid var(--obsidian-border)', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--brass-border)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--obsidian-border)')}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brass)', flexShrink: 0 }}>
                  {a.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: 'var(--font-instrument)' }}>{a.name}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: 19, fontWeight: 700, color: '#fff' }}>{a.period ? `+${a.price}€` : a.price}</span>
                  {a.period && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-instrument)', display: 'block' }}>{a.period}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Trust bar */}
      <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
        {[
          { icon: '🔒', text: 'DSGVO-konform · EU-Server' },
          { icon: '🔄', text: '30 Tage Geld-zurück' },
          { icon: '⚡', text: 'Einrichtung in unter 2 Wochen' },
          { icon: '🤝', text: 'Persönliches Onboarding' },
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, fontFamily: 'var(--font-instrument)' }}>
            <span style={{ fontSize: 15 }}>{t.icon}</span>
            {t.text}
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  )
}
