import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export function Modal({ isOpen, onClose, children, maxWidth = 'xl' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-7xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative ${maxWidthClasses[maxWidth]} w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        {/* Modal Body */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

// Example usage component with navbar
export default function ModalExample() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isActivityKitOpen, setIsActivityKitOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-400">
              Orchids Pediatric
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-2 bg-purple-400 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => setIsActivityKitOpen(true)}
                className="px-6 py-2 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                Gift Activity Kit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Orchids Pediatric Foundation</h1>
        <p className="text-gray-600 text-lg">
          Click the buttons in the navbar to open the modals.
        </p>
      </div>

      {/* Contact Modal */}
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} maxWidth="full">
        <ContactUsModal />
      </Modal>

      {/* Activity Kit Modal */}
      <Modal isOpen={isActivityKitOpen} onClose={() => setIsActivityKitOpen(false)} maxWidth="full">
        <ActivityKitModal />
      </Modal>
    </div>
  );
}

// Contact Us Modal Content
function ContactUsModal() {
  const [formData, setFormData] = useState({
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
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column - Contact Form */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a message</h2>
          <p className="text-gray-600 text-base">
            Your gift and participation creates play sessions, emotional support, and hope for children facing illness
          </p>
        </div>

        <div className="space-y-6">
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

          <button
            onClick={handleSubmit}
            className="w-full px-12 py-3 bg-purple-400 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Right Column - Contact Info */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 text-lg">📞</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-700 font-medium">+234 1234 6789 990</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 text-lg">✉️</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-700 font-medium">info@orchidspediatric.org</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 text-lg">⏰</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hours</p>
                <p className="text-gray-700 font-medium">Monday to Friday, 9 AM - 5 PM (WAT)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 text-lg">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-700 font-medium">University College Hospital (UCH), Ibadan, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Activity Kit Modal Content
function ActivityKitModal() {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const unitPrice = 3000;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column - Content */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 px-6 py-2 rounded-full font-semibold">
          <span className="text-2xl">✦</span>
          <span>ACTIVITY KIT</span>
          <span className="text-2xl">✦</span>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Each <span className="text-purple-400">Kit</span> contains books, crayons, and creative tools
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Your gift helps turn hospital stays into moments of joy and imagination. When you give an activity Kit, you help create a lasting impact, supporting mental well-being, inspiring courage, and making recovery a little brighter.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Quantity</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecrement}
              className="w-12 h-12 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-400 text-2xl flex items-center justify-center transition-colors"
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleChange}
              className="w-24 h-12 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
              min="1"
            />
            <button
              onClick={handleIncrement}
              className="w-12 h-12 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-400 text-2xl flex items-center justify-center transition-colors"
            >
              +
            </button>
            <span className="text-purple-400 text-3xl ml-2">✿</span>
          </div>
        </div>

        <div className="space-y-3 py-6 border-t-2 border-b-2 border-gray-200">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-gray-700">Unit Price:</span>
            <span className="font-bold text-gray-800">₦{unitPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-xl">
            <span className="font-semibold text-gray-700">Total Price:</span>
            <span className="font-bold text-gray-800">₦{(quantity * unitPrice).toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address here"
            className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:outline-none focus:border-purple-400 text-gray-700 placeholder-gray-300"
          />
        </div>

        <button className="w-full bg-purple-400 text-white py-4 rounded-full font-semibold text-lg hover:bg-purple-500 transition-all duration-300 shadow-md hover:shadow-lg">
          Gift a Smile Today!
        </button>
      </div>

      {/* Right Column - Image */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://res.cloudinary.com/da1snxdv9/image/upload/v1765116195/Rectangle_14_2_vzlbqx.png"
            alt="Children doing creative activities with colorful paper crafts"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -top-4 -right-4 text-purple-200 text-6xl opacity-50 pointer-events-none">
          ✿
        </div>
        <div className="absolute -bottom-4 -left-4 text-purple-200 text-5xl opacity-50 pointer-events-none">
          ★
        </div>
      </div>
    </div>
  );
}