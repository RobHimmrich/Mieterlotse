import { ReviewBadge } from "@/components/ui/review-badge";

export function TrustBridge() {
  return (
    <section className="border-y border-[var(--ml-line)] bg-[var(--ml-bg-soft)] py-10">
      <div className="ml-container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          <ReviewBadge caption="Im gesamten DACH-Raum bei Hausverwaltungen im Einsatz" />

          <div className="hidden h-10 w-px bg-[var(--ml-line)] md:block" aria-hidden />

          <div className="flex items-center gap-8 md:gap-10">
            <Stat value="20.000+" label="Mieteranfragen verarbeitet" />
            <Stat value="70 %" label="Automatisierungsquote" />
            <Stat value="24 / 7" label="Erreichbarkeit" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[20px] font-bold tracking-tight text-[var(--ml-ink)]">
        {value}
      </span>
      <span className="mt-0.5 text-[12px] leading-snug text-[var(--ml-ink-soft)]">
        {label}
      </span>
    </div>
  );
}
