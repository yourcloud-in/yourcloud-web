'use client';

import { useEffect, useState } from 'react';
import { Activity, Leaf, Server, Zap } from 'lucide-react';

interface DcStats {
  node1: { cpu: number; memory: { used: number; total: number } } | null;
  node2: { cpu: number; memory: { used: number; total: number } } | null;
  solar: {
    powerWatts: number;
    dailyKwh: number;
    batteryPercent: number | null;
    gridStatus: string;
  } | null;
}

function NodeBar({ label, cpu, memPct }: { label: string; cpu: number; memPct: number }) {
  const cpuPct = cpu * 100;
  const barColor = (pct: number) => pct > 90 ? 'bg-red-500' : pct > 70 ? 'bg-yellow-400' : 'bg-brand-400';

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-semibold text-gray-700">{label}</span>
        <span className="text-xs text-gray-400 ml-auto">Online</span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>CPU</span><span>{cpuPct.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className={`${barColor(cpuPct)} h-1.5 rounded-full transition-all`} style={{ width: `${Math.min(cpuPct, 100)}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>RAM</span><span>{memPct.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className={`${barColor(memPct)} h-1.5 rounded-full transition-all`} style={{ width: `${Math.min(memPct, 100)}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DatacenterLive() {
  const [stats, setStats] = useState<DcStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://api.yourcloud.in';
      const [dcRes, solarRes] = await Promise.all([
        window.fetch(`${apiBase}/api/v1/datacenter/status`, { headers: { Authorization: '' } }),
        window.fetch(`${apiBase}/api/v1/datacenter/solar`),
      ]);
      const dcData   = dcRes.ok    ? await dcRes.json()   : null;
      const solarData= solarRes.ok ? await solarRes.json(): null;
      setStats({
        node1:  dcData?.data?.node1 ?? null,
        node2:  dcData?.data?.node2 ?? null,
        solar:  solarData?.data ?? null,
      });
    } catch { /**/ } finally { setLoading(false); }
  };

  useEffect(() => { fetch(); const t = setInterval(fetch, 15_000); return () => clearInterval(t); }, []);

  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">Datacenter Live</h2>
          <p className="text-sm text-gray-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Real-time · Bhubaneswar, Odisha · Auto-refreshes every 15s
          </p>
        </div>
        <Activity size={20} className="text-brand-400" />
      </div>

      {/* Solar strip */}
      <div className="bg-gray-900 text-white rounded-2xl p-5 mb-5 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Leaf size={16} className="text-brand-400" />
          <span className="text-sm font-medium">Solar Power</span>
        </div>
        <div className="flex items-center gap-8">
          {[
            { label: 'Output',  value: stats?.solar ? `${stats.solar.powerWatts.toFixed(0)} W`      : '—' },
            { label: 'Today',   value: stats?.solar ? `${stats.solar.dailyKwh.toFixed(2)} kWh`      : '—' },
            { label: 'Battery', value: stats?.solar?.batteryPercent != null ? `${stats.solar.batteryPercent.toFixed(0)}%` : '—' },
            { label: 'Grid',    value: stats?.solar?.gridStatus ?? '—' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-base font-bold text-white">{value}</p>
              <p className="text-xs text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Node cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading ? (
          [1, 2, 3, 4].map(i => <div key={i} className="bg-gray-100 rounded-xl h-24 animate-pulse" />)
        ) : (
          <>
            {stats?.node1 && (
              <NodeBar
                label="node1 (192.168.1.11)"
                cpu={stats.node1.cpu}
                memPct={stats.node1.memory.total > 0 ? (stats.node1.memory.used / stats.node1.memory.total) * 100 : 0}
              />
            )}
            {stats?.node2 && (
              <NodeBar
                label="node2 (192.168.1.12)"
                cpu={stats.node2.cpu}
                memPct={stats.node2.memory.total > 0 ? (stats.node2.memory.used / stats.node2.memory.total) * 100 : 0}
              />
            )}
            <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">gpu (192.168.1.13)</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">NVIDIA A40 48GB</p>
                <p className="text-xs text-green-600 font-medium mt-1">Online</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">nas (192.168.1.14)</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">TrueNAS · 48TB RAID-Z2</p>
                <p className="text-xs text-green-600 font-medium mt-1">Online</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
