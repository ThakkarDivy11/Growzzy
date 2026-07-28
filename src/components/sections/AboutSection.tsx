'use client';

import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Rocket, Target, Eye, Sparkles, CheckCircle2, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { number: '300+', label: 'Projects', desc: 'Campaigns successfully delivered' },
    { number: '100+', label: 'Happy Clients', desc: 'Active brand partners' },
    { number: '98%', label: 'Satisfaction', desc: 'Client retention rate' },
    { number: '12+', label: 'Industries', desc: 'Sectors transformed' },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Large Image & Floating Stat Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* High Quality Agency Workspace Visual */}
              <div
                className="w-full h-[460px] sm:h-[540px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/90 via-[#071B3B]/30 to-transparent" />

              {/* Text Callout Banner on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card-dark rounded-2xl border border-white/20">
                <span className="text-[#EF4444] font-heading font-bold text-xs uppercase tracking-widest block mb-1">
                  OUR CORE PHILOSOPHY
                </span>
                <p className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug">
                  "We don't just post content. We build market-leading brands and scale sales."
                </p>
              </div>
            </div>

            {/* Floating Stat Card Top Right */}
            <div className="absolute -top-6 -right-4 sm:right-4 z-20 glass-card p-4 rounded-2xl border border-[#EF4444]/30 shadow-xl flex items-center gap-3 bg-white animate-float">
              <div className="w-10 h-10 rounded-xl bg-[#EF4444]/20 text-[#EF4444] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-[#071B3B]">4X ROI</span>
                <p className="text-[10px] text-gray-600 font-semibold">Average Revenue Multiplier</p>
              </div>
            </div>

          </div>

          {/* Right Side: Mission, Vision, Company Story & Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-[#071B3B]/10 text-[#071B3B] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
              <Building2 className="w-4 h-4 text-[#EF4444]" /> About Growzzy
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#071B3B] leading-tight mb-6">
              Empowering Brands <br />
              <span className="text-gradient">To Scale & Dominate</span>
            </h2>

            {/* Short Company Story */}
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Founded in Ahmedabad, Growzzy is a full-service performance marketing and branding agency. We specialize in turning online presence into predictable revenue streams through high-converting ad campaigns, viral video content, and top-ranking search positioning.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-[#EF4444]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#071B3B]">Our Mission</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  To help businesses grow online through creative branding, high-converting marketing strategies, SEO, content creation and performance marketing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-[#071B3B]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#071B3B]/10 text-[#071B3B] flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#071B3B]">Our Vision</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  To become India's most trusted growth partner, driving transparent revenue metrics and category leadership for every client we serve.
                </p>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-gray-200 text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h3 className="font-heading font-black text-2xl text-[#EF4444] mb-0.5">
                    {st.number}
                  </h3>
                  <p className="font-heading font-bold text-xs text-[#071B3B] uppercase">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
