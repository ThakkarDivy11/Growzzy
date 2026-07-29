'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface HeroSectionProps {
  onOpenLeadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLeadModal }) => {
  const tags = [
    { label: 'Social Media', rating: '4.9★' },
    { label: 'Content Writing', rating: '4.9★' },
    { label: 'SEO', rating: '4.9★' },
    { label: 'Video Production', rating: '4.9★' },
    { label: 'Pay Per Click', rating: '4.9★' },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Main Headline */}
            <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl text-[#12372A] leading-[1.08] tracking-tight mb-6">
              Your business <br />
              success starts <br />
              here <span className="inline-block w-16 md:w-24 h-1 bg-[#12372A] align-middle ml-2" />
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed mb-8 font-sans">
              Grow your online presence with Growzzy and keep ahead of competitors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenLeadModal}
                className="px-8 py-3.5 rounded-full bg-[#C0F000] text-[#12372A] font-sans font-bold text-sm hover:bg-[#A8D400] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Read More
              </button>

              <button
                onClick={onOpenLeadModal}
                className="px-8 py-3.5 rounded-full bg-[#12372A] text-white font-sans font-bold text-sm hover:bg-[#0D2A1F] transition-all shadow-sm cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            {/* Service Rating Pill List */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-200/80 w-full max-w-xl">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] font-sans font-semibold text-gray-700 shadow-2xs flex items-center gap-1.5"
                >
                  <span>{tag.label}</span>
                  <span className="text-[#12372A] font-bold">
                    <AnimatedCounter value={tag.rating} />
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Workspace Image & Floating Overlay Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Rounded Team Visual */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Team Collaboration"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Top Rating Card */}
            <div className="absolute -top-4 left-2 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-sans font-extrabold text-base text-[#12372A]">
                    <AnimatedCounter value="5.0" />
                  </span>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                </div>
                <p className="text-[10px] text-gray-500 font-semibold">Client Satisfaction Rating</p>
              </div>
            </div>

            {/* Floating Bottom Lime Green Result Card */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 w-72 sm:w-80 bg-[#C0F000] p-6 rounded-3xl shadow-2xl text-[#12372A]">
              <span className="font-sans font-black text-4xl sm:text-5xl block mb-1">
                <AnimatedCounter value="$150 B" />
              </span>
              <h4 className="font-sans font-extrabold text-lg mb-1">
                Give Results
              </h4>
              <p className="text-xs text-[#12372A]/80 leading-relaxed font-sans font-medium">
                Helping to standard business setup and grow business around the world with our team and expertise.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
