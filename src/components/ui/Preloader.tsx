'use client';

import React, { useEffect, useState } from 'react';
import { GrowzzyLogo } from '../logo/GrowzzyLogo';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate smooth progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 90);

    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // match transition duration
      return () => clearTimeout(removeTimer);
    }, 1300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071B3B] transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow circles */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#EF4444]/15 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#102B5A]/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-sm w-full">
        {/* Animated Brand Logo */}
        <div className="transform transition-transform duration-700 hover:scale-105 mb-8">
          <GrowzzyLogo variant="dark" size="xl" showTagline={true} />
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4 shadow-inner relative">
          <div
            className="h-full bg-gradient-to-r from-[#EF4444] via-[#FF6B6B] to-[#EF4444] rounded-full transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading Metrics & Status */}
        <div className="flex items-center justify-between w-full text-xs font-mono text-gray-400">
          <span className="tracking-widest uppercase text-gray-300">
            Initializing Engine...
          </span>
          <span className="text-[#EF4444] font-bold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </div>
  );
};
