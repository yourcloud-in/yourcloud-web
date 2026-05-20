import type { Metadata } from 'next';
import { Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarbonDashboard from '@/components/CarbonDashboard';

export const metadata: Metadata = {
  title: 'Carbon Dashboard',
  description: 'Real-time solar generation and CO₂ savings from YourCloud\'s Bhubaneswar datacenter.',
};

export default function GreenPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-brand-600 text-sm mb-4">
              <Leaf size={15} />
              <span>Live data from Bhubaneswar, Odisha</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                Live
              </span>
            </div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">Carbon Dashboard</h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every workload on YourCloud runs on solar energy from our rooftop in Bhubaneswar.
              This is the real-time proof.
            </p>
          </div>

          <CarbonDashboard />

          <div className="mt-12 bg-brand-900 text-white rounded-3xl p-8">
            <h2 className="text-lg font-semibold mb-3">Use this in your BRSR report</h2>
            <p className="text-brand-200 text-sm leading-relaxed mb-4">
              SEBI's Business Responsibility and Sustainability Reporting (BRSR) framework requires
              India's top 1000 listed companies to disclose their technology supply chain carbon footprint.
              YourCloud customers receive monthly Green Cloud Certificates showing exact CO₂ savings
              versus equivalent coal-grid cloud usage — ready to include in your BRSR filing.
            </p>
            <p className="text-brand-300 text-xs">
              CO₂ factor: 0.82 kg per kWh (India grid, CEA 2023 baseline).
              Solar generation data from Growatt monitoring — updated every 5 minutes.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
