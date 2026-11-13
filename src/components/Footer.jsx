import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { pharmacyInfo, categories } from '../data/pharmacyData';
import { 
  PhoneIcon, 
  WhatsAppIcon, 
  MapPinIcon, 
  ClockIcon, 
  CrossIcon, 
  ShieldCheckIcon,
  ChevronRightIcon
} from './Icons';

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pharmacy-500 text-white flex items-center justify-center shadow-lg shadow-pharmacy-500/20">
                <CrossIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white">AZ</span>
                <span className="text-xl font-bold text-pharmacy-400">Pharmacy</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your destination for everyday healthcare, medicines, wellness, and personal care essentials. We are committed to serving our community with reliable products and friendly guidance.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Licensed Healthcare Provider</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/',         label: 'Home Page' },
                { to: '/about',    label: 'About AZ Pharmacy' },
                { to: '/products', label: 'Explore Products' },
                { to: '/services', label: 'Our Services' },
                { to: '/contact',  label: 'Contact & Location' }
              ].map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600 group-hover:text-pharmacy-400 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.slice(1, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNavClick('/products')}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Visit or Contact
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPinIcon className="w-5 h-5 text-pharmacy-400 shrink-0 mt-0.5" />
                <span>{pharmacyInfo.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-pharmacy-400 shrink-0" />
                <a 
                  href={`tel:${pharmacyInfo.phoneRaw}`} 
                  className="text-white hover:text-pharmacy-300 font-medium transition-colors"
                >
                  {pharmacyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I have an inquiry.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  WhatsApp: {pharmacyInfo.whatsapp}
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400 space-y-1 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>Store Hours:</span>
                </div>
                <p className="pl-5 text-slate-400">{pharmacyInfo.hours.weekdays}</p>
                <p className="pl-5 text-slate-400">{pharmacyInfo.hours.saturday}</p>
                <p className="pl-5 text-slate-400">{pharmacyInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Important Medical Disclaimer:</strong> AZ Pharmacy is a licensed local pharmacy. This website is for informational purposes only. The information provided is not intended to diagnose, treat, cure, or prevent any medical condition and does not substitute professional medical advice from a doctor or qualified healthcare professional. Prescription medications require a valid, verified prescription from an authorized practitioner before dispensing.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AZ Pharmacy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNavClick('/about')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick('/services')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick('/contact')} className="hover:text-white transition-colors">
              Store Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
