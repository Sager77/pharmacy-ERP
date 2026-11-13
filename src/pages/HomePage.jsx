import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pharmacyInfo, categories, products, services, values } from '../data/pharmacyData';
import { ProductCard } from '../components/ProductCard';
import { 
  PhoneIcon, 
  WhatsAppIcon, 
  MapPinIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  HeartPulseIcon, 
  ArrowRightIcon, 
  ChevronRightIcon, 
  PillIcon, 
  BabyIcon, 
  SparklesIcon, 
  ActivityIcon,
  StethoscopeIcon,
  TruckIcon,
  CheckCircleIcon
} from '../components/Icons';

export const HomePage = ({ onSelectProduct }) => {
  const navigate = useNavigate();
  // Select top 4 featured products for homepage preview
  const featuredProducts = products.filter(p => [1, 5, 9, 18].includes(p.id));

  const getCategoryIcon = (id) => {
    switch(id) {
      case 'medicines': return <PillIcon className="w-6 h-6 text-pharmacy-600" />;
      case 'vitamins': return <HeartPulseIcon className="w-6 h-6 text-emerald-600" />;
      case 'supplies': return <ShieldCheckIcon className="w-6 h-6 text-blue-600" />;
      case 'baby': return <BabyIcon className="w-6 h-6 text-pink-500" />;
      case 'personal': return <SparklesIcon className="w-6 h-6 text-purple-600" />;
      case 'equipment': return <ActivityIcon className="w-6 h-6 text-teal-600" />;
      default: return <PillIcon className="w-6 h-6 text-pharmacy-600" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pharmacy-50/70 via-white to-slate-50 pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharmacy-100/80 border border-pharmacy-200 text-xs sm:text-sm font-semibold text-pharmacy-800">
                <ShieldCheckIcon className="w-4 h-4 text-pharmacy-600" />
                <span>Your Community Healthcare & Wellness Partner</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Your Health, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharmacy-600 to-teal-600">
                  Our Priority.
                </span>
              </h1>

              {/* Introduction */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <strong className="text-slate-900">AZ Pharmacy</strong>, your destination for everyday healthcare, genuine medicines, wellness essentials, and personal care. We are committed to friendly guidance, high-quality products, and dependable service.
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => navigate('/products')}
                  className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-pharmacy-600 hover:bg-pharmacy-700 shadow-lg shadow-pharmacy-600/25 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Explore Our Products</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </button>

                <a
                  href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to inquire about medicine availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>

              {/* Trust Metric Badges */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <ShieldCheckIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-900">100% Genuine</span>
                    <span className="text-[11px] text-slate-500">Certified Sourcing</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pharmacy-100 flex items-center justify-center text-pharmacy-600 shrink-0">
                    <StethoscopeIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-900">Licensed</span>
                    <span className="text-[11px] text-slate-500">Qualified Pharmacists</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-900">Open 7 Days</span>
                    <span className="text-[11px] text-slate-500">Morning till Night</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow */}
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-pharmacy-400/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl -z-10"></div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
                        Local Pharmacy Counter
                      </span>
                      <h3 className="text-lg font-black text-slate-900">AZ Pharmacy Services</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Open Now
                    </span>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pharmacy-50 flex items-center justify-center text-pharmacy-600 shrink-0 mt-0.5">
                        <PillIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900 block font-semibold">Prescription Dispensing</strong>
                        <p className="text-xs text-slate-500">Handled by licensed pharmacists with thorough dosage checks.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <WhatsAppIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900 block font-semibold">Instant Stock Availability Inquiries</strong>
                        <p className="text-xs text-slate-500">Direct WhatsApp checks before you visit.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900 block font-semibold">Healthcare & First Aid Supplies</strong>
                        <p className="text-xs text-slate-500">Everything needed for family care and medical readiness.</p>
                      </div>
                    </div>
                  </div>

                  {/* Fast Contact Action */}
                  <div className="pt-2">
                    <a
                      href={`tel:${pharmacyInfo.phoneRaw}`}
                      className="w-full py-3 px-4 rounded-xl text-sm font-bold text-center text-pharmacy-700 bg-pharmacy-50 hover:bg-pharmacy-100 transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span>Call {pharmacyInfo.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 pharmacy-card-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-pharmacy-100 text-pharmacy-600 flex items-center justify-center shrink-0">
              <PillIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Healthcare & Wellness Essentials</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Comprehensive selection of everyday medicines, nutritional vitamins, supplements, and baby care essentials.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 pharmacy-card-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <HeartPulseIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Friendly Customer Support</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Attentive, qualified team ready to assist you in locating the right over-the-counter care products for your family.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 pharmacy-card-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Convenient Phone & WhatsApp</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Check medicine availability and product questions with a quick call or message before heading to our pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT AZ PHARMACY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-400">
                About AZ Pharmacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-snug">
                Better health starts with trusted community care.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                At AZ Pharmacy, we believe that better health starts with trusted care. Our goal is to make everyday healthcare products accessible while providing friendly and helpful customer service. From medicines and vitamins to personal care and medical supplies, we aim to help you find the products you need.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => navigate('/about')}
                  className="px-5 py-3 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRightIcon className="w-4 h-4 text-pharmacy-600" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-4">
              <h3 className="text-base font-bold text-white border-b border-slate-700 pb-2">
                Our Core Commitments
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Respectful, patient-focused customer care</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Properly sourced and verified medications</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accurate, honest product information</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accessible hours and convenient contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES & FEATURED PRODUCTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
              Browse Categories
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Explore Our Products
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-xl">
              Discover our carefully curated healthcare, wellness, and personal care ranges.
            </p>
          </div>

          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 text-sm font-bold text-pharmacy-600 hover:text-pharmacy-700 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(1, 7).map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate('/products')}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-pharmacy-300 pharmacy-card-shadow transition-all duration-200 cursor-pointer group text-center flex flex-col items-center justify-center space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-pharmacy-50 flex items-center justify-center transition-colors">
                {getCategoryIcon(cat.id)}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-pharmacy-600 transition-colors">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Featured Healthcare Essentials</h3>
            <span className="text-xs text-slate-500">Contact counter to verify stock</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
              Community Health Support
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our Pharmacy Services
            </h2>
            <p className="text-sm text-slate-600">
              Learn about the healthcare support and dispensing services available at AZ Pharmacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 pharmacy-card-shadow flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-pharmacy-50 text-pharmacy-700 mb-3">
                    {service.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pharmacy-600 hover:text-pharmacy-700 transition-colors"
                  >
                    <span>Read Details</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Available Services</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE AZ PHARMACY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
            Dedicated To You
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Why Choose AZ Pharmacy?
          </h2>
          <p className="text-sm text-slate-600">
            We aim to make every visit comfortable, informative, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 pharmacy-card-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-pharmacy-50 text-pharmacy-600 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Customer-Focused Service</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We take the time to listen and provide respectful, helpful assistance for your pharmacy needs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 pharmacy-card-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Healthcare Essentials</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Access everyday healthcare, wellness, vitamins, and medical care products in one place.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 pharmacy-card-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Convenient Communication</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Reach us directly by phone or WhatsApp for prompt stock checks and general inquiries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 pharmacy-card-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900">Commitment to Quality</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We source genuine, authorized products from recognized pharmaceutical distributors.
            </p>
          </div>
        </div>
      </section>

      {/* 7. VISIT OR CONTACT US CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-pharmacy-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                Ready To Help You
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Looking for a healthcare product or need information about availability?
              </h2>
              <p className="text-sm text-teal-100 max-w-xl">
                Get in touch with AZ Pharmacy today. Our team is available by phone, WhatsApp, or in person at our store.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <PhoneIcon className="w-4 h-4 text-teal-200" />
                  {pharmacyInfo.phone}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4 text-teal-200" />
                  Open Mon–Fri: 8am–9pm
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${pharmacyInfo.phoneRaw}`}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-pharmacy-900 bg-white hover:bg-slate-100 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-pharmacy-600" />
                <span>Call Us Now</span>
              </a>

              <a
                href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to check availability for a medication.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <button
                onClick={() => navigate('/contact')}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-teal-100 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                Find Us on Map
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
