'use client';

import { useState } from 'react';
import Link from 'next/link';

const PILLARS = [
  { icon:'🏛️', title:'Physical Data Sovereignty', status:'Verified',
    desc:'Every byte of your data lives on servers physically located in Bhubaneswar, Odisha, India — and nowhere else. No replication to foreign servers. No backup outside India. Ever.',
    detail:'Our infrastructure runs on Dell PowerEdge R750 servers in our own datacenter in Bhubaneswar. Data never touches Singapore, the US, or any foreign jurisdiction. This is not a policy — it is a physical fact.' },
  { icon:'✅', title:'Lawful Consent Mechanism', status:'Implemented',
    desc:'We collect only the data we need, with your explicit, free, informed, and specific consent — exactly as required by Section 6 of the DPDP Act 2023.',
    detail:'Every data collection point has clear notice. Consent is granular and withdrawable at any time. We do not bundle consent or use pre-ticked boxes.' },
  { icon:'🎯', title:'Purpose Limitation', status:'Enforced',
    desc:'Your data is used only for the stated purpose at collection. We never repurpose, resell, or use your data for advertising or profiling.',
    detail:'Our systems are architecturally designed to prevent purpose creep. Every data access is logged and auditable.' },
  { icon:'🔐', title:'Security Safeguards', status:'Active',
    desc:'AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, and regular security audits — all running on 100% solar-powered infrastructure.',
    detail:'Our controller stack runs Prometheus + Grafana monitoring 24/7. All access logs retained for 90 days. Incident response procedures documented and tested.' },
  { icon:'👤', title:'Data Principal Rights', status:'Honoured',
    desc:'Access, correct, or erase your personal data at any time. We respond to all data requests within 72 hours — directly from our CEO.',
    detail:'No automated rejection of data requests. Babrit Behera personally reviews all DPDP rights requests at ceo@yourcloud.in.' },
  { icon:'📢', title:'Breach Notification', status:'Procedure Ready',
    desc:'In the unlikely event of a data breach, we notify affected users and the Data Protection Board of India within 72 hours.',
    detail:'Our incident response plan defines a 72-hour notification window. All breach procedures are documented at the engineering level.' },
  { icon:'🗑️', title:'Data Retention & Deletion', status:'Automated',
    desc:'Your data is deleted within 30 days of account termination. Billing records retained 7 years as required by Indian tax law. Nothing more.',
    detail:'Deletion is automated via our cleanup cron job. Certificate of deletion available on request.' },
  { icon:'🤝', title:'Data Processing Agreements', status:'Available',
    desc:'Enterprise customers can execute a formal Data Processing Agreement (DPA) — ensuring DPDP compliance across your entire data supply chain.',
    detail:'DPA template available immediately. Customisation within 48 hours. Email ceo@yourcloud.in to request.' },
];

const RIGHTS = [
  { right:'Right to Access',           desc:'Request a complete copy of all personal data we hold about you',              time:'72 hours' },
  { right:'Right to Correction',       desc:'Request correction of any inaccurate or incomplete personal data',             time:'72 hours' },
  { right:'Right to Erasure',          desc:'Request deletion of your personal data from our systems',                      time:'30 days' },
  { right:'Right to Withdraw Consent', desc:'Withdraw consent for data processing at any time',                             time:'Immediate' },
  { right:'Right to Grievance',        desc:'File a complaint with our Grievance Officer',                                  time:'48 hours' },
  { right:'Right to Nominate',         desc:'Nominate another person to exercise your rights in case of incapacity',        time:'On request' },
];

