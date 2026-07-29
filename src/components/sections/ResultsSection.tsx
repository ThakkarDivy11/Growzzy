'use client';

import React from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const ResultsSection: React.FC = () => {
  const cards = [
    {
      value: '472+',
      title: 'Organic Traffic Increased',
      desc: 'Measurable ROI & Organic Rank',
      isLime: true,
    },
    {
      value: '60+',
      title: 'Strategy Client Satisfaction Rate',
      desc: 'Global Scale Agency Trust',
      isLime: false,
    },
    {
      value: '233+',
      title: 'Revenue Generated For Client Campaigns',
      desc: 'Hyper Growth Scale & Sales',
      isLime: true,
    },
    {
      value: '100+',
      title: 'Strategy Client Satisfaction Rate',
      desc: 'High Loyalty Retention Rate',
      isLime: false,
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-md bg-[#C0F000] text-[#12372A] text-xs font-bold uppercase tracking-wider mb-3">
            PROVEN RESULTS
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#12372A] mb-4">
            Proven Success in <span className="text-[#12372A]">Driving Business Growth</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-600">
            We believe in transparency and measurable results for all our strategic digital marketing clients.
          </p>
        </div>

        {/* 4 Cards Grid (Alternating Lime & White) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between h-72 shadow-md transition-all duration-300 hover:-translate-y-2 ${
                card.isLime
                  ? 'bg-[#C0F000] text-[#12372A]'
                  : 'bg-white text-[#12372A] border border-gray-200/80'
              }`}
            >
              <div>
                <span className="font-sans font-black text-5xl sm:text-6xl block mb-4">
                  <AnimatedCounter value={card.value} />
                </span>
                <h3 className="font-sans font-extrabold text-lg leading-tight mb-2">
                  {card.title}
                </h3>
              </div>
              <p
                className={`text-xs font-sans font-medium ${
                  card.isLime ? 'text-[#12372A]/80' : 'text-gray-500'
                }`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
