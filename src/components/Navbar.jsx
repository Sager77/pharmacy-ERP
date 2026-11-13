import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { pharmacyInfo } from '../data/pharmacyData';
import { 
  PhoneIcon, 
  WhatsAppIcon, 
  MapPinIcon, 
  MenuIcon, 
  XIcon, 
  CrossIcon,
  ChevronRightIcon
} from './Icons';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/contact',  label: 'Contact Us' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today Until 9:00 PM
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
              {pharmacyInfo.address}, {pharmacyInfo.city}
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a 
              href={`tel:${pharmacyInfo.phoneRaw}`}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              title="Call Pharmacy Directly"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-pharmacy-400" />
              <span>{pharmacyInfo.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to inquire about medicine availability.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Message on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pharmacy-600 to-pharmacy-500 text-white flex items-center justify-center shadow-md shadow-pharmacy-500/20 group-hover:scale-105 transition-transform">
              <CrossIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-pharmacy-600 transition-colors">
                  AZ
                </span>
                <span className="text-2xl font-bold tracking-tight text-pharmacy-600">
                  Pharmacy
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 tracking-wide">
                Your Health, Our Priority.
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-pharmacy-600 bg-pharmacy-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Quick Actions (Call & WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${pharmacyInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-pharmacy-600" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to inquire about products.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${pharmacyInfo.phoneRaw}`}
              className="p-2 rounded-lg text-pharmacy-600 bg-pharmacy-50 hover:bg-pharmacy-100"
              title="Call"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-pharmacy-50 text-pharmacy-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <ChevronRightIcon className={`w-4 h-4 ${isActive ? 'text-pharmacy-600' : 'text-slate-400'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
            <a
              href={`tel:${pharmacyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200"
            >
              <PhoneIcon className="w-4 h-4 text-pharmacy-600" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I have an inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
