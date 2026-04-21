import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  rating?: string;
  caption?: string;
  variant?: "light" | "dark";
  className?: string;
  align?: "left" | "center";
};

const AVATARS: Array<{ src: string; alt: string }> = [
  { src: "/testimonials/testimonial-01.png", alt: "Geschäftsführer einer Hausverwaltung" },
  { src: "/testimonials/testimonial-02.png", alt: "Teamleiterin in einer Hausverwaltung" },
  { src: "/testimonials/testimonial-03.png", alt: "Geschäftsführer einer mittelständischen Verwaltung" },
  { src: "/testimonials/testimonial-04.png", alt: "Prokuristin einer Hausverwaltung" },
  { src: "/testimonials/testimonial-05.png", alt: "Teamleiter einer Hausverwaltung" },
];

export function ReviewBadge({
  rating = "4,9 / 5",
  caption = "von Hausverwaltungen im DACH-Raum genutzt",
  variant = "light",
  className,
  align = "left",
}: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        className,
      )}
      aria-label={`Bewertung: ${rating}, ${caption}`}
    >
      <div className="flex -space-x-2.5">
        {AVATARS.map((a) => (
          <div
            key={a.src}
            className={cn(
              "relative h-10 w-10 overflow-hidden rounded-full ring-[2.5px]",
              isDark ? "ring-[#0f2744]" : "ring-white",
            )}
          >
            <Image
              src={a.src}
              alt={a.alt}
              fill
              sizes="40px"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={15}
                strokeWidth={0}
                fill="#F5B320"
                className="text-[#F5B320]"
              />
            ))}
          </div>
          <span
            className={cn(
              "text-[14px] font-semibold tracking-tight",
              isDark ? "text-white" : "text-[var(--ml-ink)]",
            )}
          >
            {rating}
          </span>
        </div>
        <div
          className={cn(
            "mt-0.5 text-[13px] leading-snug",
            isDark ? "text-white/70" : "text-[var(--ml-ink-soft)]",
          )}
        >
          {caption}
        </div>
      </div>
    </div>
  );
}
