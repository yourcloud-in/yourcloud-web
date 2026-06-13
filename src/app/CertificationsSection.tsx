'use client'

import { motion, useReducedMotion } from 'motion/react'

const certs = [
  {
    icon: '☁️',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    color: '#FF9900',
    bg: 'rgba(255,153,0,0.08)',
    border: 'rgba(255,153,0,0.2)',
  },
  {
    icon: '🔵',
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft Azure',
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.08)',
    border: 'rgba(0,120,212,0.2)',
  },
  {
    icon: '☁️',
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft Azure',
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.08)',
    border: 'rgba(0,120,212,0.2)',
  },
  {
    icon: '🏛️',
    name: 'UDYAM MSME Registered',
    issuer: 'Govt. of India · UDYAM-OD-03-0020346',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.08)',
    border: 'rgba(29,158,117,0.2)',
  },
  {
    icon: '🛡️',
    name: 'DPDP Act 2023 Compliant',
    issuer: 'India Data Protection Framework',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.08)',
    border: 'rgba(29,158,117,0.2)',
  },
  {
    icon: '☀️',
    name: 'Solar Powered Infrastructure',
    issuer: '100% Renewable Energy · Zero Carbon',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
]

export function CertificationsSection() {
  const reduce = useReducedMotion()

  return (
    <section style={{ background: '#0A1628', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{
            fontSize: 13, color: '#1D9E75', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16
          }}>
            Certifications & Compliance
          </div>
          <h2 style={{
            fontSize: 40, fontWeight: 800, color: '#fff',
            marginBottom: 16, letterSpacing: -1
          }}>
            Built by certified professionals
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto' }}>
            GravRel is founded and operated by certified cloud engineers
            with hands-on expertise across AWS, Azure, and AI infrastructure.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={reduce ? {} : { y: -3, scale: 1.01 }}
              style={{
                background: cert.bg,
                border: `1px solid ${cert.border}`,
                borderRadius: 16,
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${cert.color}20`,
                border: `1px solid ${cert.color}40`,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 22,
                flexShrink: 0,
              }}>
                {cert.icon}
              </div>
              <div>
                <div style={{
                  fontSize: 14, fontWeight: 700,
                  color: '#fff', marginBottom: 4, lineHeight: 1.3
                }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: 12, color: cert.color, fontWeight: 600 }}>
                  {cert.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 48,
            padding: '20px 32px',
            background: 'rgba(29,158,117,0.06)',
            border: '1px solid rgba(29,158,117,0.15)',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'GSTIN Registered', value: '✅' },
            { label: 'DPDP Compliant', value: '✅' },
            { label: 'Solar Powered', value: '☀️' },
            { label: 'Data in India', value: '🇮🇳' },
            { label: 'Zero Carbon', value: '🌱' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20 }}>{item.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
