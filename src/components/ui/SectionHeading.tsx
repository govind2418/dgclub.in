import { cn } from "@/lib/utils";

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          {badge}
        </span>
      )}
      <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-balance text-base text-cream/60 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
