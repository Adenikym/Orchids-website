import React from 'react';
import Image from 'next/image';

export default function ReadyToJoinCTA() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-32 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="absolute bottom-32 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 relative">
          <div className="absolute -left-4 -top-4 w-12 h-12 text-purple-400">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="8"/>
              <circle cx="30" cy="35" r="5"/>
              <circle cx="70" cy="35" r="5"/>
              <circle cx="30" cy="65" r="5"/>
              <circle cx="70" cy="65" r="5"/>
            </svg>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 uppercase tracking-wide">
              Ready to Join Us?
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
            <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
          </div>

          <div className="absolute -right-8 -top-8 w-16 h-16 text-yellow-400">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="50" y1="10" x2="50" y2="40"/>
              <line x1="50" y1="10" x2="70" y2="30"/>
              <line x1="50" y1="10" x2="30" y2="30"/>
            </svg>
          </div>

          <div className="absolute -left-12 top-20 w-12 h-12 text-yellow-400">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="20" y1="50" x2="50" y2="50"/>
              <line x1="20" y1="30" x2="40" y2="50"/>
              <line x1="20" y1="70" x2="40" y2="50"/>
            </svg>
          </div>
        </div>

        {/* CTA Card */}
        <div className="relative">
          {/* Main Card with Background Image */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952160/cta-image_jzry78.png"
                alt="Children holding hands"
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-24 md:px-16 md:py-32 text-center">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                Your gift and participation creates play sessions, emotional support, and hope for children facing illness
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-10 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg min-w-[160px]">
                  Donate
                </button>
                <button className="px-10 py-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg min-w-[160px]">
                  Volunteer
                </button>
              </div>
            </div>
          </div>

          {/* Decorative sun element at bottom right */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 text-yellow-400">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="12"/>
              <line x1="50" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="3"/>
              <line x1="50" y1="75" x2="50" y2="85" stroke="currentColor" strokeWidth="3"/>
              <line x1="15" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="3"/>
              <line x1="75" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="3"/>
              <line x1="25" y1="25" x2="32" y2="32" stroke="currentColor" strokeWidth="3"/>
              <line x1="68" y1="68" x2="75" y2="75" stroke="currentColor" strokeWidth="3"/>
              <line x1="75" y1="25" x2="68" y2="32" stroke="currentColor" strokeWidth="3"/>
              <line x1="32" y1="68" x2="25" y2="75" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}