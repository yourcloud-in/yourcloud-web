import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GravRel',
  description: 'GravRel Privacy Policy — DPDP Act 2023 compliant. Your data never leaves India.',
  alternates: { canonical: 'https://gravrelaetherops.com/legal/privacy' },
};

const SECTIONS = [
  {
    title: '1. Who we are',
    body: 'GravRel ("we", "us") is a sole proprietorship registered as Babrit Behera, operating India\'s first solar-powered cloud infrastructure platform from Bhubaneswar, Odisha. UDYAM: UDYAM-OD-03-0020346. We are committed to protecting your personal data in accordance with the Digital Personal Data Protection Act 2023 (DPDP Act) and all applicable Indian laws.',
  },
  {
    title: '2. Data we collect',
    body: 'We collect: Account data (name, email, phone, company, GST number); Payment data (processed via Razorpay — we do not store card details); Usage data (VMs deployed, resources consumed, API calls); Technical data (IP addresses, user agent strings, login timestamps); Support communications.',
  },
  {
    title: '3. How we use your data',
    body: 'We use your data to: Provision and manage cloud services; Generate GST-compliant invoices; Send service notifications and billing reminders; Provide customer support; Improve our platform; Comply with legal obligations under Indian law.',
  },
  {
    title: '4. Data location — your data never leaves India',
    body: 'All personal data and customer data is stored exclusively within the State of Odisha, India. Our servers are physically located in our Bhubaneswar datacenter. We do not transfer, replicate, or process data outside India. This is not a policy choice — it is a physical constraint of our infrastructure and a core product feature.',
  },
  {
    title: '5. DPDP Act 2023 compliance',
    body: 'We are Data Fiduciaries under the DPDP Act. Your rights as a Data Principal include: Right to access your personal data; Right to correction and erasure; Right to nominate; Right to grievance redressal. To exercise any of these rights, contact our Data Protection Officer at ceo@gravrel.com. We will respond within 72 hours.',
  },
  {
    title: '6. Data Processing Agreements',
    body: 'If you process personal data of others using our infrastructure (e.g., you store customer data in a GravRel database), a Data Processing Agreement (DPA) is available on request. Email ceo@gravrel.com with subject "DPA Request".',
  },
  {
    title: '7. Data retention',
    body: 'We retain your data for as long as your account is active, plus 90 days after termination for backup purposes. After 90 days, all data is permanently deleted. Audit logs are retained for 12 months. Invoice records are retained for 7 years as required by the Income Tax Act.',
  },
  {
    title: '8. Third-party processors',
    body: 'We use: Razorpay (payment processing — Indian company); Brevo (transactional email — EU GDPR compliant); Growatt (solar monitoring — data is operational, not personal). We do not sell your data to any third party.',
  },
  {
    title: '9. Security',
    body: 'We protect your data with: TLS 1.3 encryption in transit; AES-256 encryption for sensitive data at rest; WireGuard VPN for all VM access; Role-based access control; Regular security audits. No team member can access customer data stored inside VMs or databases.',
  },
  {
    title: '10. Cookies',
    body: 'Our marketing website (gravrelaetherops.com) uses only essential session cookies. We do not use tracking or advertising cookies. Our console (console.gravrelaetherops.com) uses session cookies for authentication only.',
  },
  {
    title: '11. Contact and grievances',
    body: 'Data Protection Officer: Babrit Behera · ceo@gravrel.com · GravRel, Bhubaneswar, Odisha, India. For DPDP Act grievances, we will respond within 72 hours and resolve within 30 days.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">GravRel · DPDP Act 2023 compliant · Last updated: June 2026</p>
          </div>

          <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-2xl p-5 mb-8">
            <p className="text-sm font-semibold text-[#1D9E75] mb-1">🇮🇳 Your data never leaves India</p>
            <p className="text-sm text-gray-300">All personal and customer data is stored exclusively in our Bhubaneswar, Odisha datacenter. This is physically enforced by our infrastructure — not just a policy.</p>
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
