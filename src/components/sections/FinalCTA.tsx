'use client';

import React from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { MessageSquare, PhoneCall, Sparkles, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onOpenLeadModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `https://wa.me/917698012946?text=${encodeURIComponent(
    'Hello Growzzy Team! I would like to book a free digital marketing consultation.'
  )}`;

  return (
    <section className="py-28 relative bg-[#071B3B] text-white overflow-hidden border-t border-white/10">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-[#EF4444]/20 via-[#102B5A]/40 to-[#071B3B] blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark border border-[#EF4444]/40 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-8 shadow-lg">
          <Sparkles className="w-4 h-4" /> TAKE YOUR BRAND TO THE NEXT LEVEL
        </div>

        {/* Headline */}
        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Let's Grow Your <br />
          <span className="text-gradient-dark">Business Together</span>
        </h2>

        {/* Description */}
        <p className="font-sans text-lg sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Book a free consultation today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
          <MagneticButton href="tel:+917698012946" variant="primary" className="text-base py-4 px-8">
            <PhoneCall className="w-5 h-5" /> Call Now
          </MagneticButton>

          <MagneticButton href={whatsappUrl} variant="dark" className="text-base py-4 px-8">
            <MessageSquare className="w-5 h-5 text-emerald-600" /> WhatsApp
          </MagneticButton>

          <button
            onClick={onOpenLeadModal}
            className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-heading font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#EF4444]" /> Book Consultation
          </button>
        </div>

        {/* Direct Contacts Info Bar */}
        <div className="glass-card-dark p-6 rounded-3xl max-w-3xl mx-auto border border-white/15 flex flex-wrap items-center justify-around gap-4 text-xs text-gray-300">
          <a href="tel:+917698012946" className="flex items-center gap-2 hover:text-[#EF4444] transition-colors">
            <PhoneCall className="w-4 h-4 text-[#EF4444]" />
            <span className="font-semibold text-white">Jeel Patel:</span> +91 76980 12946
          </a>
          <a href="tel:+919925030115" className="flex items-center gap-2 hover:text-[#EF4444] transition-colors">
            <PhoneCall className="w-4 h-4 text-[#EF4444]" />
            <span className="font-semibold text-white">Aryan Patel:</span> +91 99250 30115
          </a>
          <a href="tel:+918866084350" className="flex items-center gap-2 hover:text-[#EF4444] transition-colors">
            <PhoneCall className="w-4 h-4 text-[#EF4444]" />
            <span className="font-semibold text-white">Vivek Patel:</span> +91 88660 84350
          </a>
        </div>

      </div>
    </section>
  );
};
