import Link from 'next/link';
import { Leaf } from 'lucide-react';

const LINKS = {
  Product: [
    { label: 'Cloud VMs',        href: '/services/vms'        },
    { label: 'Managed Databases',href: '/services/databases'  },
    { label: 'Kubernetes',       href: '/services/kubernetes' },
    { label: 'ML Environment',   href: '/services/ml'         },
    { label: 'Object Storage',   href: '/services/storage'    },
    { label: 'Pricing',          href: '/pricing'             },
  ],
  Company: [
    { label: 'About',            href: '/about'               },
    { label: 'Blog',             href: '/blog'                },
    { label: 'Carbon Dashboard', href: '/green'               },
    { label: 'Status',           href: 'https://status.yourcloud.in' },
    { label: 'Contact',          href: '/contact'             },
  ],
  Developers: [
    { label: 'Documentation',    href: 'https://docs.yourcloud.in' },
    { label: 'API Reference',    href: 'https://docs.yourcloud.in/api' },
    { label: 'GitHub',           href: 'https://github.com/babritb-bot/gravrel-dev' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/legal/terms'         },
    { label: 'Privacy Policy',   href: '/legal/privacy'       },
    { label: 'SLA',              href: '/legal/sla'           },
    { label: 'DPDP Compliance',  href: '/legal/dpdp'          },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-brand-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="font-semibold text-white">YourCloud</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              India's first DPDP-compliant, solar-powered cloud. Built in Bhubaneswar, Odisha.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-brand-400">
              <Leaf size={12} />
              100% solar powered
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} GravrelAetherOps Private Limited · Bhubaneswar, Odisha, India
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">GSTIN: {process.env.NEXT_PUBLIC_GSTIN ?? '—'}</span>
            <span className="text-xs text-gray-500">CIN: {process.env.NEXT_PUBLIC_CIN ?? '—'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
