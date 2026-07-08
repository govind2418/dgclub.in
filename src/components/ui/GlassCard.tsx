import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel p-6 sm:p-8 transition-all duration-500",
        glow && "hover:shadow-gold-glow hover:border-gold/40",
        className
      )}
    >
      {children}
    </div>
  );
}
