import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pharmacyInfo, values } from '../data/pharmacyData';
import { 
  HeartPulseIcon, 
  ShieldCheckIcon, 
  StethoscopeIcon, 
  ClockIcon, 
  MapPinIcon, 
  PhoneIcon, 
  WhatsAppIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from '../components/Icons';

export const AboutPage = () => {
  const navigate = useNavigate();
  const getValueIcon = (iconName) => {
    switch(iconName) {
      case 'HeartPulseIcon': return <HeartPulseIcon className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheckIcon': return <ShieldCheckIcon className="w-6 h-6 text-pharmacy-600" />;
      case 'StethoscopeIcon': return <StethoscopeIcon className="w-6 h-6 text-blue-600" />;
      case 'ClockIcon': return <ClockIcon className="w-6 h-6 text-teal-600" />;
      default: return <ShieldCheckIcon className="w-6 h-6 text-pharmacy-600" />;
    }
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pharmacy-100 text-pharmacy-800">
          About Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Your Health, <span className="text-pharmacy-600">Our Priority.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          AZ Pharmacy is dedicated to making everyday healthcare products and reliable pharmacy services accessible to our local community.
        </p>
      </section>

      {/* Main Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              A Welcoming Environment for Healthcare & Wellness
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                AZ Pharmacy was established with a singular focus: to offer a welcoming, patient-centered pharmacy experience where individuals and families can find medicines, healthcare essentials, vitamins, and personal care products with confidence.
              </p>
              <p>
                Our team prioritizes customer satisfaction, reliable pharmaceutical sourcing, and friendly service. Whether you are filling a regular prescription, looking for first-aid supplies, or need assistance selecting an over-the-counter remedy, we are here to support your daily wellness journey.
              </p>
            </div>

            {/* Mission Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pharmacy-50 to-teal-50 border border-pharmacy-200/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-700">
                Our Mission
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-900 italic">
                “To serve our community with helpful pharmacy service and access to everyday healthcare essentials.”
              </p>
            </div>
          </div>

          {/* Quick Stats / Highlights Box */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 pharmacy-card-shadow space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Why Customers Count On Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-slate-900 block">Accurate Dispensing</strong>
                  <p className="text-xs text-slate-500">Adhering strictly to clinical prescription checks and safety guidelines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-slate-900 block">Transparent Product Claims</strong>
                  <p className="text-xs text-slate-500">Only verified information, clear labels, and honest shelf guidance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-slate-900 block">Direct Channel Access</strong>
                  <p className="text-xs text-slate-500">Check availability via phone or WhatsApp before visiting.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-pharmacy-600 hover:bg-pharmacy-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Get in Touch With Us</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
              Guided By Principles
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm text-slate-600">
              The fundamental standards that guide every interaction and service at AZ Pharmacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 pharmacy-card-shadow space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 pharmacy-card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
                Stop By Today
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Visit AZ Pharmacy
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We invite you to visit our counter for your prescription and healthcare needs. Our staff is ready to help you locate what you need.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 h-5 text-pharmacy-600 shrink-0" />
                  <span>{pharmacyInfo.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-pharmacy-600 shrink-0" />
                  <span>{pharmacyInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-pharmacy-600 shrink-0" />
                  <span>{pharmacyInfo.hours.weekdays}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button
                onClick={() => navigate('/contact')}
                className="py-3.5 px-6 rounded-xl font-bold text-white bg-pharmacy-600 hover:bg-pharmacy-700 transition-colors shadow-md"
              >
                Directions & Contact Form
              </button>

              <a
                href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I have an inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
