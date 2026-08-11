import type { MetadataRoute } from "next";

const SITE_URL = "https://kenechukwuokoye.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work/mentra`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/osuko`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/golden-bills`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
