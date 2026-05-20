import Link from 'next/link';
import { Leaf, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="bg-gray-900 rounded-3xl px-8 py-16 text-white text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-1.5 text-brand-300 text-sm mb-6">
          <Leaf size={14} /> Powered by solar · Data never leaves India
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to move to Indian cloud?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Deploy your first VM in under 5 minutes. No credit card required. Cancel any time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="https://console.yourcloud.in/register"
            className="inline-flex items-center justify-center gap-2 bg-brand-400 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-brand-600 transition-all"
          >
            Start for free →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20"
          >
            Talk to a founder
          </Link>
        </div>
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1.5">
          <Mail size={13} />
          Questions? Email{' '}
          <a href="mailto:ceo@yourcloud.in" className="text-brand-300 hover:text-white underline">
            ceo@yourcloud.in
          </a>{' '}
          — Babrit replies personally.
        </p>
      </div>
    </section>
  );
}
