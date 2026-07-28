'use client';

import React from 'react';
import { GrowzzyLogo } from './GrowzzyLogo';

export const Hero3DLogo: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center">
      <div className="absolute w-72 h-72 rounded-full bg-[#EF4444]/20 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full bg-[#102B5A]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 p-8 rounded-full bg-[#071B3B] border-4 border-white/10 shadow-2xl animate-float">
        <GrowzzyLogo variant="dark" size="xl" showTagline={true} />
      </div>
    </div>
  );
};
