import React from 'react';
import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

export default function OurHistory() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-yellow-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-10 h-10 text-purple-400 opacity-40">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-16 w-12 h-12 text-[#FFEB3B] opacity-50">
        <Star className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-16 w-10 h-10 text-[#FFEB3B] opacity-40">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-20 w-12 h-12 text-[#FFEB3B] opacity-50">
        <Star className="w-full h-full" />
      </div>

      {/* Decorative Pattern - Top Left */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#a855f7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles-pattern)" />
        </svg>
      </div>

      {/* Decorative Pattern - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles-pattern-2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#a855f7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles-pattern-2)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-400 rounded-md transform rotate-45" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 tracking-wide">
              OUR HISTORY
            </h2>
            <div className="w-8 h-8 bg-purple-400 rounded-md transform rotate-45" />
          </div>
          <div className="h-1 w-48 bg-gradient-to-r from-purple-400 to-transparent mt-2 ml-12" />
        </div>

        {/* First Story Block */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://res.cloudinary.com/da1snxdv9/image/upload/v1764511434/Frame_29_1_mnsf9g.png"
                  alt="Orchids volunteers engaging with young patients in hospital ward, doing creative activities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-yellow-400 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-purple-400 rounded-br-3xl" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 relative">
            <div className="absolute -left-6 top-0 w-12 h-12 text-[#FFEB3B] opacity-60">
              <Star className="w-full h-full" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pl-8">
              Orchids was founded in March 2022 by Etore Efiom-Ekaha, a compassionate medical student inspired by her encounter with an orphaned child in the pediatric ward of University College Hospital, Ibadan. A simple coloring book brought unexpected comfort and joy to the young patient, sparking a mission to bring light and hope to children in hospital care.
            </p>
          </div>
        </div>

        {/* Second Story Block */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - First on mobile, second on desktop */}
          <div className="space-y-6 order-2 md:order-1 relative">
            <div className="absolute -left-6 top-0 w-12 h-12 text-[#FFEB3B] opacity-60">
              <Sparkles className="w-full h-full" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pl-8">
              What started as one act of kindness has grown into a vibrant volunteer-driven initiative. By December 2022, Etore and her peers began engaging young patients with creative activities that ease pain, foster resilience, and brighten their hospital experience.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed pl-8">
              In 2023, Orchids was officially incorporated under Section 26 of the Companies Allied Matters Act (CAMA). Today, it continues to transform hospital stays into moments of connection, creativity, and healing fulfilling its mission to share smiles in spite of suffering.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://res.cloudinary.com/da1snxdv9/image/upload/v1764514571/Frame_43_1_pwwcsu.png"
                  alt="Orchids volunteer in yellow shirt with young patient and another volunteer blowing bubbles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-yellow-400 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-purple-400 rounded-bl-3xl" />
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center gap-6 mt-16 opacity-40">
          <Sparkles className="w-6 h-6 text-[#FFEB3B] animate-pulse" />
          <Star className="w-8 h-8 text-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Sparkles className="w-6 h-6 text-[#FFEB3B] animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}