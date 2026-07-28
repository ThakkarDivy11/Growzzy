'use client';

import React from 'react';
import { Search, Compass, Video, Rocket, Sliders, TrendingUp, ArrowRight, Layers } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      icon: Search,
      desc: 'In-depth business audit, competitor analysis, target customer research, and bottleneck identification.',
    },
    {
      num: '02',
      title: 'Strategy',
      icon: Compass,
      desc: 'Formulating custom multi-channel growth funnels, offer positioning, ad budget allocation, and KPI roadmaps.',
    },
    {
      num: '03',
      title: 'Content Creation',
      icon: Video,
      desc: 'Crafting viral 4K video reels, high-converting ad graphics, branding visuals, and landing page assets.',
    },
    {
      num: '04',
      title: 'Campaign Execution',
      icon: Rocket,
      desc: 'Deploying hyper-targeted Meta & Google ad campaigns, SEO structural changes, and tracking pixels.',
    },
    {
      num: '05',
      title: 'Optimization',
      icon: Sliders,
      desc: 'Real-time A/B testing of ad creatives, audience refinement, bid management, and CRO tuning.',
    },
    {
      num: '06',
      title: 'Growth',
      icon: TrendingUp,
      desc: 'Scaling winning campaigns aggressively to multiply revenue, lead inflow, and market dominance.',
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4">
            <Layers className="w-4 h-4 text-[#EF4444]" /> OUR PROCESS
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#071B3B] leading-tight mb-4">
            A Proven 6-Step Framework <br />
            <span className="text-gradient">For Scalable Growth</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-600">
            From initial discovery to rapid scaling, our process guarantees transparent execution and measurable results.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-gray-200/80 hover:border-[#EF4444] hover:-translate-y-2 shadow-md hover:shadow-xl transition-all duration-300 relative group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#071B3B] text-white flex items-center justify-center font-heading font-bold text-sm shadow-md group-hover:bg-[#EF4444] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-black text-2xl text-[#EF4444]">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-lg text-[#071B3B] group-hover:text-[#EF4444] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#EF4444]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
