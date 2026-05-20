import { Shield, Leaf, Zap, Check } from 'lucide-react';

const MOATS = [
  {
    icon: Shield,
    title: 'DPDP-First',
    color: 'text-blue-600 bg-blue-50',
    points: [
      'Only cloud built for DPDP Act 2023 from day one',
      'Instant Data Processing Agreements in one click',
      'Compliance dashboard included in every account',
      'Green badge for your own website and BRSR report',
    ],
  },
  {
    icon: Leaf,
    title: 'Solar ESG',
    color: 'text-brand-600 bg-brand-50',
    points: [
      'Only verified solar-powered cloud in India',
      'Real-time Carbon Dashboard — public and auditable',
      'Green Cloud Certificates for BRSR/ESG filing',
      'Zero grid electricity for all compute workloads',
    ],
  },
  {
    icon: Zap,
    title: 'Tier 2 India',
    color: 'text-orange-600 bg-orange-50',
    points: [
      'Only cloud physically inside Tier 2 India',
      'Bhubaneswar base — Odisha government pipeline',
      'Local language support (Odia, Hindi, English)',
      'CEO personally reachable — not a chatbot, not a ticket',
    ],
  },
];

const COMPARE = [
  { feature: 'Data stays in India',    yc: true,  aws: true,  hetzner: false },
  { feature: 'DPDP Act compliance',    yc: true,  aws: false, hetzner: false },
  { feature: 'Solar powered',          yc: true,  aws: false, hetzner: false },
  { feature: 'GST invoice (Indian)',   yc: true,  aws: true,  hetzner: false },
  { feature: 'UPI / Razorpay billing', yc: true,  aws: false, hetzner: false },
  { feature: 'Pricing in INR',         yc: true,  aws: false, hetzner: false },
  { feature: 'CEO reachable',          yc: true,  aws: false, hetzner: false },
  { feature: 'Tier 2 India presence',  yc: true,  aws: false, hetzner: false },
];

export default function WhyUs() {
  return (
    <>
      {/* 3 moats */}
      <section className="bg-gray-50">
        <div className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Why YourCloud is different
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Three structural advantages no hyperscaler can copy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOATS.map(({ icon: Icon, title, color, points }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check size={14} className="text-brand-400 mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-gray-50 pb-20">
        <div className="px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">How we compare</h2>
            <p className="text-gray-500">vs AWS Mumbai and Hetzner — the two most common alternatives</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 w-1/2">Feature</th>
                  <th className="px-4 py-4 text-sm font-semibold text-brand-600">YourCloud</th>
                  <th className="px-4 py-4 text-sm font-medium text-gray-400">AWS</th>
                  <th className="px-4 py-4 text-sm font-medium text-gray-400">Hetzner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {COMPARE.map(({ feature, yc, aws, hetzner }) => (
                  <tr key={feature}>
                    <td className="px-6 py-3.5 text-sm text-gray-700">{feature}</td>
                    <td className="px-4 py-3.5 text-center">
                      {yc ? <Check size={16} className="text-brand-400 mx-auto" /> : <span className="text-gray-200 text-lg leading-none">×</span>}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      {aws ? <Check size={16} className="text-gray-400 mx-auto" /> : <span className="text-gray-200 text-lg leading-none">×</span>}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      {hetzner ? <Check size={16} className="text-gray-400 mx-auto" /> : <span className="text-gray-200 text-lg leading-none">×</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
