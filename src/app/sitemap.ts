import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const routes = [
  "",
  "login",
  "register",
  "download-app",
  "dgclub-game",
  "promotion",
  "gift-code",
  "apk-guide",
  "about",
  "contact",
  "privacy-policy",
  "terms",
  "responsible-gaming",
  "disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}/${route}${route ? "/" : ""}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
