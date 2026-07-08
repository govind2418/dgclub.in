import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ShieldIcon, BoltIcon, HeadsetIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Learn about Dg Club — a premium gaming club built on speed, security and trust.",
  path: "/about/",
});

const values = [
  {
    icon: ShieldIcon,
    title: "Security First",
    description: "Every account and transaction is protected with encrypted, monitored infrastructure.",
  },
  {
    icon: BoltIcon,
    title: "Speed by Design",
    description: "From deposits to withdrawals, every interaction is engineered to be fast.",
  },
  {
    icon: HeadsetIcon,
    title: "Player-First Support",
    description: "A dedicated team is available around the clock to help whenever you need it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Premium Gaming Club, Built on Trust"
        description="Dg Club brings together lottery, Win Go, slots, sports, fishing and casino games in one elevated, secure platform."
        crumbName="About"
        crumbPath="/about/"
      />

      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-cream/65 sm:text-lg">
              Dg Club was created for players who expect more — a platform where the interface feels as
              premium as the rewards, and where speed and security are never an afterthought. We
              obsess over the details so you can focus on the game.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <GlassCard glow className="h-full text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                  <value.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-heading text-lg font-semibold text-cream">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{value.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>

      <StatsCounter />
    </>
  );
}
