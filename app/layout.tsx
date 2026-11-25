import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DM_Sans, Manrope } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-dm-sans", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "PayMe | Payroll software for Tanzania", template: "%s | PayMe" },
  description: site.description,
  openGraph: { type: "website", locale: "en_TZ", siteName: site.name, title: "PayMe | Payroll software for Tanzania", description: site.description, url: site.url },
  twitter: { card: "summary_large_image", title: "PayMe | Payroll software for Tanzania", description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${manrope.variable}`}><Navbar /><main>{children}</main><Footer /></body></html>;
}
