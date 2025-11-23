"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image'
import { Menu, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from "@/components/AboutSection";
import OurWork from '@/components/OurWork';
import Gallery from '@/components/Gallery';
import GetActivityKit from '@/components/GetActivityKit';
import Donations from "@/components/Donations";
import EventsAndCollaborators from "@/components/EventsandCollaborations";
import Cta from "@/components/Cta";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";


  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Donation', href: '/donation' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact us', href: '/contact' }
  ];


export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
  
       <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
                     <div className="relative w-36 h-11 mb-4">
                        <Image
                          src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762978493/orchids-purple-logo_qmdft7.png"
                          alt="Orchids Initiative Logo"
                          fill
                          className="object-contain"
                        />
                      </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#D186FF] transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/donate"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
            >
              Donate
            </a>
            <a
              href="/volunteer"
              className="px-6 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:border-purple-400 hover:text-purple-500 transition-all duration-200 text-sm font-medium"
            >
              Volunteer
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-500 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-500 hover:bg-gray-50 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="/donate"
                className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-200 text-sm font-medium"
              >
                Donate
              </a>
              <a
                href="/volunteer"
                className="block w-full text-center px-6 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:border-purple-400 hover:text-purple-500 transition-all duration-200 text-sm font-medium"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
  <AboutUsSection/>

  {/* Our Work Section (from Figma design) */}
  <OurWork />
  <GetActivityKit />
  <Donations />
  <EventsAndCollaborators />
  <Cta />
  <FAQSection />
  <Footer />

      </main>

      {/* Footer */}
     
    </div>
  );
}
