import React, { useState, useMemo } from 'react';
import { pharmacyInfo, categories, products } from '../data/pharmacyData';
import { ProductCard } from '../components/ProductCard';
import { 
  SearchIcon, 
  XIcon, 
  PhoneIcon, 
  WhatsAppIcon, 
  AlertCircleIcon, 
  ShieldCheckIcon,
  FilterIcon
} from '../components/Icons';

export const ProductsPage = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [prescriptionFilter, setPrescriptionFilter] = useState('all'); // 'all', 'otc', 'rx'

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query || 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query);

      // Prescription match
      const matchesRx = 
        prescriptionFilter === 'all' ||
        (prescriptionFilter === 'rx' && product.prescriptionRequired) ||
        (prescriptionFilter === 'otc' && !product.prescriptionRequired);

      return matchesCategory && matchesSearch && matchesRx;
    });
  }, [selectedCategory, searchQuery, prescriptionFilter]);

  const activeCategoryInfo = categories.find(c => c.id === selectedCategory);

  return (
    <div className="space-y-12 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pharmacy-100 text-pharmacy-800">
          Our Products
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Everyday Healthcare & Wellness Essentials
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore the pharmaceutical, personal care, and nutritional wellness categories available at AZ Pharmacy.
        </p>

        {/* Stock Notice Banner */}
        <div className="inline-flex items-center gap-2 p-3 sm:px-5 rounded-2xl bg-slate-100/90 border border-slate-200 text-xs sm:text-sm text-slate-700 max-w-2xl text-left sm:text-center">
          <AlertCircleIcon className="w-4 h-4 text-pharmacy-600 shrink-0" />
          <span>
            <strong>Note on Availability:</strong> Contact us via phone or WhatsApp to verify immediate in-store stock. Selection may vary.
          </span>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 pharmacy-card-shadow space-y-4">
          {/* Top Row: Search Input & Rx Toggle */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, symptom, or keyword..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pharmacy-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Prescription Filter Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 text-xs font-semibold">
              <span className="text-slate-500 whitespace-nowrap pl-1 pr-2">Filter by Type:</span>
              <button
                onClick={() => setPrescriptionFilter('all')}
                className={`px-3 py-2 rounded-xl transition-colors whitespace-nowrap ${
                  prescriptionFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setPrescriptionFilter('otc')}
                className={`px-3 py-2 rounded-xl transition-colors whitespace-nowrap ${
                  prescriptionFilter === 'otc'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Over-the-Counter (OTC)
              </button>
              <button
                onClick={() => setPrescriptionFilter('rx')}
                className={`px-3 py-2 rounded-xl transition-colors whitespace-nowrap ${
                  prescriptionFilter === 'rx'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Rx Required
              </button>
            </div>
          </div>

          {/* Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none border-t border-slate-100">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-pharmacy-600 text-white shadow-sm shadow-pharmacy-600/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        {activeCategoryInfo && (
          <div className="p-4 rounded-2xl bg-pharmacy-50/70 border border-pharmacy-100 text-xs sm:text-sm text-pharmacy-900 flex items-center justify-between">
            <p>
              <strong className="font-bold">{activeCategoryInfo.name}:</strong> {activeCategoryInfo.description}
            </p>
            <span className="font-semibold text-pharmacy-700 whitespace-nowrap pl-4">
              Showing {filteredProducts.length} items
            </span>
          </div>
        )}
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <SearchIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any items matching your current search or filter criteria. Contact our counter directly — we may have it in stock or can special order it!
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPrescriptionFilter('all');
                }}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Reset Filters
              </button>
              <a
                href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent(`Hello AZ Pharmacy, I am looking for: ${searchQuery}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Ask About a Product Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Personalized Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Looking for a specific medicine or brand not listed above?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our inventory extends beyond what is shown on this informational website. Contact AZ Pharmacy by phone or message us on WhatsApp with the medication name or prescription details to check immediate availability.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`tel:${pharmacyInfo.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-pharmacy-600" />
                <span>Call {pharmacyInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I am looking for a specific product and would like to check availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-2 shadow-md shadow-emerald-600/30"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Our Pharmacist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Health Claims Regulatory Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
            <AlertCircleIcon className="w-4 h-4 text-amber-700" />
            <span>Healthcare Compliance & Regulatory Notice</span>
          </div>
          <p className="leading-relaxed">
            All prescription medications are dispensed strictly in accordance with local health regulations and require a valid, current prescription written by a licensed healthcare provider. Dietary supplements and vitamins are not intended to diagnose, treat, cure, or prevent any illness. Always read product labeling carefully and consult your doctor or our licensed pharmacist for dosage directions and contraindications.
          </p>
        </div>
      </section>
    </div>
  );
};
