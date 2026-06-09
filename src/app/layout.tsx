import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'GravRel — India\'s First Solar-Powered DPDP Cloud',
  description: '60% cheaper than AWS. DPDP Act 2023 compliant from day one. 100% solar powered. Data never leaves India. Built in Bhubaneswar, Odisha.',
  keywords: ['cloud hosting India', 'DPDP compliant cloud', 'solar powered cloud', 'Bhubaneswar cloud', 'affordable cloud India'],
  openGraph: {
    title: 'GravRel — India\'s First Solar-Powered DPDP Cloud',
    description: '60% cheaper than AWS. DPDP compliant. 100% solar. Bhubaneswar, Odisha.',
    url: 'https://gravrel.com',
    siteName: 'GravRel',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="bg-gravrel-dark text-white antialiased">{children}</body>
    </html>
  )
}
