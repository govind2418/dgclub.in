import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { BoltIcon, HeadsetIcon, ShieldIcon, WalletIcon } from "@/components/ui/icons";
import { featureCards, type FeatureCard } from "@/lib/data";

const iconMap: Record<FeatureCard["icon"], React.ComponentType<{ className?: string }>> = {
  bolt: BoltIcon,
  headset: HeadsetIcon,
  shield: ShieldIcon,
  wallet: WalletIcon,
};

export function FeatureCards() {
  return (
    <Container as="section" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading badge="Why Players Choose Us" title="Built for a Premium Experience" />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <Reveal key={feature.title} delay={i * 0.08}>
              <GlassCard glow className="group h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-cream">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{feature.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
