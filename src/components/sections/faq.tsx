"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

type Qa = { q: string; a: string };

const QA: Qa[] = [
  {
    q: "Ersetzt Mieterlotse unsere Verwaltungssoftware?",
    a: "Nein. Mieterlotse ersetzt kein ERP, keine Buchhaltung, kein CRM. Wir nehmen die Mieterkontakte ab — Telefon und E-Mail — und dokumentieren jeden Vorgang im Dashboard. Ihre bestehende Software behalten Sie.",
  },
  {
    q: "Wie lange dauert die Einrichtung bei uns?",
    a: "Ab Tag eins läuft Mieterlotse auf Ihrer bestehenden Telefonnummer und E-Mail-Adresse — Sie selbst müssen dafür nichts tun. Im Hintergrund kalibrieren wir in zwei Sessions (Discovery 90 Min. + Feintuning 60 Min.) die Eskalationsregeln und die Tonalität auf Ihre Verwaltung. Für Sie bleibt es Plug and Play.",
  },
  {
    q: "Was passiert, wenn die KI eine Anfrage nicht versteht?",
    a: "Sie definieren die Eskalationsregeln. Unverständliche oder unklare Anfragen werden standardmäßig innerhalb von Sekunden an Ihr Team weitergeleitet — mit Kontext, Zeitstempel und Kategorie. Keine stille Warteschleife.",
  },
  {
    q: "Wie ist die DSGVO-Lage konkret geregelt?",
    a: "EU-Server, keine Datenweitergabe an Drittländer, AVV nach Art. 28 DSGVO standardmäßig inkludiert. TOMs nach Art. 32 sind dokumentiert und auf Anfrage einsehbar. Mieterdaten werden nicht für Modelltraining verwendet.",
  },
  {
    q: "Ab wann rechnet sich das?",
    a: "Die Preise richten sich nach der Größe Ihrer Verwaltung — gestaffelt nach verwalteten Wohneinheiten (Details auf der Preise-Seite). Jede Staffelung ist so kalkuliert, dass sich Mieterlotse ab dem ersten Monat für Sie rechnet: die monatliche Investition liegt deutlich unter den Personalkosten, die Sie für dieselbe Erreichbarkeit aufwenden müssten. Sollten wir im Erstgespräch feststellen, dass sich das für Sie nicht trägt, sagen wir Ihnen das offen.",
  },
  {
    q: "Was kostet das — und warum steht der Preis nicht prominent oben?",
    a: "Weil der Preis von Ihrer Einheitenzahl und Ihrem Volumen abhängt. Richtwerte: ab ca. 890 €/Monat bei bis zu 300 Einheiten, ca. 1.490 €/Monat bei 300–600, ca. 2.190 €/Monat bei 600–1.000 Einheiten. Finale Kalkulation im Discovery-Gespräch.",
  },
  {
    q: "Was passiert, wenn wir wieder aussteigen wollen?",
    a: "Sie bekommen die volle Datenhistorie als Export (PDF, CSV, Audio). Die Rufumleitung und Mail-Weiterleitung werden rückgebaut. Keine Vendor-Lock-in-Klausel — der Hebel liegt bei Ihnen, nicht bei uns.",
  },
  {
    q: "Wie klingt die KI am Telefon — technisch oder menschlich?",
    a: "Wir kalibrieren die Tonalität in der Feintuning-Session. Sie hören sich die Antworten vorher an und geben frei. Unser Maßstab ist: professionell wie eine gute Sachbearbeitung — keine Ansageschleife, keine Robo-Stimme.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="ml-section bg-[var(--ml-bg-soft)]">
      <div className="ml-container">
        <div className="ml-reveal mx-auto max-w-[760px] text-center">
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h2 className="ml-h2 mt-4">
            Was Geschäftsführer uns{" "}
            <span className="ml-highlight">vor dem Gespräch</span> fragen.
          </h2>
        </div>

        <div className="ml-reveal mx-auto mt-12 max-w-[820px] rounded border border-[var(--ml-line)] bg-white px-7 md:px-10">
          {QA.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className="ml-faq-item"
                data-open={open ? "true" : "false"}
              >
                <button
                  className="ml-faq-trigger"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} strokeWidth={2} className="ml-faq-chev" />
                </button>
                <div className="ml-faq-body">
                  <div className="ml-faq-body-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
