'use client';

import React from 'react';
import { Target, Cpu } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Bullet Features */}
          <div className="lg:col-span-6">
            <span className="inline-block px-3 py-1 rounded-md bg-[#12372A]/5 text-[#12372A] text-xs font-bold uppercase tracking-wider mb-4">
              Our Services
            </span>

            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#12372A] leading-tight mb-6">
              Tailored Strategies for <span className="text-[#12372A]">Maximum Business Growth</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              Having right to expand online presence and long-term success, our agency helps scale your business through data-driven strategies...
            </p>

            {/* Feature Icon Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#C0F000] text-[#12372A] flex items-center justify-center shrink-0 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#12372A] mb-1">
                    Driven Strategies
                  </h4>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed">
                    Data-driven decisions for maximum ROI and sustainable market scaling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#C0F000] text-[#12372A] flex items-center justify-center shrink-0 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#12372A] mb-1">
                    Digital Solution
                  </h4>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed">
                    Custom tailored digital solutions built to fit your precise needs.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 font-sans leading-relaxed pt-4 border-t border-gray-200/80">
              Having right to expand online presence and long-term success, our agency helps scale your business through data-driven strategies.
            </p>
          </div>

          {/* Right Column: Professional Portrait Photo + Overlaid Stats Bar */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                alt="Digital Marketing Leader"
                className="w-full h-[450px] sm:h-[520px] object-cover"
              />

              {/* Bottom Overlaid Stats Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#C0F000] text-[#12372A] p-4 rounded-2xl grid grid-cols-3 gap-2 text-center shadow-lg">
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

      </div>
    </section>
  );
};
