import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DPDP Act 2023 Compliant Cloud India | YourCloud',
  description:
    "India's only cloud built for DPDP Act 2023 from day one. Data stays in Bhubaneswar, Odisha. Free DPDP compliance dashboard, instant DPA, Green Badge. No ₹250 crore fine risk.",
  alternates: { canonical: 'https://yourcloud.in/dpdp' },
  keywords: [
    'DPDP compliant cloud India',
    'DPDP Act 2023 cloud',
    'data protection India cloud',
    'DPDP compliance dashboard',
    'digital personal data protection cloud',
  ],
  openGraph: {
    title: 'DPDP Act 2023 Compliant Cloud — YourCloud',
    description: 'Only Indian cloud built for DPDP from day one. Data in Odisha. Free compliance dashboard.',
    url: 'https://yourcloud.in/dpdp',
  },
};

export { default } from './page-client';
