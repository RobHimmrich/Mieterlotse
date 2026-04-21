# Mieterlotse — Website (Entwurf v1)

Standalone Next.js-Projekt mit dem ersten Entwurf des Landing-Page-Redesigns
aus `../04_landing-redesign.md`.

## Stack

- Next.js 16 (App Router) · React 19
- Tailwind CSS v4 (CSS-first, kein separater Config-File)
- TypeScript · lucide-react · clsx + tailwind-merge

## Lokal starten

```bash
cd 00_mieterlotse/website
pnpm install            # oder: npm install
pnpm dev                # Dev-Server auf http://localhost:3100
```

Alternativ build & start:

```bash
pnpm build
pnpm start
```

## Struktur

```
website/
├── app/
│   ├── layout.tsx          # Root-Layout, Font-Loading, Nav + Footer
│   ├── page.tsx            # Assembliert alle Sektionen
│   └── globals.css         # Tailwind + Design-Tokens + Typo + Animationen
├── src/
│   ├── components/
│   │   ├── nav.tsx
│   │   ├── footer.tsx
│   │   ├── ui/
│   │   │   ├── cta-button.tsx
│   │   │   ├── divider.tsx
│   │   │   ├── eyebrow.tsx
│   │   │   └── scroll-reveal.tsx
│   │   ├── graphics/
│   │   │   ├── dashboard-mockup.tsx      # reiner CSS/HTML-Mock, kein Bild
│   │   │   ├── flow-escalation.tsx       # SVG-Flowchart Section 4
│   │   │   └── flow-integration.tsx      # SVG-Sankey Section 6
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── stat-bar.tsx
│   │       ├── problem.tsx
│   │       ├── how-it-works.tsx
│   │       ├── dashboard-showcase.tsx
│   │       ├── integration.tsx
│   │       ├── roi-calculator.tsx
│   │       ├── compliance.tsx
│   │       ├── founder-testimonial.tsx
│   │       ├── faq.tsx
│   │       └── final-cta.tsx
│   └── lib/
│       └── cn.ts
```

## Entwurf-Prinzipien (Erinnerung)

- Kein echtes Bild-Asset; alle Mockups sind in HTML/CSS oder Inline-SVG. Das
  ist Absicht — so bleibt der Entwurf versionierbar und schnell iterierbar.
- Founder-Portrait: Initialen-Placeholder. Im nächsten Schritt echtes Foto einsetzen.
- Formular-Submit: aktuell nur Client-State (`console.log`). Kein Backend.
- Kein Tracking, keine Cookies, keine Fonts-Preload außer Inter.

## Was jetzt nicht dabei ist (bewusst)

- i18n (Seite ist 100 % DE)
- Blog / Ressourcen-Hub
- Pricing-Seite (Preis steht nur im ROI-Rechner)
- Backend-Anbindung Formular (fürs Deployment an Supabase/SendGrid/Calendly hängen)
- SEO-Meta jenseits des Basis-`metadata`-Objekts

## Nächste Schritte

Siehe "Offene Fragen" in `../04_landing-redesign.md` Kapitel 19:
- CTA-Farbe final (Navy-Ink vs. Amber) — aktuell Navy-Ink `#0F4C81`
- Testimonial: echten Pilotkunden mit Logo suchen
- Founder-Portrait shooten
