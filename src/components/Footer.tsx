'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      console.log('Subscribing email:', email);
      setEmail('');
      // Add your subscription logic here
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our work', href: '#work' },
    { name: 'Donation', href: '#donation' }
  ];

  const moreLinks = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Events', href: '#events' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-[#2d1b3d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-40 h-20 mb-4">
              <Image
                height={45}
                width={143}
                src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952210/slazzer-preview-31w15_4_wyinhi.png"
                alt="Orchids Initiative Logo"
                
                className="object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">More</h3>
            <ul className="space-y-3">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-2xl font-bold mb-4 text-center lg:text-right">
            Subscribe to get latest updates
          </h3>
          <div className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-r-full font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-6 md:px-16">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Orchids Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}