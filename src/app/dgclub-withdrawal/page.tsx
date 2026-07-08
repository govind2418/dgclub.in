import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { BoltIcon, WalletIcon, ShieldIcon } from "@/components/ui/icons";
import { EXTERNAL_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Dgclub Withdrawal — How Fast Payouts Work",
  description:
    "How withdrawals work on Dg Club — processing times, methods, verification steps and troubleshooting tips for a smooth, fast payout.",
  path: "/dgclub-withdrawal/",
});

const steps = [
  {
    icon: WalletIcon,
    title: "Open your wallet",
    description: "Log in and go to the Withdraw section of your Dg Club account.",
  },
  {
    icon: BoltIcon,
    title: "Choose a method & amount",
    description: "Select your payout method and enter the amount you'd like to withdraw.",
  },
  {
    icon: ShieldIcon,
    title: "Verify & confirm",
    description: "Complete any identity verification requested, then confirm the request.",
  },
];

const faqs = [
  {
    question: "How long does a Dgclub withdrawal take?",
    answer:
      "Most withdrawals are processed within minutes during standard operating hours, subject to verification checks and the payment method used.",
  },
  {
    question: "Why is my withdrawal delayed?",
    answer:
      "Delays are usually caused by incomplete identity verification, a mismatch between deposit and withdrawal account details, or high-volume periods. Contact support if a withdrawal takes longer than expected.",
  },
  {
    question: "Is there a minimum withdrawal amount?",
    answer:
      "Minimum withdrawal limits are set on the official platform and may change — check the Withdraw section in your account for the current minimum.",
  },
  {
    question: "Are there withdrawal fees?",
    answer:
      "Any applicable fees are shown clearly before you confirm a withdrawal request on the official platform.",
  },
];

export default function DgclubWithdrawalPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        eyebrow="Dgclub Withdrawal"
        title="Fast, Transparent Withdrawals"
        description="Here's exactly how taking your winnings out of Dg Club works, start to finish."
        crumbName="Dgclub Withdrawal"
        crumbPath="/dgclub-withdrawal/"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <GlassCard accent className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                  <step.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-heading text-lg font-semibold text-cream">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{step.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Button href={EXTERNAL_LOGIN_URL} size="lg">
              Log In to Withdraw
            </Button>
          </div>
        </Reveal>
      </Container>

      <Container className="pb-24">
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
