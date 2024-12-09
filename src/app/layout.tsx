import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "cal-sans";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={[inter.className, GeistSans.className].join(' ')}>{children}</body>
    </html>
  );
}
