import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent } from "@/components/ui/LegalContent";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Dg Club collects, uses and protects your personal information.",
  path: "/privacy-policy/",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumbName="Privacy Policy" crumbPath="/privacy-policy/" />
      <LegalContent
        updated="This is a template — replace with counsel-reviewed content before launch."
        intro={'This Privacy Policy explains how Dg Club ("we", "us") collects, uses and safeguards information when you use our platform and related services.'}
        sections={[
          {
            heading: "1. Information We Collect",
            bullets: [
              "Account information such as name, mobile number and date of birth for age verification.",
              "Transaction information related to deposits and withdrawals.",
              "Device and usage data such as IP address, browser type and app version.",
            ],
          },
          {
            heading: "2. How We Use Your Information",
            paragraphs: [
              "We use collected information to provide and secure our services, verify your identity, process transactions, prevent fraud, and communicate important account or promotional updates.",
            ],
          },
          {
            heading: "3. Data Sharing",
            paragraphs: [
              "We do not sell personal information. We may share limited data with payment processors, regulators, or service providers strictly to operate the platform and comply with legal obligations.",
            ],
          },
          {
            heading: "4. Data Security",
            paragraphs: [
              "We use encryption and monitored infrastructure to protect your data. No system is completely secure, and we encourage you to use strong, unique passwords.",
            ],
          },
          {
            heading: "5. Your Rights",
            paragraphs: [
              `You may request access to, correction of, or deletion of your personal data by contacting us at ${CONTACT_EMAIL}, subject to legal and regulatory retention requirements.`,
            ],
          },
          {
            heading: "6. Changes to This Policy",
            paragraphs: [
              "We may update this Privacy Policy periodically. Continued use of the platform after changes constitutes acceptance of the revised policy.",
            ],
          },
        ]}
      />
    </>
  );
}
