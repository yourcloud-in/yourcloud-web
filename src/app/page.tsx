'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react'

// ── Animated counter
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const spring = useSpring(count, { duration: 2000, bounce: 0 })
  const rounded = useTransform(spring, v => `${v.toFixed(1)}${suffix}`)
  useEffect(() => { count.set(value) }, [value])
  return <motion.span>{rounded}</motion.span>
}

// ── Fade-in wrapper
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? {} : { opacity: 0, y: 32 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ── Hover card
function HoverCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      whileHover={reduce ? {} : { y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

const SOLAR_VALUES = [3.8, 4.1, 4.4, 4.2, 4.6, 4.3, 4.7, 4.2]

export default function HomePage() {
  const [solarIdx, setSolarIdx] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const t = setInterval(() => setSolarIdx(i => (i + 1) % SOLAR_VALUES.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="min-h-screen" style={{ background: '#0A1628', fontFamily: 'var(--font-jakarta)' }}>

      {/* ── NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(10,22,40,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: '#1D9E75', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px' }}>GravRel</span>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
          {['Pricing', 'DPDP', 'Solar', 'Docs', 'About'].map(item => (
            <a key={item} href={`/${item.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>{item}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="/console" style={{ padding: '9px 18px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.18)', color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Sign in</a>
          <motion.a href="/try" whileHover={reduce ? {} : { scale: 1.02 }} whileTap={reduce ? {} : { scale: 0.98 }}
            style={{ padding: '9px 18px', borderRadius: 10, background: '#1D9E75', color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Start free &#8594;</motion.a>
        </div>
      </nav>

      {/* ── HERO */}
      <section style={{ padding: '88px 32px 64px', textAlign: 'center', maxWidth: 840, margin: '0 auto' }}>
        <motion.div initial={reduce ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.25)', color: '#1D9E75', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 20, marginBottom: 28, letterSpacing: '0.04em' }}>
            <span style={{ width: 6, height: 6, background: '#1D9E75', borderRadius: '50%', display: 'inline-block' }}></span>
            100% Solar &middot; DPDP Compliant &middot; Bhubaneswar, Odisha
          </div>
        </motion.div>

        <motion.h1
          initial={reduce ? {} : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 'clamp(44px, 7vw, 68px)', fontWeight: 800, letterSpacing: '-2.5px', lineHeight: 1.06, marginBottom: 24 }}
        >
          India&rsquo;s first<br />
          <span style={{ color: '#1D9E75' }}>solar-powered</span><br />
          cloud.
        </motion.h1>

        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 19, color: 'rgba(255,255,255,0.52)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 40px' }}
        >
          60% cheaper than AWS Mumbai. DPDP-compliant from day one.
          Data never leaves India. CEO personally reachable.
        </motion.p>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a href="/try" whileHover={reduce ? {} : { scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ padding: '16px 32px', background: '#1D9E75', color: '#fff', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
            Start 3-month free beta &#8594;
          </motion.a>
          <motion.a href="/datacenter" whileHover={reduce ? {} : { scale: 1.02, y: -2 }}
            style={{ padding: '16px 32px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>
            Live datacenter &#8599;
          </motion.a>
        </motion.div>
      </section>

      {/* ── LIVE STATS */}
      <section style={{ padding: '0 32px 64px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { value: SOLAR_VALUES[solarIdx], label: 'kW Solar', sub: '● Live', isLive: true, animated: true },
            { value: 87, label: 'Battery %', sub: 'LiFePO4', isLive: false },
            { value: 0, label: 'kg CO₂/hr', sub: 'Zero emissions', isLive: false },
            { value: 99.5, label: '% Uptime SLA', sub: 'Credits on breach', isLive: false },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '20px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: '#1D9E75', letterSpacing: '-1px' }}>
                  {s.animated ? s.value.toFixed(1) : s.value}{s.label.includes('%') || s.label.includes('kg') ? '' : ''}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: s.isLive ? '#1D9E75' : 'rgba(255,255,255,0.3)', marginTop: 4 }}>{s.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 3 MOATS */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 32px', maxWidth: 960, margin: '0 auto' }}>
        <FadeIn className="" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#1D9E75', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Why GravRel</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-1.5px' }}>Built different.<br />For India.</h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { icon: '🛡️', title: 'DPDP-First', desc: 'Only cloud built for DPDP Act 2023 from day one. Dashboard, instant DPA, and Green Badge included for every customer.' },
            { icon: '☀️', title: '100% Solar ESG', desc: 'Only verified solar cloud in India. Real-time Carbon Dashboard. BRSR Green Certificates accepted by auditors.' },
            { icon: '📍', title: 'Tier 2 India', desc: 'Only cloud physically inside Bhubaneswar. Your data stays in Odisha. Call the founder directly on his mobile.' },
          ].map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <HoverCard className="">
                <div style={{ background: 'rgba(29,158,117,0.06)', border: '1px solid rgba(29,158,117,0.12)', borderRadius: 18, padding: 28, height: '100%' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{m.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{m.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{m.desc}</div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PRICING */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 32px', maxWidth: 960, margin: '0 auto' }}>
        <FadeIn style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#1D9E75', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Pricing</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-1.5px' }}>60% cheaper than AWS.</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: 12, fontSize: 16 }}>All prices in INR + 18% GST. Cancel anytime.</p>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'start' }}>
          {[
            { tier: 'Cloud VM', price: '199', popular: false, features: ['1 vCPU · 1GB RAM', '20GB SSD storage', '500GB bandwidth', 'DPDP compliant', 'Green certificate'] },
            { tier: 'Managed DB', price: '499', popular: true, features: ['PostgreSQL / MySQL', 'Daily auto-backups', 'Auto-scaling', 'Zero-downtime migrate', 'DPDP compliant'] },
            { tier: 'ML / GPU', price: '999', popular: false, features: ['NVIDIA A40 48GB', 'Jupyter pre-installed', 'LLM fine-tuning', 'BRSR certificate', 'Priority support'] },
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <HoverCard>
                <div style={{
                  background: '#0D2137',
                  border: p.popular ? '2px solid #1D9E75' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20, padding: 28,
                  position: 'relative',
                  transform: p.popular ? 'translateY(-8px)' : 'none',
                }}>
                  {p.popular && (
                    <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#1D9E75', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most popular</div>
                  )}
                  <div style={{ fontSize: 13, fontWeight: 600, color: p.popular ? '#1D9E75' : 'rgba(255,255,255,0.45)', marginBottom: 8 }}>{p.tier}</div>
                  <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 4 }}>&#8377;{p.price}<span style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.35)' }}>/mo</span></div>
                  <div style={{ height: 1, background: p.popular ? 'rgba(29,158,117,0.2)' : 'rgba(255,255,255,0.07)', margin: '20px 0' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {p.features.map((f, fi) => (
                      <div key={fi} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#1D9E75', fontWeight: 700 }}>&#10003;</span> {f}
                      </div>
                    ))}
                  </div>
                  <motion.a href="/try" whileHover={reduce ? {} : { scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'block', width: '100%', marginTop: 22, padding: '12px',
                      background: p.popular ? '#1D9E75' : 'transparent',
                      border: p.popular ? 'none' : '1px solid rgba(255,255,255,0.18)',
                      color: '#fff', borderRadius: 10, fontSize: 13, fontWeight: 700,
                      textDecoration: 'none', textAlign: 'center', cursor: 'pointer',
                    }}>Get started {p.popular ? '\u2192' : ''}</motion.a>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 32px', textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#1D9E75', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Talk to Babrit</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 16 }}>CEO personally reachable.</h2>
          <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            We&rsquo;re not AWS. You can actually call the founder.
            First 3 months free for STPI Bhubaneswar companies.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="mailto:ceo@gravrel.com" whileHover={reduce ? {} : { scale: 1.03, y: -2 }}
              style={{ padding: '15px 28px', background: '#1D9E75', color: '#fff', borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>ceo@gravrel.com &#8594;</motion.a>
            <motion.a href="/contact" whileHover={reduce ? {} : { scale: 1.02 }}
              style={{ padding: '15px 28px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Book a demo</motion.a>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 28, background: '#1D9E75', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700 }}>GravRel</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot; UDYAM-OD-03-0020346</span>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>Zero carbon &middot; Zero water waste &middot; Solar-powered &#9728;&#65039;</div>
      </footer>

    </main>
  )
}
