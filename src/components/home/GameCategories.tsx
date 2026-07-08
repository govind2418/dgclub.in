import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DiceIcon, BoltIcon, ReelIcon, TrophyIcon, FishIcon, SpadeIcon } from "@/components/ui/icons";
import { gameCategories, type GameCategory } from "@/lib/data";

const iconMap: Record<GameCategory["icon"], React.ComponentType<{ className?: string }>> = {
  dice: DiceIcon,
  bolt: BoltIcon,
  reel: ReelIcon,
  trophy: TrophyIcon,
  fish: FishIcon,
  spade: SpadeIcon,
};

export function GameCategories({ compact = false }: { compact?: boolean }) {
  return (
    <Container as="section" className={compact ? "" : "py-24 sm:py-28"}>
      {!compact && (
        <Reveal>
          <SectionHeading badge="Game Library" title="Every Game You Love, One Club" />
        </Reveal>
      )}

      <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${!compact ? "mt-14" : ""}`}>
        {gameCategories.map((game, i) => {
          const Icon = iconMap[game.icon];
          return (
            <Reveal key={game.slug} type="scale" delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-surface/40 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-gold-glow">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light/20 to-gold/10 text-gold-light transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-cream">{game.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{game.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
