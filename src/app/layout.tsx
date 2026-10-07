import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { asset, siteUrl } from '@/lib/site';
import './globals.css';

const manrope = localFont({ src: '../fonts/manrope-latin-wght-normal.woff2', variable: '--font-manrope', display: 'swap' });
const title = 'Rinto Saha — Software Engineering, AI & Security';
const description = 'Computer Science student building full-stack platforms and exploring applied AI, healthcare software, and software security. Selected projects and engineering work.';
export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`), title, description,
  alternates: { canonical: `${siteUrl}/` },
  icons: { icon: asset('/branding/favicon.svg') },
  openGraph: { title, description, url: `${siteUrl}/`, type: 'website', siteName: 'Rinto Saha', images: [{ url: `${siteUrl}/branding/social-preview.png`, width: 1200, height: 630, alt: 'Rinto Saha — Software engineering, AI, and security' }] },
  twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/branding/social-preview.png`] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={manrope.variable}><body>{children}</body></html>;
}
