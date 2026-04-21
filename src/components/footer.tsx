import { Logo } from "@/components/ui/logo";

const LINKS_LEGAL = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const LINKS_NAV = [
  { label: "So funktioniert's", href: "/#how" },
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--ml-line)] bg-white">
      <div className="ml-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16">
          <div>
            <Logo size={24} />
            <p className="ml-body mt-4 max-w-[40ch] text-[13.5px]">
              Betriebssteuerung für Hausverwaltungen. Ihre bestehende Nummer,
              Ihre bestehende E-Mail — entlastet, dokumentiert, DSGVO-konform.
            </p>
          </div>

          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
              Produkt
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {LINKS_NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13.5px] text-[var(--ml-ink-soft)] transition-colors hover:text-[var(--ml-ink)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
              Rechtliches
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {LINKS_LEGAL.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13.5px] text-[var(--ml-ink-soft)] transition-colors hover:text-[var(--ml-ink)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--ml-line)] pt-6 md:flex-row md:items-center">
          <span className="ml-whisper">
            © {new Date().getFullYear()} Mieterlotse. Alle Rechte vorbehalten.
          </span>
          <span className="ml-whisper font-mono">
            Made in Germany · EU-Hosting · DSGVO-konform
          </span>
        </div>
      </div>
    </footer>
  );
}
