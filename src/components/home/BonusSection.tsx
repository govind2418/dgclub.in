import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CoinIcon } from "@/components/ui/icons";
import { bonusCards } from "@/lib/data";

export function BonusSection() {
  return (
    <Container as="section" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading badge="Rewards" title="Luxury Rewards, Built In" />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bonusCards.map((bonus, i) => (
          <Reveal key={bonus.title} type="scale" delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-surface/80 to-surface/30 p-7 transition-all duration-500 hover:border-gold/50 hover:shadow-gold-glow-lg">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/10 blur-xl transition-all duration-500 group-hover:bg-gold/20" />
              <CoinIcon className="h-10 w-10" />
              <span className="mt-5 inline-block rounded-full border border-gold/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-light">
                {bonus.tag}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-cream">{bonus.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">{bonus.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
