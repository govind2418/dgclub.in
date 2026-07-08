import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { TelegramIcon } from "@/components/ui/icons";
import { footerLinks } from "@/lib/data";
import { LICENSE_PLACEHOLDER, TELEGRAM_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10 bg-elevated">
      <div className="section-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-cream/50">
            A premium gaming platform built on speed, security and trust. Play responsibly.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl2 border border-gold/25 bg-surface/50 px-4 py-2.5 text-sm font-medium text-cream/80 transition-colors hover:border-gold/50 hover:text-gold-light"
          >
            <TelegramIcon className="h-4 w-4" />
            Join Telegram
          </a>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold-light">
            Company
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/60 transition-colors hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold-light">
            Resources
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.resources.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/60 transition-colors hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold-light">Legal</h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/60 transition-colors hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold-light">
            Play Responsibly
          </h3>
          <p className="text-sm leading-relaxed text-cream/50">
            Dg Club is intended for players aged 18+. Gaming should be entertainment, not a source of income.
          </p>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="section-container flex flex-col gap-2 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dg Club. All rights reserved.</p>
          <p>{LICENSE_PLACEHOLDER}</p>
        </div>
      </div>
    </footer>
  );
}
