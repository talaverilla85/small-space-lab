import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteName = "Small Space Planner";
const description = "Plan studio apartments and compact homes with practical layouts, storage guides and simple planning tools.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://small-space-lab-bgnb.vercel.app"),
  title: { default: siteName, template: "%s | Small Space Planner" },
  description,
  applicationName: siteName,
  category: "home",
  openGraph: { type: "website", siteName, title: siteName, description },
  twitter: { card: "summary_large_image", title: siteName, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  return (
    <html lang="en">
      <body>
        {adsenseClient ? <Script async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} crossOrigin="anonymous" /> : null}
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
