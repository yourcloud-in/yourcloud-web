import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: {
    default: "YourCloud — India's Solar-Powered Cloud Infrastructure",
    template: '%s | YourCloud',
  },
  description:
    'Deploy VMs, managed databases, Kubernetes, and ML environments in seconds. ' +
    "India's first DPDP-compliant, solar-powered cloud. 60% cheaper than AWS. " +
    'Data never leaves India. Built in Bhubaneswar, Odisha.',
  keywords: [
    'cloud hosting India',
    'cloud server Odisha',
    'AWS alternative India',
    'DPDP compliant cloud',
    'solar powered cloud India',
    'managed database India',
    'Kubernetes India',
    'Tier 2 India cloud',
    'cheap cloud hosting India',
    'cloud Bhubaneswar',
  ],
  authors: [{ name: 'Babrit Behera', url: 'https://yourcloud.in' }],
  creator: 'GravrelAetherOps Private Limited',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yourcloud.in',
    siteName: 'YourCloud',
    title: "YourCloud — India's Solar-Powered Cloud",
    description:
      'DPDP-compliant, 100% solar-powered cloud infrastructure for Indian startups and enterprises. ' +
      '60% cheaper than AWS. Data stays in India.',
    images: [{ url: 'https://yourcloud.in/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "YourCloud — India's Solar-Powered Cloud",
    description: 'DPDP-compliant cloud. 60% cheaper than AWS. 100% solar. Data stays in India.',
    images: ['https://yourcloud.in/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://yourcloud.in' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
