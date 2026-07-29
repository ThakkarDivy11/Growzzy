'use client';

import React from 'react';

interface GrowzzyLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full-light' | 'full-dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const GrowzzyLogo: React.FC<GrowzzyLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  const isDarkBg = variant === 'dark' || variant === 'full-dark';

  const sizeMap = {
    sm: { icon: 32, fontMain: 'text-base', fontTag: 'text-[8px]' },
    md: { icon: 42, fontMain: 'text-xl', fontTag: 'text-[9px]' },
    lg: { icon: 54, fontMain: 'text-2xl', fontTag: 'text-[11px]' },
    xl: { icon: 70, fontMain: 'text-3xl', fontTag: 'text-[13px]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Official Growzzy G SVG Icon */}
      <div className="relative transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Main Outer G Circular Body */}
          <path
            d="M 70 12 
               C 38 12, 12 38, 12 70 
               C 12 102, 38 128, 70 128 
               C 87.5 128, 103.2 120.2, 113.8 107.8 
               L 95.5 93.5 
               C 89.2 100.8, 80.2 105.5, 70 105.5 
               C 50.4 105.5, 34.5 89.6, 34.5 70 
               C 34.5 50.4, 50.4 34.5, 70 34.5 
               C 85.2 34.5, 98.2 44.1, 103 57.5 
               L 70 57.5 
               L 70 80.5 
               L 126 80.5 
               L 126 70 
               C 126 38, 102 12, 70 12 Z"
            fill={isDarkBg ? "#FFFFFF" : "#12372A"}
          />
          {/* Sharp Tail Point at Bottom Right */}
          <polygon
            points="96,96 124,124 102,124"
            fill={isDarkBg ? "#FFFFFF" : "#12372A"}
          />
          {/* Red Arrow / Chevron Bar inside G */}
          <path
            d="M 72 58.5 L 94 58.5 L 114 80.5 L 86 80.5 Z"
            fill="#EF4444"
          />
          <path
            d="M 88 45 L 118 45 L 102 61.5 L 76 61.5 Z"
            fill="#EF4444"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Official Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-sans font-black tracking-wider uppercase leading-none ${currentSize.fontMain} ${
            isDarkBg ? 'text-white' : 'text-[#12372A]'
          }`}
        >
          GROWZZY
        </span>
        {showTagline && (
          <span
            className={`font-sans tracking-[0.24em] uppercase font-bold mt-1 ${currentSize.fontTag} ${
              isDarkBg ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            GROW FAST & EASY
          </span>
        )}
      </div>
    </div>
  );
};
