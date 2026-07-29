import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Kenechukwu Okoye — Product Designer & Developer",
    description:
      "Portfolio of Kenechukwu Okoye, a product designer and software developer creating clear, human digital experiences.",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "Kenechukwu Okoye — Product Designer & Developer",
      description: "Clear, human digital experiences.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kenechukwu Okoye — Product Designer & Developer",
      description: "Clear, human digital experiences.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
