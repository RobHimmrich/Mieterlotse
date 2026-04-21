import Image from "next/image";
import { Phone } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

const DEMO_NUMBER_DISPLAY = "+49 7661 9759001";
const DEMO_NUMBER_HREF = "tel:+4976619759001";

export function FounderTestimonial() {
  return (
    <section className="ml-section bg-[var(--ml-bg-soft)]">
      <div className="ml-container">
        {/* Intro */}
        <div className="ml-reveal mx-auto max-w-[720px] text-center">
          <Eyebrow>Die Hand dahinter</Eyebrow>
          <h2 className="ml-h2 mt-4 text-[38px] md:text-[44px]">
            Gebaut <span className="ml-highlight">neben Ihnen</span> — nicht von
            einem Konzern über Ihnen.
          </h2>
          <p className="ml-body mt-5 text-[16px]">
            Mieterlotse ist kein Plattform-Produkt aus dem Katalog. Jede
            Verwaltung bekommt ein Setup, das zur eigenen Tonalität, den eigenen
            Eskalations­regeln und den eigenen Objekten passt — persönlich
            begleitet.
          </p>
        </div>

        {/* Founder letter */}
        <article className="ml-reveal mt-16 overflow-hidden rounded border border-[var(--ml-line)] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_64px_-32px_rgba(15,23,42,0.12)]">
          <div className="grid gap-0 md:grid-cols-[minmax(280px,380px)_1fr]">
            {/* Portrait */}
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[500px]">
              <Image
                src="/robin-himmrich.jpg"
                alt="Robin Himmrich, Gründer Mieterlotse"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                priority={false}
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-32 md:h-20"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.55) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white md:bottom-4 md:left-6">
                <div>
                  <div className="text-[16px] font-extrabold leading-tight tracking-tight">
                    Robin Himmrich
                  </div>
                  <div className="text-[12.5px] font-medium text-white/80">
                    Gründer · Mieterlotse
                  </div>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div className="relative flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="ml-eyebrow">Brief vom Gründer</div>

                <blockquote className="mt-5 text-[22px] font-extrabold leading-[1.22] tracking-tight text-[var(--ml-ink)] md:text-[26px]">
                  „Ich habe Mieterlotse nicht für Konzerne gebaut. Sondern für
                  die zehn Leute in Ihrem Büro, die Montagmorgen die Woche
                  retten müssen."
                </blockquote>

                <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-[var(--ml-ink-soft)]">
                  <p>
                    Ich habe gesehen, wie viel Zeit operativ starker
                    Hausverwaltungen in Mail- und Telefon­routine verschwindet
                    — Zeit, die weder Eigentümer noch Team je zurückbekommen.
                    Mieterlotse entstand aus genau dieser Frustration.
                  </p>
                  <p>
                    Wir setzen das Produkt deshalb nicht „von der Stange" ein,
                    sondern richten es auf Ihre Eskalations­regeln, Ihre
                    Tonalität, Ihre Sonderfälle aus — <strong className="font-semibold text-[var(--ml-ink)]">Plug and Play ab Tag eins, individualisiert ab Tag zwei.</strong>
                  </p>
                  <p>
                    Kein Vertrieb ohne Diagnose: Wenn Mieterlotse Ihnen nicht
                    mindestens 10 Stunden pro Woche zurückgibt, sagen wir Ihnen
                    das im Erstgespräch — offen, ohne Follow-up-Pipeline.
                  </p>
                </div>

                <div className="mt-8 flex items-end gap-3">
                  <span
                    className="text-[34px] leading-none text-[var(--ml-ink)]"
                    style={{
                      fontFamily: "var(--font-handwriting), 'Caveat', cursive",
                      fontWeight: 700,
                      transform: "rotate(-3deg)",
                      transformOrigin: "left bottom",
                      display: "inline-block",
                    }}
                  >
                    Robin Himmrich
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-[var(--ml-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={DEMO_NUMBER_HREF}
                  className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-[var(--ml-ink)] transition-colors hover:text-[var(--ml-cta)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ml-cta-soft)] text-[var(--ml-cta)]">
                    <Phone size={14} strokeWidth={2.4} fill="currentColor" />
                  </span>
                  <span className="font-mono tracking-tight">
                    {DEMO_NUMBER_DISPLAY}
                  </span>
                </a>

                <CtaButton href="#final-cta" variant="primary">
                  Erstgespräch mit mir
                </CtaButton>
              </div>
            </div>
          </div>
        </article>

        {/* Pilot-Testimonial */}
        <div className="ml-reveal mt-14">
          <div className="mx-auto flex max-w-[880px] items-center gap-4">
            <div className="h-px flex-1 bg-[var(--ml-line)]" />
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink-whisper)]">
              Aus der Pilotphase
            </div>
            <div className="h-px flex-1 bg-[var(--ml-line)]" />
          </div>

          <figure className="mx-auto mt-8 max-w-[880px]">
            <svg
              aria-hidden
              width="40"
              height="30"
              viewBox="0 0 48 36"
              className="mx-auto mb-6 text-[var(--ml-cta)]/80"
              fill="currentColor"
            >
              <path d="M0 36V20.4C0 9.6 4.8 3.6 15.6 0L18 4.8C11.4 7.2 7.8 10.8 7.8 16.8H15V36H0zM28.8 36V20.4C28.8 9.6 33.6 3.6 44.4 0L46.8 4.8C40.2 7.2 36.6 10.8 36.6 16.8H43.8V36H28.8z" />
            </svg>

            <blockquote className="text-center text-[24px] font-extrabold leading-[1.3] tracking-tight text-[var(--ml-ink)] md:text-[30px]">
              „Ab Montag konnte ich zum ersten Mal seit 14 Monaten mit
              geschlossenem Laptop essen gehen. Das Büro lief."
            </blockquote>

            <figcaption className="mt-7 flex flex-col items-center gap-1 text-center">
              <div className="text-[14px] font-bold text-[var(--ml-ink)]">
                Geschäftsführung
              </div>
              <div className="text-[13px] text-[var(--ml-ink-soft)]">
                Mietverwaltung · ca. 600 Einheiten · Nordrhein-Westfalen
              </div>
            </figcaption>

            <div className="mx-auto mt-10 grid max-w-[640px] grid-cols-3 gap-4 border-t border-[var(--ml-line)] pt-8">
              <Kpi value="71" unit="%" label="KI-Quote" />
              <Kpi value="12" unit="Sek." label="Ø Reaktion" />
              <Kpi value="18" unit="Std." label="Woche zurück" />
            </div>
          </figure>

          <p className="ml-whisper mx-auto mt-8 max-w-[520px] text-center">
            Name und Logo der Pilotverwaltung im Erstgespräch nennbar — öffentlich
            freigegeben nach offiziellem Launch.
          </p>
        </div>
      </div>
    </section>
  );
}

function Kpi({
  value,
  unit,
  label,
}: {
  value: string;
  unit: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-mono text-[30px] font-extrabold leading-none text-[var(--ml-ink)] md:text-[36px]">
          {value}
        </span>
        <span className="text-[14px] font-semibold text-[var(--ml-ink-soft)]">
          {unit}
        </span>
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
        {label}
      </div>
    </div>
  );
}
