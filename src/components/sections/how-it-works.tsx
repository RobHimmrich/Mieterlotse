import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SceneIncomingCall } from "@/components/graphics/scene-incoming-call";
import { SceneAiClassification } from "@/components/graphics/scene-ai-classification";
import { DashboardMockup } from "@/components/graphics/dashboard-mockup";

type Step = {
  nr: string;
  kicker: string;
  timing: string;
  title: React.ReactNode;
  lead: string;
  bullets: string[];
  scene: React.ReactNode;
};

const STEPS: Step[] = [
  {
    nr: "01",
    kicker: "Kanal",
    timing: "Sekunde 0",
    title: (
      <>
        Mieter meldet sich <span className="ml-highlight">wie immer</span>.
      </>
    ),
    lead: "Keine App, kein Portal, keine Umgewöhnung. Mieterlotse liegt unsichtbar auf Ihren bestehenden Kanälen.",
    bullets: [
      "Bestehende Telefonnummer",
      "Bestehendes E-Mail-Postfach (info@…) bleibt wie gewohnt",
      "Rund um die Uhr erreichbar — Wochenenden, Feiertage, Nacht",
      "Deutsch + 22 Sprachen",
      "Keine Wartemusik, keine Warteschleife — sofortige Antwort",
    ],
    scene: <SceneIncomingCall />,
  },
  {
    nr: "02",
    kicker: "Verarbeitung",
    timing: "Sekunde 5 – 20",
    title: (
      <>
        Mieterlotse erkennt, beantwortet oder{" "}
        <span className="ml-highlight">eskaliert</span>.
      </>
    ),
    lead: "Die KI klassifiziert jede Anfrage, prüft Objekt und Priorität, antwortet im Namen Ihrer Verwaltung — oder reicht sie kontextreich an Ihr Team weiter.",
    bullets: [
      "Unter 20 Sekunden Antwortzeit — in Mail und am Telefon",
      "Klassifikation: Notfall · Reparatur · Nebenkosten · Mahnung · Allgemein",
      "Zugriff auf Ihre Knowledge Base (Hausordnung, Verträge, FAQs)",
      "Eskalationsregeln nach Objekt, Uhrzeit, Kategorie — von Ihnen definiert",
      "Kein Handover-Verlust: vollständiger Kontext wandert mit der Eskalation",
    ],
    scene: <SceneAiClassification />,
  },
  {
    nr: "03",
    kicker: "Transparenz",
    timing: "Permanent",
    title: (
      <>
        Sie sehen <span className="ml-highlight">alles im Dashboard</span>.
      </>
    ),
    lead: "Jeder Anruf, jede Mail, jede Eskalation mit Zeitstempel und Volltext — ein Fenster für alle Objekte, audit-fest und exportierbar.",
    bullets: [
      "Echtzeit-Übersicht: alle Objekte, alle Kanäle, ein Dashboard",
      "Volltext-Log + Audio-Transkript jeder Interaktion",
      "Dokumentation auf Knopfdruck — Beirat, Audit, DSGVO-Auskunft",
      "Automatische 10-Jahres-Archivierung, gesetzeskonform",
      "Export nach Excel, CSV, PDF — Reporting in Minuten statt Stunden",
    ],
    scene: (
      <div className="flex w-full justify-center">
        <DashboardMockup tilt={false} />
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="ml-section">
      <div className="ml-container">
        <div className="ml-reveal mx-auto max-w-[720px] text-center">
          <Eyebrow>So läuft es bei Ihnen</Eyebrow>
          <h2 className="ml-h2 mt-4">
            Drei Schritte bis zur Entlastung.
            <br />
            <span className="ml-highlight">Ohne Systemwechsel.</span>
          </h2>
          <p className="ml-body mt-5 text-[16.5px]">
            Wir docken an Ihre bestehende Telefonnummer und Ihr bestehendes
            E-Mail-Postfach an. Sie ändern nichts — Ihr Betrieb entlastet sich.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24 md:gap-28">
          {STEPS.map((step, i) => {
            const textFirst = i % 2 === 0;
            return (
              <article
                key={step.nr}
                className="ml-reveal relative grid items-center gap-10 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20"
              >
                <div
                  className={cn(
                    "relative",
                    textFirst ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <div
                    className={cn(
                      "ml-ghost-digit",
                      textFirst
                        ? "ml-ghost-digit-left"
                        : "ml-ghost-digit-right",
                    )}
                    aria-hidden
                  >
                    {step.nr}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ml-cta)]">
                        Schritt {step.nr} · {step.kicker}
                      </span>
                      <span className="h-px w-8 bg-[var(--ml-line)]" />
                      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ml-ink-whisper)]">
                        {step.timing}
                      </span>
                    </div>

                    <h3 className="ml-h2 mt-4 text-[30px] leading-[1.15] md:text-[34px]">
                      {step.title}
                    </h3>

                    <p className="ml-body mt-4 max-w-[46ch] text-[15.5px]">
                      {step.lead}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[var(--ml-ink-soft)]"
                        >
                          <Check
                            size={16}
                            strokeWidth={2.4}
                            className="mt-[3px] flex-shrink-0 text-[var(--ml-success)]"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center",
                    textFirst ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  {step.scene}
                </div>
              </article>
            );
          })}
        </div>

        <div className="ml-reveal mx-auto mt-24 max-w-[640px] text-center">
          <p className="text-[15px] text-[var(--ml-ink-soft)]">
            <span className="font-semibold text-[var(--ml-ink)]">
              Setup-Zeit auf Ihrer Seite:
            </span>{" "}
            eine Discovery-Session, eine Feintuning-Session.
            <br />
            Der Rest ist unser Job.
          </p>
        </div>
      </div>
    </section>
  );
}
