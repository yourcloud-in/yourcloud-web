import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar-Powered Cloud India — Zero Carbon | GravRel',
  description: 'GravRel runs on 100% solar power. Zero carbon emissions, zero water waste. Real-time carbon dashboard. BRSR Green Certificates for ESG reporting. Bhubaneswar, Odisha.',
  alternates: { canonical: 'https://gravrelaetherops.com/green' },
  openGraph: { title: 'GravRel — Zero Carbon Cloud', description: '100% solar. Zero water. BRSR certificates. Built in Bhubaneswar.', url: 'https://gravrelaetherops.com/green' },
};

const pillars = [
  { icon: '☀️', title: 'Zero Carbon Emissions', desc: 'Our datacenter runs on 100% solar power via Growatt hybrid inverter and LiFePO4 battery backup. Zero grid electricity. Zero fossil fuels. Ever.', stat: '0 kg', statLabel: 'CO₂ per compute hour' },
  { icon: '💧', title: 'Zero Water Waste', desc: 'Air-based cooling only — split AC + DC fans. No liquid cooling, no water blocks, no evaporative cooling. Nothing that wastes a drop of water.', stat: '0 L', statLabel: 'Water consumed' },
  { icon: '🌱', title: 'Green to the Environment', desc: 'Every GravRel customer gets a BRSR Green Certificate for ESG reporting. Not just green ourselves — we help you prove it to your investors.', stat: '100%', statLabel: 'Renewable energy' },
];

export default function GreenPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-full px-4 py-1.5 text-sm text-[#1D9E75] mb-6">
          <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
          100% Solar · Zero Carbon · Zero Water Waste
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">The only cloud that is<br /><span className="text-[#1D9E75]">truly green.</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">AWS consumes millions of litres of water annually. We consume zero. AWS runs on grid electricity. We run on sunlight. This is not marketing — it is architecture.</p>
      </section>

      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div key={i} className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-8">
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <div className="text-4xl font-black text-[#1D9E75] mb-1">{p.stat}</div>
              <div className="text-xs text-gray-500 mb-4">{p.statLabel}</div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Solar Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Inverter',   value: 'Growatt Hybrid — solar + battery management' },
              { label: 'Battery',    value: 'LiFePO4 — long life, zero toxic chemicals' },
              { label: 'Cooling',    value: '1.5 ton inverter split AC + 120mm DC fans' },
              { label: 'Monitoring', value: 'Real-time via Growatt app + Datacenter Live' },
              { label: 'Backup',     value: 'Battery handles 6+ hours of full server load' },
              { label: 'Grid',       value: 'Zero dependency — 100% off-grid operation' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#1D9E75] font-semibold text-sm min-w-[100px]">{item.label}</span>
                <span className="text-gray-400 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Your Green Certificate</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Every GravRel customer receives a BRSR Green Certificate proving your compute runs on 100% solar power. Use it in ESG reports and investor decks.</p>
          <a href="/pricing" className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">Start with GravRel →</a>
        </div>
      </section>
    </main>
  );
}
