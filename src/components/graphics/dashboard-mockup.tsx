"use client";

import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

type Row = {
  id: string;
  category: string;
  channel: "phone" | "mail";
  status: "ki" | "forward" | "escalated" | "in_progress";
  time: string;
  isNew?: boolean;
};

const BASE_ROWS: Row[] = [
  {
    id: "TKT-2026-8345",
    category: "Schadensmeldung",
    channel: "mail",
    status: "ki",
    time: "14:18",
  },
  {
    id: "TKT-2026-8344",
    category: "Notfall",
    channel: "phone",
    status: "escalated",
    time: "14:02",
  },
  {
    id: "TKT-2026-8343",
    category: "Zahlungsfrage",
    channel: "mail",
    status: "forward",
    time: "13:41",
  },
  {
    id: "TKT-2026-8342",
    category: "Allg. Fragen",
    channel: "phone",
    status: "ki",
    time: "13:22",
  },
  {
    id: "TKT-2026-8341",
    category: "Kündigung",
    channel: "mail",
    status: "in_progress",
    time: "12:58",
  },
];

const INCOMING_ROW: Row = {
  id: "TKT-2026-8346",
  category: "Reparaturmeldung",
  channel: "mail",
  status: "ki",
  time: "14:22",
  isNew: true,
};

function StatusPill({ status }: { status: Row["status"] }) {
  if (status === "ki") {
    return <span className="ml-mock-pill ml-mock-pill-ok">KI erledigt</span>;
  }
  if (status === "escalated") {
    return <span className="ml-mock-pill ml-mock-pill-warn">Eskaliert</span>;
  }
  if (status === "forward") {
    return <span className="ml-mock-pill">Weitergeleitet</span>;
  }
  return (
    <span className="ml-mock-pill ml-mock-pill-muted">In Bearbeitung</span>
  );
}

function ChannelIcon({ channel }: { channel: Row["channel"] }) {
  if (channel === "phone") {
    return <Phone size={14} strokeWidth={1.8} className="text-[var(--ml-ink-whisper)]" />;
  }
  return <Mail size={14} strokeWidth={1.8} className="text-[var(--ml-ink-whisper)]" />;
}

export function DashboardMockup({
  tilt = true,
  showKpis = true,
  animateIncoming = true,
  className,
}: {
  tilt?: boolean;
  showKpis?: boolean;
  animateIncoming?: boolean;
  className?: string;
}) {
  const [rows, setRows] = useState<Row[]>(BASE_ROWS);
  const [kpiTickets, setKpiTickets] = useState(52);

  useEffect(() => {
    if (!animateIncoming) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const timer = setTimeout(() => {
      setRows((prev) => [INCOMING_ROW, ...prev.slice(0, 4)]);
      setKpiTickets(53);
    }, 2800);
    return () => clearTimeout(timer);
  }, [animateIncoming]);

  return (
    <div
      className={cn(
        "ml-mock w-full max-w-[640px] transform-gpu",
        tilt &&
          "md:rotate-[0.6deg] md:-translate-y-1 md:hover:rotate-0 md:hover:translate-y-0 transition-transform duration-500",
        className,
      )}
    >
      <div className="ml-mock-header">
        <div className="flex items-center gap-2 text-[11.5px]">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="inline-flex h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="inline-flex h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-2 font-mono text-[11px] text-[var(--ml-ink-whisper)]">
            dashboard.mieterlotse.de
          </span>
        </div>
        <div className="flex items-center text-[11.5px] font-medium">
          <span className="ml-mock-live-dot" />
          Live · 14:22 Uhr
        </div>
      </div>

      {showKpis ? (
        <div className="ml-mock-kpi-row">
          <div className="ml-mock-kpi">
            <div className="ml-mock-kpi-value">{kpiTickets}</div>
            <div className="ml-mock-kpi-label">Tickets heute</div>
          </div>
          <div className="ml-mock-kpi">
            <div className="ml-mock-kpi-value">
              {kpiTickets >= 53 ? 45 : 44}
            </div>
            <div className="ml-mock-kpi-label">KI erledigt</div>
          </div>
          <div className="ml-mock-kpi">
            <div className="ml-mock-kpi-value">5</div>
            <div className="ml-mock-kpi-label">Weitergeleitet</div>
          </div>
          <div className="ml-mock-kpi">
            <div className="ml-mock-kpi-value">3</div>
            <div className="ml-mock-kpi-label">Eskaliert</div>
          </div>
        </div>
      ) : null}

      <table className="ml-mock-table">
        <thead>
          <tr>
            <th>Ticket-ID</th>
            <th>Kategorie</th>
            <th>Kanal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className={row.isNew ? "is-new" : ""}>
              <td className="font-mono text-[12px] text-[var(--ml-ink-soft)]">
                {row.id}
              </td>
              <td>{row.category}</td>
              <td>
                <ChannelIcon channel={row.channel} />
              </td>
              <td>
                <StatusPill status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
