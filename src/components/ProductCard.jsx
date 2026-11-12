import React from 'react';
import { pharmacyInfo } from '../data/pharmacyData';
import { 
  WhatsAppIcon, 
  PhoneIcon, 
  ShieldCheckIcon, 
  AlertCircleIcon, 
  ArrowRightIcon 
} from './Icons';

export const ProductCard = ({ product, onSelectProduct }) => {
  const whatsappUrl = `https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello AZ Pharmacy, I would like to check availability for "${product.name}" (${product.categoryLabel}).`
  )}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden pharmacy-card-shadow transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80';
          }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-pharmacy-700 shadow-sm backdrop-blur-sm">
            {product.categoryLabel}
          </span>
        </div>

        {/* Prescription Tag / Availability Tag */}
        <div className="absolute top-3 right-3">
          {product.prescriptionRequired ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white shadow-sm backdrop-blur-sm">
              <AlertCircleIcon className="w-3.5 h-3.5" />
              <span>Rx Required</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white shadow-sm backdrop-blur-sm">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              <span>Available</span>
            </span>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-base font-bold text-slate-900 group-hover:text-pharmacy-600 transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>
          
          <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Status:</span>
            <span className={`font-semibold ${product.prescriptionRequired ? 'text-amber-600' : 'text-emerald-600'}`}>
              {product.availability}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"
            >
              <span>Details</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20 flex items-center justify-center gap-1.5"
              title="Ask availability on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Ask Stock</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
