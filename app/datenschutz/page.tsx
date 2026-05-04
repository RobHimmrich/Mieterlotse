import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Mieterlotse",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO, BDSG und TMG.",
};

export default function DatenschutzPage() {
  return (
    <section className="ml-section pt-36 md:pt-44">
      <div className="ml-container">
        <div className="mx-auto max-w-[720px]">
          <div className="ml-reveal">
            <Eyebrow>Rechtliches</Eyebrow>
            <h1 className="ml-h1 mt-4">Datenschutzerklärung</h1>
            <p className="ml-whisper mt-4 font-mono">
              Stand: März 2026 · Gemäß DSGVO, BDSG und TMG
            </p>
          </div>

          <div className="ml-reveal mt-12 rounded border border-[var(--ml-line)] bg-white p-6 md:p-8">
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
              Verantwortlicher im Sinne der DSGVO
            </div>
            <address className="mt-3 not-italic text-[15px] leading-relaxed text-[var(--ml-ink)]">
              itelly GmbH
              <br />
              Hauptstr. 27
              <br />
              79256 Buchenbach
              <br />
              Deutschland
              <br />
              Geschäftsführer: Jannik Seven
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@itelly.de"
                className="text-[var(--ml-cta)] transition-colors hover:text-[var(--ml-cta-hover)]"
              >
                info@itelly.de
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+4976619759059"
                className="text-[var(--ml-cta)] transition-colors hover:text-[var(--ml-cta-hover)]"
              >
                07661 97 59059
              </a>
            </address>
          </div>

          <div className="ml-reveal mt-16 flex flex-col gap-14">
            <Block n={1} title="Allgemeine Hinweise">
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
                Datenschutzerklärung informiert Sie darüber, wie wir
                personenbezogene Daten im Rahmen des Betriebs dieser Website und
                unserer Dienstleistungen erheben, verarbeiten und schützen. Es
                gelten die Vorschriften der Datenschutz-Grundverordnung (DSGVO),
                des Bundesdatenschutzgesetzes (BDSG) sowie des
                Telemediengesetzes (TMG).
              </p>
            </Block>

            <Block n={2} title="Datenerhebung auf dieser Website">
              <SubTitle>Hosting &amp; Server-Logs</SubTitle>
              <p>
                Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der
                Website werden automatisch Informationen in sogenannten
                Server-Log-Dateien gespeichert, die Ihr Browser übermittelt:
              </p>
              <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-[var(--ml-cta)] mt-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="mt-4">
                Diese Daten werden nicht mit anderen Datenquellen
                zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse am sicheren Betrieb der Website). Die
                Daten werden nach 30 Tagen automatisch gelöscht.
              </p>

              <SubTitle className="mt-8">Cookies</SubTitle>
              <p>
                Diese Website setzt ausschließlich technisch notwendige Cookies
                ein, die für den Betrieb der Website erforderlich sind. Es
                werden keine Tracking-Cookies oder Werbe-Cookies verwendet. Eine
                Einwilligung ist für technisch notwendige Cookies gemäß § 25
                Abs. 2 TTDSG nicht erforderlich.
              </p>
            </Block>

            <Block n={3} title="Kontaktformular & E-Mail-Kontakt">
              <p>
                Wenn Sie uns über das Kontaktformular oder per E-Mail
                kontaktieren, werden die von Ihnen angegebenen Daten (Name,
                E-Mail-Adresse, Telefonnummer, Unternehmensgröße, Nachricht) zur
                Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen
                gespeichert.
              </p>
              <DefinitionList
                items={[
                  {
                    term: "Erhobene Daten",
                    def: "Vorname, Nachname, E-Mail-Adresse, Telefonnummer (optional), Anzahl verwalteter Einheiten, aktuelle Verwaltungssoftware (optional), Nachricht.",
                  },
                  {
                    term: "Zweck",
                    def: "Bearbeitung Ihrer Anfrage, Vorbereitung des Erstgesprächs, Kontaktaufnahme durch unsere Seite.",
                  },
                  {
                    term: "Rechtsgrundlage",
                    def: "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).",
                  },
                  {
                    term: "Speicherdauer",
                    def: "spätestens nach 2 Jahren.",
                  },
                ]}
              />
              <p className="mt-4">
                Widerruf per E-Mail an:{" "}
                <a
                  href="mailto:info@itelly.de"
                  className="text-[var(--ml-cta)] transition-colors hover:text-[var(--ml-cta-hover)]"
                >
                  info@itelly.de
                </a>
              </p>
            </Block>

            <Block n={4} title="Nutzung unserer Dienstleistungen">
              <p>
                Im Rahmen der Nutzung von Mieterlotse verarbeiten wir
                personenbezogene Daten Ihrer Mieter im Auftrag der jeweiligen
                Hausverwaltung (Art. 28 DSGVO — Auftragsverarbeitung). Dazu
                zählen insbesondere eingehende Anrufe, E-Mails und die daraus
                generierten Ticket-, Kategorisierungs- und Audit-Daten.
              </p>
              <DefinitionList
                className="mt-4"
                items={[
                  {
                    term: "Erhobene Daten",
                    def: "Name, Adresse, Telefonnummer, E-Mail-Adresse der Mieter, Objekt- und Einheitenzuordnung, Gesprächs- und Nachrichteninhalte, Audio-Transkripte, Zeitstempel, Kategorisierungsdaten.",
                  },
                  {
                    term: "Zweck",
                    def: "Automatisierte Entgegennahme, Kategorisierung und Weiterleitung von Mieteranfragen; lückenlose Dokumentation für die Hausverwaltung.",
                  },
                  {
                    term: "Rechtsgrundlage",
                    def: "Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung gegenüber der Hausverwaltung) sowie Art. 28 DSGVO (Auftragsverarbeitung).",
                  },
                  {
                    term: "Speicherdauer",
                    def: "Gespräche und Tickets werden bis zu 7 Jahre revisionssicher archiviert, sofern nicht gesetzliche Aufbewahrungsfristen abweichen. Löschung nach Auftragsende oder auf Weisung des Verantwortlichen.",
                  },
                ]}
              />
              <p className="mt-4">
                Mieterdaten werden ausschließlich zur Vertragserfüllung
                verarbeitet und{" "}
                <strong className="font-semibold text-[var(--ml-ink)]">
                  nicht für das Training von KI-Modellen
                </strong>{" "}
                verwendet.
              </p>
            </Block>

            <Block n={5} title="Auftragsverarbeiter & Subunternehmer">
              <p>
                Zum Betrieb der Plattform setzen wir sorgfältig ausgewählte
                Dienstleister innerhalb der EU ein. Mit jedem
                Auftragsverarbeiter besteht ein Vertrag nach Art. 28 DSGVO.
                Server und Datenhaltung liegen innerhalb der EU; eine
                Datenübermittlung in Drittländer findet grundsätzlich nicht
                statt.
              </p>
              <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-[var(--ml-cta)] mt-4">
                <li>Hosting &amp; Infrastruktur: Vercel Inc. (EU-Region)</li>
                <li>Telefonie-Infrastruktur: EU-Anbieter</li>
                <li>
                  Sprach- und Textverarbeitung: EU-basierte KI-Infrastruktur,
                  kein Modelltraining mit Kundendaten
                </li>
              </ul>
              <p className="mt-4">
                Eine aktuelle Liste der eingesetzten Subunternehmer stellen wir
                Auftraggebern auf Anfrage zur Verfügung.
              </p>
            </Block>

            <Block n={6} title="Ihre Rechte als betroffene Person">
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-[var(--ml-cta)] mt-4">
                <li>Auskunft über die gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>
                  Löschung Ihrer Daten, soweit gesetzlich zulässig (Art. 17
                  DSGVO)
                </li>
                <li>
                  Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>
                  Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
                </li>
                <li>
                  Widerruf einer erteilten Einwilligung mit Wirkung für die
                  Zukunft (Art. 7 Abs. 3 DSGVO)
                </li>
                <li>
                  Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77
                  DSGVO)
                </li>
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a
                  href="mailto:info@itelly.de"
                  className="text-[var(--ml-cta)] transition-colors hover:text-[var(--ml-cta-hover)]"
                >
                  info@itelly.de
                </a>
              </p>
            </Block>

            <Block n={7} title="Datensicherheit">
              <p>
                Wir treffen geeignete technische und organisatorische Maßnahmen
                (TOMs) gemäß Art. 32 DSGVO, um Ihre Daten gegen unbefugten
                Zugriff, Verlust oder Manipulation zu schützen. Dazu gehören
                u. a. verschlüsselte Verbindungen (TLS), Zugriffskontrollen,
                Protokollierung und regelmäßige Sicherheits-Reviews. Die
                vollständigen TOMs sind auf Anfrage einsehbar.
              </p>
            </Block>

            <Block n={8} title="Aktualität & Änderungen">
              <p>
                Wir passen diese Datenschutzerklärung an, sobald Änderungen an
                der Datenverarbeitung dies erforderlich machen. Die jeweils
                aktuelle Version ist auf dieser Seite verfügbar.
              </p>
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[13px] font-semibold text-[var(--ml-cta)]">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="ml-h3 text-[20px] md:text-[22px]">{title}</h2>
      </div>
      <div className="ml-body mt-4 text-[15.5px]">{children}</div>
    </div>
  );
}

function SubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={
        "text-[15px] font-semibold text-[var(--ml-ink)] " + className
      }
    >
      {children}
    </h3>
  );
}

function DefinitionList({
  items,
  className = "",
}: {
  items: { term: string; def: string }[];
  className?: string;
}) {
  return (
    <dl
      className={
        "mt-2 divide-y divide-[var(--ml-line)] rounded border border-[var(--ml-line)] bg-[var(--ml-bg-soft)] " +
        className
      }
    >
      {items.map((item) => (
        <div
          key={item.term}
          className="grid gap-1 px-5 py-4 md:grid-cols-[180px_1fr] md:gap-6"
        >
          <dt className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
            {item.term}
          </dt>
          <dd className="text-[14.5px] text-[var(--ml-ink)]">{item.def}</dd>
        </div>
      ))}
    </dl>
  );
}
