'use client';

import React from 'react';
import { Users, TrendingUp, DollarSign, Headset, CheckCircle2, Sparkles } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const cards = [
    {
      title: 'Creative Team',
      icon: Users,
      badge: 'World-Class Talent',
      desc: 'Top-tier designers, copywriters, video editors, and growth strategists dedicated to crafting viral creatives and premium brand visual identity.',
      features: [
        'Expert Designers & Copywriters',
        'High-Converting 4K Reel Production',
        'Custom Brand Strategy',
      ],
      gradient: 'from-[#071B3B] to-[#102B5A]',
    },
    {
      title: 'ROI Focused',
      icon: TrendingUp,
      badge: 'Data-Driven Growth',
      desc: 'Every campaign, ad dollar, and creative asset is meticulously optimized to maximize conversions, lower customer acquisition costs, and drive 4X+ ROAS.',
      features: [
        'Strict Conversion Tracking',
        'Transparent Revenue Attribution',
        'Continuous Funnel Optimization',
      ],
      gradient: 'from-[#EF4444] to-red-600',
    },
    {
      title: 'Affordable Pricing',
      icon: DollarSign,
      badge: 'Transparent Value',
      desc: 'Premium agency quality without exorbitant enterprise overhead. Flexible, transparent pricing models designed to scale alongside your business growth.',
      features: [
        'No Hidden Retainer Fees',
        'Scalable Package Tiers',
        'Maximum Value Per Rupee',
      ],
      gradient: 'from-[#071B3B] to-[#102B5A]',
    },
    {
      title: 'Dedicated Support',
      icon: Headset,
      badge: '24/7 Priority Access',
      desc: 'A dedicated growth manager in Ahmedabad assigned to your brand, offering real-time reporting, weekly progress reviews, and instant WhatsApp support.',
      features: [
        'Dedicated Account Strategist',
        'Real-Time Live Dashboards',
        'Fast WhatsApp & Call Response',
      ],
      gradient: 'from-[#EF4444] to-red-600',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative bg-[#071B3B] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full bg-[#102B5A]/60 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
            <Sparkles className="w-4 h-4 text-[#EF4444]" /> WHY CHOOSE GROWZZY
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white leading-tight mb-4">
            Built For Brands That <br />
            <span className="text-gradient-dark">Demand Measurable Results</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-300">
            Why leading businesses in Gujarat and across India trust Growzzy as their primary digital marketing partner.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                className="glass-card-dark p-8 md:p-10 rounded-3xl border border-white/15 hover:border-[#EF4444]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group"
              >
                {/* Top Header */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.gradient} border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#EF4444] font-heading font-bold text-xs uppercase tracking-wider border border-white/10">
                    {card.badge}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3 group-hover:text-[#EF4444] transition-colors">
                  {card.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  {card.desc}
                </p>

                {/* Key Points List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#EF4444] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
