'use client';

import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export interface CaseStudyData {
  title: string;
  category: string;
  client: string;
  image: string;
  stats: { label: string; value: string }[];
  overview: string;
  challenge: string;
  strategy: string[];
  results: string[];
}

interface CaseStudyModalProps {
  study: CaseStudyData | null;
  onClose: () => void;
  onOpenLeadModal: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenLeadModal }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#071B3B]/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl glass-card-dark rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-white animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#EF4444] transition text-white cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="px-3 py-1 rounded-full bg-[#EF4444] text-white font-heading font-bold text-xs uppercase tracking-wider">
            {study.category}
          </span>
          <h3 className="font-heading font-black text-3xl sm:text-5xl mt-3 mb-2">{study.title}</h3>
          <p className="text-gray-300 text-sm">Client: {study.client} • Location: India & International</p>
        </div>

        {/* Featured Image Showcase */}
        <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-80 shadow-xl border border-white/10">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B] via-transparent to-transparent" />
        </div>

        {/* Key Results Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {study.stats.map((st, i) => (
            <div key={i} className="glass-card-dark p-4 rounded-2xl border border-white/15 text-center">
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#EF4444]">{st.value}</p>
              <p className="text-xs text-gray-300 uppercase font-semibold">{st.label}</p>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-6 text-sm text-gray-200 leading-relaxed mb-8">
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">Campaign Overview</h4>
            <p>{study.overview}</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">The Challenge</h4>
            <p>{study.challenge}</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-2">Growzzy Execution Strategy</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {study.strategy.map((st, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#EF4444] shrink-0" />
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-300">Want similar growth for your business?</p>
            <p className="font-heading font-bold text-base text-white">Let's build your success campaign.</p>
          </div>
          <MagneticButton
            onClick={() => {
              onClose();
              onOpenLeadModal();
            }}
            variant="primary"
          >
            Scale My Brand Like This
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
