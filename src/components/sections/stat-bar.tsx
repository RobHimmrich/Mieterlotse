type Item =
  | { strong: string; text: string }
  | { text: string };

const ITEMS: Item[] = [
  { strong: "16+ Std./Woche", text: "gespart" },
  { strong: "70 %", text: "Anfragen automatisch" },
  { strong: "<20 Sek.", text: "Reaktionszeit" },
  { strong: "100 %", text: "Vorgänge dokumentiert" },
  { text: "DSGVO-konform" },
  { text: "EU-Server" },
  { text: "AVV Art. 28 inkl." },
  { text: "Plug and Play" },
  { text: "Keine neue Software" },
  { strong: "20.916 €/Jahr", text: "Netto-Einsparung" },
];

function renderCycle(keyPrefix: string) {
  return ITEMS.map((item, i) => (
    <span key={`${keyPrefix}-${i}`} className="inline-flex items-center">
      <span className="ml-marquee-item">
        {"strong" in item ? (
          <>
            <strong>{item.strong}</strong>
            {item.text}
          </>
        ) : (
          item.text
        )}
      </span>
      <span className="ml-marquee-dot" aria-hidden />
    </span>
  ));
}

export function StatBar() {
  return (
    <div className="ml-marquee">
      <div className="ml-marquee-track">
        {renderCycle("a")}
        {renderCycle("b")}
      </div>
    </div>
  );
}
