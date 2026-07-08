import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { HeadsetIcon, TelegramIcon } from "@/components/ui/icons";
import { CONTACT_EMAIL, TELEGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the Dg Club support team via email or Telegram, available 24x7.",
  path: "/contact/",
});

const channels = [
  {
    icon: HeadsetIcon,
    title: "Email Support",
    description: "Reach our support team directly for account or platform queries.",
    action: { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  },
  {
    icon: TelegramIcon,
    title: "Telegram Channel",
    description: "Join our official Telegram for instant support and announcements.",
    action: { label: "Open Telegram", href: TELEGRAM_URL },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We're Here, 24x7"
        description="Whether it's a question about your account or a game, our team is one message away."
        crumbName="Contact"
        crumbPath="/contact/"
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 0.08}>
              <GlassCard glow className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-light">
                  <channel.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-heading text-lg font-semibold text-cream">{channel.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{channel.description}</p>
                <a
                  href={channel.action.href}
                  target={channel.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-block text-sm font-semibold text-gold-light hover:underline"
                >
                  {channel.action.label} →
                </a>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
