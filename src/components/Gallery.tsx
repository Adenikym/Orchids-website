import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      title: "Ward Visits",
      date: "May, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      title: "Ward visits",
      date: "June, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      title: "Community Outreach",
      date: "July, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
      title: "Orphanage Visits",
      date: "August, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&h=400&fit=crop",
      title: "Ward visits",
      date: "June, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop",
      title: "Ward Visits",
      date: "October, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
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
              Gallery
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Decorative Elements */}
              {index === 0 && (
                <div className="absolute -left-8 top-1/2 w-12 h-12 text-yellow-400 z-10">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="20" y1="50" x2="50" y2="50"/>
                    <line x1="20" y1="30" x2="40" y2="50"/>
                    <line x1="20" y1="70" x2="40" y2="50"/>
                  </svg>
                </div>
              )}
              
              {index === 1 && (
                <div className="absolute -bottom-6 left-1/2 w-10 h-10 bg-yellow-400 rounded-full z-10"></div>
              )}

              {index === 2 && (
                <div className="absolute -right-8 -top-4 w-16 h-16 text-yellow-400 z-10">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="8"/>
                    <circle cx="50" cy="20" r="6"/>
                    <circle cx="50" cy="80" r="6"/>
                    <circle cx="20" cy="50" r="6"/>
                    <circle cx="80" cy="50" r="6"/>
                  </svg>
                </div>
              )}

              {index === 3 && (
                <div className="absolute -left-6 -top-6 w-8 h-8 bg-yellow-400 rounded-full z-10"></div>
              )}

              {/* Gallery Card */}
              <div className=" rounded-3xl overflow-hidden  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                   height="393"
                  width="396"
                    src={item.image}
                    alt={item.title}
                    
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-lg">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-3 px-8 py-4 text-purple-500 text-xl font-semibold hover:text-purple-600 transition-colors">
            <span className="border-b-2 border-purple-500 group-hover:border-purple-600">
              See More
            </span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}