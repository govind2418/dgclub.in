const message = "Welcome Bonus Live Now — New members get an exclusive first-deposit reward.";

export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center overflow-hidden border-b border-gold/10 bg-red-deep/90 text-xs font-medium text-gold-light">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
