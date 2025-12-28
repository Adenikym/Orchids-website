import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImpactStories() {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      quote: "When volunteers from Orchids visited, my son laughed for the first time in weeks. The playtime gave us a moment of normal childhood in the middle of hospital care.",
      author: "Olukayode Hannah",
      role: "Parent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hannah"
    },
    {
      quote: "The support we received transformed our daughter&apos;s recovery journey. Having caring volunteers brought joy to difficult days.",
      author: "Adebayo Michael",
      role: "Parent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      quote: "Orchids gave our family hope when we needed it most. The activities helped my child stay positive through treatment.",
      author: "Chioma Blessing",
      role: "Parent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-8 md:p-16">
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
              <circle cx="50" cy="20" r="4"/>
              <circle cx="50" cy="80" r="4"/>
              <circle cx="20" cy="50" r="4"/>
              <circle cx="80" cy="50" r="4"/>
            </svg>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-400 uppercase tracking-wide">
              Our Impact Stories
            </h1>
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

        {/* Main Content */}
<div className="min-h-screen  flex items-center justify-center p-0 md:p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Image */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg relative">
                <img 
                  height="257"
                  width="255"
                  src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952127/zeenat-with-kids_vnpj12.png"
                  alt="Children with volunteer" 
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Top Right Decorative Blocks */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-yellow-300 rounded-3xl"></div>
                <div className="aspect-square bg-purple-300 rounded-3xl"></div>
                <div className="aspect-square bg-purple-300 rounded-3xl"></div>
                <div className="aspect-square bg-yellow-300 rounded-3xl"></div>
              </div>

              {/* Bottom Left Decorative Block */}
              <div className="aspect-square bg-purple-300 rounded-3xl"></div>

              {/* Bottom Right Image */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  height="257"
                  width="255" 
                  src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762977627/Rectangle_14_1_tsxbbm.png"
                  alt="Group of happy children" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-20 h-20 text-yellow-400">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8"/>
                <circle cx="50" cy="20" r="6"/>
                <circle cx="50" cy="80" r="6"/>
                <circle cx="20" cy="50" r="6"/>
                <circle cx="80" cy="50" r="6"/>
                <circle cx="30" cy="30" r="4"/>
                <circle cx="70" cy="30" r="4"/>
                <circle cx="30" cy="70" r="4"/>
                <circle cx="70" cy="70" r="4"/>
              </svg>
            </div>

            <div className="absolute -top-4 left-1/2 w-8 h-8 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Quote Section */}
          <div className="relative shadow-lg px-6 py-6 rounded-3xl">
            <div className="absolute -right-12 top-8 w-24 h-24 text-yellow-400 opacity-20">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="50" y1="0" x2="50" y2="30"/>
                <line x1="50" y1="0" x2="70" y2="20"/>
                <line x1="50" y1="0" x2="30" y2="20"/>
                <line x1="30" y1="40" x2="70" y2="40"/>
                <line x1="30" y1="40" x2="40" y2="60"/>
                <line x1="70" y1="40" x2="60" y2="60"/>
              </svg>
            </div>

            {/* Quote Mark */}
            <div className="text-purple-300 text-8xl font-serif leading-none mb-6">&quot;</div>

            {/* Quote Text */}
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-12">
              {stories[currentStory].quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-gray-300 border-4 border-white relative">
                <img 
                  height="102"
                  width="102"
                  src={stories[currentStory].avatar}
                  alt={stories[currentStory].author}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-500">
                  {stories[currentStory].author}
                </h3>
                <p className="text-xl text-gray-600">{stories[currentStory].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevStory}
                className="p-3 rounded-full bg-gray-200 hover:bg-purple-200 transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentStory 
                        ? 'bg-purple-500 w-8' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                className="p-3 rounded-full bg-gray-200 hover:bg-purple-200 transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}