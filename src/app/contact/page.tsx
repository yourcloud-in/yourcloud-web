import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact YourCloud — email, phone, or visit us in Bhubaneswar.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">Get in touch</h1>
            <p className="text-gray-500">
              You will reach a real human — not a chatbot. Response within 24 hours, usually faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: Mail,    label: 'Email',    value: 'ceo@yourcloud.in',        href: 'mailto:ceo@yourcloud.in' },
              { icon: Phone,   label: 'Phone',    value: 'Listed in your console',  href: '#' },
              { icon: MapPin,  label: 'Location', value: 'Bhubaneswar, Odisha',     href: 'https://maps.google.com/?q=Bhubaneswar+Odisha' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-200 transition-colors">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={18} className="text-brand-600" />
                </div>
                <p className="text-xs font-medium text-gray-400 mb-1">{label}</p>
                <p className="text-sm font-medium text-gray-800">{value}</p>
              </a>
            ))}
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Looking for a partnership?</h2>
            <p className="text-brand-200 text-sm leading-relaxed mb-6">
              We're actively looking for STPI-registered companies, Odisha government digitisation
              projects, and ESG-conscious enterprises to be our first customers. If that's you —
              email us and we'll respond within the hour.
            </p>
            <a href="mailto:ceo@yourcloud.in"
              className="inline-flex items-center gap-2 bg-brand-400 text-white px-7 py-3 rounded-xl font-medium hover:bg-brand-600 transition-all">
              <Mail size={15} />
              ceo@yourcloud.in
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
