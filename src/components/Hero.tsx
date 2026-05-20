import Link from 'next/link';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-brand-100">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
        Bhubaneswar DC operational · 100% solar
      </div>

      <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight max-w-5xl mb-6">
        Cloud built for{' '}
        <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
          Indian startups
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
        India's first DPDP-compliant, solar-powered cloud. 60% cheaper than AWS.
        Your data stays in Odisha. Your CEO is one phone call away.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link href="https://console.yourcloud.in/register"
          className="inline-flex items-center gap-2 bg-brand-400 text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-400/25 group">
          Deploy your first VM free
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link href="/pricing"
          className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-3.5 rounded-xl text-base font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
          See pricing
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
        {[
          { icon: Leaf, label: '100% solar powered'     },
          { icon: Leaf, label: 'DPDP Act compliant'     },
          { icon: Leaf, label: 'VM ready in 60 seconds' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={14} className="text-brand-400" /> {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6">
        {[
          { num: '60%',   label: 'Cheaper than AWS'  },
          { num: '<60s',  label: 'VM ready time'      },
          { num: '99.9%', label: 'Uptime SLA'         },
          { num: '0 kg',  label: 'CO₂ per kWh'        },
        ].map(({ num, label }) => (
          <div key={label} className="text-center">
            <p className="text-2xl font-bold text-gray-900">{num}</p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
