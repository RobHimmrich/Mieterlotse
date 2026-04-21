import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Höhe des Wordmarks in px. Pfeil-Größe & Abstand skalieren automatisch. */
  size?: number;
  /** Nur das Symbol (Pfeil) ohne Wordmark — für Favicons / Icon-Slots. */
  markOnly?: boolean;
};

/**
 * Mieterlotse-Logo — Kompass-Pfeil als i-Punkt + Wordmark.
 *
 * Basiert auf Logo-Iteration V5 (siehe `brand/logo-iterations/`). Der PNG-Output
 * der Iteration wird nicht produktiv genutzt — das Logo lebt als Code, damit es
 * auf jeder Auflösung pixelperfekt rendert (Nav 22px ↔ Footer 26px ↔ Favicon 16px)
 * und komplett frei von Rendering-Artefakten bleibt.
 */
export function Logo({ className, size = 22, markOnly = false }: LogoProps) {
  if (markOnly) {
    return <LogoMark size={size} className={className} />;
  }

  const fontSize = Math.round(size * 1.05);
  const arrowSize = Math.round(size * 0.82);
  const arrowLift = Math.round(size * 0.18);

  return (
    <span
      className={cn("ml-logo inline-flex items-baseline", className)}
      aria-label="mieterlotse"
    >
      <span
        className="ml-logo-wordmark"
        style={{ fontSize: `${fontSize}px` }}
      >
        m<span className="ml-logo-i">
          {"\u0131"/* ı — dotless i, ersetzt durch den orangenen Pfeil */}
          <LogoMark
            size={arrowSize}
            className="ml-logo-arrow"
            style={{ top: `-${arrowLift}px` }}
          />
        </span>eterlotse
      </span>
    </span>
  );
}

/**
 * Das Icon allein: ein stilisierter Kompass-/Navigationspfeil in CTA-Orange.
 * Wird sowohl als i-Punkt im Logo als auch als Favicon verwendet.
 */
export function LogoMark({
  size = 22,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("ml-logo-mark", className)}
      style={style}
    >
      {/*
        Kompass-/Navigationspfeil — nach oben-rechts geneigt.
        Asymmetrische Form (Nadelspitze + kleiner Gegenflügel) liest sich
        als "Lotse / Richtung gebend", nicht als generisches Dreieck.
      */}
      <path
        d="M20.2 3.8 L5.1 11.1 L11.7 13.4 L14.1 19.9 Z"
        fill="var(--ml-cta)"
      />
    </svg>
  );
}
