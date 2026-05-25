export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GravRel',
    url: 'https://gravrel.com',
    logo: 'https://gravrel.com/logo.png',
    description: "India's first solar-powered, DPDP-compliant cloud infrastructure. Built in Bhubaneswar, Odisha.",
    foundingDate: '2025',
    founder: { '@type': 'Person', name: 'Babrit Behera', jobTitle: 'Founder & CEO', email: 'ceo@gravrel.com' },
    address: { '@type': 'PostalAddress', addressLocality: 'Bhubaneswar', addressRegion: 'Odisha', addressCountry: 'IN' },
    contactPoint: { '@type': 'ContactPoint', email: 'ceo@gravrel.com', contactType: 'customer support', availableLanguage: ['English', 'Hindi', 'Odia'] },
    sameAs: ['https://gravrel.com','https://www.linkedin.com/company/yourcloud','https://twitter.com/YourCloudIN','https://www.instagram.com/yourcloud.in','https://www.youtube.com/@YourCloud','https://github.com/yourcloud-in'],
    identifier: { '@type': 'PropertyValue', name: 'UDYAM', value: 'UDYAM-OD-03-0020346' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GravRel Cloud Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://gravrel.com',
    description: 'GravRel cloud platform — VMs, databases, Kubernetes, ML/GPU, LLM. DPDP compliant. Solar powered. Data stays in India.',
    offers: { '@type': 'Offer', price: '199', priceCurrency: 'INR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '199', priceCurrency: 'INR', unitText: 'MONTH' } },
    featureList: ['DPDP Act 2023 compliant','100% solar powered','Data stored in India','INR billing with GST','UPI payment support','Free DPDP compliance dashboard','AI assistant included','Real-time carbon dashboard','Free domain for students','Zero carbon emissions','Zero water waste'],
    author: { '@type': 'Organization', name: 'GravRel', url: 'https://gravrel.com' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GravRel',
    image: 'https://gravrel.com/og-image.png',
    '@id': 'https://gravrel.com',
    url: 'https://gravrel.com',
    email: 'ceo@gravrel.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Bhubaneswar', addressRegion: 'Odisha', postalCode: '751001', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 20.2961, longitude: 85.8245 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    priceRange: '₹₹',
    description: "GravRel — India's first solar-powered, DPDP-compliant cloud. Serving startups, enterprises, and researchers across India.",
    areaServed: { '@type': 'Country', name: 'India' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GravRel?', acceptedAnswer: { '@type': 'Answer', text: "GravRel is India's first solar-powered, DPDP-compliant cloud infrastructure company. Based in Bhubaneswar, Odisha. UDYAM: UDYAM-OD-03-0020346. Website: gravrel.com" } },
      { '@type': 'Question', name: 'Is GravRel DPDP compliant?', acceptedAnswer: { '@type': 'Answer', text: "Yes. GravRel is India's only cloud built for DPDP Act 2023 from day one. All data stored physically in Bhubaneswar, Odisha — never leaves India." } },
      { '@type': 'Question', name: 'Is GravRel solar powered?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GravRel runs on 100% solar power. Zero grid electricity. Zero carbon emissions. Zero water waste.' } },
      { '@type': 'Question', name: 'How much cheaper is GravRel vs AWS?', acceptedAnswer: { '@type': 'Answer', text: 'GravRel is approximately 60% cheaper than AWS Mumbai. VMs from ₹199/month with INR billing and GST invoices.' } },
      { '@type': 'Question', name: 'Where is GravRel located?', acceptedAnswer: { '@type': 'Answer', text: 'GravRel is based in Bhubaneswar, Odisha, India. Founder: Babrit Behera. UDYAM: UDYAM-OD-03-0020346. gravrel.com' } },
      { '@type': 'Question', name: 'Does GravRel offer free domains for students?', acceptedAnswer: { '@type': 'Answer', text: "Yes. GravRel offers free yourproject.yc.in subdomains for students, researchers, open source, and NGOs. No credit card. Free for 1 year, renewable. Because talent in India should never die due to lack of money." } },
      { '@type': 'Question', name: "What is GravRel's environmental commitment?", acceptedAnswer: { '@type': 'Answer', text: 'GravRel is committed to zero carbon emissions, zero water waste, and being green to the environment. 100% solar powered. No liquid cooling. BRSR Green Certificates issued to customers.' } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
