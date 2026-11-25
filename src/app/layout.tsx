import type { Metadata } from "next";
import localFont from "next/font/local";
import { asset, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
});
const title = "Rinto Saha | Researcher & Software Developer";
const description =
  "Rinto Saha, CSE undergraduate at United International University, teaching assistant, and IEEE UIU WIE Treasurer. Explore software projects and research in security, machine learning, and sustainable computing.";
export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  alternates: { canonical: `${siteUrl}/` },
  icons: { icon: asset("/branding/favicon.svg") },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/`,
    type: "website",
    siteName: "Rinto Saha",
    images: [
      {
        url: `${siteUrl}/branding/social-preview.png`,
        width: 1200,
        height: 630,
        alt: "Rinto Saha — CSE undergraduate at United International University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/branding/social-preview.png`],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
