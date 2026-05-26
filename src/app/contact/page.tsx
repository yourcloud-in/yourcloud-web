import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact GravRel — Talk to Babrit Behera | GravRel',
  description: "Contact GravRel founder Babrit Behera directly. India's first solar-powered DPDP cloud. ceo@gravrel.com · Bhubaneswar, Odisha.",
  alternates: { canonical: 'https://gravrel.com/contact' },
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Talk to <span className="text-[#1D9E75]">Babrit</span></h1>
          <p className="text-xl text-gray-400">No support tickets. No bots. You talk directly to the founder.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: '📧', label: 'Email', value: 'ceo@gravrel.com', sub: 'Response within 2 hours' },
            { icon: '🏙️', label: 'Location', value: 'Bhubaneswar, Odisha', sub: 'India · UDYAM-OD-03-0020346' },
            { icon: '🌐', label: 'Website', value: 'gravrel.com', sub: "India's first solar cloud" },
            { icon: '☀️', label: 'Mission', value: 'Zero carbon · Zero water waste', sub: 'Green to the environment' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0D2137] border border-white/10 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <div className="text-xs text-[#1D9E75] font-semibold mb-1 uppercase tracking-wide">{item.label}</div>
              <div className="text-white font-semibold">{item.value}</div>
              <div className="text-gray-500 text-sm mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Start with a free beta</h2>
          <p className="text-gray-400 mb-6">Email Babrit directly. 3-month free beta. DPDP compliant, 60% cheaper than AWS, data stays in Odisha.</p>
          <a href="mailto:ceo@gravrel.com?subject=GravRel Beta Interest" className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">📧 Email Babrit Now</a>
        </div>
      </section>
    </main>
  );
}
