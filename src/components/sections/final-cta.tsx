"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ReviewBadge } from "@/components/ui/review-badge";

const UNITS_OPTIONS = [
  "bis 300 Einheiten",
  "300–600 Einheiten",
  "600–1.000 Einheiten",
  "1.000–2.000 Einheiten",
  "> 2.000 Einheiten",
];

const REASON_OPTIONS = [
  "Unbesetzte Stelle seit > 3 Monaten",
  "Team ist operativ am Limit",
  "Wachstumsplan blockiert durch Operative",
  "Dokumentations­pflichten werden zum Risiko",
  "Sonstiges",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdyzyde";

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Netzwerkfehler");
      setSubmitted(true);
    } catch {
      setError("Senden fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="final-cta" className="ml-section">
      <div className="ml-container">
        <div className="mx-auto max-w-[880px] rounded border border-[var(--ml-line)] bg-white shadow-[var(--ml-shadow-soft)]">
          <div className="grid md:grid-cols-[1.05fr_1fr]">
            {/* Left — Pitch */}
            <div className="ml-reveal flex flex-col justify-between p-8 md:p-10 lg:p-12">
              <div>
                <Eyebrow>Erstgespräch</Eyebrow>
                <h2 className="ml-h2 mt-4 text-[32px] md:text-[36px]">
                  30 Minuten, kein Pitch.
                  <br />
                  <span className="ml-highlight">Ehrliche Diagnose.</span>
                </h2>

                <p className="ml-body mt-5 text-[15.5px]">
                  Wir schauen gemeinsam auf Ihr Volumen, Ihre Kanäle, Ihre
                  Eskalations­anforderungen. Am Ende wissen Sie, ob Mieterlotse
                  für Sie rechnet — mit konkreten Zahlen, nicht mit Prospekt.
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-3 border-t border-[var(--ml-line)] pt-7 text-[14px] text-[var(--ml-ink-soft)]">
                {[
                  "Discovery-Struktur, keine Verkaufsshow",
                  "Wir sagen ab, wenn es nicht passt",
                  "Antwort innerhalb von 24 Std.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2}
                      className="mt-[2px] flex-shrink-0 text-[var(--ml-success)]"
                    />
                    <span className="font-medium text-[var(--ml-ink)]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[var(--ml-line)] pt-7">
                <ReviewBadge caption="von Geschäftsführern mittelständischer Verwaltungen genutzt" />
              </div>
            </div>

            {/* Right — Form */}
            <div className="ml-reveal border-t border-[var(--ml-line)] bg-[var(--ml-bg-soft)] p-8 md:border-l md:border-t-0 md:p-10 lg:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <CheckCircle2
                    size={40}
                    strokeWidth={1.5}
                    className="text-[var(--ml-success)]"
                  />
                  <h3 className="ml-h3 mt-5 text-[22px]">
                    Vielen Dank — wir melden uns innerhalb von 24 Std.
                  </h3>
                  <p className="ml-body mt-3 text-[14.5px]">
                    Sie erhalten gleich eine Bestätigungsmail mit
                    Gesprächsvorschlägen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="ml-field">
                      <label className="ml-field-label" htmlFor="firstName">
                        Vorname
                      </label>
                      <input
                        className="ml-input"
                        id="firstName"
                        name="firstName"
                        required
                      />
                    </div>
                    <div className="ml-field">
                      <label className="ml-field-label" htmlFor="lastName">
                        Nachname
                      </label>
                      <input
                        className="ml-input"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>

                  <div className="ml-field">
                    <label className="ml-field-label" htmlFor="company">
                      Verwaltung
                    </label>
                    <input
                      className="ml-input"
                      id="company"
                      name="company"
                      required
                    />
                  </div>

                  <div className="ml-field">
                    <label className="ml-field-label" htmlFor="email">
                      Geschäftliche E-Mail
                    </label>
                    <input
                      className="ml-input"
                      id="email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="ml-field">
                      <label className="ml-field-label" htmlFor="units">
                        Einheiten
                      </label>
                      <select
                        className="ml-select"
                        id="units"
                        name="units"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Bitte wählen
                        </option>
                        {UNITS_OPTIONS.map((u) => (
                          <option key={u} value={u}>
                            {u}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ml-field">
                      <label className="ml-field-label" htmlFor="reason">
                        Konkreter Anlass
                      </label>
                      <select
                        className="ml-select"
                        id="reason"
                        name="reason"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Bitte wählen
                        </option>
                        {REASON_OPTIONS.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <CtaButton
                    type="submit"
                    variant="primary"
                    className="mt-1 h-12"
                  >
                    {submitting ? "Wird gesendet …" : "Erstgespräch anfragen"}
                  </CtaButton>

                  {error ? (
                    <p className="text-[13px] font-medium text-[#B45309]">
                      {error}
                    </p>
                  ) : null}

                  <p className="ml-whisper mt-1">
                    Mit dem Absenden stimmen Sie zu, dass wir Sie einmalig zum
                    Erstgespräch kontaktieren. Keine Liste, kein Newsletter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
