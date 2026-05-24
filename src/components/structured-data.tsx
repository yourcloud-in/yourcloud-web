// Structured Data Component
// Placed inside <head> in layout.tsx
// Tells Google exactly what GravRel is — enables rich search results

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GravRel',
    alternateName: 'YourCloud',
    url: 'https://yourcloud.in',
    logo: 'https://yourcloud.in/logo.png',
    description:
      "India's first solar-powered, DPDP-compliant cloud infrastructure platform built in Bhubaneswar, Odisha.",
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Babrit Behera',
      jobTitle: 'Founder & CEO',
      email: 'ceo@yourcloud.in',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'ceo@yourcloud.in',
      contactType: 'customer support',
      availableLanguage: ['English', 'Hindi', 'Odia'],
    },
    sameAs: [
      'https://www.linkedin.com/company/yourcloud',
      'https://twitter.com/YourCloudIN',
      'https://www.instagram.com/yourcloud.in',
      'https://www.youtube.com/@YourCloud',
      'https://github.com/yourcloud-in',
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'UDYAM',
      value: 'UDYAM-OD-03-0020346',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'YourCloud',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://yourcloud.in',
    description:
      'Cloud infrastructure platform — VMs, databases, Kubernetes, ML/GPU, LLM playground. DPDP compliant. Solar powered. Data stays in India.',
    offers: {
      '@type': 'Offer',
      price: '199',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '199',
        priceCurrency: 'INR',
        unitText: 'MONTH',
      },
    },
    featureList: [
      'DPDP Act 2023 compliant',
      '100% solar powered',
      'Data stored in India',
      'INR billing with GST',
      'UPI payment support',
      'Free DPDP compliance dashboard',
      'AI assistant included',
      'Real-time carbon dashboard',
      'Free domain for students',
    ],
    author: {
      '@type': 'Organization',
      name: 'GravRel',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GravRel — YourCloud',
    image: 'https://yourcloud.in/og-image.png',
    '@id': 'https://yourcloud.in',
    url: 'https://yourcloud.in',
    email: 'ceo@yourcloud.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhubaneswar',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      postalCode: '751001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.2961,
      longitude: 85.8245,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '₹₹',
    description:
      "India's first solar-powered, DPDP-compliant cloud infrastructure. Serving startups, enterprises, and researchers across India.",
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is YourCloud DPDP compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. YourCloud is India's only cloud built for DPDP Act 2023 from day one. All data is stored physically in Bhubaneswar, Odisha and never leaves India. Every account includes a DPDP compliance dashboard and Data Processing Agreement.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is YourCloud really solar powered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our datacenter in Bhubaneswar runs on 100% solar power using Growatt hybrid inverters and LiFePO4 battery backup. We have zero grid electricity dependency and zero carbon emissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much cheaper is YourCloud vs AWS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YourCloud is approximately 60% cheaper than AWS Mumbai for equivalent VM configurations. VMs start at ₹199/month with INR billing, GST invoices, and UPI payment support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is YourCloud data stored?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All data is physically stored on servers in Bhubaneswar, Odisha, India. Data never leaves India under any circumstances. This is a physical fact, not just a policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer free domains for students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. GravRel offers free yourproject.yc.in subdomains for students, researchers, open source contributors, and NGOs. No credit card required. Free for 1 year, renewable.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the YourCloud uptime SLA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YourCloud guarantees 99.5% monthly uptime for all cloud infrastructure services. SLA credits are applied automatically for any breach.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
