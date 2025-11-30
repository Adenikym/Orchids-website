import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart, Star } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 text-purple-400 opacity-60">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-20 w-16 h-16 text-yellow-400 opacity-60">
        <Star className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-20 w-10 h-10 text-purple-300 opacity-60">
        <Heart className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-purple-400 opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full bg-yellow-400 opacity-20 blur-xl" />

      {/* Decorative Dots Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#a855f7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-purple-400 mb-4 tracking-tight">
              ABOUT US
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-yellow-400 mx-auto" />
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                We are Transforming Lives Through{' '}
                <span className="text-yellow-400">Therapeutic</span> Play
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Orchids is a student-led nonprofit organization founded at the University College Hospital (UCH), Nigeria, with a mission to transform the lives of paediatric patients through the power of therapeutic play. We believe every child, no matter their circumstances, deserves joy, laughter, and hope.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold">Student-Led</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-600 font-semibold">UCH Nigeria</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold">Therapeutic Play</span>
                </div>
              </div>
            </div>

            {/* Team Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl aspect-square">
                <Image
                  src="https://res.cloudinary.com/da1snxdv9/image/upload/v1764513318/Group_77_1_tr0da9.png"
                  alt="Orchids team members wearing purple and yellow branded t-shirts"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative circle behind */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-full border-4 border-dashed border-purple-300 opacity-50" />
            </div>
          </div>

          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="relative aspect-video bg-gray-900">
              <Image
                src="https://res.cloudinary.com/da1snxdv9/image/upload/v1764513384/Rectangle_4_p6kh4f.png"
                alt="Orchids team group photo"
                fill
                className="object-cover opacity-90"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                <button 
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                  aria-label="Play video"
                >
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-purple-600 border-b-8 border-b-transparent ml-1" />
                </button>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none" />
            </div>

            {/* Video Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                Meet Our Team
              </p>
              <p className="text-lg">Bringing joy and hope to children in need</p>
            </div>
          </div>

          {/* Decorative Stars */}
          <div className="flex justify-center gap-8 mt-12 opacity-40">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <Star className="w-8 h-8 text-purple-400" />
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 relative">
            {/* Decorative star */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-12 text-yellow-400 opacity-60 hidden lg:block">
              <Star className="w-full h-full" />
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 text-yellow-400 opacity-60 hidden lg:block">
              <Star className="w-full h-full" />
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-l-2xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To share smiles amidst suffering by engaging paediatric patients in creative and pleasurable activities. We achieve this by organizing ward visits, distributing activity kits, and collaborating with hospitals and communities to create therapeutic environments that inspire joy and healing.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-l-2xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To transform Paediatric healthcare experiences across Africa by bringing joy and safe play to hospitalized children. By 2035, we aim to impact the lives of 1 million paediatric patients, fostering resilience and hope through innovative programs and partnerships.
              </p>
            </div>
          </div>

          {/* Decorative Stars */}
          <div className="flex justify-center gap-8 mt-12 opacity-40">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <Star className="w-8 h-8 text-purple-400" />
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
       
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}