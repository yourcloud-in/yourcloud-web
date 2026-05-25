import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import {
  OrganizationSchema,
  SoftwareApplicationSchema,
  LocalBusinessSchema,
  FAQSchema,
} from '@/components/structured-data';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gravrel.com'),
  title: {
    default: "GravRel — India's First Solar-Powered DPDP-Compliant Cloud",
    template: '%s | GravRel',
  },
  description:
    "GravRel — India's first solar-powered, DPDP-compliant cloud infrastructure. Deploy VMs, databases, Kubernetes in seconds. 60% cheaper than AWS. Data never leaves India. Built in Bhubaneswar, Odisha.",
  keywords: [
    'GravRel', 'GravRel cloud', 'gravrel.com',
    'DPDP compliant cloud India', 'solar powered cloud India',
    'cloud hosting India', 'AWS alternative India',
    'cloud hosting Bhubaneswar', 'cloud hosting Odisha',
    'DPDP cloud dashboard', 'cheap cloud VMs India',
    'managed database India', 'Kubernetes India',
    'DPDP Act 2023 cloud', 'green cloud India',
    'carbon neutral cloud India', 'free domain India students',
    'cloud server Odisha', 'Indian cloud provider',
    'BRSR cloud certificate India',
  ],
  authors: [{ name: 'Babrit Behera', url: 'https://gravrel.com' }],
  creator: 'GravRel',
  publisher: 'GravRel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gravrel.com',
    siteName: 'GravRel',
    title: "GravRel — India's First Solar-Powered DPDP Cloud",
    description:
      'DPDP-compliant, 100% solar-powered cloud. 60% cheaper than AWS. Data stays in Bhubaneswar, Odisha.',
    images: [{ url: 'https://gravrel.com/og-image.png', width: 1200, height: 630, alt: 'GravRel — India First Solar DPDP Cloud' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourCloudIN',
    creator: '@YourCloudIN',
    title: "GravRel — India's Solar-Powered DPDP Cloud",
    description: 'DPDP compliant. 100% solar. 60% cheaper than AWS. Data stays in India. gravrel.com',
    images: ['https://gravrel.com/og-image.png'],
  },
  alternates: { canonical: 'https://gravrel.com' },
  verification: { google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE' },
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* Structured Data */}
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <LocalBusinessSchema />
        <FAQSchema />
        {/* Geo tags */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar, Odisha, India" />
        <meta name="geo.position" content="20.2961;85.8245" />
        <meta name="ICBM" content="20.2961, 85.8245" />
        <meta httpEquiv="content-language" content="en-IN" />
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ─────────────────────────────────────────────────────
            Plausible Analytics — Privacy-first, DPDP compliant
            No cookies · No personal data · Data stays in India
            Self-hosted at analytics.gravrel.com
            Activate after go-live: uncomment the script below
        ───────────────────────────────────────────────────── */}
        {/* <script
          defer
          data-domain="gravrel.com"
          src="https://analytics.gravrel.com/js/script.js"
        /> */}
      </head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
