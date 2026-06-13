import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datacenter | GravRel',
  description: 'Live status of GravRel infrastructure — solar output, node health, Bhubaneswar DC.',
  alternates: { canonical: 'https://gravrelaetherops.com/datacenter' },
};

export default function DatacenterPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-full px-4 py-1.5 text-sm text-[#1D9E75] mb-6">
            <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
            Live from Bhubaneswar, Odisha
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Datacenter</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real-time health of our infrastructure. Solar generation, node CPU/RAM, and network status — all live.
          </p>
        </div>

        {/* Specs */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#0D2137] border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Hardware</h2>
            {[
              { label: 'Compute', value: '2x Dell PowerEdge R750' },
              { label: 'GPU', value: 'NVIDIA A40 48GB' },
              { label: 'Storage', value: 'TrueNAS SCALE 48TB RAID-Z2' },
              { label: 'Network', value: 'MikroTik CRS326 + pfSense FW4B' },
              { label: 'Virtualisation', value: 'Proxmox VE clustered' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between py-3 border-b border-white/5 last:border-0">
                <span className="text-gray-400 text-sm">{label}</span>
                <span className="text-white text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0D2137] border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Solar Infrastructure</h2>
            {[
              { label: 'Inverter', value: 'Growatt Hybrid' },
              { label: 'Battery', value: 'LiFePO4 — zero toxic chemicals' },
              { label: 'Cooling', value: '1.5 ton split AC + DC fans' },
              { label: 'Monitoring', value: 'Growatt + Grafana real-time' },
              { label: 'Grid dependency', value: '0% — 100% solar' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between py-3 border-b border-white/5 last:border-0">
                <span className="text-gray-400 text-sm">{label}</span>
                <span className="text-[#1D9E75] text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live stats placeholder */}
        <div className="bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-8 text-center">
          <div className="text-5xl font-black text-[#1D9E75] mb-2">4.2 kW</div>
          <div className="text-gray-400 text-sm mb-8">Current solar output · Updated every 30 seconds</div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Battery', value: '87%' },
              { label: 'Nodes online', value: '2/2' },
              { label: 'Uptime', value: '99.5%' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            GravRel · Bhubaneswar, Odisha · UDYAM-OD-03-0020346
          </p>
          <p className="text-sm text-[#1D9E75] mt-1">Zero carbon · Zero water waste · Solar-powered ☀️</p>
        </div>
      </div>
    </main>
  );
}
