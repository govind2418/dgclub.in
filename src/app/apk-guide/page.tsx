import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { DownloadIcon } from "@/components/ui/icons";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "APK Guide — Install Dg Club on Android",
  description: "Step-by-step guide to safely download and install the official Dg Club Android APK.",
  path: "/apk-guide/",
});

const steps = [
  {
    title: "Download the APK",
    description: "Tap the Android APK button to download the official installer file to your device.",
  },
  {
    title: "Allow unknown sources",
    description: "In Settings > Security, enable \"Install unknown apps\" for your browser or file manager.",
  },
  {
    title: "Install the app",
    description: "Open the downloaded file and tap Install. Approve any Android permission prompts.",
  },
  {
    title: "Log in and play",
    description: "Launch Dg Club, log in with your account, and you're ready to play.",
  },
];

export default function ApkGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="APK Guide"
        title="How to Install the Dg Club APK"
        description="A safe, step-by-step walkthrough for installing the official Android app outside the Play Store."
        crumbName="APK Guide"
        crumbPath="/apk-guide/"
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <GlassCard className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 font-heading text-sm font-bold text-gold-light">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-heading text-base font-semibold text-cream">{step.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{step.description}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Button href={APK_DOWNLOAD_URL} size="lg">
                <DownloadIcon className="h-4 w-4" />
                Download Android APK
              </Button>
              <p className="mt-4 text-xs text-cream/60">
                Only download the APK from the official Dg Club domain or Telegram channel.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
