import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { faqItems } from "@/lib/data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { FeatureCards } from "@/components/home/FeatureCards";

// Below-the-fold sections are code-split so their JS doesn't block the
// initial Hero render/hydration — content still renders in the static HTML.
const BonusSection = dynamic(() => import("@/components/home/BonusSection").then((m) => m.BonusSection));
const WhyDgClub = dynamic(() => import("@/components/home/WhyDgClub").then((m) => m.WhyDgClub));
const GameCategories = dynamic(() => import("@/components/home/GameCategories").then((m) => m.GameCategories));
const DownloadAppSection = dynamic(() =>
  import("@/components/home/DownloadAppSection").then((m) => m.DownloadAppSection)
);
const StatsCounter = dynamic(() => import("@/components/home/StatsCounter").then((m) => m.StatsCounter));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then((m) => m.Testimonials));
const FAQAccordion = dynamic(() => import("@/components/home/FAQAccordion").then((m) => m.FAQAccordion));
const CTABanner = dynamic(() => import("@/components/home/CTABanner").then((m) => m.CTABanner));

export const metadata: Metadata = buildMetadata({
  title: "Dg Club — Play. Win. Withdraw Instantly.",
  description:
    "Dg Club is a premium gaming club offering lottery, Win Go, slots, sports, fishing and casino games with instant deposits, fast withdrawals and 24x7 support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <Hero />
      <FeatureCards />
      <BonusSection />
      <WhyDgClub />
      <GameCategories />
      <DownloadAppSection />
      <StatsCounter />
      <Testimonials />
      <FAQAccordion />
      <CTABanner />
    </>
  );
}
