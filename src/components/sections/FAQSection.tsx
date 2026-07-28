'use client';

import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast will we see results from Meta & Google Ads?',
      a: 'Initial qualified lead flow usually begins within 48 to 72 hours of campaign launch. Full ROAS optimization and audience scaling typically mature within 14 to 30 days as campaign pixel data accumulates.',
    },
    {
      q: 'What makes Growzzy different from standard digital marketing agencies?',
      a: 'We are 100% focused on revenue and verified ROI rather than vanity impressions. We combine in-house 4K video reel production, high-converting custom landing pages, and hyper-targeted performance ad management under one roof in Ahmedabad.',
    },
    {
      q: 'Do you work with businesses outside of Ahmedabad & Gujarat?',
      a: 'Yes! While our headquarters and creative studio are based in Ahmedabad, we manage growth marketing and ad campaigns for clients across India, Dubai, Singapore, and North America.',
    },
    {
      q: 'What is the minimum recommended monthly ad budget?',
      a: 'We recommend starting with a minimum monthly ad spend budget of ₹25,000 to ₹50,000 for Meta/Google Ads so that ad algorithms have sufficient data for audience optimization and testing.',
    },
    {
      q: 'Will we receive regular campaign performance reports?',
      a: 'Absolutely. You will be assigned a dedicated Growth Manager, receive weekly performance summaries, and have 24/7 access to a transparent live analytics dashboard tracking every rupee spent.',
    },
    {
      q: 'How do we get started with Growzzy?',
      a: 'Click "Get Free Consultation" or contact our founding team (Jeel Patel, Aryan Patel, Vivek Patel) directly via phone or WhatsApp. We will audit your current marketing setup and provide a free growth roadmap.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-[#EF4444]" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#071B3B] leading-tight mb-4">
            Everything You Need <br />
            <span className="text-gradient">To Know</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-600">
            Have questions about our process, pricing, or ROI expectations? We have answers.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <GlassCard
                key={idx}
                hoverGlow={false}
                className="p-0 overflow-hidden border border-gray-200/80 hover:border-[#EF4444]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg sm:text-xl text-[#071B3B] hover:text-[#EF4444] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#EF4444] shrink-0" />
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#EF4444] text-white' : 'bg-gray-100 text-[#071B3B]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100 animate-in fade-in duration-200">
                    <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
