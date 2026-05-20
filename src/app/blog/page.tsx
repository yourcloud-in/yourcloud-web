import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'YourCloud blog — cloud infrastructure, DPDP compliance, solar energy, and building in Tier 2 India.',
};

const POSTS = [
  {
    slug:    'why-we-built-in-bhubaneswar',
    date:    'June 2025',
    title:   'Why we built India\'s first solar cloud in Bhubaneswar, not Bengaluru',
    excerpt: 'A honest account of why Tier 2 India is a structural advantage, not a limitation. The cost structure, the government pipeline, and why every hyperscaler ignored it.',
    tag:     'Company',
  },
  {
    slug:    'dpdp-act-explained',
    date:    'June 2025',
    title:   'DPDP Act 2023: what it means for your cloud infrastructure',
    excerpt: 'The Digital Personal Data Protection Act is law. Most Indian startups are non-compliant and don\'t know it. Here\'s what you need to know, and what YourCloud does about it automatically.',
    tag:     'Compliance',
  },
  {
    slug:    'solar-powered-cloud-economics',
    date:    'June 2025',
    title:   'How running on solar makes our cloud 60% cheaper than AWS',
    excerpt: 'A breakdown of our cost structure: no electricity bill, hardware purchased not rented, Bhubaneswar real estate vs Mumbai. The math that makes our pricing possible.',
    tag:     'Engineering',
  },
  {
    slug:    'brsr-cloud-carbon-reporting',
    date:    'June 2025',
    title:   'BRSR compliance: how to report your cloud carbon footprint',
    excerpt: 'SEBI now requires India\'s top 1000 listed companies to report technology supply chain emissions. Here\'s exactly what to put in your BRSR filing when your cloud runs on solar.',
    tag:     'Compliance',
  },
];

const TAG_COLORS: Record<string, string> = {
  Company:     'bg-brand-50 text-brand-700',
  Compliance:  'bg-blue-50 text-blue-700',
  Engineering: 'bg-purple-50 text-purple-700',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">Blog</h1>
            <p className="text-gray-500">Cloud infrastructure, DPDP compliance, solar energy, and building in Tier 2 India.</p>
          </div>

          <div className="space-y-5">
            {POSTS.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${TAG_COLORS[post.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-brand-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-brand-600 hover:text-brand-800 transition-colors">
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-400">
            More posts coming soon. Follow us on{' '}
            <a href="https://twitter.com/yourcloudHQ" className="text-brand-600 hover:underline">Twitter/X</a>{' '}
            and{' '}
            <a href="https://linkedin.com/company/yourcloud-in" className="text-brand-600 hover:underline">LinkedIn</a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
