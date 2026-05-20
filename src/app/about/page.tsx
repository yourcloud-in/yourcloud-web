import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, MapPin, Zap, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description: 'YourCloud is India\'s first solar-powered, DPDP-compliant cloud. Built by Babrit Behera in Bhubaneswar, Odisha.',
};

const TIMELINE = [
  { date: 'Jun 2025', event: 'Company registered — GravrelAetherOps Pvt Ltd' },
  { date: 'Jun 2025', event: 'Entire software stack written — 6 repos complete' },
  { date: 'Jul 2025', event: 'Hardware procurement — Dell R750, TrueNAS, network gear' },
  { date: 'Aug 2025', event: 'Solar installation — 15kW system on roof' },
  { date: 'Sep 2025', event: 'Software deployed — first 5 beta customers' },
  { date: 'Dec 2025', event: 'Target: 30 customers · ₹1.2L MRR · seed round' },
];

const STACK = [
  { label: 'Compute',    value: '2× Dell R750 on Proxmox VE — clustered'   },
  { label: 'Storage',    value: 'TrueNAS SCALE · 48TB RAID-Z2 · NVMe cache' },
  { label: 'GPU',        value: 'NVIDIA A40 48GB — MIG for multi-tenant ML' },
  { label: 'Network',    value: 'MikroTik 10GbE · pfSense · WireGuard VPN'  },
  { label: 'Solar',      value: 'Growatt hybrid inverter · LiFePO4 battery'  },
  { label: 'Controller', value: 'PostgreSQL · Redis · MinIO · Keycloak · Caddy' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 text-center mb-20">
          <div className="flex items-center justify-center gap-1.5 text-brand-600 text-sm mb-6">
            <MapPin size={14} /> Bhubaneswar, Odisha, India
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5">
            Built in Tier 2 India.<br />
            <span className="gradient-text">For all of India.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            YourCloud started with a simple observation: Indian startups and enterprises were
            paying AWS and Hetzner prices in dollars or euros, for data that then left the country —
            while India's own DPDP Act demanded data stay local. That gap needed to be closed.
          </p>
        </section>

        {/* Founder */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-brand-900 text-white rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-400 flex items-center justify-center text-2xl font-bold">B</div>
              <div>
                <p className="font-semibold text-white text-lg">Babrit Behera</p>
                <p className="text-brand-300 text-sm">Founder & CEO · ceo@yourcloud.in</p>
              </div>
            </div>
            <blockquote className="text-brand-100 text-lg leading-relaxed mb-6">
              "I built the entire platform — every line of code, every architectural decision —
              from Bhubaneswar. Not because I couldn't go to Bengaluru, but because I believe
              Tier 2 India deserves infrastructure built inside it, not pointed at it from outside."
            </blockquote>
            <p className="text-brand-300 text-sm">
              Phone and email are on every invoice. That's not a marketing line — it's a commitment.
            </p>
          </div>
        </section>

        {/* Why solar */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Leaf,   title: 'BRSR compliance',   desc: "India's top 1000 listed companies must now report cloud infrastructure carbon footprint. We make that trivial." },
              { icon: Zap,    title: 'Lower operating costs', desc: 'Solar eliminates electricity bills. Those savings go directly into keeping our prices 60% below AWS.' },
              { icon: Shield, title: 'Verifiable, not greenwashing', desc: 'Panels on our roof, Growatt data live on our website. Not a footnote in a sustainability report.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware stack */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">The actual hardware</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            {STACK.map(({ label, value }) => (
              <div key={label} className="flex gap-4 px-6 py-4 border-b border-gray-50 last:border-0">
                <span className="text-sm font-medium text-gray-500 w-28 flex-shrink-0">{label}</span>
                <span className="text-sm text-gray-700">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            All hardware physically located in Bhubaneswar, Odisha. Network: 192.168.1.0/24 private LAN + WireGuard VPN 10.8.0.0/24.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our journey</h2>
          <div className="relative pl-6 border-l-2 border-brand-100 space-y-6">
            {TIMELINE.map(({ date, event }) => (
              <div key={event} className="relative">
                <div className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-brand-400 border-2 border-white" />
                <p className="text-xs font-medium text-brand-600 mb-1">{date}</p>
                <p className="text-sm text-gray-700">{event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Want to be part of this?</h2>
          <p className="text-gray-500 mb-8">
            We're looking for our first 10 customers, grant funding, and community partners in Odisha.
            If any of that is you — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
            <Link href="https://console.yourcloud.in/register" className="btn-secondary">Try it free</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
