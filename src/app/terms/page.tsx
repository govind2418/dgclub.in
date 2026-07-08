import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent } from "@/components/ui/LegalContent";
import { LICENSE_PLACEHOLDER } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of Dg Club.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" crumbName="Terms" crumbPath="/terms/" />
      <LegalContent
        updated="This is a template — replace with counsel-reviewed content and real license details before launch."
        intro="These Terms & Conditions govern your access to and use of Dg Club. By registering or using the platform, you agree to be bound by these terms."
        sections={[
          {
            heading: "1. Eligibility",
            paragraphs: [
              "You must be at least 18 years old and legally permitted to use real-money gaming services in your jurisdiction to register an account.",
            ],
          },
          {
            heading: "2. Licensing",
            paragraphs: [`Dg Club operates under ${LICENSE_PLACEHOLDER}.`],
          },
          {
            heading: "3. Account Responsibility",
            bullets: [
              "You are responsible for maintaining the confidentiality of your login credentials.",
              "One account is permitted per person; duplicate accounts may be suspended.",
              "You must provide accurate registration information at all times.",
            ],
          },
          {
            heading: "4. Deposits & Withdrawals",
            paragraphs: [
              "Deposits and withdrawals are subject to identity verification and applicable processing times. Dg Club reserves the right to request additional verification before processing a withdrawal.",
            ],
          },
          {
            heading: "5. Promotions",
            paragraphs: [
              "Bonuses and promotions are subject to their own specific terms published at the time of the offer, including any wagering or eligibility requirements.",
            ],
          },
          {
            heading: "6. Prohibited Conduct",
            bullets: [
              "Use of bots, exploits or collusion to gain unfair advantage.",
              "Fraudulent payment activity or identity misrepresentation.",
              "Any activity that violates applicable law in your jurisdiction.",
            ],
          },
          {
            heading: "7. Limitation of Liability",
            paragraphs: [
              "Dg Club is not liable for indirect, incidental or consequential damages arising from use of the platform, to the maximum extent permitted by law.",
            ],
          },
          {
            heading: "8. Changes to These Terms",
            paragraphs: [
              "We may revise these Terms from time to time. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.",
            ],
          },
        ]}
      />
    </>
  );
}
