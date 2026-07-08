import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ShieldIcon, CheckIcon } from "@/components/ui/icons";
import { EXTERNAL_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Dgclub Login — Access Your Account",
  description: "Learn how to securely log in to your Dg Club account and access lottery, Win Go, slots, sports and casino games.",
  path: "/login/",
});

const steps = [
  "Tap the Continue to Login button below to open the official Dg Club sign-in page.",
  "Enter your registered mobile number or username and your password.",
  "Complete any verification step shown, then you're in.",
];

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dgclub Login"
        title="Log In to Your Dg Club Account"
        description="This page guides you to the official, secure sign-in — Dg Club never asks for your password anywhere except the official login screen."
        crumbName="Login"
        crumbPath="/login/"
      />

      <Container className="pt-10 sm:pt-14">
        <Reveal type="scale">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-gold/25 bg-elevated">
            <div className="relative aspect-[900/461] w-full">
              <Image
                src="/login-banner.webp"
                alt="Dg Club — login to India's premium gaming platform"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard>
              <h2 className="font-heading text-xl font-semibold text-cream">How to log in</h2>
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
                  Continue to Login
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal type="slide-left">
            <GlassCard className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                <ShieldIcon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-heading text-lg font-semibold text-cream">Stay Safe</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  "Only enter your credentials on the official Dg Club platform.",
                  "Never share your password, OTP or account PIN with anyone.",
                  "Enable two-factor verification if available on your account.",
                  "New here? Create an account on the Register page first.",
                ].map((tip) => (
                  <li key={tip} className="flex gap-3 text-sm text-cream/60">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                    {tip}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
