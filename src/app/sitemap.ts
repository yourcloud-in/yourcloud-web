import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gravrel.com';
  const now = new Date();
  return [
    { url: base,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/pricing`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/dpdp`,          lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/try`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/freedomain`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/green`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/datacenter`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/legal/terms`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/legal/privacy`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
