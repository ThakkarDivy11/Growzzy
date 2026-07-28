'use client';

import React, { useState, useEffect } from 'react';
import { GrowzzyLogo } from '../logo/GrowzzyLogo';
import { MagneticButton } from '../ui/MagneticButton';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLeadModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#071B3B]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Official Growzzy Logo with Dynamic Contrast */}
        <a href="#" className="flex items-center">
          <GrowzzyLogo variant={scrolled ? 'dark' : 'light'} size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 glass-pill px-6 py-2.5 rounded-full border border-[#071B3B]/10 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans font-medium text-[#071B3B] hover:text-[#EF4444] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Phone Contacts */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+917698012946"
            className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-white/80 hover:bg-white text-[#071B3B] transition border border-gray-200 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>+91 76980 12946</span>
          </a>

          <MagneticButton onClick={onOpenLeadModal} variant="primary">
            Get Free Consultation <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#071B3B] text-white hover:bg-[#102B5A] transition cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071B3B] border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-heading text-white hover:text-[#EF4444] transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+917698012946"
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <Phone className="w-4 h-4 text-[#EF4444]" /> +91 76980 12946
              </a>
              <MagneticButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                variant="primary"
                className="w-full"
              >
                Get Free Consultation
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
