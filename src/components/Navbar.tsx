'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const PRODUCTS = [
  { name: 'Cloud VMs',         desc: 'Dedicated virtual machines, ready in 60s',    href: '/pricing' },
  { name: 'Managed Databases', desc: 'MySQL, PostgreSQL, Redis — fully managed',     href: '/pricing' },
  { name: 'Kubernetes',        desc: 'Managed K8s clusters, one click',              href: '/pricing' },
  { name: 'ML / GPU',          desc: 'NVIDIA A40 48GB, Jupyter ready',               href: '/pricing' },
  { name: 'Object Storage',    desc: 'S3-compatible, data never leaves India',        href: '/pricing' },
  { name: 'LLM Playground',    desc: 'Run AI models on solar-powered GPU',           href: '/pricing' },
];

const COMPANY = [
  { name: 'DPDP Compliance',   href: '/dpdp'       },
  { name: 'Solar & Green',     href: '/green'      },
  { name: 'Our Datacenter',    href: '/datacenter' },
  { name: 'Blog',              href: '/blog'       },
  { name: 'Free Domain',       href: '/freedomain' },
  { name: 'Try GravRel',       href: '/try'        },
];

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [productsOpen, setProducts] = useState(false);
  const [companyOpen, setCompany]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeAll = () => { setProducts(false); setCompany(false); };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(10,22,40,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff' }} />
          </div>
          <span style={{ fontWeight: 700, color: '#fff', fontSize: 16 }}>GravRel</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1 }} className="hidden-mobile">

          {/* Products dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => { setProducts(p => !p); setCompany(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', cursor: 'pointer' }}>
              Products <ChevronDown size={13} style={{ transform: productsOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {productsOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0 }} onClick={closeAll} />
                <div style={{ position: 'absolute', top: 36, left: 0, width: 300, background: '#0D2137', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', padding: 8, zIndex: 100, boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
                  {PRODUCTS.map(p => (
                    <Link key={p.name} href={p.href} onClick={closeAll}
                      style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(29,158,117,0.1)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{p.name}</span>
                      <span style={{ fontSize: 11, color: '#4A6F8A' }}>{p.desc}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Company dropdown */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => { setCompany(c => !c); setProducts(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', cursor: 'pointer' }}>
              Company <ChevronDown size={13} style={{ transform: companyOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {companyOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0 }} onClick={closeAll} />
                <div style={{ position: 'absolute', top: 36, left: 0, width: 200, background: '#0D2137', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', padding: 8, zIndex: 100, boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
                  {COMPANY.map(c => (
                    <Link key={c.name} href={c.href} onClick={closeAll}
                      style={{ display: 'block', padding: '10px 12px', borderRadius: 10, fontSize: 13, fontWeight: 500, color: '#fff', textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(29,158,117,0.1)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link href="/pricing" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Pricing</Link>
          <Link href="/blog"    style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</Link>
          <Link href="/contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</Link>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 'auto' }} className="hidden-mobile">
          <Link href="https://console.gravrelaetherops.com/login"
            style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '8px 12px' }}>
            Log in
          </Link>
          <Link href="https://console.gravrelaetherops.com/register"
            style={{ fontSize: 13, fontWeight: 700, color: '#fff', background: '#1D9E75', padding: '8px 20px', borderRadius: 10, textDecoration: 'none' }}>
            Start Free →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          className="show-mobile" onClick={() => setOpen(o => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0D2137', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Products</div>
          {PRODUCTS.map(p => (
            <Link key={p.name} href={p.href} onClick={() => setOpen(false)}
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{p.name}</Link>
          ))}
          <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>Company</div>
          {COMPANY.map(c => (
            <Link key={c.name} href={c.href} onClick={() => setOpen(false)}
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{c.name}</Link>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Pricing</Link>
          <Link href="/blog"    onClick={() => setOpen(false)} style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</Link>
          <div style={{ display: 'flex', gap: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Link href="https://console.gravrelaetherops.com/login" onClick={() => setOpen(false)}
              style={{ flex: 1, textAlign: 'center', fontSize: 13, border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 10, padding: '10px', textDecoration: 'none' }}>Log in</Link>
            <Link href="https://console.gravrelaetherops.com/register" onClick={() => setOpen(false)}
              style={{ flex: 1, textAlign: 'center', fontSize: 13, background: '#1D9E75', color: '#fff', borderRadius: 10, padding: '10px', textDecoration: 'none', fontWeight: 700 }}>Start Free</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}
