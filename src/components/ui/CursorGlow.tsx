'use client';

import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Outer ambient glow follower */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full blur-2xl hidden md:block transition-transform duration-200 ease-out"
        style={{
          width: 240,
          height: 240,
          transform: `translate3d(${mousePosition.x - 120}px, ${mousePosition.y - 120}px, 0) scale(${isHovered ? 1.3 : 1})`,
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(16, 43, 90, 0.1) 60%, transparent 80%)',
        }}
      />
      {/* Inner sharp cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#EF4444]/50 bg-[#EF4444]/20 hidden md:block transition-all duration-150 ease-out"
        style={{
          width: isHovered ? 40 : 16,
          height: isHovered ? 40 : 16,
          transform: `translate3d(${mousePosition.x - (isHovered ? 20 : 8)}px, ${mousePosition.y - (isHovered ? 20 : 8)}px, 0)`,
        }}
      />
    </>
  );
};
