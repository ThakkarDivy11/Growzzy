'use client';

import React, { useState } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import {
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Target,
  BarChart2,
  Instagram,
  Search,
  CheckCircle2,
  DollarSign,
  Users,
  MousePointerClick,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenLeadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<'meta' | 'google' | 'instagram' | 'seo'>('meta');

  const tabData = {
    meta: {
      title: 'Meta Ads Campaign',
      metricTitle: 'Conversions Generated',
      mainMetric: '42,000+',
      subBadge: '+340% ROAS',
      color: 'from-blue-600 to-indigo-600',
      accentColor: '#4F46E5',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      pathD: 'M 0,90 Q 50,70 100,85 T 200,45 T 300,50 T 400,10',
      gradientId: 'metaGrad',
      stats: [
        { label: 'Total Reach', value: '1.2M+' },
        { label: 'Click Rate (CTR)', value: '8.4%' },
        { label: 'Cost / Lead', value: '₹112' },
        { label: 'ROAS', value: '4.8X' },
      ],
    },
    google: {
      title: 'Google Search Ads',
      metricTitle: 'High Intent Leads',
      mainMetric: '+320%',
      subBadge: '4.8X ROAS Target',
      color: 'from-emerald-500 to-teal-600',
      accentColor: '#10B981',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      pathD: 'M 0,100 Q 60,60 120,70 T 240,30 T 360,25 T 400,5',
      gradientId: 'googleGrad',
      stats: [
        { label: 'Impressions', value: '94,000+' },
        { label: 'Cost / Click', value: '₹14' },
        { label: 'Conversion Rate', value: '6.2%' },
        { label: 'Ad Spend ROI', value: '5.2X' },
      ],
    },
    instagram: {
      title: 'Instagram Reels & Branding',
      metricTitle: 'Followers & Reach',
      mainMetric: '85K+',
      subBadge: '4.2M Reel Views',
      color: 'from-pink-500 to-purple-600',
      accentColor: '#EC4899',
      badgeBg: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      pathD: 'M 0,110 Q 70,90 140,50 T 280,60 T 360,15 T 400,8',
      gradientId: 'instaGrad',
      stats: [
        { label: 'Reel Impressions', value: '4.2M+' },
        { label: 'Engagement Rate', value: '14.2%' },
        { label: 'Shares & Saves', value: '37.1K' },
        { label: 'Profile Visits', value: '180K' },
      ],
    },
    seo: {
      title: 'Google SEO Ranking',
      metricTitle: 'Organic Growth',
      mainMetric: '#1 Spot',
      subBadge: '+450% Traffic',
      color: 'from-cyan-500 to-blue-600',
      accentColor: '#06B6D4',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      pathD: 'M 0,95 Q 80,85 160,55 T 280,35 T 360,20 T 400,5',
      gradientId: 'seoGrad',
      stats: [
        { label: 'Organic Traffic', value: '64K/mo' },
        { label: 'Ranked Keywords', value: '1,420+' },
        { label: 'Top 3 Positions', value: '84%' },
        { label: 'Domain Rating', value: '92 DR' },
      ],
    },
  };

  const currentTab = tabData[activeTab];

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC]">
      {/* Soft Background Gradient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#EF4444]/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#071B3B]/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071B3B]/5 border border-[#071B3B]/10 mb-6 shadow-sm hover:border-[#EF4444]/30 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#EF4444] animate-ping" />
              <Sparkles className="w-4 h-4 text-[#EF4444]" />
              <span className="text-xs font-heading font-bold text-[#071B3B] uppercase tracking-wider">
                Top Rated Marketing Agency in Ahmedabad
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl text-[#071B3B] leading-[1.1] tracking-tight mb-6">
              Grow Faster. <br />
              <span className="text-gradient">Build Stronger Brands.</span> <br />
              <span className="text-[#EF4444]">Generate More Leads.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#111827]/80 max-w-xl leading-relaxed mb-8 font-sans">
              Growzzy helps businesses grow online through creative branding, high-converting marketing strategies, SEO, content creation and performance marketing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <MagneticButton onClick={onOpenLeadModal} variant="primary" className="w-full sm:w-auto">
                Get Free Consultation <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton href="#portfolio" variant="outline" className="w-full sm:w-auto">
                View Portfolio
              </MagneticButton>
            </div>

            {/* Key Trust Metrics */}
            <div className="mt-10 pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#071B3B]">300+</p>
                <p className="text-xs text-gray-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#EF4444]">98%</p>
                <p className="text-xs text-gray-500 font-medium">Client Satisfaction</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#071B3B]">4.9★</p>
                <p className="text-xs text-gray-500 font-medium">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Performance Card */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#071B3B] to-[#EF4444] opacity-25 blur-3xl" />

            {/* Main Interactive Performance Card */}
            <div className="relative w-full max-w-xl bg-[#071B3B] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-white/15 overflow-hidden transition-all duration-300">
              
              {/* Card Top Title & Interactive Instructions */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-gray-400 ml-2">growzzy-live-analytics</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
                  <MousePointerClick className="w-3.5 h-3.5 text-[#EF4444]" /> Click tabs to switch live view
                </div>
              </div>

              {/* Interactive Tabs Row */}
              <div className="grid grid-cols-4 gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10 mb-6">
                <button
                  onClick={() => setActiveTab('meta')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === 'meta'
                      ? 'bg-[#EF4444] text-white shadow-lg scale-[1.02]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Meta Ads</span><span className="sm:hidden">Meta</span>
                </button>

                <button
                  onClick={() => setActiveTab('google')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === 'google'
                      ? 'bg-[#EF4444] text-white shadow-lg scale-[1.02]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Google Ads</span><span className="sm:hidden">Google</span>
                </button>

                <button
                  onClick={() => setActiveTab('instagram')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === 'instagram'
                      ? 'bg-[#EF4444] text-white shadow-lg scale-[1.02]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Instagram className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Instagram</span><span className="sm:hidden">Reels</span>
                </button>

                <button
                  onClick={() => setActiveTab('seo')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === 'seo'
                      ? 'bg-[#EF4444] text-white shadow-lg scale-[1.02]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" /> <span className="hidden sm:inline">SEO Rank</span><span className="sm:hidden">SEO</span>
                </button>
              </div>

              {/* Active Tab Main Metrics */}
              <div className="mb-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                      {currentTab.metricTitle}
                    </span>
                    <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mt-0.5">
                      {currentTab.mainMetric}
                    </h3>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentTab.badgeBg}`}>
                    {currentTab.subBadge}
                  </span>
                </div>

                {/* SVG Live Interactive Chart */}
                <div className="h-32 w-full relative pt-2">
                  <svg viewBox="0 0 400 130" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id={currentTab.gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={currentTab.accentColor} stopOpacity="0.45" />
                        <stop offset="100%" stopColor={currentTab.accentColor} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d={`${currentTab.pathD} L 400,130 L 0,130 Z`}
                      fill={`url(#${currentTab.gradientId})`}
                      className="transition-all duration-500 ease-out"
                    />

                    <path
                      d={currentTab.pathD}
                      fill="none"
                      stroke={currentTab.accentColor}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="transition-all duration-500 ease-out"
                    />

                    {/* Data Points */}
                    <circle cx="200" cy="45" r="5" fill="#FFFFFF" stroke={currentTab.accentColor} strokeWidth="3" />
                    <circle cx="400" cy="10" r="6" fill={currentTab.accentColor} className="animate-ping" />
                    <circle cx="400" cy="10" r="5" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10">
                {currentTab.stats.map((st, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{st.label}</p>
                    <p className="font-heading font-black text-base text-white mt-0.5">{st.value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
