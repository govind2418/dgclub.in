import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { StickyDownloadButton } from "@/components/layout/StickyDownloadButton";
import { FloatingTelegramButton } from "@/components/layout/FloatingTelegramButton";
import { FloatingRegisterButton } from "@/components/layout/FloatingRegisterButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Play. Win. Withdraw Instantly.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Dgclub",
    "Dg Club",
    "Dgclub login",
    "Dgclub register",
    "Dgclub game",
    "Dgclub app",
    "Dgclub APK",
    "Win Go",
    "online lottery",
    "gaming platform India",
  ],
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
  verification: {
    google: "i_gR_-f3OTXbfQlQ-X2fjcy1Ki2kJmIvNIZyd9ov0qk",
  },
};

export const viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-base font-body text-cream antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyDownloadButton />
        <FloatingTelegramButton />
        <FloatingRegisterButton />
      </body>
    </html>
  );
}
