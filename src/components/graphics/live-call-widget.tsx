import { Phone } from "lucide-react";

const DEMO_NUMBER_DISPLAY = "+49 7661 9759001";
const DEMO_NUMBER_HREF = "tel:+4976619759001";

export function LiveCallWidget() {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <h3 className="ml-h3 text-center text-[24px] leading-tight">
        Jetzt kostenlos den KI-Agenten testen
      </h3>

      <a href={DEMO_NUMBER_HREF} className="ml-test-btn ml-test-btn-primary mt-6">
        <span className="ml-test-btn-phone">
          <Phone size={18} strokeWidth={2.2} fill="currentColor" />
        </span>
        <span className="ml-test-btn-number">{DEMO_NUMBER_DISPLAY}</span>
      </a>

      <div className="ml-call-hint" aria-hidden>
        <svg
          className="ml-call-hint-arrow"
          viewBox="0 0 50 36"
          fill="none"
        >
          <path
            d="M 46 30 C 36 26, 20 20, 8 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 2 12 L 8 4 L 16 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="ml-call-hint-text">Ruf mich an</span>
      </div>
    </div>
  );
}
