'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PaymentSuccess() {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setShowCheck(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Checkmark Circle */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          {/* Circle background with scale animation */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full transition-all duration-500 ${
              showCheck ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
          
          {/* Checkmark SVG with draw animation */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            <path
              d="M25 50 L40 65 L75 30"
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-700 delay-300 ${
                showCheck ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: 100,
                strokeDashoffset: showCheck ? 0 : 100,
              }}
            />
          </svg>
        </div>

        {/* Success Message */}
        <div 
          className={`transition-all duration-500 delay-500 ${
            showCheck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D3E3F] mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your generous donation to Orchids Initiative. Your support helps us bring hope and healing to pediatric patients.
          </p>

          {/* Transaction Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-gray-600">Transaction ID</span>
                <span className="font-semibold text-[#3D3E3F]">#12345678</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-[#3D3E3F]">
                  {new Date().toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Completed
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Return to Home
            </Link>
          </div>

          {/* Additional Info */}
          <p className="mt-8 text-sm text-gray-500">
            A confirmation email has been sent to your inbox with the receipt and donation details.
          </p>
        </div>
      </div>
    </div>
  );
}