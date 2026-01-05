"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface ChildComponentProps {
  onOpenDonation: () => void;
}

export default function OurWork({ onOpenDonation }: ChildComponentProps) {
  return (
    <section  className="py-16 px-6 bg-[#f8f2fc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col  mb-8 w-fit">
          <h2 className="text-[#D186FF] font-bold text-base md:text-3xl text-center tracking-widest mr-4">OUR WORK</h2>
           <svg className='hidden md:block' width="224" height="24" viewBox="0 0 224 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.000130653 11.547L11.5469 23.094L23.0939 11.547L11.5469 -8.58307e-06L-0.000130653 11.547ZM223.094 11.547L211.547 -8.58307e-06L200 11.547L211.547 23.094L223.094 11.547ZM11.5469 11.547V13.547H211.547V11.547V9.547H11.5469V11.547Z" fill="#D186FF"/>
</svg>
<svg className='block md:hidden' width="92" height="12" viewBox="0 0 92 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM91.5469 5.77344L85.7734 -6.53267e-05L79.9999 5.77344L85.7734 11.5469L91.5469 5.77344ZM5.77344 5.77344V6.77344H85.7734V5.77344V4.77344H5.77344V5.77344Z" fill="#D186FF"/>
</svg>
        
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Card 1 */}
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-[318px] ">
              <Image src="https://res.cloudinary.com/da1snxdv9/image/upload/v1767624939/Frame_60_hhh5g3.svg" alt="Ward Visits" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-base md:text-2xl font-semibold mb-2 text-black text-center">Ward Visits</h3>
              <p className="text-[#3D3E3F] text-xs md:text-base mb-6 text-center">We bring laughter, and companionship to children receiving treatment. Each visit helps ease anxiety, increase smiles, and remind them they’re not alone.</p>
              <div className="text-center">
                <Link href="/work">
                <button className="px-6 py-2.5 rounded-full border border-[#D186FF] text-[#D186FF] hover:bg-purple-50 transition">Learn More</button>
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-[318px] ">
              <Image src="https://res.cloudinary.com/da1snxdv9/image/upload/v1767625831/Frame_60_2_kn0wod.svg" alt="Events" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-base md:text-2xl font-semibold mb-2 text-black text-center">Events</h3>
              <p className="text-[#3D3E3F] text-xs md:text-base mb-6 text-center">Through games, art, and storytelling, we create moments of joy for children in orphanages. Every playday reminds them they are seen, loved, and valued.</p>
              <div className="text-center">
                <Link href="#events">
                <button className="px-6 py-2.5 rounded-full border border-[#D186FF] text-[#D186FF] hover:bg-purple-50 transition">See Events</button>
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-[318px] ">
              <Image src="https://res.cloudinary.com/da1snxdv9/image/upload/v1767625933/Frame_60_3_gr91p6.svg" alt="Play Therapy Programs" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-base md:text-2xl font-semibold mb-2 text-black text-center">Play Therapy Programs</h3>
              <p className="text-[#3D3E3F] text-xs md:text-base mb-6 text-center">Our guided play therapy sessions use art, music, and storytelling to help children heal emotionally while supporting their overall well‑being.</p>
              <div className="text-center">
                
                <button  onClick={onOpenDonation} className="px-6 py-2.5 rounded-full border border-[#D186FF] text-[#D186FF] hover:bg-purple-50 transition">Donate Now</button>
              
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
