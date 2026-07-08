import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import { EXTERNAL_REGISTER_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Dgclub Register — Create Your Account",
  description: "Create your Dg Club account in under a minute and get access to lottery, Win Go, slots, sports, fishing and casino games with an exclusive welcome bonus.",
  path: "/register/",
});

const steps = [
  "Tap Continue to Register to open the official Dg Club sign-up page.",
  "Enter your mobile number and create a secure password.",
  "Verify your account and claim your welcome bonus.",
];

const perks = [
  "Exclusive welcome bonus on your first deposit",
  "Instant access to all game categories",
  "Fast, secure withdrawals from day one",
  "Referral rewards once you invite friends",
];

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dgclub Register"
        title="Create Your Dg Club Account"
        description="Join in under a minute — no paperwork, no waiting. Must be 18 years or older to register."
        crumbName="Register"
        crumbPath="/register/"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard>
              <h2 className="font-heading text-xl font-semibold text-cream">How to register</h2>
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
                <Button href={EXTERNAL_REGISTER_URL} size="lg">
                  Continue to Register
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal type="slide-left">
            <GlassCard className="h-full">
              <h2 className="font-heading text-lg font-semibold text-cream">What you get</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-sm text-cream/60">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                    {perk}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-cream/60">
                By registering you confirm you are 18 or older and agree to our{" "}
                <a href="/terms/" className="underline hover:text-gold-light">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/responsible-gaming/" className="underline hover:text-gold-light">
                  Responsible Gaming
                </a>{" "}
                policy.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
