import React from 'react';
import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

const teamMembers = [
  {
    name: "Etore Efiom-Ekaha",
    role: "Founder & Chairman of the Board",
    image: "https://res.cloudinary.com/da1snxdv9/image/upload/v1764511430/Ellipse_7_4_omwuht.png"
  },
  {
    name: "Chisom Okoye",
    role: "Co-founder",
    image: "https://res.cloudinary.com/da1snxdv9/image/upload/v1764511430/Ellipse_8_4_bk3axz.png"
  },
  {
    name: "Rhoda Etta",
    role: "Co-founder",
    image: "https://res.cloudinary.com/da1snxdv9/image/upload/v1764511427/Ellipse_7_5_uoaykv.png"
  },
  {
    name: "Maryam Mudasiru",
    role: "President, Orchids UCH",
    image: "https://res.cloudinary.com/da1snxdv9/image/upload/v1764515031/IMG_0605_ajwijk.jpg"
  },
  {
    name: "Akande Timi",
    role: "Head of Activities & Logistics",
    image: "https://res.cloudinary.com/da1snxdv9/image/upload/v1764511430/Ellipse_8_3_dfpjkg.png"
  },
  {
    name: "Tolulope Oyebola",
    role: "Head of Finance and Administration",
    image: "https://res.cloudinary.com/da1snxdv9/image/upload/v1764511430/Ellipse_8_4_bk3axz.png"
  },
  {
    name: "Sharon Ugboja",
    role: "Head of Media and Publicity",
    image: "/api/placeholder/300/300"
  }
];

export default function OurTeam() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-yellow-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-10 h-10 text-purple-400 opacity-40">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute top-20 left-32 w-12 h-12 text-yellow-400 opacity-50">
        <Star className="w-full h-full" />
      </div>

      {/* Floating Decorative Squares - Left */}
      <div className="absolute left-16 top-1/3 space-y-4">
        <div className="w-20 h-20 bg-purple-300 opacity-40 rounded-lg transform rotate-12" />
        <div className="w-12 h-12 bg-yellow-300 opacity-50 rounded-lg transform -rotate-6 ml-8" />
        <div className="w-16 h-16 bg-purple-400 opacity-30 rounded-lg transform rotate-45" />
      </div>

      {/* Floating Decorative Squares - Right */}
      <div className="absolute right-16 top-1/2 space-y-4">
        <div className="w-16 h-16 bg-purple-300 opacity-40 rounded-lg transform -rotate-12" />
        <div className="w-24 h-24 bg-yellow-300 opacity-50 rounded-lg transform rotate-6 mr-8" />
        <div className="w-12 h-12 bg-purple-400 opacity-30 rounded-lg transform -rotate-45" />
      </div>

      {/* Bottom decorative stars */}
      <div className="absolute bottom-20 left-20 w-10 h-10 text-yellow-400 opacity-40">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-24 w-12 h-12 text-purple-400 opacity-50">
        <Star className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-400 rounded-md transform rotate-45" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 tracking-wide">
              MEET OUR TEAM
            </h2>
            <div className="w-8 h-8 bg-purple-400 rounded-md transform rotate-45" />
          </div>
          <div className="h-1 w-48 bg-gradient-to-r from-purple-400 to-transparent mt-2 ml-12" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 relative">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Decorative ring behind */}
                <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-dashed border-purple-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 transform scale-110" />
              </div>

              {/* Name and Role */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center gap-6 mt-16 opacity-40">
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          <Star className="w-8 h-8 text-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}