import { cn } from "@/lib/utils";
import { FadeIn } from "./motion";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" && "items-center text-center"
        )}
      >
        {badge && (
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            {badge}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-base text-white/60 md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
