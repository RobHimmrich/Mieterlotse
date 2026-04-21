import { Sparkles, ArrowRight } from "lucide-react";

type Category = {
  label: string;
  value: number;
  highlight?: boolean;
};

const CATEGORIES: Category[] = [
  { label: "Reparatur", value: 94, highlight: true },
  { label: "Notfall", value: 31 },
  { label: "Nebenkosten", value: 8 },
  { label: "Allgemein", value: 5 },
];

export function SceneAiClassification() {
  return (
    <div className="ml-mock mx-auto w-full max-w-[480px]">
      <div className="ml-mock-header">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="inline-flex h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="inline-flex h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-2 font-mono text-[11px] text-[var(--ml-ink-whisper)]">
            ai.mieterlotse.de/tkt-2026-8347
          </span>
        </div>
        <div className="flex items-center text-[11.5px] font-medium">
          <span className="ml-mock-live-dot" />
          Analyse · 4.2s
        </div>
      </div>

      <div className="bg-white p-5">
        {/* Incoming Message */}
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
          Eingehende Anfrage
        </div>
        <div className="mt-2 rounded border border-[var(--ml-line)] bg-[var(--ml-bg-soft)] p-3">
          <div className="flex items-center gap-2 text-[11px] text-[var(--ml-ink-soft)]">
            <span className="font-semibold text-[var(--ml-ink)]">
              Familie Schmidt
            </span>
            <span>·</span>
            <span>Telefon · 14:22</span>
          </div>
          <div className="mt-1.5 text-[13px] leading-relaxed text-[var(--ml-ink)]">
            „Die Heizung im Bad funktioniert seit heute früh nicht mehr. Wir
            haben drei kleine Kinder — ist das ein Notfall?"
          </div>
        </div>

        {/* Classification Panel */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
              <Sparkles size={11} strokeWidth={2.2} />
              Klassifikation
            </div>
            <div className="text-[10.5px] text-[var(--ml-ink-whisper)]">
              Confidence
            </div>
          </div>
          <div className="mt-2.5 flex flex-col gap-2">
            {CATEGORIES.map((c) => (
              <ConfidenceRow key={c.label} category={c} />
            ))}
          </div>
        </div>

        {/* Context badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          <ContextBadge label="Objekt" value="Maria-Hilf-Str. 14" />
          <ContextBadge label="Priorität" value="Hoch" accent />
          <ContextBadge label="Sprache" value="Deutsch" />
        </div>

        {/* Decision */}
        <div className="mt-5 flex items-center gap-3 rounded border border-[var(--ml-cta)]/30 bg-gradient-to-br from-white to-[var(--ml-cta-soft)] p-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ml-cta)] text-white">
            <ArrowRight size={16} strokeWidth={2.4} />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ml-ink-soft)]">
              Nächster Schritt
            </div>
            <div className="mt-0.5 text-[13.5px] font-semibold text-[var(--ml-ink)]">
              Eskalation → Haustechnik · Objekt Maria-Hilf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfidenceRow({ category }: { category: Category }) {
  const isHighlight = category.highlight;
  return (
    <div className="flex items-center gap-3">
      <div
        className={
          isHighlight
            ? "w-[88px] text-[12px] font-semibold text-[var(--ml-ink)]"
            : "w-[88px] text-[12px] text-[var(--ml-ink-soft)]"
        }
      >
        {category.label}
      </div>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--ml-bg-soft)]">
        <div
          className={
            isHighlight
              ? "h-full rounded-full bg-[var(--ml-cta)]"
              : "h-full rounded-full bg-[var(--ml-ink-whisper)]/40"
          }
          style={{ width: `${category.value}%` }}
        />
      </div>
      <div
        className={
          isHighlight
            ? "w-10 text-right font-mono text-[11.5px] font-bold text-[var(--ml-ink)]"
            : "w-10 text-right font-mono text-[11.5px] text-[var(--ml-ink-whisper)]"
        }
      >
        {category.value}%
      </div>
    </div>
  );
}

function ContextBadge({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        accent
          ? "inline-flex items-center gap-1.5 rounded border border-[#b45309]/20 bg-[#b45309]/5 px-2 py-1 text-[11px]"
          : "inline-flex items-center gap-1.5 rounded border border-[var(--ml-line)] bg-white px-2 py-1 text-[11px]"
      }
    >
      <span className="text-[var(--ml-ink-whisper)]">{label}</span>
      <span
        className={
          accent
            ? "font-semibold text-[#b45309]"
            : "font-semibold text-[var(--ml-ink)]"
        }
      >
        {value}
      </span>
    </div>
  );
}
