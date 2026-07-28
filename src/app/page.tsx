'use client';

import React, { useState } from 'react';
import { Preloader } from '@/components/ui/Preloader';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';
import { LeadModal } from '@/components/ui/LeadModal';

export default function Home() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC]">
      {/* Initial Loading Screen / Preloader */}
      <Preloader />

      {/* Header Bar */}
      <Header onOpenLeadModal={handleOpenLeadModal} />

      {/* Section 1: Hero Section */}
      <HeroSection onOpenLeadModal={handleOpenLeadModal} />

      {/* Section 2: Marquee & Metrics */}
      <MarqueeSection />

      {/* Section 3: About Growzzy */}
      <AboutSection />

      {/* Section 4: Premium Services Grid */}
      <ServicesSection onOpenLeadModal={handleOpenLeadModal} />

      {/* Section 5: Why Choose Growzzy */}
      <WhyUsSection />

      {/* Section 6: Our Process Stepper */}
      <ProcessSection />

      {/* Section 7: Portfolio & Case Studies */}
      <PortfolioSection onOpenLeadModal={handleOpenLeadModal} />

      {/* Section 8: Impact Results */}
      <ResultsSection />

      {/* Section 9: Client Testimonials */}
      <TestimonialsSection />

      {/* Section 10: FAQ Accordion */}
      <FAQSection />

      {/* Section 11: Final Dark Conversion CTA */}
      <FinalCTA onOpenLeadModal={handleOpenLeadModal} />

      {/* Footer */}
      <Footer />

      {/* Consultation Inquiry Lead Modal */}
      <LeadModal isOpen={isLeadModalOpen} onClose={handleCloseLeadModal} />
    </main>
  );
}
