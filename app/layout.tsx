import type { Metadata } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mieterlotse — Betriebssteuerung für mittelständische Hausverwaltungen',
  description:
    'Vollständige Betriebsübersicht für Geschäftsführer: KI-gestützte Mieterkommunikation, proprietäres Dashboard und 12+ Stunden Ersparnis pro Woche. DSGVO-konform, kein Systemwechsel.',
  metadataBase: new URL('https://immobilienverwaltung-automation.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mieterlotse — Betriebssteuerung für Hausverwaltungen',
    description:
      'KI-Mieterkommunikation mit eigenem Dashboard. Volle Kontrolle, keine neue Software. Für Geschäftsführer mittelständischer Hausverwaltungen.',
    url: 'https://immobilienverwaltung-automation.com',
    siteName: 'Mieterlotse',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mieterlotse Dashboard' }],
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie behalte ich als Geschäftsführer die Kontrolle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sie erhalten Zugang zu Ihrem eigenen proprietären Dashboard, das alle Vorgänge, Anrufe und Eskaliationen in Echtzeit anzeigt. Sie entscheiden, welche Fälle an Sie weitergeleitet werden — alle anderen werden automatisch bearbeitet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können meine bestehenden Systeme angebunden werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Mieterlotse ist kompatibel mit gängigen Hausverwaltungssystemen wie DOMUS, Haufe und iX-Haus. Sie müssen keine bestehende Software ersetzen oder Ihr Team umschulen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert, wenn die KI einen Fehler macht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das System ist so konfiguriert, dass es im Zweifelsfall an Sie eskaliert, anstatt eine unzuverlässige Antwort zu geben. Sie legen die Grenzen fest — Ihr Dashboard zeigt jede Interaktion transparent nach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie sind meine Daten geschützt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Daten werden ausschließlich auf europäischen Servern gespeichert. Das Dashboard ist Ihr proprietäres System — kein Drittanbieter hat Zugriff. AVV nach Art. 28 DSGVO ist standardmäßig inklusive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie skaliert Mieterlotse mit meinem Portfolio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das System skaliert linear mit Ihrem Portfolio. Wachsen Sie von 300 auf 600 Einheiten, verdoppelt sich die Kapazität automatisch — ohne neue Mitarbeiter einstellen zu müssen. Das Dashboard passt sich entsprechend an.',
      },
    },
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mieterlotse',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://immobilienverwaltung-automation.com',
  description: 'KI-gestützte Mieterkommunikation mit proprietärem Dashboard für mittelständische Hausverwaltungen.',
  offers: { '@type': 'Offer', priceCurrency: 'EUR' },
  creator: { '@type': 'Person', name: 'Robin Himmrich' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Zum Hauptinhalt springen</a>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
