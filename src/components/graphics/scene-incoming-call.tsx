import { Phone, PhoneOff, Mail, User } from "lucide-react";

export function SceneIncomingCall() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* Phone Call Card — dominant, left-aligned */}
      <div className="ml-scene-phone">
        <div className="ml-scene-phone-status">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--ml-ink)]">
            14:22
          </span>
          <div className="flex items-center gap-1.5 text-[var(--ml-ink)]">
            <span className="flex items-end gap-0.5">
              <span className="h-[3px] w-[3px] rounded-sm bg-current opacity-70" />
              <span className="h-[5px] w-[3px] rounded-sm bg-current opacity-80" />
              <span className="h-[7px] w-[3px] rounded-sm bg-current opacity-90" />
              <span className="h-[9px] w-[3px] rounded-sm bg-current" />
            </span>
            <span className="h-3 w-5 rounded-sm border border-current">
              <span className="block h-full w-[80%] rounded-[1px] bg-current" />
            </span>
          </div>
        </div>

        <div className="px-8 pt-8 pb-6 text-center">
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--ml-ink-whisper)]">
            Eingehender Anruf · Mobil
          </div>

          <div className="relative mx-auto mt-7 h-[92px] w-[92px]">
            <span className="ml-scene-phone-ring ml-scene-phone-ring-1" />
            <span className="ml-scene-phone-ring ml-scene-phone-ring-2" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#E4D3B6] to-[#B4956A] text-white shadow-[0_4px_16px_-2px_rgba(180,149,106,0.4)]">
              <User size={40} strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-6 text-[19px] font-bold tracking-tight text-[var(--ml-ink)]">
            Familie Schmidt
          </div>
          <div className="mt-0.5 text-[13px] text-[var(--ml-ink-soft)]">
            Objekt B · Lange Str. 12
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--ml-cta)]/30 bg-[var(--ml-cta-soft)] px-3 py-1 text-[11.5px] font-semibold text-[var(--ml-cta-hover)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ml-cta)]" />
            Mieterlotse nimmt ab
          </div>
        </div>

        <div className="flex items-center justify-around border-t border-[var(--ml-line)] px-8 py-5">
          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              aria-label="Ablehnen"
              tabIndex={-1}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#dc2626]"
            >
              <PhoneOff size={18} strokeWidth={2} />
            </button>
            <span className="text-[10.5px] font-medium text-[var(--ml-ink-whisper)]">
              Ablehnen
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              aria-label="Annehmen"
              tabIndex={-1}
              className="ml-scene-phone-accept"
            >
              <Phone size={20} strokeWidth={2.2} />
            </button>
            <span className="text-[10.5px] font-semibold text-[var(--ml-ink)]">
              AI antwortet
            </span>
          </div>
        </div>
      </div>

      {/* Email Notification — dezent, floating */}
      <div className="ml-scene-email-card">
        <div className="flex items-center justify-between">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
            Posteingang · info@
          </div>
          <div className="font-mono text-[10px] text-[var(--ml-ink-whisper)]">
            14:21
          </div>
        </div>
        <div className="mt-2 flex items-start gap-2.5">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ml-bg-soft)] text-[var(--ml-ink-soft)]">
            <Mail size={14} strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[12.5px] font-semibold text-[var(--ml-ink)]">
              j.mueller@gmx.de
            </div>
            <div className="truncate text-[11.5px] text-[var(--ml-ink-soft)]">
              Nebenkostenabrechnung 2025 — Rückfrage
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] font-semibold text-[var(--ml-cta-hover)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ml-cta)]" />
          AI antwortet automatisch · 3 Sek.
        </div>
      </div>
    </div>
  );
}
