"use client";
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
import ActivityKit from '@/components/ActivityKit';
import Footer from "@/components/Footer";
import { Modal } from '@/components/ReusableModal';
import DonationForm from '@/components/DonationContent';
import ContactUsContent from '@/components/ContactUsContent';
import Navbar from '@/components/Navbar';


  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Donation', href: '/donation' },
    // { name: 'Gallery', href: '/gallery' },
    { name: 'Contact us', href: '/contact' }
  ];


export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
    const openDonationModal = () => setIsOpen(true);
    const openVolunteerModal = () => setIsVolunteerOpen(true);
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header/Navigation */}
  
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenDonation={openDonationModal} />
  <AboutUsSection/>

  {/* Our Work Section (from Figma design) */}
  <OurWork onOpenDonation={openDonationModal} />
  <ActivityKit/>
  <GetActivityKit />
  <Donations showHeader={true} />
  <EventsAndCollaborators  />
  <Cta onOpenVolunteer={openVolunteerModal} />
  <FAQSection />
  <Gallery/>
  <Footer />

      </main>

      {/* Footer */}

       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="xl">
        <DonationForm />
            </Modal>

         <Modal isOpen={isVolunteerOpen} onClose={() => setIsVolunteerOpen(false)} maxWidth="xl">
                <ContactUsContent />
              </Modal>
     
    </div>
  );
}
