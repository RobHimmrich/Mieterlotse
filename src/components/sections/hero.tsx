import { Check } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { ReviewBadge } from "@/components/ui/review-badge";
import { EmailTestInline } from "@/components/ui/email-test-inline";
import { LiveCallWidget } from "@/components/graphics/live-call-widget";

const TRUST_ITEMS = [
  "16 Std./Woche pro Sachbearbeiter zurück",
  "Plug and Play: Sofort einsetzbar",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44"
    >
      <div className="ml-hero-blob" aria-hidden />

      <div className="ml-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:gap-16">
          <div className="ml-reveal">
            <div className="ml-hero-ghost" aria-hidden>
              <span className="ml-hero-ghost-cap">KI</span>
              <span> Hausverwaltung</span>
            </div>

            <h1 className="ml-h1 mt-3">
              Ihr Team soll verwalten.
              <br />
              Nicht{" "}
              <span className="ml-highlight">Anfragen beantworten</span>.
            </h1>

            <p className="ml-body mt-6 max-w-[58ch] text-[17px]">
              Mieterlotse löst{" "}
              <span className="font-semibold text-[var(--ml-ink)]">
                70 % der Anrufe und E-Mails Ihrer Mieter
              </span>{" "}
              automatisch — auf Ihrer bestehenden Telefonnummer und Ihrer
              bestehenden E-Mail-Adresse.{" "}
              <span className="font-semibold text-[var(--ml-ink)]">
                Ihr Team gewinnt 16 Stunden pro Woche
              </span>{" "}
              zurück — ohne dass Sie jemanden einstellen oder neue Software
              einführen müssen.
            </p>

            <div className="mt-8">
              <CtaButton href="#final-cta" variant="primary">
                Erstgespräch buchen
              </CtaButton>
            </div>

            <div className="mt-8">
              <ReviewBadge caption="von Hausverwaltungen im ganzen DACH-Raum genutzt" />
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13.5px] text-[var(--ml-ink-soft)]"
                >
                  <Check
                    size={15}
                    strokeWidth={2.4}
                    className="text-[var(--ml-success)]"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="ml-reveal lg:pl-4"
            style={{ transitionDelay: "80ms" }}
          >
            <LiveCallWidget />
            <div className="mt-8">
              <EmailTestInline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
