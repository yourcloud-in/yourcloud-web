import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'YourCloud Terms of Service — GravrelAetherOps Private Limited',
};

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using YourCloud services provided by GravrelAetherOps Private Limited ("Company", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.`,
  },
  {
    title: '2. Service Description',
    body: `YourCloud provides cloud infrastructure services including virtual machines, managed databases, Kubernetes clusters, object storage, and ML environments. Services are provided on a subscription basis, billed monthly in Indian Rupees (INR).`,
  },
  {
    title: '3. Account Responsibilities',
    body: `You are responsible for maintaining the confidentiality of your account credentials. You agree not to use the services for any unlawful purpose, to distribute malware, conduct DDoS attacks, mine cryptocurrency without prior written consent, or violate any applicable Indian law including the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023.`,
  },
  {
    title: '4. Billing and Payment',
    body: `Services are billed monthly on the 1st of each month via Razorpay. Prices are in INR and subject to 18% GST. Non-payment results in: Day 3 reminder, Day 7 service suspension, Day 14 final warning, Day 21 account deletion. Refunds are considered on a case-by-case basis — contact ceo@yourcloud.in.`,
  },
  {
    title: '5. Service Level Agreement',
    body: `We commit to 99.9% monthly uptime for all compute services. In the event of a breach, customers receive service credits of 10% of monthly fee per hour of downtime beyond the SLA, up to 30% of the monthly fee. The SLA does not cover downtime due to scheduled maintenance (communicated 48h in advance), customer-caused issues, or force majeure events.`,
  },
  {
    title: '6. Data Location and Privacy',
    body: `All customer data is physically stored within the State of Odisha, India. We do not transfer personal data outside India. We comply with the Digital Personal Data Protection Act 2023 (DPDP Act). A Data Processing Agreement is available on request.`,
  },
  {
    title: '7. Intellectual Property',
    body: `The YourCloud platform, software, and documentation are owned by GravrelAetherOps Private Limited. Customer data remains the property of the customer. We claim no rights over data stored on our infrastructure.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `To the maximum extent permitted by law, our liability is limited to the amount paid by you in the 3 months preceding the claim. We are not liable for indirect, consequential, or punitive damages. This limitation does not apply to our data protection obligations under the DPDP Act.`,
  },
  {
    title: '9. Termination',
    body: `Either party may terminate the agreement with 30 days written notice. We may terminate immediately for violation of these terms. Upon termination, customer data is available for export for 7 days, after which it is permanently deleted.`,
  },
  {
    title: '10. Governing Law',
    body: `These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Bhubaneswar, Odisha, India.`,
  },
  {
    title: '11. Contact',
    body: `For any questions regarding these terms, contact us at ceo@yourcloud.in or write to: GravrelAetherOps Private Limited, Bhubaneswar, Odisha, India.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">Terms of Service</h1>
            <p className="text-gray-400 text-sm">GravrelAetherOps Private Limited · Last updated: June 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            {SECTIONS.map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-base font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