export default function DPDPPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">

      {/* Nav */}
      <nav className="border-b border-white/10 bg-[#0D2137]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1D9E75] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="font-semibold text-white text-sm">YourCloud</span>
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-sm text-[#1D9E75] font-medium">DPDP Compliance</span>
          <div className="ml-auto flex items-center gap-2 text-xs text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/20 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
            Compliant · Data in Odisha
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D9E75]/8 via-transparent to-[#1565C0]/8" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1D9E75]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1565C0]/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/20 px-4 py-2 rounded-full mb-6">
            🛡️ DPDP Act 2023 · Digital Personal Data Protection
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your data stays in<br />
            <span className="text-[#1D9E75]">India. Always.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            GravRel is built from the ground up for India&apos;s Digital Personal Data Protection Act 2023.
            Not retrofitted. Not compliant-on-paper. Genuinely, physically, verifiably compliant.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="bg-[#1D9E75] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#0F6E56] transition-all hover:shadow-lg hover:shadow-[#1D9E75]/25">
              Start free — DPDP included →
            </Link>
            <a href="mailto:ceo@yourcloud.in" className="bg-white/5 border border-white/15 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
              Request DPA document
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-white/10 bg-[#0D2137]/50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8 text-sm">
          {[
            ['🏛️','Data physically in Bhubaneswar, Odisha'],
            ['📜','UDYAM-OD-03-0020346'],
            ['☀️','100% Solar Powered'],
            ['👤','CEO reachable — ceo@yourcloud.in'],
            ['⚡','72-hour response guarantee'],
          ].map(([icon,text]) => (
            <div key={text} className="flex items-center gap-2 text-gray-400">
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What is DPDP */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-semibold text-[#1D9E75] uppercase tracking-widest mb-3">The Law</div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">What is the DPDP Act 2023?</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The Digital Personal Data Protection Act 2023 is India&apos;s comprehensive data protection law —
              the Indian equivalent of GDPR. It governs how every company collecting personal data from
              Indian citizens must handle, store, and process it.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Non-compliance carries fines of up to <span className="text-white font-semibold">₹250 crore per violation</span>.
              Every Indian company handling customer data is affected.
            </p>
            <div className="bg-[#1D9E75]/5 border border-[#1D9E75]/20 rounded-xl p-5 space-y-2">
              {[
                'Passed by Parliament: August 2023',
                'Applies to: All companies processing Indian personal data',
                'Key body: Data Protection Board of India',
                'Maximum fine: ₹250 crore per violation',
                'Data localisation: Personal data must stay in India',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-[#1D9E75] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#0D2137] border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#1D9E75] mb-1">₹250Cr</div>
              <div className="text-gray-400 text-sm">Maximum fine per violation</div>
            </div>
            <div className="bg-[#0D2137] border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Of Indian companies with user data are affected</div>
            </div>
            <div className="bg-[#1D9E75]/8 border border-[#1D9E75]/25 rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#1D9E75] mb-1">Day 1</div>
              <div className="text-gray-400 text-sm">GravRel has been DPDP-compliant since day one — not retrofitted</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Pillars */}
      <section className="bg-[#0D2137]/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-[#1D9E75] uppercase tracking-widest mb-3">Our Commitment</div>
            <h2 className="text-4xl font-bold mb-4">8 Pillars of DPDP Compliance</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Click any pillar to see exactly how we implement it.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
                className={`bg-[#0A1628] border rounded-xl p-5 cursor-pointer transition-all ${
                  expanded === i ? 'border-[#1D9E75] shadow-lg shadow-[#1D9E75]/10' : 'border-white/10 hover:border-[#1D9E75]/40'
                }`}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white text-sm">{p.title}</span>
                      <span className="ml-auto text-xs text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/20 px-2 py-0.5 rounded-full flex-shrink-0">{p.status}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                    {expanded === i && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-gray-300 leading-relaxed">{p.detail}</p>
                      </div>
                    )}
                  </div>
                  <span className={`text-gray-500 text-xs flex-shrink-0 transition-transform ${expanded === i ? 'rotate-180' : ''}`}>▼</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#1D9E75] uppercase tracking-widest mb-3">Data Principal Rights</div>
          <h2 className="text-4xl font-bold mb-4">Your Rights Under DPDP Act 2023</h2>
          <p className="text-gray-400 max-w-xl mx-auto">These are your legal rights. We honour every one of them.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RIGHTS.map((r, i) => (
            <div key={i} className="bg-[#0D2137] border border-white/10 rounded-xl p-5 hover:border-[#1D9E75]/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">{r.right}</span>
                <span className="text-xs text-[#1D9E75] bg-[#1D9E75]/10 px-2 py-0.5 rounded-full">{r.time}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#1D9E75]/5 border border-[#1D9E75]/20 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-300 mb-2">To exercise any of these rights, contact our Grievance Officer:</p>
          <p className="text-white font-semibold">Babrit Behera · Founder & CEO · GravRel</p>
          <a href="mailto:ceo@yourcloud.in" className="text-[#1D9E75] font-semibold hover:underline">ceo@yourcloud.in</a>
          <p className="text-xs text-gray-500 mt-2">Response guaranteed within 72 hours. No automated rejections.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#0D2137]/40 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Other Clouds Fail DPDP</h2>
            <p className="text-gray-400">The honest comparison.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-5 py-4 text-gray-400 font-medium">Requirement</th>
                  {['AWS/GCP/Azure','Digital Ocean','GravRel'].map(h => (
                    <th key={h} className={`px-5 py-4 font-semibold text-center ${h==='GravRel'?'text-[#1D9E75]':'text-gray-400'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Data stored in India',         '❌ Singapore/US','❌ No Indian DC','✅ Bhubaneswar, Odisha'],
                  ['DPDP-native architecture',     '❌ Retrofitted',  '❌ No',          '✅ Built from day one'],
                  ['Data never leaves India',      '❌ Replicates abroad','❌',         '✅ Physical guarantee'],
                  ['INR billing + GST invoice',    '❌',              '❌',             '✅ Native INR + GST'],
                  ['CEO reachable for escalation', '❌',              '❌',             '✅ Babrit personally'],
                  ['Free DPA for all customers',   '❌ Enterprise only','❌',           '✅ All plans'],
                  ['Compliance dashboard',         '❌',              '❌',             '✅ In every account'],
                  ['BRSR Green Certificate',       '❌',              '❌',             '✅ Solar-powered'],
                ].map(([req,a,b,c],i) => (
                  <tr key={i} className={`border-b border-white/5 ${i%2===0?'bg-white/[0.01]':''}`}>
                    <td className="px-5 py-3.5 text-gray-300">{req}</td>
                    <td className="px-5 py-3.5 text-center text-gray-500 text-xs">{a}</td>
                    <td className="px-5 py-3.5 text-center text-gray-500 text-xs">{b}</td>
                    <td className="px-5 py-3.5 text-center text-[#1D9E75] font-medium text-xs">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Green Badge */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-[#1D9E75] uppercase tracking-widest mb-3">For Your Customers</div>
            <h2 className="text-4xl font-bold mb-6">Show Your Users You&apos;re Compliant</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Every GravRel customer gets a DPDP Green Badge — a verifiable mark showing your users
              that their data is protected, stored in India, and DPDP-compliant.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Add to your website in 2 minutes',
                'Links to a live verification page',
                'Updates automatically with compliance status',
                'Recognised by enterprise procurement teams',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-[#1D9E75]/20 flex items-center justify-center text-[#1D9E75] text-xs flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-[#1D9E75] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#0F6E56] transition-all">
              Get your Green Badge →
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-[#0D2137] border border-[#1D9E75]/30 rounded-2xl p-8 text-center shadow-2xl shadow-[#1D9E75]/10 w-72">
              <div className="w-20 h-20 rounded-full bg-[#1D9E75]/20 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <div className="text-lg font-bold text-white mb-1">DPDP Compliant</div>
              <div className="text-xs text-[#1D9E75] mb-3">Powered by GravRel</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Data stored in India<br/>DPDP Act 2023 compliant<br/>Verified by GravRel
              </div>
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#1D9E75]">
                <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
                Live verification
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1D9E75]/15 to-[#1565C0]/10 border-t border-[#1D9E75]/20 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to be genuinely<br/><span className="text-[#1D9E75]">DPDP compliant?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Join India&apos;s first cloud built for DPDP from day one. 3 months free for beta customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="bg-[#1D9E75] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0F6E56] transition-all hover:shadow-lg hover:shadow-[#1D9E75]/25">
              Start free — DPDP included
            </Link>
            <a href="mailto:ceo@yourcloud.in" className="bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Talk to Babrit directly
            </a>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            GravRel · Bhubaneswar, Odisha, India · UDYAM-OD-03-0020346
          </p>
        </div>
      </section>

    </div>
  );
}
