import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ImpressumPage() {
  const heading: React.CSSProperties = { fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)', marginBottom: 8, marginTop: 32, letterSpacing: '-0.01em' }
  const body: React.CSSProperties = { fontFamily: 'var(--font-instrument)', fontSize: 15, color: 'var(--ink-600)', lineHeight: 1.8 }
  const label: React.CSSProperties = { fontFamily: 'var(--font-instrument)', fontSize: 13, fontWeight: 600, color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 2 }

  return (
    <>
    <Navbar />
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh', padding: '96px 28px 80px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 12, fontWeight: 700, color: 'var(--brass)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>RECHTLICHES</span>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 42px)', color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 8 }}>
          Impressum
        </h1>
        <p style={{ ...body, color: 'var(--ink-400)', marginBottom: 40 }}>Angaben gemäß § 5 TMG</p>

        <div style={{ height: 1, background: 'rgba(184,148,58,0.15)', marginBottom: 40 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

          <div>
            <span style={label}>Name</span>
            <p style={body}>Robin Himmrich</p>
          </div>

          <div>
            <h2 style={heading}>Unternehmensbezeichnung</h2>
            <p style={body}>Immobilienverwaltung Automation</p>
          </div>

          <div>
            <h2 style={heading}>Anschrift</h2>
            <p style={body}>
              c/o Autorenglück #96528<br />
              Albert-Einstein-Str. 47<br />
              02977 Hoyerswerda<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 style={heading}>E-Mail</h2>
            <p style={body}>
              <a href="mailto:info@immobilienverwaltung-automation.de" style={{ color: 'var(--brass)', textDecoration: 'none', borderBottom: '1px solid rgba(184,148,58,0.3)' }}>
                info@immobilienverwaltung-automation.de
              </a>
            </p>
          </div>

          <div>
            <h2 style={heading}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p style={body}>Robin Himmrich (Anschrift wie oben)</p>
          </div>

          <div style={{ height: 1, background: 'rgba(184,148,58,0.15)', margin: '40px 0' }} />

          <div>
            <h2 style={heading}>Haftungsausschluss</h2>
            <p style={body}>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h2 style={heading}>Haftung für Links</h2>
            <p style={body}>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 style={heading}>Urheberrecht</h2>
            <p style={body}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div>
            <h2 style={heading}>Streitschlichtung</h2>
            <p style={body}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brass)', textDecoration: 'none', borderBottom: '1px solid rgba(184,148,58,0.3)' }}>
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
