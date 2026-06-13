'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function TryPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    'Booting Linux kernel...',
    'Mounting filesystem...',
    'Starting GravRel demo environment...',
    'Ready — your VM is live!',
  ];

  useEffect(() => {
    if (step < steps.length - 1) {
      const t = setTimeout(() => setStep(s => s + 1), 1400);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-[#0A1628] text-white flex flex-col">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#0D2137]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#1D9E75] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-semibold text-white text-sm">GravRel</span>
          <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">Live Demo</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#1D9E75] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
            Solar-powered · Bhubaneswar, Odisha
          </span>
          <Link href="/pricing" className="text-xs bg-[#1D9E75] text-white px-4 py-1.5 rounded-lg hover:bg-[#0F6E56] transition-colors font-medium">
            Get started free →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center py-8 px-4">
        <div className="inline-flex items-center gap-2 text-xs text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/20 px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[#1D9E75] rounded-full animate-pulse" />
          Real Linux VM · Running in your browser · No signup needed
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Try GravRel Instantly</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          A full Linux environment running right here in your browser via WebAssembly.
          This is exactly what your cloud VM feels like. Data never leaves your device.
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex gap-4 px-6 pb-6 max-w-7xl mx-auto w-full">

        {/* Terminal */}
        <div className="flex-1 flex flex-col">
          <div className="bg-[#0D2137] rounded-t-xl border border-white/10 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-[#1D9E75]/70" />
              </div>
              <span className="text-xs text-gray-400 ml-2">gravrel-demo — bash</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Debian Linux</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>WebAssembly VM</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-[#1D9E75]">🛡️ DPDP Safe</span>
            </div>
          </div>

          {!loaded && (
            <div className="flex-1 bg-black rounded-b-xl border border-t-0 border-white/10 flex flex-col items-center justify-center gap-4 min-h-[500px]">
              <div className="w-10 h-10 border-2 border-[#1D9E75]/30 border-t-[#1D9E75] rounded-full animate-spin" />
              <div className="text-center space-y-1">
                {steps.map((s, i) => (
                  <div key={i} className={`text-sm transition-all duration-500 ${
                    i === step ? 'text-[#1D9E75] font-medium' :
                    i < step ? 'text-gray-600 line-through' : 'text-gray-700'
                  }`}>{s}</div>
                ))}
              </div>
              <button onClick={() => setLoaded(true)} className="mt-4 text-xs text-[#1D9E75] border border-[#1D9E75]/30 px-5 py-2 rounded-lg hover:bg-[#1D9E75]/10 transition-colors">
                Launch VM now →
              </button>
            </div>
          )}

          {loaded && (
            <iframe
              ref={iframeRef}
              src="https://webvm.io"
              className="flex-1 min-h-[500px] rounded-b-xl border border-t-0 border-white/10"
              allow="cross-origin-isolated"
              title="GravRel Demo VM"
            />
          )}
        </div>

        {/* Right panel */}
        <div className="w-72 flex-shrink-0 flex flex-col gap-4">
          <div className="bg-[#0D2137] border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">Try these commands</p>
            <div className="space-y-2">
              {[
                ['uname -a', 'Check Linux kernel'],
                ['df -h', 'View disk space'],
                ['free -m', 'Check memory'],
                ['python3 --version', 'Python runtime'],
                ['node --version', 'Node.js runtime'],
                ['ls /etc/', 'System config'],
                ['curl ifconfig.me', 'Your IP address'],
              ].map(([cmd, desc]) => (
                <div key={cmd} className="flex items-center justify-between">
                  <code className="text-xs text-[#1D9E75] font-mono bg-[#1D9E75]/5 px-2 py-1 rounded">{cmd}</code>
                  <span className="text-xs text-gray-500">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1D9E75]/20 to-[#1565C0]/20 border border-[#1D9E75]/30 rounded-xl p-4 text-center">
            <p className="text-sm font-semibold text-white mb-1">Ready for the real thing?</p>
            <p className="text-xs text-gray-400 mb-3">Deploy a real VM in 60 seconds. 3 months free for beta users.</p>
            <Link href="/pricing" className="block w-full bg-[#1D9E75] text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-[#0F6E56] transition-colors">
              Start free — no credit card →
            </Link>
            <p className="text-xs text-gray-500 mt-2">60% cheaper than AWS · Data stays in India</p>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/10 bg-[#0D2137] px-6 py-3 flex items-center justify-between text-xs text-gray-500">
        <span>Powered by <a href="https://webvm.io" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] hover:underline">WebVM</a> (Apache 2.0) · Full Linux via WebAssembly</span>
        <span>GravRel · Bhubaneswar, Odisha · DPDP Compliant · 100% Solar</span>
      </div>
    </div>
  );
}
