import Link from 'next/link';

const LINKS = {
  Product: [
    { label: 'Cloud VMs',         href: '/pricing'    },
    { label: 'Managed Databases', href: '/pricing'    },
    { label: 'Kubernetes',        href: '/pricing'    },
    { label: 'ML / GPU',          href: '/pricing'    },
    { label: 'Object Storage',    href: '/pricing'    },
    { label: 'LLM Playground',    href: '/pricing'    },
  ],
  Company: [
    { label: 'About',             href: '/about'      },
    { label: 'Blog',              href: '/blog'       },
    { label: 'Solar & Green',     href: '/green'      },
    { label: 'Our Datacenter',    href: '/datacenter' },
    { label: 'Contact',           href: '/contact'    },
    { label: 'Try GravRel',       href: '/try'        },
  ],
  Compliance: [
    { label: 'DPDP Compliance',   href: '/dpdp'          },
    { label: 'Free Domain',       href: '/freedomain'    },
    { label: 'Certifications',    href: '/certifications' },
    { label: 'GitHub',            href: 'https://github.com/yourcloud-in' },
  ],
  Legal: [
    { label: 'Terms of Service',  href: '/legal/terms'   },
    { label: 'Privacy Policy',    href: '/legal/privacy' },
    { label: 'Pricing',           href: '/pricing'       },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0D2137', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff' }} />
              </div>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: 16 }}>GravRel</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16, maxWidth: 240 }}>
              India&apos;s first DPDP-compliant, solar-powered cloud. Built in Bhubaneswar, Odisha.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, color: '#1D9E75' }}>☀️ 100% solar powered</span>
              <span style={{ fontSize: 12, color: '#1D9E75' }}>🛡️ DPDP Act 2023 compliant</span>
              <span style={{ fontSize: 12, color: '#1D9E75' }}>📍 Bhubaneswar, Odisha</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                {heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
              © {new Date().getFullYear()} GravRel · Babrit Behera · Bhubaneswar, Odisha, India
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>UDYAM-OD-03-0020346</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>GSTIN Registered</span>
              <Link href="mailto:ceo@gravrel.com" style={{ fontSize: 12, color: '#1D9E75', textDecoration: 'none' }}>ceo@gravrel.com</Link>
            </div>
          </div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
            Zero carbon · Zero water waste · Solar-powered ☀️ · Data never leaves India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
