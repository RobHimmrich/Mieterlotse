import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

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

              <div className="mt-10 flex justify-end border-t border-[var(--ml-line)] pt-6">
                <CtaButton href="#final-cta" variant="primary">
                  Erstgespräch mit mir
                </CtaButton>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
