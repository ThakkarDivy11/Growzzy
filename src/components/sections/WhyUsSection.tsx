'use client';

import React from 'react';
import { Layout, Search, Zap } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const features = [
    {
      num: '01',
      icon: Layout,
      title: 'Smart Design System',
      desc: 'Fully custom design for modern digital growth across all devices.',
    },
    {
      num: '02',
      icon: Search,
      title: 'Cutting-Edge SEO & Organic Growth',
      desc: 'Data-driven strategies that help you rank higher and attract quality customer traffic.',
    },
    {
      num: '03',
      icon: Zap,
      title: 'Lightning-Speed Performance',
      desc: 'Fast, scalable digital experience built to maximize user retention and conversions.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#12372A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-[#C0F000] text-xs font-bold uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            What Makes Our <span className="text-[#C0F000]">Digital Marketing Agency</span> Stand Out?
          </h2>
        </div>

        {/* 3 White Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white text-[#12372A] p-8 rounded-3xl shadow-xl relative flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Top Row with Icon & Number Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#12372A]/5 text-[#12372A] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#C0F000] text-[#12372A] flex items-center justify-center font-sans font-black text-sm shadow-sm">
                    {item.num}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#12372A] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
