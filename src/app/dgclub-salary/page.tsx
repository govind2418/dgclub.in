import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { CoinIcon, ShieldIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Dgclub Salary — How Referral & VIP Rewards Actually Work",
  description:
    "Searching for Dgclub salary or daily income info? Here's an honest breakdown of how Dg Club's referral commissions and VIP rewards work — and why they aren't a guaranteed salary.",
  path: "/dgclub-salary/",
});

const faqs = [
  {
    question: "Is there a fixed \"Dgclub salary\" or guaranteed daily income?",
    answer:
      "No. Dg Club is a gaming platform, not an employer. Any referral commission or VIP reward is variable, tied to real activity on the platform, and is never a fixed or guaranteed income — treat any offer claiming otherwise as a red flag.",
  },
  {
    question: "How does the referral program actually work?",
    answer:
      "Share your referral link or code. When someone you referred registers and plays, you can receive a reward bonus. The amount depends on the platform's live referral terms, not a fixed monthly figure.",
  },
  {
    question: "What are VIP rewards?",
    answer:
      "As your activity on the platform grows, you can move up VIP tiers that unlock higher reward rates, cashback and other perks — again, based on activity, not a salary.",
  },
];

export default function DgclubSalaryPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        eyebrow="Dgclub Salary"
        title="“Dgclub Salary” — What People Actually Mean"
        description="A lot of people search this looking for a guaranteed daily income. Here's the honest answer."
        crumbName="Dgclub Salary"
        crumbPath="/dgclub-salary/"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                <CoinIcon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-heading text-xl font-semibold text-cream">
                Referral & VIP rewards, explained honestly
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/65">
                "Dgclub salary" isn't an official term — it's how people search for information about
                earning through Dg Club's referral program and VIP tiers. There is no employment, no
                fixed monthly pay, and no guaranteed daily income on Dg Club or any gaming platform.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/65">
                What does exist: a <strong className="text-cream">referral reward</strong> when someone
                you invite registers and plays, and <strong className="text-cream">VIP tier rewards</strong>{" "}
                that scale with your own activity on the platform. Both are variable, both depend on real
                play, and neither should be treated as a substitute for income.
              </p>
              <div className="mt-6">
                <Button href="/promotion/" size="lg">
                  See Current Rewards
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal type="slide-left">
            <GlassCard className="h-full border-gold/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                <ShieldIcon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-heading text-lg font-semibold text-cream">Watch out for scams</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                If anyone contacts you promising a fixed "Dgclub salary," a guaranteed daily payout, or
                asks you to pay an upfront fee to "activate" earnings, it is not an official Dg Club
                offer — it's a scam. Dg Club never asks for payment to unlock rewards.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/60">
                Read our{" "}
                <a href="/responsible-gaming/" className="text-gold-light underline hover:no-underline">
                  Responsible Gaming
                </a>{" "}
                policy for more on playing safely.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Container>

      <Container className="pb-16 sm:pb-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-2xl font-bold text-cream sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {faqs.map((item) => (
                <GlassCard key={item.question}>
                  <h3 className="font-heading text-base font-semibold text-cream">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{item.answer}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
