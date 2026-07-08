import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { StatsCounter } from "@/components/home/StatsCounter";
import { CTABanner } from "@/components/home/CTABanner";
import { WalletIcon, ShieldIcon, HeadsetIcon, BoltIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Dgclub India — Trusted Gaming Platform for Indian Players",
  description:
    "Dg Club (Dgclub) is built for Indian players — UPI and local payment support, rupee-based play, Hindi and English support, and fast withdrawals across India.",
  path: "/dgclub-india/",
});

const highlights = [
  {
    icon: WalletIcon,
    title: "Made for Indian Payments",
    description: "UPI, net banking and other locally trusted payment methods for instant deposits.",
  },
  {
    icon: BoltIcon,
    title: "Rupee-Based, No Confusion",
    description: "Every balance, bonus and withdrawal on Dg Club is shown directly in Indian Rupees.",
  },
  {
    icon: HeadsetIcon,
    title: "Support in Hindi & English",
    description: "Reach the Dg Club support team in the language you're most comfortable with, 24x7.",
  },
  {
    icon: ShieldIcon,
    title: "Built for Local Trust",
    description: "Clear terms, a dedicated Responsible Gaming policy, and transparent verification steps.",
  },
];

const faqs = [
  {
    question: "Is Dgclub available across India?",
    answer:
      "Dg Club is accessible to players across India. Real-money gaming laws vary by state — check your local regulations before registering and playing.",
  },
  {
    question: "What payment methods does Dgclub support for Indian players?",
    answer:
      "Dg Club supports UPI and other commonly used Indian payment methods for both deposits and withdrawals, subject to the payment options live on the official platform at the time.",
  },
  {
    question: "Do I need to be 18 to use Dgclub in India?",
    answer:
      "Yes. Dg Club is strictly for players aged 18 and above, in line with Indian regulations on real-money gaming.",
  },
];

export default function DgclubIndiaPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        eyebrow="Dgclub India"
        title="Dg Club, Built Around Indian Players"
        description="From UPI payments to rupee-based play and local-language support — Dg Club is designed for how India plays."
        crumbName="Dgclub India"
        crumbPath="/dgclub-india/"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <GlassCard glow accent className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-heading text-lg font-semibold text-cream">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{item.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>

      <StatsCounter />

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

      <CTABanner />
    </>
  );
}
