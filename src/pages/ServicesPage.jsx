import React, { useState } from 'react';
import { pharmacyInfo, services, faqs } from '../data/pharmacyData';
import { 
  PillIcon, 
  SearchIcon, 
  StethoscopeIcon, 
  HeartPulseIcon, 
  ShieldCheckIcon, 
  TruckIcon, 
  PhoneIcon, 
  WhatsAppIcon, 
  CheckCircleIcon,
  ChevronDownIcon,
  AlertCircleIcon
} from '../components/Icons';

export const ServicesPage = ({ setActivePage }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const getServiceIcon = (iconName) => {
    switch(iconName) {
      case 'PillIcon': return <PillIcon className="w-6 h-6 text-pharmacy-600" />;
      case 'SearchIcon': return <SearchIcon className="w-6 h-6 text-teal-600" />;
      case 'StethoscopeIcon': return <StethoscopeIcon className="w-6 h-6 text-blue-600" />;
      case 'HeartPulseIcon': return <HeartPulseIcon className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheckIcon': return <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />;
      case 'TruckIcon': return <TruckIcon className="w-6 h-6 text-amber-600" />;
      default: return <PillIcon className="w-6 h-6 text-pharmacy-600" />;
    }
  };

  const handleServiceAction = (action) => {
    if (action === 'contact') {
      setActivePage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'call') {
      window.location.href = `tel:${pharmacyInfo.phoneRaw}`;
    } else if (action === 'whatsapp') {
      window.open(
        `https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to inquire about services.")}`,
        '_blank'
      );
    } else if (action.startsWith('products')) {
      setActivePage('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pharmacy-100 text-pharmacy-800">
          Our Services
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Comprehensive Pharmacy & Healthcare Care
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          AZ Pharmacy aims to support customers with everyday pharmacy and healthcare needs, from safe prescription dispensing to availability inquiries.
        </p>

        <div className="inline-flex items-center gap-2 p-3 sm:px-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700">
          <AlertCircleIcon className="w-4 h-4 text-pharmacy-600 shrink-0" />
          <span>
            Only authorized pharmacy services provided in accordance with applicable local regulations are offered.
          </span>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 pharmacy-card-shadow flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-pharmacy-50 text-pharmacy-700 border border-pharmacy-100">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-xs font-semibold text-pharmacy-600 mt-1">{service.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Points */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    What we provide:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {service.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleServiceAction(service.ctaAction)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-pharmacy-600 transition-colors shadow-sm"
                >
                  {service.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
              Common Questions
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Helpful answers regarding prescriptions, stock availability checks, and counter services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-pharmacy-600 transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-pharmacy-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-700 to-pharmacy-700 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black">
              Have questions about a service or prescription?
            </h2>
            <p className="text-sm text-teal-100 leading-relaxed">
              Our pharmacy team is happy to answer your questions regarding available services, delivery areas, or medicine inquiries.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${pharmacyInfo.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-pharmacy-600" />
                <span>Call {pharmacyInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I have a question about your pharmacy services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-2 shadow-md shadow-emerald-600/30"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Counter</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
