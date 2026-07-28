'use client';

import React from 'react';
import { Globe, TrendingUp, Users, Award } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const metrics = [
    {
      value: '12M+',
      label: 'Organic & Paid Reach',
      desc: 'Total ad & video impressions generated across Meta, Google & Instagram.',
      icon: Globe,
    },
    {
      value: '7.8X',
      label: 'Peak Campaign ROAS',
      desc: 'Highest verified Return on Ad Spend achieved for client campaigns.',
      icon: TrendingUp,
    },
    {
      value: '250K+',
      label: 'Verified Leads',
      desc: 'Qualified B2B & B2C customer inquiries delivered into client CRMs.',
      icon: Users,
    },
    {
      value: '300+',
      label: 'Successful Projects',
      desc: 'Completed marketing campaigns, brand launches & digital funnels.',
      icon: Award,
    },
  ];

  return (
    <section id="results" className="py-24 relative bg-[#071B3B] text-white overflow-hidden">
      {/* Dynamic background mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EF4444]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#102B5A]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
            DATA-DRIVEN IMPACT
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white leading-tight mb-4">
            Numbers That Speak For <br />
            <span className="text-gradient-dark">Our Performance</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-300">
            We don't deal in vanity metrics. We measure our success by direct revenue impact for your business.
          </p>
        </div>

        {/* Big Impact Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="glass-card-dark p-8 rounded-3xl border border-white/15 text-center relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl"
              >
                {/* Glow ring */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#EF4444]/20 blur-xl group-hover:bg-[#EF4444]/40 transition-colors" />

                <div className="w-14 h-14 rounded-2xl bg-[#EF4444]/20 border border-[#EF4444]/40 flex items-center justify-center text-[#EF4444] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-heading font-black text-5xl sm:text-6xl text-white mb-2 tracking-tight drop-shadow-sm">
                  {metric.value}
                </h3>

                <p className="font-heading font-bold text-base text-[#EF4444] uppercase tracking-wide mb-2">
                  {metric.label}
                </p>

                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
