'use client';

import React, { useState } from 'react';
import { Play, Check, ChevronDown } from 'lucide-react';

interface ServicesSectionProps {
  onOpenLeadModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const accordionItems = [
    {
      title: 'Maximize Your Online Presence with Expert SEO Solutions',
      desc: 'Having right to expand online presence and long-term success, our agency helps scale your business through data-driven strategies.',
      points: [
        '1.0 Organic ranking & keyword research strategy for top 1 Google placement',
        '1.1 Competitor benchmark and backlink authority building',
        '1.2 AI-driven content optimization & technical SEO performance audit',
      ],
    },
    {
      title: 'Build Stunning, User-Friendly Websites That Convert',
      desc: 'Craft high-converting, mobile-first responsive web apps built with ultra-fast page speed and optimized conversion funnels.',
      points: [
        '2.0 Custom UI/UX design tailored for maximum visitor engagement',
        '2.1 Fast performance engineering with modern Next.js stack',
        '2.2 Direct WhatsApp & CRM lead conversion automation',
      ],
    },
    {
      title: 'Drive Max Return & Engagement with Strategic Social Media Marketing',
      desc: 'Generate predictable ROI with performance Meta & Google ads campaigns, viral 4K reels, and targeted brand storytelling.',
      points: [
        '3.0 High-ROAS paid ads campaign management across Meta & Google',
        '3.1 Viral 4K video reel production and motion graphics',
        '3.2 End-to-end community management and brand positioning',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#12372A] leading-tight">
            Our Services Deliver the <span className="text-[#12372A]">Best Results for Your Business</span>
          </h2>
        </div>

        {/* Content Layout: Video Photo on Left, Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image with Play Button Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer" onClick={onOpenLeadModal}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Growzzy Agency Video Overview"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C0F000] text-[#12372A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-[#12372A] ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {accordionItems.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all shadow-sm"
                >
                  {/* Accordion Pill Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className={`w-full p-5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isOpen ? 'bg-[#C0F000] text-[#12372A]' : 'bg-[#C0F000]/80 hover:bg-[#C0F000] text-[#12372A]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#12372A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans font-bold text-base sm:text-lg">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="p-6 bg-white animate-in fade-in duration-200">
                      <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className="space-y-2.5">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-full bg-[#12372A]/10 text-[#12372A] flex items-center justify-center mt-0.5 shrink-0">
                              <Check className="w-3 h-3 text-[#12372A]" />
                            </div>
                            <span className="text-xs sm:text-sm text-gray-700 font-sans font-medium">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
