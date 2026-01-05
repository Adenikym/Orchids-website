import React,{useState} from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


export default function Donations({ showHeader = false }) {

  return (
    <div className=" bg-gray-50 px-8 md:px-16 py-8 md:py-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-32 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="absolute bottom-32 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        {
          showHeader && ( <div className="mb-12 relative">
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
              Donations
            </h1>
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
        </div>)}
        
       

        {/* Main Content Card */}
        <div className="relative">
          {/* Decorative squiggly lines */}
          <svg 
            className="absolute -left-4 top-8 w-32 h-48 text-white opacity-40"
            viewBox="0 0 100 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M 10 20 Q 30 40, 20 60 T 10 100 Q 30 120, 20 140 T 10 180" />
          </svg>

          <svg 
            className="absolute -right-4 bottom-8 w-32 h-48 text-white opacity-40"
            viewBox="0 0 100 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M 90 20 Q 70 40, 80 60 T 90 100 Q 70 120, 80 140 T 90 180" />
          </svg>

          {/* Purple gradient card */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative stars inside card */}
            <div className="absolute top-32 right-32 w-8 h-8 text-yellow-300">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8"/>
                <circle cx="50" cy="20" r="5"/>
                <circle cx="50" cy="80" r="5"/>
                <circle cx="20" cy="50" r="5"/>
                <circle cx="80" cy="50" r="5"/>
              </svg>
            </div>

            <div className="absolute top-40 right-64 w-6 h-6 text-white">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8"/>
                <circle cx="50" cy="20" r="5"/>
                <circle cx="50" cy="80" r="5"/>
                <circle cx="20" cy="50" r="5"/>
                <circle cx="80" cy="50" r="5"/>
              </svg>
            </div>

            <div className="absolute bottom-32 left-40 w-6 h-6 text-white">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8"/>
                <circle cx="50" cy="20" r="5"/>
                <circle cx="50" cy="80" r="5"/>
                <circle cx="20" cy="50" r="5"/>
                <circle cx="80" cy="50" r="5"/>
              </svg>
            </div>

            <div className="absolute bottom-48 right-56 w-8 h-8 text-yellow-300 opacity-70">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8"/>
                <circle cx="50" cy="20" r="5"/>
                <circle cx="50" cy="80" r="5"/>
                <circle cx="20" cy="50" r="5"/>
                <circle cx="80" cy="50" r="5"/>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <p className="text-white text-2xl md:text-3xl  leading-relaxed font-bold mb-8">
                Each naira you give turns into crayons, toys, smiles, and hope. Join us in creating a world where every child can heal through play- Etore Efiom-Ekaha
              </p>

              {
                showHeader && (<button className="group inline-flex items-center gap-3 px-8 py-4 text-white text-xl font-semibold hover:scale-105 transition-transform">
               <Link href="/donation">
                <span className="border-b-2 border-white">
                  See More
                </span>
                </Link>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>)
              }

              
            </div>
          </div>

          {/* Decorative sun element at bottom right */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 text-[#FFEB3B]">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="12"/>
              <line x1="50" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="3"/>
              <line x1="50" y1="75" x2="50" y2="85" stroke="currentColor" strokeWidth="3"/>
              <line x1="15" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="3"/>
              <line x1="75" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="3"/>
              <line x1="25" y1="25" x2="32" y2="32" stroke="currentColor" strokeWidth="3"/>
              <line x1="68" y1="68" x2="75" y2="75" stroke="currentColor" strokeWidth="3"/>
              <line x1="75" y1="25" x2="68" y2="32" stroke="currentColor" strokeWidth="3"/>
              <line x1="32" y1="68" x2="25" y2="75" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}