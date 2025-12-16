'use client';
import React from "react";
import OurHistory from "@/components/OurHistory";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHeroSection";
import OurTeam from "@/components/OurTeam";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
     

      {/* Main Content */}
    <AboutHero />
      <OurHistory />
      <OurTeam/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
