import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent } from "@/components/ui/LegalContent";

export const metadata: Metadata = buildMetadata({
  title: "Responsible Gaming",
  description: "Dg Club's commitment to responsible gaming, self-exclusion tools and support resources.",
  path: "/responsible-gaming/",
});

export default function ResponsibleGamingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Player Safety"
        title="Responsible Gaming"
        crumbName="Responsible Gaming"
        crumbPath="/responsible-gaming/"
      />
      <LegalContent
        intro="Gaming should always be entertainment, not a source of income or a way to solve financial problems. Dg Club is committed to helping players stay in control."
        sections={[
          {
            heading: "18+ Only",
            paragraphs: [
              "Dg Club is strictly for players aged 18 and above. Age verification may be required before withdrawals are processed.",
            ],
          },
          {
            heading: "Signs to Watch For",
            bullets: [
              "Spending more time or money than you intended.",
              "Chasing losses or borrowing money to play.",
              "Gaming affecting your work, relationships or wellbeing.",
              "Feeling anxious, irritable or preoccupied when not playing.",
            ],
          },
          {
            heading: "Tools to Stay in Control",
            bullets: [
              "Deposit limits to cap how much you add to your account in a given period.",
              "Cool-off periods to pause your account for a set duration.",
              "Self-exclusion to close your account for an extended period or permanently.",
            ],
          },
          {
            heading: "Get Support",
            paragraphs: [
              "If gaming is affecting your life, please reach out to a local support service or a trusted friend or family member. If you're in India, the NIMHANS helpline and local counselling services can provide confidential support.",
            ],
          },
        ]}
      />
    </>
  );
}
