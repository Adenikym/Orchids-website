import React from 'react';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-16 right-24 w-8 h-1 bg-yellow-400 transform rotate-45 hidden md:block"></div>
      <div className="absolute top-12 right-20 w-8 h-1 bg-yellow-400 transform -rotate-45 hidden md:block"></div>

      <div className="absolute bottom-20 left-24 w-12 h-1 bg-yellow-400 transform rotate-45 hidden md:block"></div>
      <div className="absolute bottom-16 left-20 w-12 h-1 bg-yellow-400 transform -rotate-45 hidden md:block"></div>

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
              <h2 className="text-3xl lg:text-3xl font-bold text-purple-300 whitespace-nowrap px-0 md:px-4">
                ABOUT US
              </h2>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col-reverse lg:flex-row gap-2 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-2 md:space-y-8 relative lg:flex-1">
            <div className="absolute -left-8 top-32 w-16 h-1 bg-yellow-400 transform rotate-45 hidden md:block"></div>
            <div className="absolute -left-12 top-28 w-16 h-1 bg-yellow-400 transform -rotate-45 hidden md:block"></div>

            <div className='flex md:block'>
              <h3 className="text-base lg:text-3xl font-bold text-gray-800 mb-0 md:mb-2">
                Transforming Lives Through
              </h3>
              <h3 className="text-base lg:text-3xl font-bold text-yellow-400 ml-1 md:ml-0">
                Therapeutic <span className="text-gray-800">Play</span>
              </h3>
            </div>

            <p className="text-xs md:text-lg text-gray-600 leading-relaxed">
              Orchids is a student-led nonprofit organization founded at the University College Hospital (UCH), Nigeria, with a mission to transform the lives of paediatric patients through the power of therapeutic play. We believe every child, no matter their circumstances, deserves joy, laughter, and hope.
            </p>

            <div className="flex justify-center md:justify-start">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-purple-400 text-xs md:text-lg font-medium hover:text-purple-500 transition-colors group"
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
                  className="group-hover:translate-x-1 transition-transform hidden md:block"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                <svg  className="group-hover:translate-x-1 transition-transform block md:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7885 8.6671H3.33854C3.14966 8.6671 2.99143 8.6031 2.86388 8.4751C2.73632 8.3471 2.67232 8.18888 2.67188 8.00043C2.67143 7.81199 2.73543 7.65377 2.86388 7.52577C2.99232 7.39777 3.15054 7.33377 3.33854 7.33377H10.7885L7.52188 4.0671C7.38854 3.93376 7.32454 3.77821 7.32988 3.60043C7.33521 3.42265 7.40477 3.2671 7.53854 3.13376C7.67188 3.01154 7.82743 2.94754 8.00521 2.94177C8.18299 2.93599 8.33854 2.99999 8.47188 3.13376L12.8719 7.53377C12.9385 7.60043 12.9859 7.67265 13.0139 7.75043C13.0419 7.82821 13.0557 7.91154 13.0552 8.00043C13.0548 8.08932 13.041 8.17265 13.0139 8.25043C12.9868 8.32821 12.9394 8.40043 12.8719 8.4671L8.47188 12.8671C8.34966 12.9893 8.19699 13.0504 8.01388 13.0504C7.83077 13.0504 7.67232 12.9893 7.53854 12.8671C7.40521 12.7338 7.33854 12.5755 7.33854 12.3924C7.33854 12.2093 7.40521 12.0509 7.53854 11.9171L10.7885 8.6671Z" fill="#AE70D5"/>
</svg>

              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:flex-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <Image 
                  height="496"
                  width="618"
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