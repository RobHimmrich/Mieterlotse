"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/ui/cta-button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";

const LINKS = [
  { label: "So funktioniert's", href: "/#how" },
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-[var(--ml-line)]"
          : "bg-transparent",
      )}
    >
      <div className="ml-container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Mieterlotse — Startseite">
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

        <div className="flex items-center gap-3">
          <CtaButton
            href="https://calendly.com/robin-himmrich/30min"
            variant="primary"
            className="h-10 px-5 text-[14px]"
          >
            Erstgespräch buchen
          </CtaButton>
        </div>
      </div>
    </header>
  );
}

