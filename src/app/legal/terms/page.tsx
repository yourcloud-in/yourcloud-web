import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | GravRel',
  description: 'GravRel Terms of Service — India\'s first solar-powered DPDP-compliant cloud.',
  alternates: { canonical: 'https://gravrelaetherops.com/legal/terms' },
};

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using GravRel services operated by Babrit Behera (sole proprietorship, UDYAM-OD-03-0020346), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.',
  },
  {
    title: '2. Service Description',
    body: 'GravRel provides cloud infrastructure services including virtual machines, managed databases, Kubernetes clusters, object storage, and ML environments. Services are provided on a subscription basis, billed monthly in Indian Rupees (INR) plus 18% GST.',
  },
  {
    title: '3. Account Responsibilities',
    body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree not to use the services for any unlawful purpose, to distribute malware, conduct DDoS attacks, mine cryptocurrency without prior written consent, or violate any applicable Indian law including the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023.',
  },
  {
    title: '4. Billing and Payment',
    body: 'Services are billed monthly on the 1st of each month via Razorpay. Prices are in INR and subject to 18% GST. Non-payment results in: Day 3 reminder email, Day 7 service suspension, Day 14 final warning, Day 21 account deletion. Refunds are considered on a case-by-case basis — contact ceo@gravrel.com.',
  },
  {
    title: '5. Service Level Agreement',
    body: 'We commit to 99.5% monthly uptime for all compute services. In the event of a breach, customers receive service credits of 10% of monthly fee per hour of downtime beyond the SLA, up to 30% of the monthly fee. The SLA does not cover downtime due to scheduled maintenance (communicated 48 hours in advance), customer-caused issues, or force majeure events.',
  },
  {
    title: '6. Data Location and Privacy',
    body: 'All customer data is physically stored within the State of Odisha, India. We do not transfer personal data outside India. We comply with the Digital Personal Data Protection Act 2023 (DPDP Act). A Data Processing Agreement is available on request at ceo@gravrel.com.',
  },
  {
    title: '7. Solar and Green Certification',
    body: 'GravRel operates on 100% solar energy. Green Certificates issued to customers are valid for BRSR reporting and ESG compliance purposes. Carbon savings are calculated based on the Central Electricity Authority (CEA) India grid emission factor.',
  },
  {
    title: '8. Intellectual Property',
    body: 'GravRel and all associated branding, software, and documentation are the intellectual property of Babrit Behera. Customer data stored on GravRel infrastructure remains the property of the customer at all times.',
  },
  {
    title: '9. Limitation of Liability',
    body: 'GravRel\'s total liability to any customer shall not exceed the total fees paid by that customer in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages. Data loss due to customer error is not covered by our SLA.',
  },
  {
    title: '10. Termination',
    body: 'Either party may terminate the service with 30 days written notice. GravRel may terminate immediately for violation of these terms. Upon termination, customer data is retained for 90 days then permanently deleted.',
  },
  {
    title: '11. Governing Law',
    body: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bhubaneswar, Odisha, India.',
  },
  {
    title: '12. Contact',
    body: 'Babrit Behera · ceo@gravrel.com · GravRel, Bhubaneswar, Odisha, India · UDYAM-OD-03-0020346. For any questions about these terms, we respond within 72 hours.',
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
            <p className="text-gray-400 text-sm">GravRel · Last updated: June 2026 · Governed by Indian law</p>
          </div>

          <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-2xl p-5 mb-8">
            <p className="text-sm font-semibold text-[#1D9E75] mb-1">☀️ Solar-powered · DPDP compliant · Data in India</p>
            <p className="text-sm text-gray-300">By using GravRel you agree to these terms. Questions? Email ceo@gravrel.com — Babrit responds personally.</p>
          </div>

          <div className="space-y-8">
            {SECTIONS.map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-base font-semibold text-white mb-2">{title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              gravrelaetherops.com · ceo@gravrel.com · Bhubaneswar, Odisha · UDYAM-OD-03-0020346
            </p>
            <p className="text-sm text-[#1D9E75] mt-1">Zero carbon · Zero water waste · Solar-powered ☀️</p>
          </div>
        </div>
      </div>
    </main>
  );
}
