import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gravrel.com'
  const lastModified = new Date()

  return [
    { url: baseUrl,                    lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/pricing`,       lastModified, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/dpdp`,          lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/green`,         lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/datacenter`,    lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/try`,           lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/freedomain`,    lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`,          lastModified, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/contact`,       lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`,         lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/legal/privacy`, lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/legal/terms`,   lastModified, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
