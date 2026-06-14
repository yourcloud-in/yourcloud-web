import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ChatWidget from './ChatWidget'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gravrel.com'),
  title: {
    default: 'GravRel — India\'s First Solar-Powered DPDP Cloud',
    template: '%s | GravRel',
  },
  description: '60% cheaper than AWS. DPDP Act 2023 compliant from day one. 100% solar powered. Data never leaves India. Cloud VMs from Rs 199/mo. Built in Bhubaneswar, Odisha.',
  keywords: [
    'cloud hosting India', 'DPDP compliant cloud', 'solar powered cloud India',
    'Bhubaneswar cloud', 'affordable cloud India', 'DPDP Act 2023 cloud',
    'cloud hosting Odisha', 'AWS alternative India', 'cheap cloud India',
    'data sovereignty India', 'BRSR green cloud', 'Tier 2 India cloud',
    'cloud VMs India', 'managed database India', 'Kubernetes India',
  ],
  authors: [{ name: 'Babrit Behera', url: 'https://gravrel.com' }],
  creator: 'Babrit Behera',
  publisher: 'GravRel',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://gravrel.com',
  },
  openGraph: {
    title: 'GravRel — India\'s First Solar-Powered DPDP Cloud',
    description: '60% cheaper than AWS. DPDP compliant. 100% solar. Data never leaves India. Built in Bhubaneswar, Odisha.',
    url: 'https://gravrel.com',
    siteName: 'GravRel',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GravRel — Solar Cloud India' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GravRel — India\'s First Solar-Powered DPDP Cloud',
    description: '60% cheaper than AWS. DPDP compliant. 100% solar. Data never leaves India.',
    images: ['/og-image.png'],
    creator: '@gravrelcloud',
  },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GravRel",
              "url": "https://gravrel.com",
              "logo": "https://gravrel.com/logo.png",
              "description": "India's first solar-powered, DPDP-compliant cloud infrastructure platform. Built in Bhubaneswar, Odisha.",
              "founder": {
                "@type": "Person",
                "name": "Babrit Behera",
                "email": "ceo@gravrel.com",
                "jobTitle": "Founder & CEO"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "ceo@gravrel.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Odia"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/gravrel",
                "https://github.com/yourcloud-in"
              ]
            })
          }}
        />
        {/* Structured Data — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "GravRel Cloud",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://gravrel.com",
              "offers": {
                "@type": "Offer",
                "price": "199",
                "priceCurrency": "INR",
                "description": "Cloud VM starting from Rs 199/month"
              },
              "description": "Solar-powered DPDP-compliant cloud infrastructure. VMs, Databases, Kubernetes, Storage, ML/GPU.",
              "provider": {
                "@type": "Organization",
                "name": "GravRel",
                "url": "https://gravrel.com"
              }
            })
          }}
        />
      </head>
      <body className="bg-gravrel-dark text-white antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
