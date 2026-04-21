"use client";

import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "ml-cookie-consent";

type Consent = "accepted" | "rejected";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const choose = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* no-op */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
    >
      <div className="relative mx-auto flex max-w-[960px] flex-col gap-4 rounded border border-[var(--ml-line)] bg-white p-5 pr-10 shadow-[0_20px_48px_-12px_rgba(15,23,42,0.25)] md:flex-row md:items-center md:gap-6 md:p-6 md:pr-6">
        <div className="flex items-start gap-3 md:flex-1">
          <div className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ml-cta-soft)] text-[var(--ml-cta)]">
            <Cookie size={18} strokeWidth={2} />
          </div>
          <div>
            <div className="text-[14px] font-bold tracking-[-0.005em] text-[var(--ml-ink)]">
              Cookies auf mieterlotse.de
            </div>
            <p className="mt-1 text-[13px] leading-[1.55] text-[var(--ml-ink-soft)]">
              Wir verwenden ausschließlich technisch notwendige Cookies für den
              sicheren Betrieb dieser Website. Kein Tracking, keine Werbung,
              keine Weitergabe.{" "}
              <a
                href="/datenschutz"
                className="font-medium text-[var(--ml-cta)] underline-offset-4 hover:underline"
              >
                Mehr in der Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row md:flex-shrink-0">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="ml-btn ml-btn-secondary h-10 px-4 text-[13.5px]"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="ml-btn ml-btn-primary h-10 px-5 text-[13.5px]"
          >
            Alle akzeptieren
          </button>
        </div>

        <button
          type="button"
          onClick={() => choose("rejected")}
          aria-label="Banner schließen"
          className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-[var(--ml-ink-whisper)] transition-colors hover:bg-[var(--ml-bg-soft)] hover:text-[var(--ml-ink)] md:hidden"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
