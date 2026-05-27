import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud, DPDP & Solar Tech Blog | GravRel',
  description: 'Expert articles on DPDP Act 2023, solar-powered cloud infrastructure, Kubernetes in India, AI, and Tier 2 India tech. Free education for Indian developers and startups.',
  alternates: { canonical: 'https://gravrel.com/blog' },
  keywords: ['DPDP cloud India blog', 'solar cloud India', 'cloud hosting India guide', 'GravRel blog', 'Indian cloud provider'],
  openGraph: { title: 'GravRel Blog', description: 'DPDP compliance, solar tech, AI tutorials for Indian developers.', url: 'https://gravrel.com/blog' },
};

const posts = [
  {
    slug: 'what-is-dpdp-act-2023',
    title: 'What is the DPDP Act 2023? A Complete Guide for Indian Businesses',
    excerpt: "The Digital Personal Data Protection Act 2023 is India's most important data law. Here's what it means for your business and how GravRel helps you stay compliant from day one.",
    date: 'May 2026', category: 'DPDP Compliance', readTime: '8 min', icon: '\uD83D\uDEE1\uFE0F',
  },
  {
    slug: 'why-aws-is-not-dpdp-compliant',
    title: 'Why AWS, GCP and Azure Cannot Be DPDP Compliant',
    excerpt: 'Your data on AWS Mumbai still flows through US-based control planes. Here is the technical reality of why only a datacenter physically in India can be truly DPDP compliant.',
    date: 'May 2026', category: 'DPDP Compliance', readTime: '6 min', icon: '\u26A0\uFE0F',
  },
  {
    slug: 'solar-powered-cloud-india',
    title: "How GravRel Built India's First Solar-Powered Cloud Datacenter",
    excerpt: 'From Growatt inverters to LiFePO4 batteries — the complete technical story of how we run a production cloud datacenter on 100% solar power in Bhubaneswar, Odisha.',
    date: 'May 2026', category: 'Solar Tech', readTime: '10 min', icon: '\u2600\uFE0F',
  },
  {
    slug: 'free-domain-india-students',
    title: 'Free .yc.in Domains for Indian Students — How and Why',
    excerpt: 'Talent in India should never die due to lack of money. GravRel gives free yourproject.yc.in subdomains to students, researchers, open source contributors, and NGOs.',
    date: 'May 2026', category: 'Community', readTime: '4 min', icon: '\uD83C\uDF93',
  },
  {
    slug: 'cloud-hosting-bhubaneswar-odisha',
    title: 'Cloud Hosting in Bhubaneswar — Why Tier 2 India Matters',
    excerpt: 'AWS has no datacenter in Odisha. We do. Physical presence in Tier 2 India creates a structural advantage for local businesses, government, and researchers.',
    date: 'May 2026', category: 'Tier 2 India', readTime: '5 min', icon: '\uD83C\uDFD9\uFE0F',
  },
  {
    slug: 'gravrel-vs-aws-pricing',
    title: 'GravRel vs AWS Mumbai — Honest Pricing Comparison',
    excerpt: 'Side-by-side comparison of GravRel and AWS Mumbai pricing for VMs, databases, and storage. GravRel is 60% cheaper, DPDP compliant, and solar powered.',
    date: 'May 2026', category: 'Pricing', readTime: '7 min', icon: '\u20B9',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-full px-4 py-1.5 text-sm text-[#1D9E75] mb-6">
          <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
          DPDP · Solar · Cloud · AI · Tier 2 India
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GravRel <span className="text-[#1D9E75]">Blog</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Expert insights on DPDP compliance, solar-powered infrastructure, and cloud hosting for Indian businesses.</p>
      </section>
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-[#0D2137] border border-white/10 hover:border-[#1D9E75]/40 rounded-2xl p-6 transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{post.icon}</span>
                <span className="text-xs font-semibold text-[#1D9E75] bg-[#1D9E75]/10 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#1D9E75] transition-colors leading-snug">{post.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center bg-[#0D2137] border border-[#1D9E75]/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-3">Get More from GravRel</h2>
          <p className="text-gray-400 mb-6">Free developer docs, free .yc.in domain for students, India's most affordable DPDP-compliant cloud.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/freedomain" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-xl font-semibold transition-all">Get Free Domain</a>
            <a href="/pricing" className="border border-[#1D9E75] text-[#1D9E75] hover:bg-[#1D9E75] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all">View Pricing</a>
          </div>
        </div>
      </section>
    </main>
  );
}
