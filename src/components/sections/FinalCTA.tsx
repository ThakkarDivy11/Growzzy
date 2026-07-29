'use client';

import React, { useState } from 'react';

interface FinalCTAProps {
  onOpenLeadModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Light Gray Card Banner */}
        <div className="bg-[#E2E8F0] rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-5xl mx-auto shadow-sm">
          
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#12372A] mb-4">
            Subscribe Our Newsletter
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-sans max-w-xl mx-auto mb-8 leading-relaxed">
            Stay updated with the latest digital marketing insights, strategies, and growth tactics delivered straight to your inbox.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-full bg-[#C0F000] text-[#12372A] font-sans font-bold text-sm max-w-md mx-auto">
              ✓ Thank you for subscribing to Growzzy insights!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3.5 rounded-full bg-white text-[#12372A] text-sm font-sans outline-none border border-gray-300 focus:border-[#12372A] transition"
              />
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C0F000] text-[#12372A] font-sans font-bold text-sm hover:bg-[#A8D400] transition shrink-0 cursor-pointer shadow-sm"
              >
                Subscribe Now
              </button>

              <button
                type="button"
                onClick={onOpenLeadModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#12372A] font-sans font-bold text-sm hover:bg-gray-100 transition shrink-0 cursor-pointer border border-gray-300"
              >
                Contact Us
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
