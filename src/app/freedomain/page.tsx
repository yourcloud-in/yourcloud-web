'use client';

import { useState } from 'react';

type Category = 'student' | 'opensource' | 'research' | 'ngo';

interface FormData {
  subdomain: string;
  targetIP: string;
  targetCname: string;
  ownerName: string;
  ownerEmail: string;
  institution: string;
  purpose: string;
  category: Category;
  agree: boolean;
}

const SUBDOMAIN_REGEX = /^[a-z0-9][a-z0-9-]{1,48}[a-z0-9]$/;

const CATEGORY_OPTIONS = [
  { value: 'student' as Category,    icon: '🎓', label: 'Student Project',   desc: 'Portfolios, final year projects, hackathon demos' },
  { value: 'opensource' as Category, icon: '💻', label: 'Open Source',       desc: 'Free software projects with public source code' },
  { value: 'research' as Category,   icon: '🔬', label: 'Research',          desc: 'Academic research demos, paper supplementaries' },
  { value: 'ngo' as Category,        icon: '❤️', label: 'NGO / Social Good', desc: 'Non-profit and social impact initiatives' },
];

const EXAMPLES = ['ravi-portfolio', 'nit-ai-lab', 'my-ml-project', 'kiit-hackathon', 'odisha-helpline'];

