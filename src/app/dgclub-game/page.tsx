import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { GameCategories } from "@/components/home/GameCategories";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Dgclub Game — Lottery, Win Go, Slots, Sports, Fishing & Casino",
  description: "Explore the full Dg Club game library — lottery, Win Go, slots, sports betting, fishing tables and live casino, all in one premium platform.",
  path: "/dgclub-game/",
});

export default function GamesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dgclub Game"
        title="Every Game, One Premium Club"
        description="From fast-paced Win Go rounds to live casino tables — explore the full Dg Club game library."
        crumbName="Dgclub Game"
        crumbPath="/dgclub-game/"
      />
      <div className="py-16 sm:py-20">
        <GameCategories compact />
      </div>
      <CTABanner />
    </>
  );
}
