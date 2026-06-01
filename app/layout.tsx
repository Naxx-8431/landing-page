import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const leagueGothic = localFont({
  src: "./fonts/LeagueGothic-Regular.woff2",
  variable: "--font-league-gothic",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Summer Sand® — Luxury Beach Resort | Ullal, Mangalore",
  description:
    "Escape to the coast at Summer Sand, a luxury beachfront resort in Ullal, Mangalore. Experience pristine beaches, world-class amenities, and unforgettable getaways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueGothic.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
