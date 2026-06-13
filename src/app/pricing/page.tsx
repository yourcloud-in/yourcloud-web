import type { Metadata } from 'next';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | GravRel',
  description: 'GravRel pricing — Cloud VMs from Rs 199/month. All prices in INR with GST invoices.',
  alternates: { canonical: 'https://gravrelaetherops.com/pricing' },
};

const VM_PLANS = [
  { name: 'Starter',    vcpus: 1,  ram: 1,  disk: 20,  price: 199,  highlight: false },
  { name: 'Basic',      vcpus: 2,  ram: 2,  disk: 40,  price: 499,  highlight: false },
  { name: 'Standard',   vcpus: 4,  ram: 4,  disk: 80,  price: 999,  highlight: true, badge: 'Popular' },
  { name: 'Pro',        vcpus: 8,  ram: 8,  disk: 160, price: 1999, highlight: false },
  { name: 'Enterprise', vcpus: 16, ram: 16, disk: 320, price: 3999, highlight: false },
];

const DB_PLANS = [
  { name: 'DB Starter',    ram: 2, disk: 20,  price: 499,  engines: 'MySQL / PostgreSQL' },
  { name: 'DB Standard',   ram: 4, disk: 50,  price: 999,  engines: 'MySQL / PostgreSQL' },
  { name: 'DB Pro',        ram: 8, disk: 100, price: 1999, engines: 'MySQL / PostgreSQL' },
  { name: 'DB HA Cluster', ram: 8, disk: 100, price: 4999, engines: '3-node high availability' },
  { name: 'Redis Cache',   ram: 1, disk: 0,   price: 299,  engines: 'Redis 7.2' },
  { name: 'MongoDB',       ram: 4, disk: 50,  price: 999,  engines: 'MongoDB 7.0' },
];

const OTHER = [
  { category: 'Kubernetes',       plans: [{ name: 'Starter (1 node)', price: 999 }, { name: 'Standard (3 nodes)', price: 4999 }, { name: 'Pro (5 nodes)', price: 9999 }] },
  { category: 'Object Storage',   plans: [{ name: '100 GB', price: 199 }, { name: '500 GB', price: 499 }, { name: '2 TB', price: 999 }] },
  { category: 'ML / GPU (A40)',   plans: [{ name: 'Shared slice', price: 999 }, { name: 'Half A40 (24GB)', price: 2499 }, { name: 'Full A40 (48GB)', price: 4999 }] },
  { category: 'LLM Playground',   plans: [{ name: 'Free (limited)', price: 0 }, { name: 'Standard', price: 499 }, { name: 'Pro', price: 999 }] },
];

const INCLUDES = [
  'GST invoice every month',
  'UPI / cards / net banking',
  '99.5% uptime SLA',
  'WireGuard VPN for every VM',
  'DPDP compliance dashboard',
  'CEO personally reachable',
  'Data never leaves India',
  'Solar-powered infrastructure',
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-full px-4 py-1.5 text-sm text-[#1D9E75] mb-6">
            60% cheaper than AWS · All prices in INR
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            All prices in INR. 18% GST added at checkout. No lock-in. Cancel any time.
          </p>
        </div>

        {/* VM Plans */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">Cloud VMs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VM_PLANS.map((p) => (
              <div key={p.name} className={`rounded-2xl p-5 border-2 transition-all ${p.highlight ? 'border-[#1D9E75] bg-[#1D9E75]/10' : 'border-white/10 bg-[#0D2137]'}`}>
                {'badge' in p && p.badge && (
                  <span className="text-xs font-semibold text-[#1D9E75] bg-[#1D9E75]/20 px-2 py-0.5 rounded-full mb-3 inline-block">{p.badge}</span>
                )}
                <h3 className="text-sm font-semibold text-white mb-3">{p.name}</h3>
                <p className="text-2xl font-bold text-white mb-1">Rs {p.price}<span className="text-sm font-normal text-gray-400">/mo</span></p>
                <p className="text-xs text-gray-400">{p.vcpus} vCPU · {p.ram}GB RAM · {p.disk}GB SSD</p>
              </div>
            ))}
          </div>
        </section>

        {/* DB Plans */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">Managed Databases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DB_PLANS.map((p) => (
              <div key={p.name} className="bg-[#0D2137] rounded-2xl border border-white/10 p-5">
                <h3 className="text-sm font-semibold text-white mb-1">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{p.engines}{p.ram > 0 && ` · ${p.ram}GB RAM`}</p>
                <p className="text-xl font-bold text-white">Rs {p.price}<span className="text-sm font-normal text-gray-400">/mo</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Plans */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER.map(({ category, plans }) => (
              <div key={category} className="bg-[#0D2137] rounded-2xl border border-white/10 p-5">
                <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {plans.map((p) => (
                    <li key={p.name} className="flex justify-between text-sm">
                      <span className="text-gray-400">{p.name}</span>
                      <span className="font-medium text-white">{p.price === 0 ? 'Free' : `Rs ${p.price}/mo`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Everything included */}
        <section className="max-w-3xl mx-auto px-6">
          <div className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-3xl p-8">
            <h2 className="text-lg font-semibold text-white mb-6 text-center">Everything included in every plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <Check size={14} className="text-[#1D9E75] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="https://console.gravrelaetherops.com/register"
                className="inline-flex items-center gap-2 bg-[#1D9E75] text-white px-7 py-3 rounded-xl font-medium hover:bg-[#0F6E56] transition-all">
                Start free beta →
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            gravrelaetherops.com · ceo@gravrel.com · Bhubaneswar, Odisha · UDYAM-OD-03-0020346
          </p>
          <p className="text-sm text-[#1D9E75] mt-1">Zero carbon · Zero water waste · Solar-powered ☀️</p>
        </div>
      </div>
    </main>
  );
}
