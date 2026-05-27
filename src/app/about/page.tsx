import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "About GravRel — India's First Solar Cloud | GravRel",
  description: "GravRel is India's first solar-powered, DPDP-compliant cloud company. Founded by Babrit Behera in Bhubaneswar, Odisha. UDYAM-OD-03-0020346.",
  alternates: { canonical: 'https://gravrel.com/about' },
  openGraph: { title: 'About GravRel', description: 'Built in Bhubaneswar. For all of India.', url: 'https://gravrel.com/about' },
};
const timeline = [
  { year: '2025', title: 'GravRel Founded', desc: "Babrit Behera leaves his job to build India's first solar-powered, DPDP-compliant cloud from Bhubaneswar, Odisha." },
  { year: '2026 Q1', title: 'Platform Complete', desc: 'Full cloud platform built — VMs, databases, Kubernetes, ML, LLM, AI assistant, and 8 homelab services.' },
  { year: '2026 Q2', title: 'Hardware Procurement', desc: 'Dell R750 servers ordered. Solar-powered AC installed. TrueNAS storage ready. Solar panels going up.' },
  { year: '2026 Q3', title: 'First Customers', desc: '3 STPI Bhubaneswar beta customers. Platform goes live. Free domain initiative for students launched.' },
  { year: '2026 Q4', title: 'Seed Raise', desc: '30 customers, Rs 1.2L MRR. Incorporate as Pvt. Ltd. Raise seed round.' },
];
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-full px-4 py-1.5 text-sm text-[#1D9E75] mb-6">UDYAM-OD-03-0020346 · Bhubaneswar, Odisha</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Built in <span className="text-[#1D9E75]">Bhubaneswar</span>.<br />For all of India.</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">GravRel is India's first solar-powered, DPDP-compliant cloud infrastructure company. We exist to prove that world-class technology can be built from Tier 2 India.</p>
      </section>
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: '\u2600\uFE0F', title: 'Zero Carbon', desc: '100% solar powered. Growatt inverter + LiFePO4 battery. Zero grid electricity.' },
            { icon: '\uD83D\uDCA7', title: 'Zero Water Waste', desc: 'Air-cooled only. No liquid cooling. No water consumption in operations.' },
            { icon: '\uD83C\uDF31', title: 'Green to the Environment', desc: 'BRSR Green Certificates for customers. Real-time carbon dashboard.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-6 text-center">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-[#1D9E75] mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Our Story</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#1D9E75] mt-1.5 flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-0.5 bg-[#1D9E75]/20 flex-1 mt-2" />}
                </div>
                <div className="pb-6">
                  <span className="text-xs text-[#1D9E75] font-semibold">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-1">Babrit Behera</h3>
          <p className="text-[#1D9E75] text-sm mb-4">Founder & CEO · GravRel</p>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed mb-6">Left a stable job to build something that matters. GravRel is proof that Tier 2 India can build world-class infrastructure that is green, affordable, and locally owned.</p>
          <a href="mailto:ceo@gravrel.com" className="inline-flex items-center gap-2 text-[#1D9E75] font-semibold hover:underline">ceo@gravrel.com \u2192</a>
        </div>
      </section>
    </main>
  );
}
