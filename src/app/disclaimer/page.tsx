import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent } from "@/components/ui/LegalContent";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: "Important disclaimer regarding the use of Dg Club and this promotional website.",
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Disclaimer" crumbName="Disclaimer" crumbPath="/disclaimer/" />
      <LegalContent
        sections={[
          {
            heading: "General Information",
            paragraphs: [
              "This website is a promotional information site for Dg Club and does not process deposits, withdrawals or account credentials directly. All account activity takes place on the official Dg Club platform.",
            ],
          },
          {
            heading: "No Guarantee of Winnings",
            paragraphs: [
              "Gaming outcomes are inherently uncertain. Dg Club makes no guarantee of winnings, and past results are not indicative of future outcomes.",
            ],
          },
          {
            heading: "Jurisdiction",
            paragraphs: [
              "It is your responsibility to ensure that use of real-money gaming services is legal in your jurisdiction before registering or playing.",
            ],
          },
          {
            heading: "Third-Party Links",
            paragraphs: [
              "This site may link to external platforms, including the official Dg Club login, registration and download destinations. We are not responsible for the content of external sites.",
            ],
          },
        ]}
      />
    </>
  );
}
