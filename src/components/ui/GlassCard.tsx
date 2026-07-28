'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  dark = false,
  hoverGlow = true,
}) => {
  return (
    <div
      className={`relative rounded-[24px] overflow-hidden transition-all duration-300 ${
        dark ? 'glass-card-dark text-white' : 'glass-card text-[#071B3B]'
      } ${
        hoverGlow
          ? 'hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl glow-border'
          : ''
      } ${className}`}
    >
      {/* Decorative ambient background shimmer */}
      <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-[#EF4444]/10 blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-[#102B5A]/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 p-7 md:p-9">{children}</div>
    </div>
  );
};
