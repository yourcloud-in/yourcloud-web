'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVICES = [
  { name: 'Cloud VMs',        desc: 'Dedicated virtual machines, ready in 60s',  href: '/services/vms'        },
  { name: 'Managed Databases',desc: 'MySQL, PostgreSQL, MongoDB — fully managed', href: '/services/databases'  },
  { name: 'Kubernetes',       desc: 'Managed k3s clusters, one click',           href: '/services/kubernetes' },
  { name: 'ML Environment',   desc: 'GPU-backed Jupyter + Kubeflow',             href: '/services/ml'         },
  { name: 'Object Storage',   desc: 'S3-compatible, MinIO-powered',               href: '/services/storage'    },
  { name: 'Web Hosting',      desc: 'Auto-SSL, any domain, Caddy-powered',        href: '/services/hosting'    },
];

export default function Navbar() {
  const [open, setOpen]             = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [servicesOpen, setServices] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        : 'bg-transparent',
    )}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-brand-400 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-semibold text-gray-900">YourCloud</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 flex-1">

          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServices((s) => !s)}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services <ChevronDown size={13} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
            </button>

            {servicesOpen && (
              <>
                <div className="fixed inset-0" onClick={() => setServices(false)} />
                <div className="absolute top-9 left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50">
                  {SERVICES.map((s) => (
                    <Link key={s.name} href={s.href}
                      onClick={() => setServices(false)}
                      className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-900">{s.name}</span>
                      <span className="text-xs text-gray-400">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/about"   className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/blog"    className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
          <Link href="/docs"    className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Docs</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Link href="https://console.yourcloud.in/login"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">
            Log in
          </Link>
          <Link href="https://console.yourcloud.in/register" className="btn-primary text-sm py-2">
            Start free →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden ml-auto text-gray-600" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4">
          {SERVICES.map((s) => (
            <Link key={s.name} href={s.href} onClick={() => setOpen(false)}
              className="block text-sm text-gray-700 font-medium">{s.name}</Link>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} className="block text-sm text-gray-600">Pricing</Link>
          <Link href="/about"   onClick={() => setOpen(false)} className="block text-sm text-gray-600">About</Link>
          <Link href="/blog"    onClick={() => setOpen(false)} className="block text-sm text-gray-600">Blog</Link>
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            <Link href="https://console.yourcloud.in/login"
              className="flex-1 text-center text-sm border border-gray-200 rounded-xl py-2.5">Log in</Link>
            <Link href="https://console.yourcloud.in/register"
              className="flex-1 text-center text-sm bg-brand-400 text-white rounded-xl py-2.5 font-medium">Start free</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
