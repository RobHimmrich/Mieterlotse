import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
};

export function CtaButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  arrow = true,
  type = "button",
}: Props) {
  const classes = cn(
    "ml-btn",
    variant === "primary" && "ml-btn-primary",
    variant === "secondary" && "ml-btn-secondary",
    variant === "ghost" && "ml-btn-ghost",
    className,
  );

  const content = (
    <>
      {children}
      {arrow ? <ArrowRight size={16} strokeWidth={2.2} /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
