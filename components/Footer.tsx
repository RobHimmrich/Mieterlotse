'use client'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--obsidian)', borderTop: '1px solid var(--obsidian-border)', padding: '28px 28px' }} role="contentinfo">
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 13, color: 'var(--ink-400)', fontFamily: 'var(--font-instrument)' }}>
          © {new Date().getFullYear()} MieterPilot. Alle Rechte vorbehalten.
        </p>
        <nav aria-label="Footer-Navigation">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'Impressum', href: '/impressum' },
              { label: 'Datenschutz', href: '/datenschutz' },
              { label: 'AGB', href: '/agb' },
            ].map(l => (
              <a key={l.href} href={l.href}
                style={{ fontSize: 13, color: 'var(--brass)', textDecoration: 'none', fontFamily: 'var(--font-instrument)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--brass-light)')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'var(--brass)')}>
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  )
}
