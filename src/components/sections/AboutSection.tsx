'use client';

import React from 'react';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Customized Strategies',
      desc: 'We creation customized strategies that aligned with your business goals.',
    },
    {
      num: '02',
      title: 'Experienced Team',
      desc: 'Our group of search engine experts, content writers, and editors excel at crafting high impact campaigns.',
    },
    {
      num: '03',
      title: 'Client-Centric Approach',
      desc: 'We focus on maximum returns for digital marketing strategy tailored to your needs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Tag & Subtitle */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-md bg-[#12372A]/5 text-[#12372A] text-xs font-bold uppercase tracking-wider mb-3">
            About Us
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-7 font-sans font-extrabold text-3xl sm:text-5xl text-[#12372A] leading-tight">
              Maximize Your Growth with <span className="text-[#12372A]">Our Digital Marketing</span>
            </h2>
            <p className="lg:col-span-5 text-sm text-gray-600 font-sans leading-relaxed">
              Finding to expand online presence and scale business with custom marketing strategy, our team brings tailored expertise for sustainable long-term success.
            </p>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conference Meeting Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Growzzy Team Strategy Meeting"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: 01, 02, 03 Numbered Feature Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-5 hover:border-[#C0F000] hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C0F000] text-[#12372A] flex items-center justify-center font-sans font-black text-lg shrink-0 shadow-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-[#12372A] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
