import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DatenschutzPage() {
  const h2: React.CSSProperties = { fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 20, color: 'var(--ink-900)', marginBottom: 12, marginTop: 44, letterSpacing: '-0.02em', lineHeight: 1.2 }
  const h3: React.CSSProperties = { fontFamily: 'var(--font-instrument)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)', marginBottom: 8, marginTop: 24 }
  const p: React.CSSProperties = { fontFamily: 'var(--font-instrument)', fontSize: 15, color: 'var(--ink-600)', lineHeight: 1.8, marginBottom: 14 }
  const ul: React.CSSProperties = { fontFamily: 'var(--font-instrument)', fontSize: 15, color: 'var(--ink-600)', lineHeight: 1.8, paddingLeft: 24, marginBottom: 14 }
  const divider: React.CSSProperties = { height: 1, background: 'rgba(184,148,58,0.12)', margin: '32px 0' }
  const infoBox: React.CSSProperties = { background: 'rgba(184,148,58,0.05)', border: '1px solid rgba(184,148,58,0.12)', borderRadius: 10, padding: '20px 24px', marginBottom: 24 }

  return (
    <>
    <Navbar />
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh', padding: '96px 28px 80px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-instrument)', fontSize: 12, fontWeight: 700, color: 'var(--brass)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>RECHTLICHES</span>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 42px)', color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 8 }}>
          Datenschutzerklärung
        </h1>
        <p style={{ ...p, color: 'var(--ink-400)', marginBottom: 40 }}>Stand: März 2026 · Gemäß DSGVO, BDSG und TMG</p>

        <div style={divider} />

        {/* Verantwortlicher */}
        <div style={infoBox}>
          <p style={{ ...p, marginBottom: 4, fontWeight: 600, color: 'var(--ink-900)' }}>Verantwortlicher im Sinne der DSGVO</p>
          <p style={{ ...p, marginBottom: 0, fontSize: 14 }}>
            Immobilienverwaltung Automation · Robin Himmrich<br />
            c/o Autorenglück #96528<br />
            Albert-Einstein-Str. 47<br />
            02977 Hoyerswerda<br />
            Deutschland<br />
            E-Mail:{' '}
            <a href="mailto:info@immobilienverwaltung-automation.de" style={{ color: 'var(--brass)', textDecoration: 'none' }}>
              info@immobilienverwaltung-automation.de
            </a>
          </p>
        </div>

        {/* 1 */}
        <h2 style={h2}>1. Allgemeine Hinweise</h2>
        <p style={p}>
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, wie wir personenbezogene Daten im Rahmen des Betriebs dieser Website und unserer Dienstleistungen erheben, verarbeiten und schützen. Es gelten die Vorschriften der Datenschutz-Grundverordnung (DSGVO), des Bundesdatenschutzgesetzes (BDSG) sowie des Telemediengesetzes (TMG).
        </p>

        <div style={divider} />

        {/* 2 */}
        <h2 style={h2}>2. Datenerhebung auf dieser Website</h2>

        <h3 style={h3}>Hosting & Server-Logs</h3>
        <p style={p}>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert, die Ihr Browser übermittelt:
        </p>
        <ul style={ul}>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse (anonymisiert)</li>
        </ul>
        <p style={p}>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website). Die Daten werden nach 30 Tagen automatisch gelöscht.
        </p>

        <h3 style={h3}>Cookies</h3>
        <p style={p}>
          Diese Website setzt ausschließlich technisch notwendige Cookies ein, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking-Cookies oder Werbe-Cookies verwendet. Eine Einwilligung ist für technisch notwendige Cookies gemäß § 25 Abs. 2 TTDSG nicht erforderlich.
        </p>

        <div style={divider} />

        {/* 3 */}
        <h2 style={h2}>3. Kontaktformular & E-Mail-Kontakt</h2>
        <p style={p}>
          Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Unternehmensgröße, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.
        </p>
        <p style={p}>
          <strong>Erhobene Daten:</strong> Vorname, Nachname, E-Mail-Adresse, Telefonnummer (optional), Anzahl verwalteter Einheiten, aktuelle Verwaltungssoftware (optional), Nachricht.
        </p>
        <p style={p}>
          <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Vorbereitung des Erstgesprächs, Kontaktaufnahme durch unsere Seite.
        </p>
        <p style={p}>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Sie haben der Verarbeitung Ihrer Daten durch Ankreuzen der Datenschutz-Checkbox ausdrücklich zugestimmt.
        </p>
        <p style={p}>
          <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen, spätestens nach 2 Jahren.
        </p>
        <p style={p}>
          Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie uns eine E-Mail an{' '}
          <a href="mailto:info@immobilienverwaltung-automation.de" style={{ color: 'var(--brass)', textDecoration: 'none' }}>
            info@immobilienverwaltung-automation.de
          </a>{' '}
          senden.
        </p>

        <div style={divider} />

        {/* 4 */}
        <h2 style={h2}>4. Nutzung unserer Dienstleistungen (Dashboard & KI-System)</h2>
        <p style={p}>
          Im Rahmen der Nutzung von Mieterlotse verarbeiten wir personenbezogene Daten Ihrer Mieter und Verwaltungsvorgänge. Für diese Verarbeitung schließen wir mit Ihnen als Auftraggeber einen <strong>Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO</strong>, der Gegenstand eines separaten Vertragsdokuments ist.
        </p>
        <p style={p}>
          <strong>Verarbeitete Datenkategorien:</strong> Namen und Kontaktdaten von Mietern, Kommunikationsinhalte (Anrufe, E-Mails), Vorgangsdaten, Zeitstempel und Protokolle.
        </p>
        <p style={p}>
          <strong>Speicherort:</strong> Alle Daten werden ausschließlich auf Servern innerhalb der Europäischen Union gespeichert und verarbeitet. Ein Transfer in Drittländer findet nicht statt.
        </p>
        <p style={p}>
          <strong>Speicherdauer:</strong> Gemäß den Vereinbarungen im AVV und den gesetzlichen Aufbewahrungspflichten. Nach Vertragsende werden alle Daten innerhalb von 30 Tagen gelöscht oder auf Wunsch übergeben.
        </p>

        <div style={divider} />

        {/* 5 */}
        <h2 style={h2}>5. Weitergabe von Daten an Dritte</h2>
        <p style={p}>
          Wir geben Ihre personenbezogenen Daten nicht ohne Ihre ausdrückliche Einwilligung an Dritte weiter, außer:
        </p>
        <ul style={ul}>
          <li>wenn dies zur Erfüllung eines Vertrages notwendig ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
          <li>wenn wir gesetzlich dazu verpflichtet sind (Art. 6 Abs. 1 lit. c DSGVO)</li>
          <li>an Auftragsverarbeiter, die wir sorgfältig ausgewählt haben und mit denen wir AVVs abgeschlossen haben</li>
        </ul>
        <p style={p}>
          <strong>Eingesetzte Auftragsverarbeiter (Auszug):</strong> Vercel Inc. (Hosting, EU-Infrastruktur). Vercel verarbeitet Daten auf Basis von Standardvertragsklauseln gemäß Art. 46 DSGVO.
        </p>

        <div style={divider} />

        {/* 6 */}
        <h2 style={h2}>6. Ihre Rechte als betroffene Person</h2>
        <p style={p}>Sie haben nach der DSGVO folgende Rechte gegenüber uns bezüglich Ihrer personenbezogenen Daten:</p>
        <ul style={ul}>
          <li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong> – Sie haben das Recht, Auskunft über die von uns gespeicherten Daten zu erhalten.</li>
          <li><strong>Berichtigungsrecht (Art. 16 DSGVO)</strong> – Sie können die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Löschungsrecht (Art. 17 DSGVO)</strong> – Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
          <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong> – Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
          <li><strong>Datenübertragbarkeit (Art. 20 DSGVO)</strong> – Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten.</li>
          <li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> – Sie können der Verarbeitung Ihrer Daten widersprechen, soweit diese auf berechtigten Interessen beruht.</li>
          <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</strong> – Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
        </ul>
        <p style={p}>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
          <a href="mailto:info@immobilienverwaltung-automation.de" style={{ color: 'var(--brass)', textDecoration: 'none' }}>
            info@immobilienverwaltung-automation.de
          </a>
        </p>

        <div style={divider} />

        {/* 7 */}
        <h2 style={h2}>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p style={p}>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für in Deutschland ansässige Nutzer ist der jeweilige Landesdatenschutzbeauftragte. Eine Liste aller deutschen Datenschutzbehörden finden Sie unter:{' '}
          <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brass)', textDecoration: 'none' }}>
            www.bfdi.bund.de
          </a>
        </p>

        <div style={divider} />

        {/* 8 */}
        <h2 style={h2}>8. Datensicherheit</h2>
        <p style={p}>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Die Übertragung erfolgt verschlüsselt über HTTPS (TLS).
        </p>

        <div style={divider} />

        {/* 9 */}
        <h2 style={h2}>9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p style={p}>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website und unserer Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
        </p>

        <div style={{ marginTop: 48, padding: '20px 24px', background: 'rgba(184,148,58,0.05)', border: '1px solid rgba(184,148,58,0.12)', borderRadius: 10 }}>
          <p style={{ ...p, marginBottom: 0, fontSize: 13, color: 'var(--ink-400)' }}>
            Bei Fragen zum Datenschutz stehen wir Ihnen jederzeit zur Verfügung:<br />
            <a href="mailto:info@immobilienverwaltung-automation.de" style={{ color: 'var(--brass)', textDecoration: 'none' }}>
              info@immobilienverwaltung-automation.de
            </a>
          </p>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
