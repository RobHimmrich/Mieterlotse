import { Phone, Mail, Monitor, Users } from "lucide-react";

export function FlowIntegration() {
  return (
    <div className="ml-flow">
      {/* STAGE 01 — INPUT */}
      <div className="ml-flow-stage ml-flow-stage-neutral">
        <div className="ml-flow-head">
          <span className="ml-flow-num">01</span>
          <span className="ml-flow-eyebrow">Eingang</span>
        </div>
        <h4 className="ml-flow-title">Ihre bestehenden Kanäle</h4>
        <p className="ml-flow-sub">
          Bleiben exakt wie heute — kein Wechsel, keine neue Nummer.
        </p>

        <div className="ml-flow-channels">
          <div className="ml-flow-channel">
            <span className="ml-flow-channel-icon">
              <Phone size={14} strokeWidth={2.2} />
            </span>
            <div className="min-w-0">
              <div className="ml-flow-channel-label">Ihre Nummer</div>
              <div className="ml-flow-channel-value">+49 30 1234 5678</div>
            </div>
          </div>

          <div className="ml-flow-channel">
            <span className="ml-flow-channel-icon">
              <Mail size={14} strokeWidth={2.2} />
            </span>
            <div className="min-w-0">
              <div className="ml-flow-channel-label">Ihre E-Mail</div>
              <div className="ml-flow-channel-value">info@verwaltung.de</div>
            </div>
          </div>
        </div>

        <div className="ml-flow-footnote">Unverändert übernommen.</div>
      </div>

      <FlowConnector />

      {/* STAGE 02 — AI LAYER */}
      <div className="ml-flow-stage ml-flow-stage-accent">
        <div className="ml-flow-head">
          <span className="ml-flow-num ml-flow-num-dark">02</span>
          <span className="ml-flow-eyebrow ml-flow-eyebrow-dark">KI-Schicht</span>
        </div>
        <h4 className="ml-flow-title ml-flow-title-dark">
          Mieterlotse versteht und reagiert
        </h4>
        <p className="ml-flow-sub ml-flow-sub-dark">
          Analysiert das Anliegen, klassifiziert es, antwortet in Sekunden.
        </p>

        <div className="ml-flow-hero">
          <div className="ml-flow-hero-stat">70 %</div>
          <div className="ml-flow-hero-label">
            automatisch gelöst — ohne dass Ihr Team berührt wird
          </div>
        </div>

        <div className="ml-flow-route">
          <span className="ml-flow-route-pct">30 %</span>
          <span className="ml-flow-route-label">
            sauber vorqualifiziert an Ihr Team weitergegeben
          </span>
        </div>
      </div>

      <FlowConnector />

      {/* STAGE 03 — OUTPUT */}
      <div className="ml-flow-stage ml-flow-stage-neutral">
        <div className="ml-flow-head">
          <span className="ml-flow-num">03</span>
          <span className="ml-flow-eyebrow">Ausgang</span>
        </div>
        <h4 className="ml-flow-title">Überblick für Sie</h4>
        <p className="ml-flow-sub">
          Nur was wirklich Ihre Entscheidung braucht — strukturiert.
        </p>

        <div className="ml-flow-outputs">
          <div className="ml-flow-output">
            <span className="ml-flow-output-icon">
              <Monitor size={14} strokeWidth={2.2} />
            </span>
            <div className="min-w-0">
              <div className="ml-flow-output-label">Live-Dashboard</div>
              <div className="ml-flow-output-sub">
                Kategorien · SLA · Trends
              </div>
            </div>
          </div>

          <div className="ml-flow-output">
            <span className="ml-flow-output-icon">
              <Users size={14} strokeWidth={2.2} />
            </span>
            <div className="min-w-0">
              <div className="ml-flow-output-label">Ihr Team</div>
              <div className="ml-flow-output-sub">
                Nur echte Eskalationen
              </div>
            </div>
          </div>
        </div>

        <div className="ml-flow-footnote">16 Std./Woche zurückgewonnen.</div>
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="ml-flow-connector" aria-hidden>
      {/* Horizontal rail (desktop) */}
      <svg
        className="ml-flow-connector-h"
        viewBox="0 0 80 8"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="4"
          x2="80"
          y2="4"
          stroke="var(--ml-line)"
          strokeWidth="1.2"
        />
        <circle r="2.4" cy="4" fill="var(--ml-cta)" className="ml-flow-pulse">
          <animate
            attributeName="cx"
            from="0"
            to="80"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.8;1"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Vertical chevron (mobile) */}
      <svg
        className="ml-flow-connector-v"
        viewBox="0 0 20 40"
        fill="none"
      >
        <line
          x1="10"
          y1="2"
          x2="10"
          y2="32"
          stroke="var(--ml-line)"
          strokeWidth="1.2"
        />
        <path
          d="M 5 28 L 10 36 L 15 28"
          stroke="var(--ml-ink-whisper)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
