"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { Logo } from "@/components/ui/logo";

const LINKS = [
  { label: "So funktioniert's", href: "/#how" },
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--ml-line)] bg-white/95 backdrop-blur">

      <div className="ml-container flex h-16 items-center justify-between gap-3">
        <a
          href="/"
          className="flex flex-shrink-0 items-center"
          aria-label="Mieterlotse — Startseite"
        >
          <Logo size={22} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-[var(--ml-ink-soft)] transition-colors hover:text-[var(--ml-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3">
          <CtaButton
            href="https://calendly.com/robin-himmrich/30min"
            variant="primary"
            className="h-9 px-3.5 text-[13px] sm:h-10 sm:px-5 sm:text-[14px]"
          >
            <span className="sm:hidden">Termin</span>
            <span className="hidden sm:inline">Erstgespräch buchen</span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
}

