'use client';

import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import {
  Share2,
  Video,
  Palette,
  TrendingUp,
  Search,
  Layout,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenLeadModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  const services = [
    {
      id: 'social-media-management',
      title: 'Social Media Management',
      icon: Share2,
      desc: 'Build an engaged, loyal community across platforms with strategic organic content and active audience engagement.',
      features: [
        'Instagram Management',
        'Facebook Management',
        'Content Planning',
        'Community Management',
      ],
      badge: 'Organic Scale',
      gradient: 'from-[#071B3B] to-[#102B5A]',
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      icon: Video,
      desc: 'High-converting 4K video reels, product showcases, and viral motion graphics that grab immediate attention.',
      features: [
        'Video Editing',
        'Professional Reels',
        'Motion Graphics',
      ],
      badge: 'High Impact',
      gradient: 'from-[#EF4444] to-red-600',
    },
    {
      id: 'logo-design-branding',
      title: 'Branding & Identity',
      icon: Palette,
      desc: 'Craft a distinct visual identity, memorable logos, and physical marketing assets that reflect brand leadership.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Business Cards',
      ],
      badge: 'Visual Identity',
      gradient: 'from-[#071B3B] to-[#102B5A]',
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      icon: TrendingUp,
      desc: 'Data-driven paid ads campaigns designed to generate high-quality leads, lower CAC, and maximize ROAS.',
      features: [
        'Lead Generation',
        'Facebook Ads',
        'Instagram Ads',
        'Google Ads',
      ],
      badge: 'Max ROI',
      gradient: 'from-[#EF4444] to-red-600',
    },
    {
      id: 'seo',
      title: 'SEO & Google Dominance',
      icon: Search,
      desc: 'Rank #1 on Google search for your key business search queries with comprehensive local & technical optimization.',
      features: [
        'Local SEO',
        'Technical SEO',
        'Google Business Profile',
      ],
      badge: 'Top Ranking',
      gradient: 'from-[#071B3B] to-[#102B5A]',
    },
    {
      id: 'landing-page-tech',
      title: 'Landing Page Design',
      icon: Layout,
      desc: 'Ultra-fast, high-converting landing pages integrated with CRM tools and direct WhatsApp lead automation.',
      features: [
        'CRM Integration',
        'WhatsApp Marketing',
      ],
      badge: 'Conversion Engine',
      gradient: 'from-[#EF4444] to-red-600',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-pill border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4">
            OUR SERVICES
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#071B3B] leading-tight mb-4">
            Growth Strategies That <br />
            <span className="text-gradient">Deliver Real Revenue</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-600">
            Tailored digital marketing solutions engineered for high conversion, brand authority, and sustained ROI.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <GlassCard
                key={service.id}
                className="h-full flex flex-col justify-between group cursor-pointer border border-gray-200/80 hover:border-[#EF4444]/50 shadow-md hover:shadow-2xl transition-all duration-300"
                hoverGlow={true}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#071B3B]/5 text-[#071B3B] text-[11px] font-heading font-bold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-2xl text-[#071B3B] group-hover:text-[#EF4444] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Sub-services List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#EF4444] shrink-0" />
                        <span className="text-xs font-semibold text-[#071B3B]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={onOpenLeadModal}
                    className="font-heading font-bold text-xs text-[#EF4444] group-hover:text-[#071B3B] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <MagneticButton onClick={onOpenLeadModal} variant="primary">
            Get Custom Growth Strategy
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
