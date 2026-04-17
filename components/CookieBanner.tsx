'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'mieterlotse_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage not available (SSR guard)
    }
  }, [])

  const accept = (all: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, all ? 'all' : 'necessary')
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2000,
        width: 'min(680px, calc(100vw - 32px))',
        background: 'var(--obsidian-card)',
        border: '1px solid var(--obsidian-border)',
        borderRadius: 14,
        boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        padding: '24px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* Brass accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--brass), transparent)', borderRadius: '14px 14px 0 0' }} aria-hidden="true" />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        {/* Cookie icon */}
        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--brass-pale)', border: '1px solid var(--brass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }} aria-hidden="true">
          🍪
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-instrument)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 6 }}>
            Diese Website verwendet Cookies
          </p>
          <p style={{ fontFamily: 'var(--font-instrument)', fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            Wir nutzen notwendige Cookies für den Betrieb der Website. Mit Ihrer Einwilligung setzen wir zusätzlich Analyse-Cookies ein, um das Nutzererlebnis zu verbessern. Weitere Informationen finden Sie in unserer{' '}
            <Link href="/datenschutz" style={{ color: 'var(--brass-light)', textDecoration: 'underline' }}>
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <button
          onClick={() => accept(false)}
          style={{
            fontFamily: 'var(--font-instrument)',
            fontSize: 13,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.6)',
            background: 'transparent',
            border: '1px solid var(--obsidian-border)',
            borderRadius: 8,
            padding: '9px 18px',
            cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--obsidian-border)'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          Nur notwendige
        </button>
        <button
          onClick={() => accept(true)}
          style={{
            fontFamily: 'var(--font-instrument)',
            fontSize: 13,
            fontWeight: 700,
            color: 'var(--obsidian)',
            background: 'linear-gradient(135deg, var(--brass), var(--brass-light))',
            border: 'none',
            borderRadius: 8,
            padding: '9px 22px',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  )
}
