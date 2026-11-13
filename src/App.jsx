import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { pharmacyInfo } from './data/pharmacyData';
import { WhatsAppIcon, PhoneIcon } from './components/Icons';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-pharmacy-500 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onSelectProduct={(product) => setSelectedProduct(product)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage onSelectProduct={(product) => setSelectedProduct(product)} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Persistent Floating Quick WhatsApp & Call Hub (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Quick WhatsApp Pill */}
        <a
          href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to check availability for a product.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-105 transition-all focus:outline-none"
          title="Direct WhatsApp Inquiry"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Inquiries</span>
        </a>

        {/* Quick Phone Call Pill on mobile */}
        <a
          href={`tel:${pharmacyInfo.phoneRaw}`}
          className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-pharmacy-600 text-white shadow-xl shadow-pharmacy-600/30 hover:bg-pharmacy-700 hover:scale-105 transition-all self-end"
          title="Call Pharmacy"
        >
          <PhoneIcon className="w-5 h-5" />
        </a>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
