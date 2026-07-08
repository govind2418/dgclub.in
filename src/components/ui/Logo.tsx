import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 font-heading", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-base shadow-gold-glow">
        <span className="text-lg font-extrabold tracking-tight">D</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-wide text-cream">
          DG<span className="text-gold-light">CLUB</span>
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-cream/60">Premium Gaming</span>
      </span>
    </span>
  );
}
