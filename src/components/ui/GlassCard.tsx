import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  glow = false,
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel overflow-hidden p-6 sm:p-8 transition-all duration-500",
        glow && "hover:shadow-gold-glow hover:border-gold/40",
        className
      )}
    >
      {accent && (
        <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-red" />
      )}
      {children}
    </div>
  );
}
