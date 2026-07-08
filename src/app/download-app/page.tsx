import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadAppSection } from "@/components/home/DownloadAppSection";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Download App — Dgclub Game",
  description: "Download the official Dg Club Android APK for faster load times, exclusive app-only bonuses and biometric quick login.",
  path: "/download-app/",
});

const requirements = [
  { label: "OS", value: "Android 8.0 or higher" },
  { label: "Storage", value: "150 MB free space" },
  { label: "Permissions", value: "Install from unknown sources" },
];

export default function DownloadAppPage() {
  return (
    <>
      <PageHeader
        eyebrow="Download App"
        title="Get the Official Dg Club App"
        description="A faster, smoother way to play — with rewards you won't find on the web version."
        crumbName="Download App"
        crumbPath="/download-app/"
      />
      <DownloadAppSection />
      <Container className="pb-24">
        <Reveal>
          <GlassCard className="mx-auto max-w-2xl">
            <h2 className="font-heading text-lg font-semibold text-cream">System Requirements</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {requirements.map((r) => (
                <div key={r.label}>
                  <p className="text-xs uppercase tracking-widest text-cream/60">{r.label}</p>
                  <p className="mt-1 text-sm text-cream/75">{r.value}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </>
  );
}
