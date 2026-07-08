import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BonusSection } from "@/components/home/BonusSection";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Promotion — Bonuses & Rewards",
  description: "Discover current Dg Club promotions — welcome bonus, daily cashback, referral rewards and VIP tier benefits.",
  path: "/promotion/",
});

const terms = [
  "Promotions are subject to the official terms published on the platform at redemption time.",
  "Bonus amounts, wagering requirements and eligibility vary by promotion and player tier.",
  "Dg Club reserves the right to modify or withdraw promotions at any time.",
];

export default function PromotionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Promotion"
        title="Current Rewards & Promotions"
        description="From your first deposit to your hundredth, there's always something rewarding waiting for you."
        crumbName="Promotion"
        crumbPath="/promotion/"
      />
      <div className="pt-16 sm:pt-20">
        <BonusSection />
      </div>
      <Container className="pb-24">
        <Reveal>
          <GlassCard className="mx-auto max-w-2xl">
            <h2 className="font-heading text-lg font-semibold text-cream">Promotion Terms</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-cream/55">
              {terms.map((term) => (
                <li key={term}>• {term}</li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </Container>
      <CTABanner />
    </>
  );
}
