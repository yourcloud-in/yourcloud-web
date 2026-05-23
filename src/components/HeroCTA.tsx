import Link from 'next/link';

export default function HeroCTA() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-8">
      <Link
        href="/try"
        className="inline-flex items-center gap-2 bg-[#1D9E75] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#0F6E56] transition-all hover:shadow-lg hover:shadow-[#1D9E75]/25 hover:-translate-y-0.5"
      >
        <span>⚡</span>
        Try a VM instantly — no signup
      </Link>
      <Link
        href="/pricing"
        className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all"
      >
        See pricing →
      </Link>
    </div>
  );
}
