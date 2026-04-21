import { Eyebrow } from "@/components/ui/eyebrow";
import { FlowIntegration } from "@/components/graphics/flow-integration";

const CHECKS = [
  "Keine neue Software auf Team-Rechnern",
  "Keine neue E-Mail-Adresse",
  "Keine neue Telefonnummer",
  "Keine neue Domain",
  "Keine neuen Logins",
  "Keine Migrationswoche",
];

export function Integration() {
  return (
    <section className="ml-section">
      <div className="ml-container">
        <div className="ml-reveal mx-auto max-w-[720px] text-center">
          <Eyebrow>Integration</Eyebrow>
          <h2 className="ml-h2 mt-4">
            Mieterlotse läuft auf Ihren bestehenden Kanälen.{" "}
            <span className="ml-highlight">Punkt.</span>
          </h2>
          <p className="ml-body mt-5 text-[16.5px]">
            Wir ersetzen kein ERP, keine Buchhaltung, kein CRM. Wir verbinden
            uns mit dem, was da ist — und entlasten Sie von dort, wo der Lärm
            wirklich reinkommt: Telefon und E-Mail.
          </p>
        </div>

        <div className="ml-reveal mt-14">
          <FlowIntegration />
        </div>

        <div className="ml-reveal mx-auto mt-12 max-w-[840px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3">
            {CHECKS.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 text-[13.5px] font-medium text-[var(--ml-ink-soft)]"
              >
                <span
                  aria-hidden
                  className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-[var(--ml-line)] bg-white text-[10px] text-[var(--ml-ink-whisper)]"
                >
                  ×
                </span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
