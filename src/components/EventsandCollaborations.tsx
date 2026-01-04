import React,{useState} from 'react';
import Image from 'next/image';
import CollaborationContent from './CollaborateContent';
import {Modal} from './ReusableModal';

export default function EventsAndCollaborators() {
  const [isCollabOpen, setIsCollabOpen] = useState(false);
  const events = [
    {
      date: "01",
      month: "OCT",
      year: "2025",
      category: "Hospital Visit",
      title: "A day with our wonderful children"
    },
    {
      date: "01",
      month: "OCT",
      year: "2025",
      category: "Orphanage Visit",
      title: "A day to make a difference"
    }
  ];

  const collaborators = [
    {
      name: "Rotaract",
      logo: "https://res.cloudinary.com/da1snxdv9/image/upload/v1762952160/rotaract-logo_wtoyrc.png"
    },
    {
      name: "Mafita Initiative",
      logo: "https://res.cloudinary.com/da1snxdv9/image/upload/v1763988445/slazzer-preview-xfw0y_1_1_ewnjzm.png"
    },
    {
      name: "Chateaurare",
      logo: "https://res.cloudinary.com/da1snxdv9/image/upload/v1762952062/Chateaurare_rl5bbx.png"
    },
    {
      name: "Living Word Mission",
      logo: "https://res.cloudinary.com/da1snxdv9/image/upload/v1762952028/liwom-logo_wlt0a4.png"
    }
  ];

  return (
    <div id="events" className="min-h-screen bg-gray-50 py-16 px-8 md:px-16 relative overflow-hidden">
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

      <div className="absolute bottom-10 right-32 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* UPCOMING EVENTS SECTION */}
        <section className="mb-24">
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
                Upcoming Events
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
              <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
            </div>

            <div className="absolute -right-8 -top-8 w-16 h-16 text-[#FFEB3B]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="50" y1="10" x2="50" y2="40"/>
                <line x1="50" y1="10" x2="70" y2="30"/>
                <line x1="50" y1="10" x2="30" y2="30"/>
              </svg>
            </div>

            <div className="absolute -left-12 top-20 w-12 h-12 text-[#FFEB3B]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="20" y1="50" x2="50" y2="50"/>
                <line x1="20" y1="30" x2="40" y2="50"/>
                <line x1="20" y1="70" x2="40" y2="50"/>
              </svg>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl transition-shadow px-4 py-2"
              >
                <div className="flex gap-6">
                  {/* Date Box */}
                  <div className="flex-shrink-0">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-800 mb-1">
                        {event.date}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        {event.month}
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.year}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-gray-300"></div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">
                      {event.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COLLABORATORS SECTION */}
        <section>
          {/* Header */}
          <div className="mb-12 relative">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-purple-400 uppercase tracking-wide">
                Collaborators
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
              <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
            </div>

            <div className="absolute -right-8 -top-8 w-16 h-16 text-[#FFEB3B]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="50" y1="10" x2="50" y2="40"/>
                <line x1="50" y1="10" x2="70" y2="30"/>
                <line x1="50" y1="10" x2="30" y2="30"/>
              </svg>
            </div>

            <div className="absolute -left-12 top-20 w-12 h-12 text-[#FFEB3B]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="20" y1="50" x2="50" y2="50"/>
                <line x1="20" y1="30" x2="40" y2="50"/>
                <line x1="20" y1="70" x2="40" y2="50"/>
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-5xl">
Our collaborators share our heart for children, joining us to bring color, comfort, and creativity to hospital spaces. Together, we create moments of joy that remind every child they&apos;re not alone in their healing journey.          </p>

          {/* Collaborators Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {collaborators.map((collaborator, index) => (
              <div 
                key={index}
                className=" rounded-2xl p-6  transition-shadow flex items-center justify-center"
              >
                <div className="relative w-full h-20">
                  <Image
                  height={117}
                  width={234}
                    src={collaborator.logo}
                    alt={collaborator.name}
                    
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Collaborate Button */}
          <div className="flex justify-center">
            <button onClick={() => setIsCollabOpen(true)} className="px-12 py-4 border-2 border-purple-400 text-purple-400 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
              Collaborate with us
            </button>
          </div>
        </section>
      </div>
      <Modal isOpen={isCollabOpen} onClose={() => setIsCollabOpen(false)} maxWidth="xl">
        <CollaborationContent />
      </Modal>
    </div>
  );
}