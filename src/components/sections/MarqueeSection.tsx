'use client';

import React from 'react';
import { Award, Users, CheckCircle2, Globe } from 'lucide-react';

export const MarqueeSection: React.FC = () => {
  const brandNames = [
    'TechNova Systems', 'Zeniq Fashion', 'Apex Real Estate', 'Surat Diamonds',
    'Vedic Organics', 'Urban Crafted', 'Solaris Energy', 'Nexus Logistics',
    'Elevance Health', 'Gujarat Retail', 'Aura Skincare', 'Kuro Hospitality'
  ];

  const stats = [
    { icon: Award, value: '300+', label: 'Projects', desc: 'Campaigns & websites delivered' },
    { icon: Users, value: '100+', label: 'Happy Clients', desc: 'Active brand partnerships' },
    { icon: CheckCircle2, value: '98%', label: 'Client Satisfaction', desc: 'High retention & ROAS' },
    { icon: Globe, value: '12+', label: 'Industries Served', desc: 'Real estate, ecom, healthcare & tech' },
  ];

  return (
    <section className="py-16 bg-[#071B3B] text-white relative overflow-hidden border-y border-white/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3B] via-[#102B5A] to-[#071B3B] opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <p className="text-center text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#EF4444] mb-8">
          TRUSTED BY 100+ LEADING BRANDS & STARTUPS
        </p>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 mb-16">
          <div className="flex w-[200%] animate-marquee items-center gap-12 sm:gap-16">
            {[...brandNames, ...brandNames].map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 glass-card-dark px-6 py-3 rounded-2xl border border-white/10 shrink-0 opacity-85 hover:opacity-100 hover:scale-105 transition duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="font-heading font-bold text-base tracking-wider uppercase text-gray-200">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card-dark p-6 rounded-3xl border border-white/10 text-center relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EF4444]/20 border border-[#EF4444]/40 flex items-center justify-center text-[#EF4444] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mb-1">
                  {stat.value}
                </h3>
                <p className="font-heading font-bold text-sm text-[#EF4444] uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-sans">{stat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
