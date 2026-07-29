import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("mb-16", align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-medium tracking-widest uppercase mb-4",
            dark ? "text-emerald" : "text-emerald-dark"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-slate-light" : "text-slate"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
