import type { Metadata, Viewport } from "next";
import { vazirmatn, jetbrainsMono } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";
import { Aurora } from "@/components/ui/Aurora";
import { ChronoSpine } from "@/components/ui/ChronoSpine";
import { SectionNav } from "@/components/ui/SectionNav";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { profiles, uiStrings } from "@/content/profile";
import "../globals.css";

const profile = profiles.en;
const ui = uiStrings.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.googleIndexDescription,
  keywords: [profile.name, profile.role, "Next.js", "Full-Stack Developer", "NestJs", "typescript", "javascript", "software engineer", "web developer"],
  alternates: {
    canonical: "/en",
    languages: { "fa-IR": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroSubtext,
    url: `${siteUrl}/en`,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: ["/en/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroSubtext,
    images: ["/en/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071416",
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: `${siteUrl}/en`,
    email: `mailto:${profile.contact.email}`,
    sameAs: [profile.contact.github],
  };

  return (
    <html lang="en" dir="ltr" className={`${vazirmatn.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Aurora />
        <ChronoSpine />
        <SectionNav ui={ui} />
        <LanguageToggle href="/" label={ui.languageToggle} />
        {children}
      </body>
    </html>
  );
}
