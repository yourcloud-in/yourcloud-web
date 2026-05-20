import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DatacenterLive from '@/components/DatacenterLive';
import { Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Datacenter',
  description: 'Live status of YourCloud infrastructure — solar output, node health, Bhubaneswar DC.',
};

export default function DatacenterPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-12 pb-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-brand-600 text-sm mb-4">
            <Leaf size={14} /> Live from Bhubaneswar, Odisha
          </div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">Our Datacenter</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real-time health of our infrastructure. Solar generation, node CPU/RAM, and network status — all live.
          </p>
        </div>
        <DatacenterLive />
      </div>
      <Footer />
    </>
  );
}
