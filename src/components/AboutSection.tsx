import React from 'react';

export default function AboutUsSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 w-12 h-12 opacity-30">
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <circle cx="25" cy="25" r="20" fill="#c084fc" />
          <circle cx="25" cy="25" r="12" fill="#a855f7" />
          <circle cx="25" cy="15" r="3" fill="#c084fc" />
          <circle cx="25" cy="35" r="3" fill="#c084fc" />
          <circle cx="15" cy="25" r="3" fill="#c084fc" />
          <circle cx="35" cy="25" r="3" fill="#c084fc" />
        </svg>
      </div>

      <div className="absolute top-16 right-24 w-8 h-1 bg-yellow-400 transform rotate-45"></div>
      <div className="absolute top-12 right-20 w-8 h-1 bg-yellow-400 transform -rotate-45"></div>

      <div className="absolute bottom-20 left-24 w-12 h-1 bg-yellow-400 transform rotate-45"></div>
      <div className="absolute bottom-16 left-20 w-12 h-1 bg-yellow-400 transform -rotate-45"></div>

      <div className="absolute bottom-32 left-12 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="#c084fc" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="#c084fc" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="#c084fc" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-24 right-32 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <path d="M 75 20 Q 100 50 75 80 Q 50 50 75 20" fill="#c084fc" />
          <path d="M 75 70 Q 100 100 75 130 Q 50 100 75 70" fill="#c084fc" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            
            
            <div className="flex items-center flex-1">
             
              
              <h2 className="text-4xl lg:text-5xl font-bold text-purple-300 whitespace-nowrap px-4">
                ABOUT US
              </h2>
              
              
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <div className="absolute -left-8 top-32 w-16 h-1 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute -left-12 top-28 w-16 h-1 bg-yellow-400 transform -rotate-45"></div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Transforming Lives Through
              </h3>
              <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400">
                Therapeutic <span className="text-gray-800">Play</span>
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Orchids is a student-led nonprofit organization founded at the University College Hospital (UCH), Nigeria, with a mission to transform the lives of paediatric patients through the power of therapeutic play. We believe every child, no matter their circumstances, deserves joy, laughter, and hope.
            </p>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-purple-400 text-lg font-medium hover:text-purple-500 transition-colors group"
            >
              <span className="border-b-2 border-purple-400 group-hover:border-purple-500">See More</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] ">
                <img 
                  src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952062/about-name-image_jhzfso.png" 
                  alt="Orchids team members in purple and yellow shirts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}