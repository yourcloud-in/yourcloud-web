import { Server, Database, Box, Brain, HardDrive, Shield } from 'lucide-react';

const SERVICES = [
  { icon: Server,    name: 'Cloud VMs',          desc: 'KVM-isolated VMs. SSH in 60 seconds. Cloud-init + WireGuard VPN.',     price: 'From ₹199/mo' },
  { icon: Database,  name: 'Managed Databases',   desc: 'PostgreSQL, MySQL, Redis. Automated backups. Point-in-time restore.',  price: 'From ₹499/mo' },
  { icon: Box,       name: 'Kubernetes',          desc: 'Managed k3s clusters. Auto-scaling. kubectl access over VPN.',          price: 'From ₹999/mo' },
  { icon: Brain,     name: 'ML Environment',      desc: 'NVIDIA A40 48GB GPU. JupyterHub. Shared and dedicated slices.',        price: 'From ₹999/mo' },
  { icon: HardDrive, name: 'Object Storage',      desc: 'S3-compatible MinIO. Works with any AWS SDK, boto3, unchanged.',       price: 'From ₹199/mo' },
  { icon: Shield,    name: 'DPDP Compliance',     desc: 'Instant Data Processing Agreements. Compliance dashboard. Green badge.', price: 'Included'   },
];

export default function Services() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          Everything your startup needs
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          One platform. All services. All in India. All on solar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map(({ icon: Icon, name, desc, price }) => (
          <div key={name} className="bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
              <Icon size={20} className="text-brand-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">{name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
            <span className="text-sm font-semibold text-brand-600">{price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
