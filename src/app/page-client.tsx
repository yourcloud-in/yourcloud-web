'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

// ── Solar counter ──
function useSolarCounter() {
  const [kw, setKw] = useState(4.2)
  useEffect(() => {
    const values = [3.8, 4.1, 4.4, 4.2, 4.6, 4.3, 4.7, 4.5]
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % values.length
      setKw(values[i])
    }, 2000)
    return () => clearInterval(t)
  }, [])
  return kw
}

// ── Hero Section ──
export function HeroSection() {
  const reduce = useReducedMotion()
  const kw = useSolarCounter()

  return (
    <section style={{
      minHeight: '100vh',
      background: '#0A1628',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      textAlign: 'center',
    }}>
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div style={{ fontSize: 13, color: '#1D9E75', fontWeight: 700,
          letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>
          ☀️ {kw} kW solar · Zero carbon · DPDP compliant
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800,
          color: '#ffffff', lineHeight: 1.1, marginBottom: 24, letterSpacing: -2 }}>
          Cloud built for<br />
          <span style={{ color: '#1D9E75' }}>India's future</span>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)',
          maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          India's first solar-powered, DPDP-compliant cloud.
          60% cheaper than AWS. Data never leaves India.
          Built in Bhubaneswar, Odisha.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:ceo@gravrel.com" style={{
            background: '#1D9E75', color: '#fff', padding: '14px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
          }}>
            Start Free Beta →
          </a>
          <a href="mailto:ceo@gravrel.com" style={{
            background: 'transparent', color: '#fff', padding: '14px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Talk to Babrit
          </a>
        </div>
      </motion.div>
    </section>
  )
}

// ── Stats Section ──
export function StatsSection() {
  const reduce = useReducedMotion()
  const stats = [
    { value: '60%', label: 'Cheaper than AWS' },
    { value: '100%', label: 'Solar powered' },
    { value: 'Rs 199', label: 'Starting price/mo' },
    { value: '0 kg', label: 'CO₂ emissions' },
  ]
  return (
    <section style={{ background: '#0D2137', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: 48, fontWeight: 800, color: '#1D9E75' }}>{s.value}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Moats Section ──
export function MoatsSection() {
  const reduce = useReducedMotion()
  const moats = [
    { icon: '🛡️', title: 'DPDP-First', body: 'Built for India\'s data law from day one. DPDP dashboard, instant DPA, Green Badge for every customer.' },
    { icon: '☀️', title: 'Solar ESG', body: '100% solar powered. Zero carbon. Real-time Carbon Dashboard. Green Certificate for BRSR compliance.' },
    { icon: '📍', title: 'Tier 2 India', body: 'Physically in Bhubaneswar. Data never leaves Odisha. 60% cheaper. CEO personally reachable.' },
  ]
  return (
    <section style={{ background: '#0A1628', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff',
          textAlign: 'center', marginBottom: 16 }}>3 Structural Moats</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center',
          marginBottom: 56, fontSize: 16 }}>
          What makes GravRel impossible to copy
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {moats.map((m, i) => (
            <motion.div
              key={i}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              style={{
                background: '#0D2137',
                borderRadius: 20,
                padding: 32,
                border: '1px solid rgba(29,158,117,0.2)',
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{m.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{m.title}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{m.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing Section ──
export function PricingSection() {
  const reduce = useReducedMotion()
  const plans = [
    { name: 'Cloud VM', price: 'Rs 199', period: '/mo', features: ['1 vCPU', '1GB RAM', '20GB SSD', 'DPDP compliant', 'Solar powered'] },
    { name: 'Managed DB', price: 'Rs 499', period: '/mo', features: ['PostgreSQL / MySQL', 'Auto backups', 'DPDP compliant', 'Solar powered', 'India data'] },
    { name: 'Kubernetes', price: 'Rs 999', period: '/mo', features: ['Managed K8s', 'Auto scaling', 'DPDP compliant', 'Solar powered', 'India data'], highlight: true },
  ]
  return (
    <section style={{ background: '#0D2137', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff',
          textAlign: 'center', marginBottom: 16 }}>Simple Pricing</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center',
          marginBottom: 16, fontSize: 16 }}>
          All prices in INR + 18% GST
        </p>
        <p style={{ color: '#1D9E75', textAlign: 'center', marginBottom: 56,
          fontSize: 14, fontWeight: 700 }}>
          3 months FREE for STPI Bhubaneswar companies
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: p.highlight ? '#1D9E75' : '#0A1628',
                borderRadius: 20, padding: 32,
                border: `1px solid ${p.highlight ? '#1D9E75' : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700,
                color: p.highlight ? '#fff' : 'rgba(255,255,255,0.6)',
                marginBottom: 8 }}>{p.name}</div>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                {p.price}<span style={{ fontSize: 16 }}>{p.period}</span>
              </div>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ fontSize: 14,
                    color: p.highlight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                    display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: p.highlight ? '#fff' : '#1D9E75' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Section ──
export function CTASection() {
  return (
    <section style={{ background: '#0A1628', padding: '80px 24px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
        Ready to switch to solar cloud?
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 40, fontSize: 16 }}>
        Join India's first DPDP-compliant, solar-powered cloud.
      </p>
      <a href="mailto:ceo@gravrel.com" style={{
        background: '#1D9E75', color: '#fff', padding: '16px 40px',
        borderRadius: 12, fontWeight: 700, fontSize: 18, textDecoration: 'none',
        display: 'inline-block',
      }}>
        Start Free Beta Today →
      </a>
      <div style={{ marginTop: 32, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
        Zero carbon · Zero water waste · Solar-powered ☀️ · Bhubaneswar, Odisha
      </div>
    </section>
  )
}
