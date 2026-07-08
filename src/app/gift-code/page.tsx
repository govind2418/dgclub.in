import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CoinIcon } from "@/components/ui/icons";
import { EXTERNAL_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Gift Code — Redeem Rewards",
  description: "Learn how to redeem Dg Club gift codes for bonus credit inside your account wallet.",
  path: "/gift-code/",
});

const steps = [
  "Log in to your Dg Club account on the app or official site.",
  "Open the Wallet or Rewards section and select Redeem Gift Code.",
  "Enter your code exactly as shared and confirm to receive your bonus instantly.",
];

export default function GiftCodePage() {
  return (
    <>
      <PageHeader
        eyebrow="Gift Code"
        title="Redeem Your Gift Code"
        description="Gift codes are released through official Dg Club channels — Telegram, promotions and events."
        crumbName="Gift Code"
        crumbPath="/gift-code/"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard>
              <h2 className="font-heading text-xl font-semibold text-cream">How to redeem</h2>
              <ol className="mt-6 flex flex-col gap-5">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 font-heading text-sm font-bold text-gold-light">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-cream/65">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Button href={EXTERNAL_LOGIN_URL} size="lg">
                  Log In to Redeem
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal type="slide-left">
            <GlassCard className="flex h-full flex-col items-start">
              <CoinIcon className="h-10 w-10" />
              <h2 className="mt-5 font-heading text-lg font-semibold text-cream">Where to find codes</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Official gift codes are shared exclusively through the Dg Club Telegram channel and
                in-app announcements. Codes shared elsewhere may not be genuine — always verify
                against official channels before entering any code.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
