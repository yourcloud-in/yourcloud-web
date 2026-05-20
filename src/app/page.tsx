import Link from 'next/link';
import { ArrowRight, Leaf, Shield, Zap, Server, Database, Box, HardDrive, Brain, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Pricing plans ────────────────────────────────────────────
const PLANS = [
  {
    name: 'Starter',
    price: '₹199',
    per: '/month',
    specs: '1 vCPU · 1 GB RAM · 20 GB SSD',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '₹999',
    per: '/month',
    specs: '4 vCPU · 4 GB RAM · 80 GB SSD',
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Pro',
    price: '₹1,999',
    per: '/month',
    specs: '8 vCPU · 8 GB RAM · 160 GB SSD',
    highlight: false,
  },
];

const SERVICES = [
  { icon: Server,   name: 'Cloud VMs',          desc: 'KVM-isolated VMs. SSH in 60 seconds. Cloud-init + WireGuard VPN.',    price: 'From ₹199/mo' },
  { icon: Database, name: 'Managed Databases',   desc: 'PostgreSQL, MySQL, Redis. Automated backups. Point-in-time restore.', price: 'From ₹299/mo' },
  { icon: Box,      name: 'Kubernetes',          desc: 'Managed k3s clusters. Auto-scaling. kubectl access.',                 price: 'From ₹999/mo' },
  { icon: Brain,    name: 'ML Environment',      desc: 'NVIDIA A40 48GB GPU. JupyterHub. Shared and dedicated slices.',       price: 'From ₹999/mo' },
  { icon: HardDrive,name: 'Object Storage',      desc: 'S3-compatible MinIO. Use any AWS SDK unchanged.',                    price: 'From ₹199/mo' },
  { icon: Shield,   name: 'DPDP Compliance',     desc: 'Data Processing Agreements. Compliance dashboard. Green badge.',     price: 'Included'    },
];

const MOATS = [
  {
    icon: Shield,
    title: 'DPDP-First',
    color: 'text-blue-600 bg-blue-50',
    points: [
      'Only cloud built for DPDP Act 2023 from day one',
      'Instant Data Processing Agreements',
      'Compliance dashboard in every console',
      'Green badge for your own website',
    ],
  },
  {
    icon: Leaf,
    title: 'Solar ESG',
    color: 'text-brand-600 bg-brand-50',
    points: [
      'Only verified solar-powered cloud in India',
      'Real-time Carbon Dashboard — public',
      'Green Cloud Certificates for BRSR filing',
      'Zero grid electricity for compute',
    ],
  },
  {
    icon: Zap,
    title: 'Tier 2 India',
    color: 'text-orange-600 bg-orange-50',
    points: [
      'Only cloud physically in Tier 2 India',
      'Bhubaneswar datacenter — Odisha government pipeline',
      'Local language support (Odia, Hindi, English)',
      'CEO personally reachable — not a chatbot',
    ],
  },
];

const COMPARE = [
  { feature: 'Data stays in India',       yc: true,  aws: true,  hetzner: false },
  { feature: 'DPDP Act compliance',       yc: true,  aws: false, hetzner: false },
  { feature: 'Solar powered',             yc: true,  aws: false, hetzner: false },
  { feature: 'GST invoice (Indian)',      yc: true,  aws: true,  hetzner: false },
  { feature: 'UPI / Razorpay billing',    yc: true,  aws: false, hetzner: false },
  { feature: 'Pricing in INR',            yc: true,  aws: false, hetzner: false },
  { feature: 'CEO reachable',             yc: true,  aws: false, hetzner: false },
  { feature: 'Tier 2 India presence',     yc: true,  aws: false, hetzner: false },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-gradient-to-b from-white to-gray-50">

        {/* Live badge */}
        <div className="flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-brand-100">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
          Bhubaneswar DC operational · 100% solar
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight max-w-5xl mb-6">
          Cloud built for{' '}
          <span className="gradient-text">Indian startups</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          India's first DPDP-compliant, solar-powered cloud infrastructure.
          60% cheaper than AWS. Your data stays in Odisha. Your CEO is one phone call away.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="https://console.yourcloud.in/register" className="btn-primary text-base px-8 py-3.5 group">
            Deploy your first VM free
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/pricing" className="btn-secondary text-base px-8 py-3.5">
            See pricing
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
          {[
            { icon: Leaf,   label: '100% solar powered'    },
            { icon: Shield, label: 'DPDP Act compliant'    },
            { icon: Zap,    label: 'VM ready in 60 seconds'},
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={15} className="text-brand-400" />
              {label}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6">
          {[
            { num: '60%',   label: 'Cheaper than AWS'     },
            { num: '<60s',  label: 'VM ready time'         },
            { num: '99.9%', label: 'Uptime SLA'            },
            { num: '0 kg',  label: 'CO₂ per kWh'           },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-gray-900">{num}</p>
              <p className="text-xs text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Everything your startup needs
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            One platform. All services. All in India. All on solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, name, desc, price }) => (
            <div key={name} className="bg-white rounded-2xl border border-gray-100 p-6 card-hover">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
              <span className="text-sm font-semibold text-brand-600">{price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3 MOATS ───────────────────────────────────────────── */}
      <section className="bg-gray-50">
        <div className="section">
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
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-7 card-hover">
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

      {/* ── PRICING ───────────────────────────────────────────── */}
      <section className="section">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Simple, honest pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            All prices in INR. 18% GST added at checkout. No hidden fees. Cancel any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-7 card-hover ${
              plan.highlight
                ? 'bg-brand-400 text-white shadow-xl shadow-brand-400/20'
                : 'bg-white border border-gray-100'
            }`}>
              {plan.badge && (
                <span className="inline-block text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className={`text-base font-semibold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                  {plan.per}
                </span>
              </div>
              <p className={`text-sm mb-7 ${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                {plan.specs}
              </p>
              <Link
                href="https://console.yourcloud.in/register"
                className={`block text-center py-2.5 rounded-xl text-sm font-medium transition-all ${
                  plan.highlight
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-400 text-white hover:bg-brand-600'
                }`}
              >
                Get started →
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Need more? <Link href="/pricing" className="text-brand-600 hover:underline">See all plans</Link> including databases, Kubernetes, GPU, and storage.
        </p>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────── */}
      <section className="bg-gray-50">
        <div className="section max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">How we compare</h2>
            <p className="text-gray-500">vs AWS Mumbai and Hetzner — the most common alternatives</p>
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
                      {yc ? <Check size={16} className="text-brand-400 mx-auto" /> : <span className="text-gray-300 text-lg">×</span>}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      {aws ? <Check size={16} className="text-gray-400 mx-auto" /> : <span className="text-gray-300 text-lg">×</span>}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      {hetzner ? <Check size={16} className="text-gray-400 mx-auto" /> : <span className="text-gray-300 text-lg">×</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="section max-w-3xl mx-auto text-center">
        <div className="bg-brand-900 rounded-3xl px-8 py-16 text-white">
          <div className="flex items-center justify-center gap-1.5 text-brand-300 text-sm mb-6">
            <Leaf size={14} /> Powered by solar · Data never leaves India
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to move to Indian cloud?
          </h2>
          <p className="text-brand-200 text-lg mb-10 max-w-xl mx-auto">
            Deploy your first VM in under 5 minutes.
            No credit card required. Cancel any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://console.yourcloud.in/register"
              className="inline-flex items-center justify-center gap-2 bg-brand-400 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-brand-600 transition-all">
              Start for free →
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20">
              Talk to a founder
            </Link>
          </div>
          <p className="text-brand-400 text-sm mt-6">
            Questions? Email <a href="mailto:ceo@yourcloud.in" className="underline hover:text-white">ceo@yourcloud.in</a> — Babrit replies personally.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
