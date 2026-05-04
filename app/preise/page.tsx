import type { Metadata } from "next";
import { PricingPage } from "./pricing-page";

export const metadata: Metadata = {
  title: "Preise — Mieterlotse",
  description:
    "Transparente Preise ab 399 € / Monat. KI-Telefonannahme, E-Mail-Verarbeitung und trainierte Wissensdatenbank für Ihre Hausverwaltung. Einrichtungsgebühr erst nach erfolgreichem 30-Tage-Pilot.",
};

export default function Page() {
  return <PricingPage />;
}
