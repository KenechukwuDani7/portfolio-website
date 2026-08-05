import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://kenechukwuokoye.vercel.app";
const TITLE = "Kenechukwu Okoye-Chine | Product Designer & Developer";
const DESCRIPTION =
  "Portfolio of Kenechukwu Okoye-Chine, also known as Kenechukwu Okoye, a Nigeria-based product designer and software developer working across UX, AI and fintech.";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Kenechukwu Okoye Portfolio",
  authors: [{ name: "Kenechukwu Okoye", url: SITE_URL }],
  creator: "Kenechukwu Okoye",
  publisher: "Kenechukwu Okoye",
  category: "Portfolio",
  keywords: [
    "Kenechukwu Okoye",
    "Kenechukwu Okoye-Chine",
    "Kenechukwu",
    "Okoye-Chine",
    "product designer Nigeria",
    "UI UX designer",
    "software developer Nigeria",
    "AI product designer",
    "Figma designer",
    "fintech product design",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "0XYMnU1dN57XCMeWDUliv_v61zovfX6QOpiOMABZ1Cg",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Kenechukwu Okoye Portfolio",
    type: "profile",
    locale: "en_NG",
    images: [
      {
        url: "/og-v2.png",
        width: 1200,
        height: 630,
        alt: "Kenechukwu Okoye — Product Design, Software and AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@koda_thegreat7",
    images: ["/og-v2.png"],
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kenechukwu Okoye Portfolio",
      alternateName: "Kenechukwu Okoye-Chine Portfolio",
      description: DESCRIPTION,
      inLanguage: "en-NG",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile-page`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Kenechukwu Okoye",
      alternateName: [
        "Kenechukwu Okoye-Chine",
        "Koda the Great",
        "@koda_thegreat7",
      ],
      givenName: "Kenechukwu",
      familyName: "Okoye-Chine",
      url: SITE_URL,
      image: `${SITE_URL}/portrait.jpg`,
      email: "mailto:keneochine@gmail.com",
      jobTitle: ["Product Designer", "Software Developer"],
      description: DESCRIPTION,
      knowsAbout: [
        "Product Design",
        "User Experience Design",
        "Software Development",
        "Artificial Intelligence",
        "Design Systems",
        "Prototyping",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Nnamdi Azikiwe University",
      },
      sameAs: [
        "https://www.linkedin.com/in/kenechukwu-okoye-chine-0a3918413/",
        "https://github.com/KenechukwuDani7",
        "https://x.com/koda_thegreat7",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
