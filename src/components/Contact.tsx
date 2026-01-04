import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-purple-400 mb-6">CONTACT US</h1>
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed">
            We would love to hear from you! Whether you want to volunteer, partner, donate, or simply learn more about Orchids, our team is here to connect. Reach out today. Together, we can make a child&apos;s day brighter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a message</h2>
              <p className="text-gray-600 text-base">
                Your gift and participation creates play sessions, emotional support, and hope for children facing illness
              </p>
            </div>

            <div className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-400 focus:outline-none bg-transparent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-400 focus:outline-none bg-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-400 focus:outline-none bg-transparent transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Share your thoughts or enquiry"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none resize-none placeholder-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="px-12 py-3 bg-purple-400 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors shadow-md hover:shadow-lg"
              >
                Donate
              </button>
            </div>

            {/* Decorative Star */}
            <div className="flex justify-center mt-8">
              <div className="text-purple-300 text-6xl opacity-60">✦</div>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Prefer a Direct Chat */}
            <div className="relative">
              {/* Decorative Sun Icon */}
              <div className="absolute -top-4 -right-4 text-[#FFEB3B] text-6xl opacity-70">
                ☀
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Prefer a Direct Chat?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">+234 8102530642</span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">orchidsforkids1@gmail.com</span>
                  </div>
            
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Monday to Friday, 9 AM - 5 PM (WAT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                {/* Map placeholder - you can replace with actual map integration */}
                <div className="relative h-96 bg-gray-200">
                  <Image
                    height="614"
                    width="607"
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/3.9069,7.3775,12,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                    alt="Map showing location in Nigeria"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Visit Us Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Visit Us</h4>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        University College Hospital (UCH), Ibadan, Nigeria
                      </span>
                    </div>
                    <button className="px-6 py-2 border-2 border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-50 transition-colors">
                      Get directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}