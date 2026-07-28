'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { GrowzzyLogo } from '../logo/GrowzzyLogo';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Performance Marketing',
    budget: '₹25,000 - ₹50,000 / mo',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#071B3B]/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl glass-card-dark rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl z-10 overflow-hidden text-white animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#EF4444] transition-colors text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <CheckCircle2 className="w-20 h-20 text-[#EF4444] mb-4 animate-bounce" />
            <h3 className="text-3xl font-heading font-bold mb-2">Project Request Received!</h3>
            <p className="text-gray-300 max-w-md">
              Thank you! Our growth strategist in Ahmedabad will contact you within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <GrowzzyLogo variant="dark" size="sm" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold mt-4 text-gradient-dark">
                Get Free Consultation
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Fill out the form below or talk directly to our founders in Ahmedabad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Jeel Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-[#EF4444] text-white placeholder-gray-400 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 76980 12946"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-[#EF4444] text-white placeholder-gray-400 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@growzzy.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-[#EF4444] text-white placeholder-gray-400 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">PRIMARY SERVICE</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B2246] border border-white/15 focus:border-[#EF4444] text-white outline-none transition cursor-pointer"
                  >
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Content Creation & Video Editing">Content Creation & Reels</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="Performance Marketing (Meta & Google Ads)">Performance Marketing (Ads)</option>
                    <option value="SEO & Growth">SEO & Local Business</option>
                    <option value="Landing Page & CRM">Landing Page & Tech</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">PROJECT DETAILS / GOALS</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your business goals and current Marketing challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-[#EF4444] text-white placeholder-gray-400 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EF4444] to-red-600 font-heading font-bold text-white shadow-lg hover:shadow-red-500/40 transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-5 h-5" /> Get Free Consultation & Strategy Audit
              </button>
            </form>

            {/* Direct Contacts Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-300 gap-2">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#EF4444]" /> Call Direct: +91 76980 12946 / +91 99250 30115
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#EF4444]" /> Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
