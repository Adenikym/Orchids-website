"use client"

import React from 'react'
import Image from 'next/image'

export default function OurWork() {
  return (
    <section  className="py-16 px-6 bg-[#f8f2fc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <h2 className="text-purple-600 font-semibold tracking-widest mr-4">OUR WORK</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent" />
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Card 1 */}
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-[318px] ">
              <Image src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952096/tori-bubbles_wm4b2x.png" alt="Ward Visits" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Ward Visits</h3>
              <p className="text-gray-600 text-sm mb-6">We bring laughter, and companionship to children receiving treatment. Each visit helps ease anxiety, increase smiles, and remind them they’re not alone.</p>
              <div className="text-center">
                <button className="px-6 py-2.5 rounded-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 transition">Donate Now</button>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-[318px] ">
              <Image src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952029/liwom-group_lho9in.png" alt="Events" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Events</h3>
              <p className="text-gray-600 text-sm mb-6">Through games, art, and storytelling, we create moments of joy for children in orphanages. Every playday reminds them they are seen, loved, and valued.</p>
              <div className="text-center">
                <button className="px-6 py-2.5 rounded-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 transition">Donate Now</button>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-[318px] ">
              <Image src="https://res.cloudinary.com/da1snxdv9/image/upload/v1762952062/center-art_m6veu2.png" alt="Play Therapy Programs" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Play Therapy Programs</h3>
              <p className="text-gray-600 text-sm mb-6">Our guided play therapy sessions use art, music, and storytelling to help children heal emotionally while supporting their overall well‑being.</p>
              <div className="text-center">
                <button className="px-6 py-2.5 rounded-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 transition">Donate Now</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
