import React, { useEffect } from 'react';
import { pharmacyInfo } from '../data/pharmacyData';
import { 
  XIcon, 
  WhatsAppIcon, 
  PhoneIcon, 
  ShieldCheckIcon, 
  AlertCircleIcon, 
  CheckCircleIcon,
  PillIcon
} from './Icons';

export const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappUrl = `https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello AZ Pharmacy, I would like to confirm availability for "${product.name}" in category "${product.categoryLabel}".`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-500 hover:text-slate-900 shadow-md backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 sm:h-auto bg-slate-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-pharmacy-700 shadow-sm">
                {product.categoryLabel}
              </span>
            </div>
          </div>

          {/* Info Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.prescriptionRequired ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                    <AlertCircleIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>Prescription Required</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>General Healthcare Item</span>
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {product.name}
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Packaging / Specifications */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Product Details & Packaging:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {product.details}
                </p>
              </div>

              {/* Prescription Guidance Notice */}
              {product.prescriptionRequired && (
                <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                  <AlertCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    A valid doctor's prescription must be presented before this medication can be dispensed.
                  </p>
                </div>
              )}
            </div>

            {/* Inquire Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 block text-center">
                Need to confirm availability or dosage?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <a
                  href={`tel:${pharmacyInfo.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4 text-pharmacy-600" />
                  <span>Call Counter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
