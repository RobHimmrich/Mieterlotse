import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "amber" | "light";
}) {
  const toneClass =
    tone === "amber"
      ? "text-[var(--ml-accent)]"
      : tone === "light"
        ? "text-white/70"
        : "text-[var(--ml-cta)]";
  return (
    <span className={cn("ml-eyebrow", toneClass, className)}>{children}</span>
  );
}
