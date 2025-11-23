import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I volunteer?",
      answer: "We welcome volunteers who are passionate about bringing joy to children in hospitals. You can sign up through our volunteer form, attend an orientation session, and join us for hospital visits. We provide training and support to ensure you're comfortable and prepared."
    },
    {
      question: "How can I donate?",
      answer: "You can make a donation through our secure online platform, bank transfer, or by contacting us directly. Every contribution, no matter the size, helps us provide art supplies, toys, and therapeutic play sessions for children facing illness."
    },
    {
      question: "Are photos of children used with permission?",
      answer: "Yes, absolutely. We take privacy very seriously. All photos and videos of children are only taken and shared with explicit written consent from parents or guardians. We ensure compliance with child protection policies and respect the dignity of every child we serve."
    },
    {
      question: "Where do you operate?",
      answer: "We currently operate in hospitals and orphanages across Lagos, Nigeria. We're constantly expanding our reach to serve more children in need. If you know of a facility that could benefit from our services, please reach out to us."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-32 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 relative">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Graphic */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <Image
                src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952027/faq-graphic_rlxurq.png"
                alt="FAQ illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}