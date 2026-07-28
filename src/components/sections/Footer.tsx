'use client';

import React from 'react';
import { GrowzzyLogo } from '../logo/GrowzzyLogo';
import { Instagram, Globe, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051329] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Agency Bio */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <GrowzzyLogo variant="dark" size="lg" />
              <p className="font-sans text-sm text-gray-400 mt-4 leading-relaxed max-w-sm">
                Growzzy helps businesses grow online through creative branding, high-converting marketing strategies, SEO, content creation and performance marketing.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/growzzy.digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#EF4444] transition-colors flex items-center justify-center text-white cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://growzzy.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Website"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#EF4444] transition-colors flex items-center justify-center text-white cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@growzzy.in"
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#EF4444] transition-colors flex items-center justify-center text-white cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li><a href="#" className="hover:text-[#EF4444] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#EF4444] transition-colors">About Growzzy</a></li>
              <li><a href="#services" className="hover:text-[#EF4444] transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-[#EF4444] transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-[#EF4444] transition-colors">Our Process</a></li>
              <li><a href="#portfolio" className="hover:text-[#EF4444] transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-[#EF4444] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#EF4444] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li>Social Media Management</li>
              <li>Content Creation & Video Editing</li>
              <li>Logo Design & Branding</li>
              <li>Performance Marketing (Meta & Google Ads)</li>
              <li>SEO (Local & Technical)</li>
              <li>Landing Page Design & CRM</li>
            </ul>
          </div>

          {/* Location & Contacts */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-6">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#EF4444] shrink-0 mt-0.5" />
                <span className="font-semibold text-white">Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-[#EF4444] shrink-0" />
                <a href="mailto:contact@growzzy.in" className="hover:text-[#EF4444] transition-colors">contact@growzzy.in</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4.5 h-4.5 text-[#EF4444] shrink-0" />
                <a href="https://instagram.com/growzzy.digital" target="_blank" rel="noreferrer" className="hover:text-[#EF4444] transition-colors">@growzzy.digital</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4.5 h-4.5 text-[#EF4444] shrink-0" />
                <a href="https://growzzy.in" target="_blank" rel="noreferrer" className="hover:text-[#EF4444] transition-colors">growzzy.in</a>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1.5">
                <p className="text-xs font-bold text-[#EF4444] uppercase tracking-wider flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> Phone Direct:
                </p>
                <p className="text-xs"><span className="text-white font-semibold">Jeel Patel:</span> <a href="tel:+917698012946" className="hover:text-[#EF4444] transition-colors">+91 76980 12946</a></p>
                <p className="text-xs"><span className="text-white font-semibold">Aryan Patel:</span> <a href="tel:+919925030115" className="hover:text-[#EF4444] transition-colors">+91 99250 30115</a></p>
                <p className="text-xs"><span className="text-white font-semibold">Vivek Patel:</span> <a href="tel:+918866084350" className="hover:text-[#EF4444] transition-colors">+91 88660 84350</a></p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Growzzy Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <span>Ahmedabad, Gujarat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
