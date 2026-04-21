import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Impressum — Mieterlotse",
  description: "Impressum und Anbieterkennzeichnung nach § 5 TMG.",
};

type Entry = { label: string; value: React.ReactNode };

const ENTRIES: Entry[] = [
  { label: "Name", value: "Robin Himmrich" },
  { label: "Unternehmensbezeichnung", value: "Immobilienverwaltung Automation" },
  {
    label: "Anschrift",
    value: (
      <>
        c/o Autorenglück #96528
        <br />
        Albert-Einstein-Str. 47
        <br />
        02977 Hoyerswerda
        <br />
        Deutschland
      </>
    ),
  },
  {
    label: "E-Mail",
    value: (
      <a
        href="mailto:info@immobilienverwaltung-automation.de"
        className="text-[var(--ml-cta)] transition-colors hover:text-[var(--ml-cta-hover)]"
      >
        info@immobilienverwaltung-automation.de
      </a>
    ),
  },
  {
    label: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    value: "Robin Himmrich (Anschrift wie oben)",
  },
];

export default function ImpressumPage() {
  return (
    <section className="ml-section pt-36 md:pt-44">
      <div className="ml-container">
        <div className="mx-auto max-w-[720px]">
          <div className="ml-reveal">
            <Eyebrow>Rechtliches</Eyebrow>
            <h1 className="ml-h1 mt-4">Impressum</h1>
            <p className="ml-body mt-4 text-[15.5px]">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div className="ml-reveal mt-12 divide-y divide-[var(--ml-line)] rounded border border-[var(--ml-line)] bg-white">
            {ENTRIES.map((entry) => (
              <div
                key={entry.label}
                className="grid gap-2 px-6 py-5 md:grid-cols-[220px_1fr] md:gap-6 md:px-8 md:py-6"
              >
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
                  {entry.label}
                </div>
                <div className="text-[15px] leading-relaxed text-[var(--ml-ink)]">
                  {entry.value}
                </div>
              </div>
            ))}
          </div>

          <div className="ml-reveal mt-16 flex flex-col gap-12">
            <LegalBlock title="Haftungsausschluss">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte übernehmen wir keine Gewähr. Als Diensteanbieter sind wir
              gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich.
            </LegalBlock>

            <LegalBlock title="Haftung für Links">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </LegalBlock>

            <LegalBlock title="Urheberrecht">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </LegalBlock>

            <LegalBlock title="Streitschlichtung">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ml-cta)] underline-offset-4 transition-colors hover:text-[var(--ml-cta-hover)] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </LegalBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="ml-h3 text-[20px] md:text-[22px]">{title}</h2>
      <p className="ml-body mt-3 text-[15.5px]">{children}</p>
    </div>
  );
}
