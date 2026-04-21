import { Mail, ArrowRight } from "lucide-react";

const DEMO_EMAIL = "robin.himmrich7@gmail.com";

const SUBJECT = "Warmwasser-Ausfall Lindenstr. 4, Wohnung 3B";

const BODY = `Guten Tag,

ich bin Mieterin in Ihrer Wohnanlage Lindenstraße 4 (Wohnung 3B). Seit heute Nacht habe ich kein Warmwasser mehr in der ganzen Wohnung.

Ich habe zwei kleine Kinder und komme morgens kaum noch klar. Ist das ein Notfall oder kann ich bis Montag warten? Was soll ich jetzt konkret tun?

Viele Grüße
Laura Schmidt
Lindenstr. 4, Wohnung 3B`;

export function EmailTestInline() {
  const mailtoHref = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(
    SUBJECT,
  )}&body=${encodeURIComponent(BODY)}`;

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="ml-test-divider" aria-hidden>
        <span className="ml-test-divider-line" />
        <span className="ml-test-divider-text">oder per E-Mail testen</span>
        <span className="ml-test-divider-line" />
      </div>

      <a
        href={mailtoHref}
        className="ml-test-btn ml-test-btn-secondary mt-4"
        aria-label="Testmail an Mieterlotse-AI senden"
      >
        <span className="ml-test-btn-icon ml-test-btn-icon-soft">
          <Mail size={15} strokeWidth={2.4} />
        </span>
        <span className="ml-test-btn-label">Testmail senden</span>
        <ArrowRight size={14} strokeWidth={2.4} className="ml-test-btn-arrow" />
      </a>
    </div>
  );
}
