import Link from 'next/link';

const PLANS = [
  { name: 'Starter',  price: '₹199',  per: '/mo', specs: '1 vCPU · 1GB RAM · 20GB SSD',   highlight: false },
  { name: 'Standard', price: '₹999',  per: '/mo', specs: '4 vCPU · 4GB RAM · 80GB SSD',   highlight: true, badge: 'Most popular' },
  { name: 'Pro',      price: '₹1,999',per: '/mo', specs: '8 vCPU · 8GB RAM · 160GB SSD',  highlight: false },
];

export default function Pricing() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          Simple, honest pricing
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          All prices in INR. 18% GST added at checkout. No lock-in. Cancel any time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {PLANS.map((plan) => (
          <div key={plan.name} className={`rounded-2xl p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
            plan.highlight
              ? 'bg-brand-400 text-white shadow-xl shadow-brand-400/20'
              : 'bg-white border border-gray-100'
          }`}>
            {'badge' in plan && plan.badge && (
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

      <p className="text-center text-sm text-gray-400">
        Need more?{' '}
        <Link href="/pricing" className="text-brand-600 hover:underline">
          See all plans including databases, Kubernetes, GPU, and storage
        </Link>
      </p>
    </section>
  );
}