export default function FreeDomainPage() {
  const [form, setForm] = useState<FormData>({
    subdomain: '', targetIP: '', targetCname: '', ownerName: '',
    ownerEmail: '', institution: '', purpose: '', category: 'student', agree: false,
  });
  const [step, setStep]           = useState<1|2|3>(1);
  const [checking, setChecking]   = useState(false);
  const [available, setAvailable] = useState<boolean|null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState<Record<string,string>>({});

  const fullDomain = form.subdomain ? `${form.subdomain}.gr.in` : 'yourname.gr.in';
  const set = (key: keyof FormData, value: string|boolean) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const checkAvailability = async () => {
    if (!SUBDOMAIN_REGEX.test(form.subdomain)) {
      setErrors({ subdomain: 'Only lowercase letters, numbers and hyphens. Min 3 chars.' });
      return;
    }
    setErrors({});
    setChecking(true);
    await new Promise(r => setTimeout(r, 900));
    setAvailable(true);
    setChecking(false);
  };

  const validate = () => {
    const e: Record<string,string> = {};
    if (!SUBDOMAIN_REGEX.test(form.subdomain))  e.subdomain  = 'Invalid subdomain';
    if (!form.targetIP && !form.targetCname)    e.target     = 'Enter IP or CNAME';
    if (!form.ownerName.trim())                 e.ownerName  = 'Required';
    if (!form.ownerEmail.includes('@'))         e.ownerEmail = 'Valid email required';
    if (!form.purpose.trim())                   e.purpose    = 'Tell us what you are building';
    if (!form.agree)                            e.agree      = 'Please agree to terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A1628] flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-5">
          <div className="text-6xl">🎉</div>
          <h1 className="text-2xl font-bold text-white">Application submitted!</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your free domain <span className="text-[#1D9E75] font-mono font-semibold">{fullDomain}</span> is
            under review. We will email <strong className="text-white">{form.ownerEmail}</strong> within 24 hours.
          </p>
          <div className="bg-[#1D9E75]/5 border border-[#1D9E75]/20 rounded-xl p-4 text-left">
            <p className="text-xs text-gray-400 mb-2">What happens next:</p>
            <div className="text-xs text-gray-300 space-y-1.5">
              <div>✅ Team reviews your application (within 24h)</div>
              <div>✅ DNS record created on PowerDNS, Bhubaneswar</div>
              <div>✅ Email confirmation with setup guide</div>
              <div>✅ Your domain goes live — share it with the world 🚀</div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Questions? <span className="text-[#1D9E75]">ceo@gravrel.com</span> — Babrit responds personally.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <div className="border-b border-white/10 bg-[#0D2137]">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#1D9E75] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-semibold text-sm">GravRel</span>
          <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">Free Domain</span>
          <span className="ml-auto text-xs text-[#1D9E75] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
            Solar-powered · Bhubaneswar DC
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/20 px-4 py-1.5 rounded-full">
            🇮🇳 Free for Indian students, researchers & open source
          </div>
          <h1 className="text-4xl font-bold">Your first domain.<br/><span className="text-[#1D9E75]">Completely free.</span></h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
            Get a real, live <strong className="text-white font-mono">yourproject.gr.in</strong> domain.
            No credit card. No cost. No barrier.
            Because talent in India should never die due to lack of money.
          </p>
        </div>

        <div className="bg-[#0D2137] border border-gray-700 rounded-2xl p-5 text-center space-y-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Your domain will be</p>
          <div className="font-mono text-3xl font-bold text-[#1D9E75]">{fullDomain}</div>
          <p className="text-xs text-gray-500">Free for 1 year · Renewable · Solar-powered DNS · DPDP compliant</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {EXAMPLES.map(ex => (
              <button key={ex} onClick={() => { set('subdomain', ex); setAvailable(null); }}
                className="text-xs font-mono text-gray-400 border border-gray-700 px-2 py-1 rounded hover:border-[#1D9E75]/50 hover:text-[#1D9E75] transition-colors">
                {ex}.gr.in
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          {[1,2,3].map((s, i) => (
            <div key={s} className={`flex items-center ${i < 2 ? 'flex-1' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                step >= s ? 'bg-[#1D9E75] text-white' : 'bg-gray-800 text-gray-500'
              }`}>{step > s ? '✔' : s}</div>
              <span className={`ml-2 text-xs ${step >= s ? 'text-white' : 'text-gray-600'}`}>
                {s===1?'Choose domain':s===2?'DNS target':'Your details'}
              </span>
              {i < 2 && <div className="flex-1 h-px bg-gray-800 mx-3"/>}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium block mb-2">Choose your subdomain</label>
              <div className="flex gap-2">
                <div className="flex-1 flex items-center bg-[#0D2137] border border-gray-700 rounded-xl overflow-hidden focus-within:border-[#1D9E75]">
                  <input type="text" value={form.subdomain}
                    onChange={e => { set('subdomain', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g,'')); setAvailable(null); }}
                    placeholder="your-project-name"
                    className="flex-1 bg-transparent px-4 py-3 text-white text-sm focus:outline-none"/>
                  <span className="px-4 text-[#1D9E75] font-mono text-sm font-semibold border-l border-gray-700 py-3 bg-[#1D9E75]/5">.gr.in</span>
                </div>
                <button onClick={checkAvailability} disabled={!form.subdomain || checking}
                  className="px-5 bg-[#1D9E75] text-white rounded-xl text-sm font-medium hover:bg-[#0F6E56] disabled:opacity-50 transition-colors">
                  {checking ? '...' : 'Check'}
                </button>
              </div>
              {errors.subdomain && <p className="text-xs text-red-400 mt-1">{errors.subdomain}</p>}
              {available === true  && <p className="text-xs text-green-400 mt-1">✅ <span className="font-mono">{form.subdomain}.gr.in</span> is available!</p>}
              {available === false && <p className="text-xs text-red-400 mt-1">❌ Already taken. Try a different name.</p>}
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">What are you building?</label>
              <div className="grid grid-cols-2 gap-3">
                {CATEGORY_OPTIONS.map(opt => (
                  <button key={opt.value} onClick={() => set('category', opt.value)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      form.category === opt.value ? 'border-[#1D9E75] bg-[#1D9E75]/10' : 'border-gray-700 bg-[#0D2137] hover:border-gray-600'
                    }`}>
                    <div className="text-xl mb-1">{opt.icon}</div>
                    <div className="text-sm font-medium">{opt.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => available === true && setStep(2)} disabled={available !== true}
              className="w-full bg-[#1D9E75] py-3 rounded-xl font-semibold text-sm hover:bg-[#0F6E56] disabled:opacity-40 transition-colors">
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="bg-[#0D2137] border border-gray-800 rounded-xl p-4 text-xs text-gray-400">
              Where should <span className="text-[#1D9E75] font-mono">{fullDomain}</span> point?
              Enter your server IP or CNAME for platforms like Vercel / GitHub Pages.
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">A Record — Server IP</label>
              <input type="text" value={form.targetIP} onChange={e => set('targetIP', e.target.value)}
                placeholder="103.21.244.10"
                className="w-full bg-[#0D2137] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1D9E75]"/>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-800"/><span className="text-xs text-gray-500">OR</span><div className="flex-1 h-px bg-gray-800"/>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">CNAME — Platform hostname</label>
              <input type="text" value={form.targetCname} onChange={e => set('targetCname', e.target.value)}
                placeholder="youruser.github.io or cname.vercel-dns.com"
                className="w-full bg-[#0D2137] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1D9E75]"/>
              {errors.target && <p className="text-xs text-red-400 mt-1">{errors.target}</p>}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 bg-gray-800 text-gray-300 py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors">← Back</button>
              <button onClick={() => { if (form.targetIP || form.targetCname) { setErrors({}); setStep(3); } else setErrors({ target: 'Enter IP or CNAME' }); }}
                className="flex-1 bg-[#1D9E75] py-3 rounded-xl font-semibold text-sm hover:bg-[#0F6E56] transition-colors">Continue →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1.5">Full Name *</label>
                <input type="text" value={form.ownerName} onChange={e => set('ownerName', e.target.value)}
                  placeholder="Ravi Shankar"
                  className="w-full bg-[#0D2137] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1D9E75]"/>
                {errors.ownerName && <p className="text-xs text-red-400 mt-1">{errors.ownerName}</p>}
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1.5">Email *</label>
                <input type="email" value={form.ownerEmail} onChange={e => set('ownerEmail', e.target.value)}
                  placeholder="you@kiit.ac.in"
                  className="w-full bg-[#0D2137] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1D9E75]"/>
                {errors.ownerEmail && <p className="text-xs text-red-400 mt-1">{errors.ownerEmail}</p>}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">College / Institution (optional)</label>
              <input type="text" value={form.institution} onChange={e => set('institution', e.target.value)}
                placeholder="KIIT / NIT Rourkela / ITER / any college..."
                className="w-full bg-[#0D2137] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1D9E75]"/>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">What are you building? *</label>
              <textarea value={form.purpose} onChange={e => set('purpose', e.target.value)} rows={3}
                placeholder="A portfolio, ML demo, research paper site, open source project docs..."
                className="w-full bg-[#0D2137] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1D9E75] resize-none"/>
              {errors.purpose && <p className="text-xs text-red-400 mt-1">{errors.purpose}</p>}
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)} className="mt-0.5 accent-[#1D9E75]"/>
              <span className="text-xs text-gray-400">I agree to the terms and confirm this is for educational / non-commercial use.</span>
            </label>
            {errors.agree && <p className="text-xs text-red-400">{errors.agree}</p>}
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 bg-gray-800 text-gray-300 py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors">← Back</button>
              <button onClick={submit} className="flex-1 bg-[#1D9E75] py-3 rounded-xl font-semibold text-sm hover:bg-[#0F6E56] transition-colors">🚀 Claim my free domain</button>
            </div>
          </div>
        )}

        <div className="text-center text-xs text-gray-600 pb-4">
          GravRel Free Domain Initiative · Bhubaneswar, Odisha · ☀️ 100% Solar · 🛡️ DPDP Compliant<br/>
          A helping hand for India&apos;s youth · <a href="mailto:ceo@gravrel.com" className="text-[#1D9E75] hover:underline">ceo@gravrel.com</a>
        </div>
      </div>
    </div>
  );
}
