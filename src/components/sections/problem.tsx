import { Inbox, UserMinus, PhoneIncoming } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

type Pain = {
  icon: typeof Inbox;
  title: string;
  body: string;
};

const PAINS: Pain[] = [
  {
    icon: Inbox,
    title: "50+ Mails, jeden Tag.",
    body: "Nebenkosten­rückfragen. Mietbescheinigungen. Reparaturmeldungen. Ihr Team liest, antwortet, vergisst. Die eigentliche Arbeit bleibt liegen.",
  },
  {
    icon: UserMinus,
    title: "Die Stelle bleibt unbesetzt.",
    body: "Seit Monaten. Und selbst wenn Sie jemanden finden — die Einarbeitung dauert 6 Monate. So lange hält Ihr bestehendes Team nicht mehr durch.",
  },
  {
    icon: PhoneIncoming,
    title: "Der Nachtanruf um 22 Uhr.",
    body: "Mieter ruft den Bereitschafts­dienst an. Es ist kein Notfall. Sie schlafen trotzdem schlecht — auch weil Sie wissen, dass Ihr Team das morgen früh ausbadet.",
  },
];

export function Problem() {
  return (
    <section className="ml-section bg-[var(--ml-bg-soft)]">
      <div className="ml-container">
        <div className="ml-reveal mx-auto max-w-[720px] text-center">
          <Eyebrow>Die Wahrheit im Mittelstand</Eyebrow>
          <h2 className="ml-h2 mt-4">
            Das Telefon klingelt. Die Mailbox ist voll.
            <br />
            <span className="ml-highlight">Niemand findet Personal.</span>
          </h2>
          <p className="ml-body mt-5 text-[16.5px]">
            Drei Realitäten, die jeder Geschäftsführer einer Hausverwaltung mit
            200–2.000 Einheiten in den letzten 18 Monaten erlebt hat.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {PAINS.map((pain) => {
            const Icon = pain.icon;
            return (
              <article
                key={pain.title}
                className="ml-reveal group relative flex flex-col rounded border border-[var(--ml-line)] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_10px_32px_-16px_rgba(15,23,42,0.15)]"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-7 h-[calc(100%-56px)] w-[3px] rounded-r-full bg-[var(--ml-accent)] opacity-80"
                />
                <Icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-[var(--ml-ink)]"
                />
                <h3 className="mt-5 text-[19px] font-extrabold tracking-tight text-[var(--ml-ink)]">
                  {pain.title}
                </h3>
                <p className="ml-body mt-3 text-[14.5px]">{pain.body}</p>
              </article>
            );
          })}
        </div>

        <div className="ml-reveal mx-auto mt-14 max-w-[620px] text-center">
          <p className="text-[15.5px] text-[var(--ml-ink-soft)]">
            Mieterlotse ist die Antwort, die auf Ihrer bestehenden Telefonnummer
            und Ihrer bestehenden E-Mail-Adresse läuft.
          </p>
          <a
            href="#how"
            className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--ml-cta)] transition-colors hover:text-[var(--ml-cta-hover)]"
          >
            So läuft Mieterlotse bei Ihnen ↓
          </a>
        </div>
      </div>
    </section>
  );
}
