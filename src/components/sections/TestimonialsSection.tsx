'use client';

import React from 'react';
import { UserCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'SEO Organic Growth',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Libert Jane',
      role: 'Search/UI/UX Expert',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Rajan Max',
      role: 'Senior Marketing Director',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Manuel Parsley',
      role: 'Executive Manager',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Tag & Subtitle */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 rounded-md bg-[#C0F000] text-[#12372A] text-xs font-bold uppercase tracking-wider mb-3">
            Our Team
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-7 font-sans font-black text-3xl sm:text-5xl text-[#12372A] leading-tight">
              Experts Driving Your <span className="text-[#12372A]">Digital Success</span>
            </h2>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                With a group of expert specialists across search optimization, paid media, and creative design...
              </p>
              <button className="px-6 py-2.5 rounded-full bg-[#C0F000] text-[#12372A] font-sans font-bold text-xs hover:bg-[#A8D400] transition shrink-0 cursor-pointer shadow-sm">
                Join Team
              </button>
            </div>
          </div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-200/80 flex flex-col items-center text-center group hover:shadow-md transition duration-300"
            >
              {/* Member Photo */}
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Green Icon Badge */}
              <div className="w-8 h-8 rounded-full bg-[#C0F000] text-[#12372A] flex items-center justify-center font-bold text-xs mb-2">
                <UserCheck className="w-4 h-4" />
              </div>

              {/* Name & Role */}
              <h3 className="font-sans font-extrabold text-lg text-[#12372A] mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 font-sans font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
