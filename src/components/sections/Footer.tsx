'use client';

import React from 'react';
import { GrowzzyLogo } from '../logo/GrowzzyLogo';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B231A] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="mb-4">
              <GrowzzyLogo variant="dark" size="md" />
            </a>
            
            <p className="text-xs text-gray-300 font-sans leading-relaxed mb-6 max-w-sm">
              Growzzy is a premier digital marketing agency dedicated to scaling brands, boosting search rankings, and delivering maximum ROI.
            </p>

            {/* Social Icons in Lime Circles */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="w-9 h-9 rounded-full bg-[#C0F000] text-[#0B231A] flex items-center justify-center font-bold hover:scale-110 transition-transform shadow-sm"
                  >
                    <Icon className="w-4 h-4 fill-current" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-sm text-[#C0F000] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-sans">
              <li><a href="#" className="hover:text-[#C0F000] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#C0F000] transition">About Us</a></li>
              <li><a href="#services" className="hover:text-[#C0F000] transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#C0F000] transition">Work</a></li>
              <li><a href="#contact" className="hover:text-[#C0F000] transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-sm text-[#C0F000] uppercase tracking-wider mb-4">
              Quick Link
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-sans">
              <li><a href="#" className="hover:text-[#C0F000] transition">Pages</a></li>
              <li><a href="#faq" className="hover:text-[#C0F000] transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#C0F000] transition">Support</a></li>
              <li><a href="#" className="hover:text-[#C0F000] transition">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-bold text-sm text-[#C0F000] uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <div className="space-y-3.5 text-xs text-gray-300 font-sans">
              <a href="tel:+917698012946" className="flex items-center gap-3 hover:text-[#C0F000] transition">
                <div className="w-8 h-8 rounded-full bg-[#C0F000]/20 text-[#C0F000] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 76980 12946</span>
              </a>

              <a href="mailto:contact@growzzy.com" className="flex items-center gap-3 hover:text-[#C0F000] transition">
                <div className="w-8 h-8 rounded-full bg-[#C0F000]/20 text-[#C0F000] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@growzzy.com</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C0F000]/20 text-[#C0F000] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 font-sans gap-2">
          <p>© {new Date().getFullYear()} Growzzy Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#C0F000] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#C0F000] transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
