import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Public images keep their file names between deploys, so cache them for a
  // week and refresh in the background rather than revalidating every visit.
  async headers() {
    return [
      {
        source: "/:path*.:ext(webp|png|jpg|jpeg|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
