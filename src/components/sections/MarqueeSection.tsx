'use client';

import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const MarqueeSection: React.FC = () => {
  const partnerLogos = [
    'CHAPMAN', 'LOGO IPSUM', 'LOREM IPSUM', 'LOGOPSUM', 'green green', 'Lorem ipsum', 'CHAPMAN'
  ];

  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Forest Green Banner Card */}
        <div className="bg-[#12372A] rounded-3xl p-8 lg:p-12 text-white mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Image Thumbnail, Headline & Text */}
            <div className="lg:col-span-7 flex flex-col md:flex-row items-start gap-6">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                alt="Marketing Team"
                className="w-full md:w-48 h-36 object-cover rounded-2xl shrink-0 border border-white/20"
              />
              <div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white leading-snug mb-3">
                  Maximize Your Growth with Our Expert Digital Marketing
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                  From strategy development to execution, our expert team works with you to achieve maximum ROI and sustainable growth.
                </p>
                <button className="px-6 py-2.5 rounded-full bg-[#C0F000] text-[#12372A] font-sans font-bold text-xs hover:bg-[#A8D400] transition cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column: "Success Our Priority" & Lime Stats Card */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-sans font-bold text-white">Success Our Priority</span>
                <div className="w-6 h-6 rounded-full bg-[#C0F000] text-[#12372A] flex items-center justify-center font-bold text-xs">
                  <Target className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-xs text-gray-300 mb-6 lg:text-right max-w-sm">
                Looking to grow your business results, customer platform. Our campaigns and strategies push engagement, attract followers, and strengthen your brand presence.
              </p>

              {/* Lime Green Stats Box */}
              <div className="w-full bg-[#C0F000] text-[#12372A] p-4 sm:p-5 rounded-2xl grid grid-cols-3 gap-2 text-center shadow-lg">
                <div>
                  <h4 className="font-sans font-black text-2xl sm:text-3xl">
                    <AnimatedCounter value="172+" />
                  </h4>
                  <p className="text-[10px] font-semibold text-[#12372A]/80 uppercase">Client Satisfaction</p>
                </div>
                <div className="border-x border-[#12372A]/20">
                  <h4 className="font-sans font-black text-2xl sm:text-3xl">
                    <AnimatedCounter value="283+" />
                  </h4>
                  <p className="text-[10px] font-semibold text-[#12372A]/80 uppercase">Best Services</p>
                </div>
                <div>
                  <h4 className="font-sans font-black text-2xl sm:text-3xl">
                    <AnimatedCounter value="453+" />
                  </h4>
                  <p className="text-[10px] font-semibold text-[#12372A]/80 uppercase">Business Growth</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Partner Logos Marquee */}
        <div className="py-6 border-y border-gray-200/80">
          <div className="flex flex-wrap items-center justify-around gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {partnerLogos.map((logo, idx) => (
              <span key={idx} className="font-sans font-extrabold text-lg sm:text-xl tracking-widest text-gray-500 uppercase">
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
