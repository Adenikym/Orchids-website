'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Modal } from '../components/ReusableModal';
import ContactUsContent from './ContactUsContent';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Work', href: '/work' },
  { name: 'Donation', href: '/donation' },
  { name: 'Contact us', href: '/contact' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#fafafa] shadow-sm">
      <div className="max-w-7xl mx-auto pl-0 pr-4 px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative  mb-4">
            <Image
              height="80"
              width="250"
              src="https://res.cloudinary.com/da1snxdv9/image/upload/v1768652062/yellow-logo_nr74aw.svg"
              alt="Orchids Initiative Logo"
              className="object-contain hidden md:block mt-8"
            />
            <Image
              height="60"
              width="200"
              src="https://res.cloudinary.com/da1snxdv9/image/upload/v1768652062/yellow-logo_nr74aw.svg"
              alt="Orchids Initiative Logo"
              className="object-contain block md:hidden mt-5"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 text-sm ${
                    isActive
                      ? 'text-[#D186FF] font-bold'
                      : 'text-gray-700 hover:text-[#D186FF] font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/donation"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2.5 bg-white border hover:border-2 border-[#D186FF] text-[#D186FF] rounded-full hover:border-purple-400 hover:text-purple-500 transition-all duration-200 text-sm font-medium"
            >
              Volunteer
            </button>
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
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-lg bg-purple-400 text-white hover:bg-purple-500 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex-1 px-8 pt-8 space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-2xl transition-colors duration-200 ${
                      isActive
                        ? 'text-[#D186FF] font-bold'
                        : 'text-gray-700 hover:text-purple-400 font-normal'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="px-8 pb-8 space-y-3">
              <Link
                href="/donation"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-200 text-base font-medium"
              >
                Donate
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsOpen(true);
                }}
                className="block w-full text-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:border-purple-400 hover:text-purple-500 transition-all duration-200 text-base font-medium"
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="xl">
        <ContactUsContent />
      </Modal>
    </nav>
  );
}