"use client";

import { useState } from "react";
import {
  Check,
  Phone,
  Languages,
  Star,
  ArrowRight,
  MessageCircle,
  Headphones,
  Wrench,
  UserCheck,
} from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow } from "@/components/ui/eyebrow";

const CALENDLY = "https://calendly.com/robin-himmrich/30min";

type Billing = "monthly" | "yearly";

type Tier = {
  key: "starter" | "pro" | "growth" | "enterprise";
  name: string;
  units: string;
  monthly: number | null;
  setup: number | null;
  priceLabel?: string;
  setupLabel?: string;
  whatsapp?: number;
  tagline: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  inheritedFromLabel?: string;
  baseFeatures: string[];
  newFeatures: string[];
};

// Standard-Features in jedem Plan — bewusst gleich gehalten,
// damit der Kunde sieht: das Wichtige bekommt jeder.
const STANDARD_FEATURES = [
  "KI-Telefonannahme 24/7",
  "KI-E-Mail-Verarbeitung",
  "Unbegrenzte Anrufminuten",
  "Auf Ihre Verwaltung trainiert (Wissensdatenbank)",
  "Automatische Klassifizierung & Dringlichkeit",
  "Individuelle Eskalationslogik & Weiterleitung",
  "Ticket-Erstellung mit Zusammenfassung",
  "Web-Dashboard mit KPIs",
  "Garantierte Support-Antwort innerhalb 24 Std.",
  "2 Std. Support pro Monat inklusive",
  "Direkter Ansprechpartner — keine Hotline",
];

const TIERS: Tier[] = [
  {
    key: "starter",
    name: "Starter",
    units: "bis 500 Wohneinheiten",
    monthly: 399,
    setup: 399,
    whatsapp: 59,
    tagline: "Sofortige Entlastung – rund um die Uhr.",
    cta: "Pilot starten",
    ctaHref: CALENDLY,
    baseFeatures: [...STANDARD_FEATURES, "1 Dashboard-Zugang"],
    newFeatures: [],
  },
  {
    key: "pro",
    name: "Professional",
    units: "bis 1.000 Wohneinheiten",
    monthly: 599,
    setup: 599,
    whatsapp: 79,
    tagline: "Anfragen landen automatisch bei der richtigen Person.",
    cta: "Pilot starten",
    ctaHref: CALENDLY,
    featured: true,
    baseFeatures: STANDARD_FEATURES,
    newFeatures: ["Mehrere Nutzer & Rollen"],
  },
  {
    key: "growth",
    name: "Wachstum",
    units: "bis 2.000 Wohneinheiten",
    monthly: 899,
    setup: 899,
    whatsapp: 99,
    tagline: "Für wachsende Verwaltungen mit mehreren Objekten.",
    cta: "Pilot starten",
    ctaHref: CALENDLY,
    baseFeatures: [...STANDARD_FEATURES, "Mehrere Nutzer & Rollen"],
    newFeatures: ["Quartalsweises Optimierungsgespräch"],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    units: "ab 2.000 Wohneinheiten",
    monthly: null,
    setup: null,
    priceLabel: "Auf Anfrage",
    setupLabel: "Individuelles Angebot",
    tagline: "Maßgeschneidert für große Strukturen und Konzernverwaltungen.",
    cta: "Kontakt aufnehmen",
    ctaHref: CALENDLY,
    baseFeatures: [
      ...STANDARD_FEATURES,
      "Mehrere Nutzer & Rollen",
      "Quartalsweises Optimierungsgespräch",
    ],
    newFeatures: [],
  },
];

export function PricingPage() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <>
      <PilotBanner />
      <Header billing={billing} setBilling={setBilling} />
      <PricingGrid billing={billing} />
      <RoiStrip />
      <PilotHow />
      <ServicePromise />
      <AddOns />
      <TrustBar />
    </>
  );
}

/* ─────────────────────────────────────────── 1. Pilot-Banner */

