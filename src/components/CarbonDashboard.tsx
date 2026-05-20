'use client';

import { useEffect, useState } from 'react';
import { Sun, Leaf, Wind, Zap } from 'lucide-react';

interface SolarData {
  powerWatts: number;
  dailyKwh: number;
  totalKwh: number;
  batteryPercent: number | null;
  gridStatus: string;
  co2SavedTodayKg: number;
  co2SavedTotalKg: number;
  treesEquivalent: number;
  lastUpdated: string | null;
}

export default function CarbonDashboard() {
  const [data, setData] = useState<SolarData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://api.yourcloud.in';
      const res = await fetch(`${apiBase}/api/v1/datacenter/solar`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setData(json.data);
      }
    } catch {
      // silently fail — show zeros
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Zap,  label: 'Current output',   value: data ? `${data.powerWatts.toFixed(0)} W`    : '—', sub: 'real-time'      },
    { icon: Sun,  label: 'Generated today',   value: data ? `${data.dailyKwh.toFixed(2)} kWh`   : '—', sub: 'since midnight'  },
    { icon: Leaf, label: 'CO₂ saved today',   value: data ? `${data.co2SavedTodayKg.toFixed(2)} kg` : '—', sub: 'vs coal grid' },
    { icon: Wind, label: 'Trees equivalent',  value: data ? `${data.treesEquivalent}`            : '—', sub: 'lifetime total'  },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4].map((i) => (
          <div key={i} className="bg-gray-100 rounded-2xl h-28 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, label, value, sub }) => (
          <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center mb-3">
              <Icon size={16} className="text-brand-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-0.5">{value}</p>
            <p className="text-xs text-gray-500 font-medium">{label}</p>
            <p className="text-xs text-gray-400">{sub}</p>
          </div>
        ))}
      </div>

      {/* Status row */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${data?.powerWatts && data.powerWatts > 0 ? 'bg-green-400' : 'bg-gray-300'}`} />
          <span className="text-gray-600">
            Solar: {data?.gridStatus ?? 'unknown'}
          </span>
        </div>
        {data?.batteryPercent != null && (
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Battery: {data.batteryPercent.toFixed(0)}%</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-gray-400 text-xs ml-auto">
          Updated {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleTimeString('en-IN') : '—'}
        </div>
      </div>

      {/* Lifetime total */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-brand-800">Total lifetime generation</p>
          <p className="text-xs text-brand-600 mt-0.5">Since datacenter went live</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-brand-700">{data?.totalKwh.toFixed(1) ?? '—'} kWh</p>
          <p className="text-xs text-brand-500">{data?.co2SavedTotalKg.toFixed(1) ?? '—'} kg CO₂ saved</p>
        </div>
      </div>
    </div>
  );
}
