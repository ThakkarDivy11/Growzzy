'use client';

import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
  type = 'button',
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#EF4444] to-red-600 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 border border-red-400/30',
    secondary:
      'bg-[#071B3B] text-white shadow-xl hover:bg-[#102B5A] border border-white/10',
    dark:
      'bg-white text-[#071B3B] hover:bg-gray-100 shadow-xl border border-gray-200',
    outline:
      'bg-transparent text-[#071B3B] border-2 border-[#071B3B]/20 hover:border-[#EF4444] hover:text-[#EF4444]',
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s ease-out' : 'transform 0.1s ease-out',
      }}
      className="inline-block"
    >
      <button
        type={type}
        onClick={onClick}
        className={`relative group px-7 py-3.5 rounded-full font-heading font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-3 justify-center cursor-pointer active:scale-95 ${variantStyles[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {/* Hover Shine / Glow overlay */}
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};
