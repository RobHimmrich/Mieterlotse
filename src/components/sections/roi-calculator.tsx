"use client";

import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

// Annahmen (transparent, unten disclaimt)
const ASSUMPTIONS = {
  minutesPerUnitPerMonth: 12, // Minuten Mieterkontakt pro Einheit/Monat
  hourlyCostEuro: 38, // Vollkosten Sachbearbeitung inkl. AG-Anteil
  automationRate: 0.7, // 70 % KI-Quote
  mlMonthlyEuro: (units: number) => {
    // Offizielle Preise laut /preise
    if (units <= 150) return 590; // Starter
    if (units <= 400) return 790; // Professional
    if (units <= 800) return 1190; // Wachstum
    return 1790; // Enterprise-Richtwert (final im Gespräch)
  },
};

function formatEuro(v: number) {
  return v.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

function formatHours(v: number) {
  return v.toLocaleString("de-DE", { maximumFractionDigits: 1 });
}

export function RoiCalculator() {
  const [units, setUnits] = useState(500);

  const { hoursSavedPerMonth, mlPerMonth, netPerYear } = useMemo(() => {
    const hoursPerMonth =
      (units *
        ASSUMPTIONS.minutesPerUnitPerMonth *
        ASSUMPTIONS.automationRate) /
      60;
    const gross = hoursPerMonth * 12 * ASSUMPTIONS.hourlyCostEuro;
    const ml = ASSUMPTIONS.mlMonthlyEuro(units);
    const net = Math.max(0, gross - ml * 12);
    return {
      hoursSavedPerMonth: hoursPerMonth,
      mlPerMonth: ml,
      netPerYear: net,
    };
  }, [units]);

  return (
    <section id="roi" className="ml-section bg-[var(--ml-bg-soft)]">
      <div className="ml-container">
        <div className="ml-reveal mx-auto max-w-[720px] text-center">
          <Eyebrow>Was das kostet — und was es bringt</Eyebrow>
          <h2 className="ml-h2 mt-4">
            Rechnen Sie selbst.{" "}
            <span className="ml-highlight">In unter 30 Sekunden.</span>
          </h2>
          <p className="ml-body mt-5 text-[16.5px]">
            Verschieben Sie den Regler auf Ihre ungefähre Einheitenzahl. Die
            Annahmen sind konservativ und unten transparent.
          </p>
        </div>

        <div className="ml-reveal mx-auto mt-14 max-w-[1000px]">
          <div className="rounded border border-[var(--ml-line)] bg-white p-6 shadow-[var(--ml-shadow-soft)] md:p-10">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
                  Verwaltete Einheiten
                </div>
                <div className="mt-2 font-mono text-[44px] font-extrabold leading-none tracking-tight text-[var(--ml-ink)]">
                  {units.toLocaleString("de-DE")}
                </div>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-[12.5px] text-[var(--ml-ink-whisper)]">
                  Mieterlotse ab
                </div>
                <div className="font-mono text-[20px] font-extrabold text-[var(--ml-ink)]">
                  {formatEuro(mlPerMonth)}
                  <span className="font-sans text-[14px] font-medium text-[var(--ml-ink-soft)]">
                    {" "}
                    / Monat
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <input
                type="range"
                min={100}
                max={2000}
                step={50}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="ml-range"
                aria-label="Verwaltete Einheiten"
              />
              <div className="mt-2 flex justify-between text-[11px] font-mono text-[var(--ml-ink-whisper)]">
                <span>100</span>
                <span>500</span>
                <span>1.000</span>
                <span>1.500</span>
                <span>2.000</span>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded border border-[var(--ml-line)] bg-[var(--ml-bg-soft)] p-6">
                <div className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
                  Zeit zurück ins Team
                </div>
                <div className="mt-3 font-mono text-[40px] font-extrabold leading-none tracking-tight text-[var(--ml-ink)]">
                  {formatHours(hoursSavedPerMonth)}
                  <span className="font-sans text-[16px] font-medium text-[var(--ml-ink-soft)]">
                    {" "}
                    Std. / Monat
                  </span>
                </div>
                <div className="mt-2 text-[13px] text-[var(--ml-ink-soft)]">
                  Entspricht{" "}
                  <span className="font-semibold text-[var(--ml-ink)]">
                    {formatHours(hoursSavedPerMonth / 4)} Std./Woche
                  </span>
                  , die Ihr Team für Eigentümer und Gewerke hat.
                </div>
              </div>

              <div className="rounded border border-[var(--ml-cta)]/30 bg-gradient-to-br from-white to-[var(--ml-cta-soft)] p-6">
                <div className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-cta)]">
                  Netto-Einsparung pro Jahr
                </div>
                <div className="mt-3 font-mono text-[40px] font-extrabold leading-none tracking-tight text-[var(--ml-ink)]">
                  {formatEuro(netPerYear)}
                </div>
                <div className="mt-2 text-[13px] text-[var(--ml-ink-soft)]">
                  Nach Abzug der Mieterlotse-Investition von{" "}
                  <span className="font-semibold text-[var(--ml-ink)]">
                    {formatEuro(mlPerMonth * 12)}/Jahr
                  </span>
                  .
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 border-t border-[var(--ml-line)] pt-8 md:flex-row md:justify-between">
              <p className="ml-whisper max-w-md">
                Rechnung: {units} Einheiten × {ASSUMPTIONS.minutesPerUnitPerMonth}{" "}
                Min/Monat × {Math.round(ASSUMPTIONS.automationRate * 100)} %
                KI-Quote × {formatEuro(ASSUMPTIONS.hourlyCostEuro)}/Std.
                Minus Mieterlotse. Konservativ.
              </p>
              <CtaButton href="#final-cta" variant="primary">
                Kalkulation im Gespräch prüfen
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
