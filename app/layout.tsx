import type { Metadata, Viewport } from "next";
import { vazirmatn, jetbrainsMono } from "@/lib/fonts";
import { Aurora } from "@/components/ui/Aurora";
import { ChronoSpine } from "@/components/ui/ChronoSpine";
import { SectionNav } from "@/components/ui/SectionNav";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.heroSubtext,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroSubtext,
    locale: "fa_IR",
    type: "website",
    images: ["/images/profile.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071416",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-turquoise focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-bed"
        >
          رفتن به محتوای اصلی
        </a>
        <Aurora />
        <ChronoSpine />
        <SectionNav />
        {children}
      </body>
    </html>
  );
}
