import { Shield, ServerCog, Scale, FileLock } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

type Item = {
  icon: typeof Shield;
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    icon: Shield,
    title: "DSGVO von Grund auf",
    body: "Datenverarbeitung ausschließlich zweckgebunden. Keine Zweitverwertung, kein Training auf Ihren Daten.",
  },
  {
    icon: ServerCog,
    title: "EU-Server, EU-Betrieb",
    body: "Hosting in deutschen und EU-Rechenzentren. Kein Datentransfer in Drittländer. Ende-zu-Ende verschlüsselt.",
  },
  {
    icon: Scale,
    title: "AVV Art. 28 inklusive",
    body: "Auftragsverarbeitungsvertrag nach Art. 28 DSGVO rechtssicher im Standard. TOMs dokumentiert, auf Anfrage einsehbar.",
  },
  {
    icon: FileLock,
    title: "Revisionssichere Archivierung",
    body: "Jeder Vorgang mit Zeitstempel, Volltext und Audio-Transkript. Export für Audit, Beirat und WEG-Versammlung.",
  },
];

export function Compliance() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--ml-compliance-navy) 0%, var(--ml-compliance-navy-2) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="ml-container relative">
        <div className="ml-reveal mx-auto max-w-[720px] text-center">
          <Eyebrow tone="amber">Compliance &amp; Vertrauen</Eyebrow>
          <h2 className="ml-h2 mt-4 text-white">
            Vertrauen ist Pflicht.{" "}
            <span className="ml-highlight-amber">Nicht Option.</span>
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-white/70">
            Wir arbeiten mit Mieterdaten. Wir arbeiten mit Ihrem Ruf. Das nehmen
            wir ernst — vom ersten Setup-Gespräch bis zum Export nach sieben
            Jahren.
          </p>
        </div>

        <div className="ml-reveal mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="ml-dark-card">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded"
                    style={{
                      background: "color-mix(in oklab, var(--ml-cta) 14%, transparent)",
                      boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--ml-cta) 34%, transparent)",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2.2}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="ml-reveal mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-mono text-white/40">
          <span>DSGVO</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>AVV Art. 28</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>TOMs nach Art. 32</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>ISO-27001-konforme Betreiber</span>
        </div>
      </div>
    </section>
  );
}
