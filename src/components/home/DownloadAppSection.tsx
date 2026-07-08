import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { DownloadIcon, CheckIcon } from "@/components/ui/icons";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

const perks = ["Faster load times", "Exclusive app-only bonuses", "Biometric quick login"];

export function DownloadAppSection() {
  return (
    <Container as="section" className="py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal type="slide-right" className="order-2 flex justify-center lg:order-1">
          {/* Phone mockup — CSS frame, no external asset required */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gold/10 blur-2xl" />
            <div className="relative h-[420px] w-[220px] rounded-[2.5rem] border-4 border-surface bg-elevated p-2.5 shadow-soft sm:h-[480px] sm:w-[250px]">
              <div className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-base" />
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[2rem] bg-gradient-to-b from-red-deep via-base to-base px-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light to-gold text-2xl font-extrabold text-base">
                  D
                </span>
                <p className="font-heading text-sm font-semibold text-cream">Dg Club App</p>
                <div className="mt-2 h-24 w-24 rounded-xl border border-gold/25 bg-surface/60 p-2">
                  <div
                    aria-hidden
                    className="h-full w-full rounded-md"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(244,201,107,0.35) 0 3px, transparent 3px 7px), repeating-linear-gradient(-45deg, rgba(244,201,107,0.25) 0 3px, transparent 3px 7px)",
                    }}
                  />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-cream/60">Scan QR to install</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal type="slide-left" className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            badge="Mobile App"
            title="Take Dg Club Everywhere You Go"
            description="Install the official app for a faster, smoother and more rewarding way to play — with exclusive app-only perks."
          />
          <ul className="mt-6 flex flex-col gap-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm text-cream/70">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={APK_DOWNLOAD_URL} size="lg">
              <DownloadIcon className="h-4 w-4" />
              Android APK
            </Button>
            <Button href="/apk-guide/" variant="secondary" size="lg">
              APK Install Guide
            </Button>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
