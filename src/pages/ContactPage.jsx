import React, { useState } from 'react';
import { pharmacyInfo } from '../data/pharmacyData';
import { 
  PhoneIcon, 
  WhatsAppIcon, 
  MailIcon, 
  MapPinIcon, 
  ClockIcon, 
  ExternalLinkIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  AlertCircleIcon
} from '../components/Icons';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: 'General Inquiry',
    message: '',
    honeypot: '', // anti-bot field
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam detected silently
      return;
    }
    setLoading(true);
    // Simulate instantaneous local processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      subject: 'General Inquiry',
      message: '',
      honeypot: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pharmacy-100 text-pharmacy-800">
          Contact Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          We Would Love to Hear From You
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Contact AZ Pharmacy for product availability, general questions, or directions to visit our store.
        </p>
      </section>

      {/* Contact Grid: Cards + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Direct CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-black text-slate-900">
              Get in Touch Directly
            </h2>
            <p className="text-sm text-slate-600">
              For instant responses regarding medication stock or store timings, calling or sending a message on WhatsApp is recommended.
            </p>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${pharmacyInfo.phoneRaw}`}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 pharmacy-card-shadow flex items-center gap-3 hover:border-pharmacy-400 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pharmacy-50 text-pharmacy-600 flex items-center justify-center shrink-0 group-hover:bg-pharmacy-600 group-hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase">Phone Call</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-pharmacy-600 transition-colors">
                    {pharmacyInfo.phone}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${pharmacyInfo.whatsappRaw}?text=${encodeURIComponent("Hello AZ Pharmacy, I would like to inquire about products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-slate-200/80 pharmacy-card-shadow flex items-center gap-3 hover:border-emerald-400 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase">WhatsApp</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {pharmacyInfo.whatsapp}
                  </span>
                </div>
              </a>
            </div>

            {/* Address & Store Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 pharmacy-card-shadow space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-pharmacy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Pharmacy Location</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{pharmacyInfo.fullAddress}</p>
                    <a
                      href={pharmacyInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-pharmacy-600 hover:text-pharmacy-700 mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                  <MailIcon className="w-5 h-5 text-pharmacy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email Address</h3>
                    <a 
                      href={`mailto:${pharmacyInfo.email}`}
                      className="text-xs sm:text-sm text-slate-600 hover:text-pharmacy-600 mt-0.5 block"
                    >
                      {pharmacyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours Schedule */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-pharmacy-600" />
                  <h3 className="text-sm font-bold text-slate-900">Operating Hours</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 space-y-1.5 pl-6">
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-800">Monday – Friday:</span>
                    <span>8:00 AM – 9:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-800">Saturday:</span>
                    <span>9:00 AM – 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-800">Sunday:</span>
                    <span>10:00 AM – 6:00 PM</span>
                  </p>
                  <p className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                    <span>Public Holidays:</span>
                    <span>10:00 AM – 4:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Privacy Safeguard */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 pharmacy-card-shadow">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-2xl font-black text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in the details below and our team will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your message. A member of the AZ Pharmacy team will review your inquiry and follow up promptly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field hidden from users for bot protection */}
                  <div className="hidden" aria-hidden="true">
                    <label>Do not fill this</label>
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pharmacy-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Number or Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. sarah@example.com or (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pharmacy-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pharmacy-500 focus:bg-white transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Medicine Availability">Medicine Availability</option>
                      <option value="Prescription Question">Prescription Question</option>
                      <option value="Home Delivery">Home Delivery Terms</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you today? Please ask about general availability or services..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pharmacy-500 focus:bg-white transition-all"
                    ></textarea>
                  </div>

                  {/* Privacy Notice Notice as instructed by design-guide.md */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
                    <ShieldCheckIcon className="w-4 h-4 text-pharmacy-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>Clear Privacy Notice:</strong> Please do not submit confidential medical diagnoses, personal medical history, or copies of doctor prescriptions through this general contact form. For confidential prescription requests, visit our store or call our pharmacy desk directly.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-pharmacy-600 hover:bg-pharmacy-700 shadow-md shadow-pharmacy-600/25 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 pharmacy-card-shadow">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pharmacy-600">
                Easy To Find
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Visit AZ Pharmacy Storefront
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {pharmacyInfo.fullAddress}
              </p>
            </div>

            <a
              href={pharmacyInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-pharmacy-600 hover:bg-pharmacy-700 text-white transition-colors inline-flex items-center gap-2 shadow-sm shrink-0 self-start sm:self-auto"
            >
              <span>Get Directions</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Map Iframe */}
          <div className="relative w-full h-80 sm:h-96 bg-slate-100">
            <iframe
              title="AZ Pharmacy Location Map"
              src={pharmacyInfo.mapEmbedUrl || "https://maps.google.com/maps?q=XJH9%2B9Q+Bannu,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
