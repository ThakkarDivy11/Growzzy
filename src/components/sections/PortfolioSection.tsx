'use client';

import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CaseStudyModal, CaseStudyData } from '../ui/CaseStudyModal';
import { Eye, ArrowUpRight, FolderGit2 } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenLeadModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenLeadModal }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Website Projects', 'Branding Projects', 'Social Media Designs', 'Ad Campaigns'];

  const projects: (CaseStudyData & { id: string; mainCategory: string })[] = [
    {
      id: '1',
      title: 'Aura Skincare E-Commerce Platform',
      category: 'Website & Ads',
      mainCategory: 'Website Projects',
      client: 'Aura Organics',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      stats: [
        { label: 'ROAS Delivered', value: '7.8X' },
        { label: 'Total Revenue', value: '₹48.2 Lakhs' },
        { label: 'Conversion Rate', value: '4.2%' },
      ],
      overview: 'High-converting Next.js e-commerce store paired with performance Meta ads and direct checkout funnel.',
      challenge: 'High drop-off rates on mobile browsers and low checkout conversions.',
      strategy: [
        'Custom ultra-fast responsive landing page design',
        'Meta Ads targeting high-intent female beauty shoppers',
        'Automated WhatsApp cart recovery system',
      ],
      results: [
        '7.8X Return on Ad Spend within 60 days',
        'Generated over 4,200+ direct online orders',
        '4.2% store checkout conversion rate',
      ],
    },
    {
      id: '2',
      title: 'Vedic Organics Brand Identity',
      category: 'Brand Guidelines & Identity',
      mainCategory: 'Branding Projects',
      client: 'Vedic Spices India',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
      stats: [
        { label: 'Retail Stores', value: '120+' },
        { label: 'Brand Value Growth', value: '+340%' },
        { label: 'Design Assets', value: '45+ Assets' },
      ],
      overview: 'Complete brand identity overhaul including logo design, premium packaging, business cards, and brand voice guidelines.',
      challenge: 'Legacy brand design was losing retail shelf space to modern competitor brands.',
      strategy: [
        'Sleek modern logo redesign',
        'Premium foil-stamped business cards & product packaging',
        'Comprehensive brand guidelines manual',
      ],
      results: [
        'Expanded into 120+ retail store chains across Gujarat',
        '340% increase in brand equity perception',
      ],
    },
    {
      id: '3',
      title: 'Zeniq Fashion Social Media Suite',
      category: 'Instagram Grid & Reels',
      mainCategory: 'Social Media Designs',
      client: 'Zeniq Couture',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      stats: [
        { label: 'Reel Views', value: '4.8M+' },
        { label: 'Followers Gained', value: '+52,000' },
        { label: 'Engagement Rate', value: '14.2%' },
      ],
      overview: 'Curated luxury Instagram content strategy, daily aesthetic carousel graphics, 4K fashion reels, and community engagement.',
      challenge: 'Inconsistent posting schedule and low organic engagement on social channels.',
      strategy: [
        'High-end studio video reel shoots',
        'Aesthetic Grid Layout & daily story templates',
        'Active community comment management',
      ],
      results: [
        'Over 4.8M organic reel impressions in 90 days',
        '52,000+ new Instagram followers',
      ],
    },
    {
      id: '4',
      title: 'Apex Real Estate Lead Machine',
      category: 'Meta & Google Lead Ads',
      mainCategory: 'Ad Campaigns',
      client: 'Apex Group Ahmedabad',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      stats: [
        { label: 'Qualified Leads', value: '1,840+' },
        { label: 'Cost Per Lead', value: '₹145' },
        { label: 'Property Sales', value: '₹14.5 CR' },
      ],
      overview: 'Hyper-targeted Meta & Google Ad campaigns driving high-net-worth real estate buyers in Ahmedabad to book site visits.',
      challenge: 'Receiving low-quality uncontactable leads from standard lead forms.',
      strategy: [
        'Custom quiz landing page with phone OTP verification',
        'Google Search ads targeting high-intent luxury buyer keywords',
        'Immediate CRM lead alert system for sales agents',
      ],
      results: [
        '1,840+ verified buyer leads generated',
        '₹14.5 Crore in property sales closed in 45 days',
      ],
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.mainCategory === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4">
            <FolderGit2 className="w-4 h-4 text-[#EF4444]" /> PORTFOLIO SHOWCASE
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#071B3B] leading-tight mb-4">
            Our Work Speaks <br />
            <span className="text-gradient">For Itself</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-600">
            Explore recent projects delivered across Web, Branding, Social Media, and Performance Ad Campaigns.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#071B3B] text-white shadow-lg shadow-[#071B3B]/20 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="p-0 overflow-hidden group flex flex-col justify-between border border-gray-200/80 hover:border-[#EF4444]/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Visual Image Showcase Container */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-[#071B3B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B] via-[#071B3B]/30 to-transparent" />

                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-[#071B3B]/80 backdrop-blur-md text-white font-heading font-bold text-xs border border-white/20">
                    {project.mainCategory}
                  </div>

                  {/* Stat Banner */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] text-gray-300 font-semibold uppercase tracking-wider">Top Impact Metric</p>
                      <p className="font-heading font-black text-2xl text-[#EF4444]">
                        {project.stats[0].value} {project.stats[0].label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6 md:p-8">
                  <h3 className="font-heading font-bold text-2xl text-[#071B3B] mb-2 group-hover:text-[#EF4444] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {project.overview}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    {project.stats.slice(1).map((st, idx) => (
                      <div key={idx}>
                        <p className="font-heading font-black text-lg text-[#071B3B]">{st.value}</p>
                        <p className="text-[11px] text-gray-500 font-semibold">{st.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 md:p-8 pt-0">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full py-3.5 rounded-xl bg-[#071B3B] text-white font-heading font-bold text-xs hover:bg-[#EF4444] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Eye className="w-4 h-4" /> View Case Study Details
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Modal Window Inspector */}
        <CaseStudyModal
          study={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onOpenLeadModal={onOpenLeadModal}
        />

      </div>
    </section>
  );
};
