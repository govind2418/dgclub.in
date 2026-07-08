import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";

type BuildMetadataArgs = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path = "/", noIndex }: BuildMetadataArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const desc = description ?? SITE_DESCRIPTION;

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}
