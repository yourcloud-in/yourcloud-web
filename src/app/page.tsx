import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "India's First Solar-Powered DPDP-Compliant Cloud | YourCloud",
  description:
    "Deploy cloud VMs, databases and Kubernetes in India — 60% cheaper than AWS. DPDP Act 2023 compliant from day one. 100% solar powered. Data never leaves India. Built in Bhubaneswar, Odisha.",
  alternates: { canonical: 'https://yourcloud.in' },
  openGraph: {
    title: "YourCloud — India's First Solar Cloud",
    description: 'DPDP compliant. 100% solar. 60% cheaper than AWS. Data stays in Odisha.',
    url: 'https://yourcloud.in',
  },
};

export { default } from './page-client';