function PilotBanner() {
  return (
    <section className="relative bg-[var(--ml-compliance-navy)] pt-28 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 70% at 90% 0%, rgba(236,100,38,0.22) 0%, transparent 55%)",
        }}
      />
      <div className="ml-container relative">
        <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ml-cta)]" />
              30-Tage Live-Pilot
            </span>

            <h2 className="mt-4 text-[26px] font-black leading-[1.1] tracking-[-0.025em] text-white md:text-[32px]">
              Wir tragen das Risiko —{" "}
              <span className="ml-highlight-amber">nicht Sie.</span>
            </h2>

            <ul className="mt-5 flex flex-col gap-1.5 text-[14px] text-white/75 md:flex-row md:gap-0">
              {[
                "Einrichtung inklusive",
                "Echte Mieteranfragen",
                "Erst bei Zufriedenheit zahlen",
              ].map((txt, i) => (
                <li key={txt} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span className="hidden h-1 w-1 rounded-full bg-white/30 md:mx-3 md:inline-block" />
                  ) : null}
                  <Check
                    size={14}
                    strokeWidth={2.6}
                    className="flex-shrink-0 text-[var(--ml-cta)] md:hidden"
                  />
                  <span className="font-medium">{txt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0">
            <CtaButton href={CALENDLY} variant="primary" className="h-12">
              Pilot starten
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── 2. Header + Toggle */

function Header({
  billing,
  setBilling,
}: {
  billing: Billing;
  setBilling: (b: Billing) => void;
}) {
  return (
    <section className="relative pt-16 md:pt-24">
      <div className="ml-container">
        <div className="mx-auto max-w-[780px] text-center">
          <Eyebrow>Preise</Eyebrow>
          <h1 className="ml-h1 mt-5">
            Transparente Preise ·{" "}
            <span className="ml-highlight">Keine versteckten Kosten</span>
          </h1>
          <p className="ml-body mx-auto mt-6 max-w-[62ch] text-[16px]">
            Jeder Plan beinhaltet KI-Telefonannahme, E-Mail-Verarbeitung und
            eine auf Ihre Verwaltung trainierte Wissensdatenbank — ab Tag 1.
          </p>

          <div className="mt-10 flex justify-center">
            <BillingToggle billing={billing} setBilling={setBilling} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BillingToggle({
  billing,
  setBilling,
}: {
  billing: Billing;
  setBilling: (b: Billing) => void;
}) {
  return (
    <div
      className="relative inline-flex items-center rounded-full border border-[var(--ml-line)] bg-white p-1"
      role="tablist"
      aria-label="Abrechnungsintervall"
    >
      <ToggleBtn
        active={billing === "monthly"}
        onClick={() => setBilling("monthly")}
      >
        Monatlich
      </ToggleBtn>
      <ToggleBtn
        active={billing === "yearly"}
        onClick={() => setBilling("yearly")}
      >
        <span className="flex items-center gap-2">
          Jährlich
          <span
            className={
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors " +
              (billing === "yearly"
                ? "bg-white/20 text-white"
                : "bg-[var(--ml-cta-soft)] text-[var(--ml-cta)]")
            }
          >
            1 Monat gratis
          </span>
        </span>
      </ToggleBtn>
    </div>
  );
}

function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={
        "rounded-full px-5 py-2 text-[13.5px] font-semibold transition-colors " +
        (active
          ? "bg-[var(--ml-ink)] text-white"
          : "text-[var(--ml-ink-soft)] hover:text-[var(--ml-ink)]")
      }
    >
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────── 3. Pricing Cards */

function PricingGrid({ billing }: { billing: Billing }) {
  return (
    <section className="ml-section pt-12 md:pt-16">
      <div className="ml-container">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {TIERS.map((tier) => (
            <PricingCard key={tier.key} tier={tier} billing={billing} />
          ))}
        </div>

        <p className="ml-whisper mx-auto mt-10 max-w-[60ch] text-center">
          Alle Preise netto zzgl. USt. Monatlich kündbar. 30 Tage
          Geld-zurück-Garantie.
        </p>
      </div>
    </section>
  );
}

function formatPrice(n: number) {
  return n.toLocaleString("de-DE");
}

function PricingCard({ tier, billing }: { tier: Tier; billing: Billing }) {
  const displayPrice =
    tier.monthly === null
      ? tier.priceLabel
      : billing === "yearly"
        ? `${formatPrice(Math.floor((tier.monthly * 11) / 12 / 10) * 10)} €`
        : `${formatPrice(tier.monthly)} €`;

  const setupLine = (() => {
    if (tier.setup === null) return tier.setupLabel ?? "";
    const base = `Einrichtung ${formatPrice(tier.setup)} € · erst nach erfolgreichem Pilot`;
    return billing === "yearly" ? `${base} · 12. Monat gratis` : base;
  })();

  return (
    <div
      className={
        "ml-reveal relative flex flex-col rounded border bg-white p-7 md:p-8 " +
        (tier.featured
          ? "border-[var(--ml-cta)] shadow-[0_20px_48px_-20px_rgba(236,100,38,0.32)] xl:-mt-4"
          : "border-[var(--ml-line)] shadow-[var(--ml-shadow-soft)]")
      }
    >
      {tier.featured ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ml-cta)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_14px_rgba(236,100,38,0.35)]">
            <Star size={12} strokeWidth={2.4} fill="currentColor" />
            Empfohlen
          </span>
        </div>
      ) : null}

      <div>
        <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink-whisper)]">
          {tier.name}
        </div>

        <div className="mt-3">
          <span className="inline-flex items-center rounded-full bg-[var(--ml-bg-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--ml-ink-soft)]">
            {tier.units}
          </span>
        </div>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-[32px] font-black leading-none tracking-[-0.03em] text-[var(--ml-ink)]">
            {displayPrice}
          </span>
          {tier.monthly !== null ? (
            <span className="text-[13px] font-medium text-[var(--ml-ink-soft)]">
              / Monat
            </span>
          ) : null}
        </div>
        <div className="ml-whisper mt-1.5">{setupLine}</div>

        <p className="ml-body mt-5 text-[14px]">{tier.tagline}</p>
      </div>

      <div className="mt-6">
        <CtaButton
          href={tier.ctaHref}
          variant={tier.featured ? "primary" : "secondary"}
          className="h-11 w-full"
        >
          {tier.cta}
        </CtaButton>
      </div>

      <div className="mt-7 border-t border-[var(--ml-line)] pt-6">
        {tier.inheritedFromLabel ? (
          <div className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--ml-ink-soft)]">
            <ArrowRight
              size={13}
              strokeWidth={2.4}
              className="text-[var(--ml-ink-whisper)]"
            />
            {tier.inheritedFromLabel}
          </div>
        ) : null}

        <ul className="flex flex-col gap-2.5">
          {tier.baseFeatures.map((f) => (
            <FeatureLine key={f} label={f} />
          ))}
          {tier.newFeatures.map((f) => (
            <FeatureLine key={f} label={f} isNew />
          ))}
        </ul>

        {tier.whatsapp ? (
          <div className="mt-5 flex items-center gap-2.5 rounded border border-dashed border-[var(--ml-line)] bg-[var(--ml-bg-soft)] px-3 py-2.5 text-[12.5px] text-[var(--ml-ink-soft)]">
            <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1B7A3F]">
              <MessageCircle size={12} strokeWidth={2.4} />
            </span>
            <span>
              Optional:{" "}
              <span className="font-semibold text-[var(--ml-ink)]">
                WhatsApp-Kanal
              </span>{" "}
              + {formatPrice(tier.whatsapp)} € / Monat
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FeatureLine({ label, isNew }: { label: string; isNew?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-[var(--ml-ink)]">
      <span
        className={
          "mt-[2px] inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full " +
          (isNew
            ? "bg-[var(--ml-cta-soft)] text-[var(--ml-cta)]"
            : "bg-[rgba(15,118,110,0.1)] text-[var(--ml-success)]")
        }
      >
        <Check size={11} strokeWidth={3} />
      </span>
      <span className="flex-1">
        <span className="font-medium">{label}</span>
        {isNew ? (
          <span className="ml-2 inline-flex items-center rounded-full bg-[var(--ml-cta-soft)] px-1.5 py-[1px] text-[9.5px] font-bold uppercase tracking-[0.08em] text-[var(--ml-cta)] align-[1px]">
            Neu
          </span>
        ) : null}
      </span>
    </li>
  );
}

/* ─────────────────────────────────────────── 4. ROI-Leiste */

function RoiStrip() {
  const stats = [
    { value: "70–80 %", label: "Anfragen automatisch bearbeitet" },
    { value: "24/7", label: "Erreichbarkeit ohne Ausnahme" },
    { value: "3.500 €", label: "Ø Mitarbeiterkosten/Monat" },
  ];
  return (
    <section className="bg-[var(--ml-bg-soft)]">
      <div className="ml-container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          <div className="grid grid-cols-3 divide-x divide-[var(--ml-line)]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-2 text-center first:pl-0 last:pr-0 md:px-8"
              >
                <div className="whitespace-nowrap text-[20px] font-black leading-none tracking-[-0.025em] text-[var(--ml-ink)] sm:text-[26px] md:text-[32px]">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-medium leading-[1.35] text-[var(--ml-ink-soft)] sm:text-[12px] md:text-[13px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="ml-body max-w-[56ch] text-[15px] lg:border-l lg:border-[var(--ml-line)] lg:pl-10">
            Eine Teilzeitkraft nur für Mieteranfragen kostet ab{" "}
            <span className="font-semibold text-[var(--ml-ink)]">
              1.800 €/Monat
            </span>{" "}
            — und ist maximal 8 Stunden erreichbar. Mieterlotse übernimmt das{" "}
            <span className="font-semibold text-[var(--ml-ink)]">
              ab 399 €
            </span>
            , rund um die Uhr, ohne Krankheit oder Urlaub.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── 5. Pilot „So funktioniert es" */

const STEPS = [
  {
    title: "Einrichtung (Woche 1–2)",
    body: "Wir richten alles ein: Wissensdatenbank, Telefonnummer, E-Mail-Anbindung, Dashboard. Auf unsere Kosten.",
    tag: "0 € für Sie",
  },
  {
    title: "Live-Betrieb (Woche 3–4)",
    body: "Ihre echten Mieter rufen an und schreiben E-Mails. Das System arbeitet — Sie beobachten.",
    tag: "Echte Daten, kein Demo",
  },
  {
    title: "Auswertung & Entscheidung",
    body: "Sie sehen schwarz auf weiß: wie viele Anfragen automatisch erledigt wurden, wie viel Zeit Ihr Team gewonnen hat. Dann entscheiden Sie.",
    tag: "Erst dann zahlen Sie",
  },
];

function PilotHow() {
  return (
    <section className="ml-section">
      <div className="ml-container">
        <div className="ml-reveal mx-auto mb-14 max-w-[720px] text-center">
          <Eyebrow>Live-Pilot</Eyebrow>
          <h2 className="ml-h2 mt-4">
            30 Tage live —{" "}
            <span className="ml-highlight">ohne Risiko für Sie.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="ml-reveal relative flex flex-col rounded border border-[var(--ml-line)] bg-white p-7 shadow-[var(--ml-shadow-soft)] md:p-8"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ml-ink)] font-mono text-[14px] font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-[17px] font-bold leading-[1.25] tracking-[-0.01em] text-[var(--ml-ink)]">
                {s.title}
              </h3>
              <p className="ml-body mt-3 text-[14px]">{s.body}</p>
              <div className="mt-5 pt-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--ml-cta-soft)] px-3 py-1.5 text-[12px] font-semibold text-[var(--ml-cta)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ml-cta)]" />
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton href={CALENDLY} variant="primary">
            Pilot starten
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── 5b. Service-Versprechen */

const PROMISES = [
  {
    icon: UserCheck,
    title: "Direkter Ansprechpartner",
    body: "Sie haben einen festen Kontakt bei uns — keine anonyme Hotline, kein Ticket-System. Anruf, Mail oder WhatsApp.",
  },
  {
    icon: Wrench,
    title: "Wir übernehmen die Einrichtung",
    body: "Wissensbasis, Rufnummer, E-Mail-Anbindung, Eskalationsregeln, Dashboard — komplett von uns aufgesetzt. Sie machen nichts.",
  },
  {
    icon: Headphones,
    title: "24-Std.-Antwortgarantie",
    body: "Jede Support-Anfrage wird innerhalb von 24 Stunden beantwortet — werktags wie am Wochenende. Schriftlich nachweisbar.",
  },
  {
    icon: Check,
    title: "2 Stunden Support pro Monat",
    body: "Anpassungen und Optimierungen — fest in jedem Plan inklusive. Ohne Aufpreis, ohne Stundennachweis.",
  },
];

function ServicePromise() {
  return (
    <section className="ml-section bg-[var(--ml-bg-soft)] pt-0">
      <div className="ml-container">
        <div className="ml-reveal mx-auto mb-12 max-w-[760px] text-center">
          <Eyebrow>Unser Service-Versprechen</Eyebrow>
          <h2 className="ml-h2 mt-4">
            Persönlich.{" "}
            <span className="ml-highlight">Verlässlich.</span> Inklusive.
          </h2>
          <p className="ml-body mx-auto mt-5 max-w-[58ch] text-[15.5px]">
            Bei uns bekommen Sie keine SaaS-Black-Box. Wir richten alles für
            Sie ein, geben Ihnen einen festen Ansprechpartner und garantieren
            Ihnen schriftlich, wann Sie eine Antwort haben.
          </p>
        </div>

        <div className="ml-reveal mx-auto grid max-w-[1000px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col rounded border border-[var(--ml-line)] bg-white p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ml-cta-soft)] text-[var(--ml-cta)]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-[15px] font-bold tracking-[-0.005em] text-[var(--ml-ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--ml-ink-soft)]">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── 6. Add-Ons */

const ADDONS = [
  {
    icon: Phone,
    title: "Zusätzliche Rufnummer",
    price: "+ 49 €",
    suffix: "/ Monat",
    body: "Pro weiterer Ortsnummer.",
  },
  {
    icon: Languages,
    title: "Mehrsprachigkeit (Voice-Agent)",
    price: "+ 79 €",
    suffix: "/ Monat",
    body: "Türkisch, Englisch u. a.",
  },
  {
    icon: Star,
    title: "Google-Bewertungs-Automation",
    price: "+ 39 €",
    suffix: "/ Monat",
    body: "Automatisches Follow-up nach Anfragen.",
  },
];

function AddOns() {
  return (
    <section className="ml-section bg-[var(--ml-bg-soft)]">
      <div className="ml-container">
        <div className="ml-reveal mx-auto mb-10 max-w-[720px] text-center">
          <Eyebrow>Add-Ons</Eyebrow>
          <h2 className="ml-h2 mt-4">Flexibel erweiterbar.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ADDONS.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="ml-reveal flex flex-col rounded border border-[var(--ml-line)] bg-white p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ml-cta-soft)] text-[var(--ml-cta)]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="mt-5 text-[15px] font-semibold leading-[1.3] text-[var(--ml-ink)]">
                  {a.title}
                </div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-[20px] font-black tracking-[-0.02em] text-[var(--ml-ink)]">
                    {a.price}
                  </span>
                  {a.suffix ? (
                    <span className="text-[12.5px] font-medium text-[var(--ml-ink-soft)]">
                      {a.suffix}
                    </span>
                  ) : null}
                </div>
                <p className="ml-whisper mt-2">{a.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── 7. Trust-Bar */

const TRUST_ITEMS = [
  "DSGVO-konform",
  "EU-Server",
  "Einrichtung in unter 2 Wochen",
  "Persönliches Onboarding",
  "Keine Mindestlaufzeit im Pilot",
  "Unbegrenzte Anrufminuten inklusive",
];

function TrustBar() {
  return (
    <section className="border-t border-[var(--ml-line)] bg-white">
      <div className="ml-container py-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-center">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--ml-ink-soft)]"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--ml-cta)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
