import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Mono } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "cal-sans";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amber",
  description: "Amber The Programming Language",
  openGraph: {
      title: "Amber The Programming Language",
      siteName: "Welcome to Amber",
      type: "website",
      images: [
          {
              url: 'https://amber-lang.com/og.jpg'
          }
      ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[GeistSans.className, instrumentSerif.variable, dmMono.variable].join(' ')}>{children}</body>
    </html>
  );
}
