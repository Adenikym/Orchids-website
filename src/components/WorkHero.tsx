import React, { useState } from 'react';
import Image from 'next/image';
import {initializePayment} from "../app/api";



export default function ActivityKit() {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '' });
  const unitPrice = 3000;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleSubmit = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrors({ email: 'Email address is required' });
      return;
    }
    if (!emailRegex.test(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    
    setErrors({ email: '' });
    setIsLoading(true);

    try {
      const paymentData = {
        activityKitId: 'f2b3360b-5c26-4c7f-8ed6-83aca62edacf',
        email,
        type: 'activity_kit',
        amount: quantity * unitPrice,
        quantity
      };
      
      const response = await initializePayment(paymentData);
      console.log(response);
      window.location.href = response.authorizationUrl;
    } catch (error) {
      console.error('Payment initialization failed:', error);
      setErrors({ email: 'Payment initialization failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-purple-400 mb-6">OUR WORK</h1>
        <p className="text-gray-700 text-lg max-w-6xl leading-relaxed">
          At Orchids Pediatric Foundation, we believe that play is medicine. Through our programs, we bring emotional comfort, creativity, and color into the lives of hospitalized children, helping them heal not just physically, but emotionally and mentally too.
        </p>
      </div>

      {/* Activity Kit Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Activity Kit Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 px-6 py-2 rounded-full font-semibold">
              <span className="text-2xl">✦</span>
              <span>ACTIVITY KIT</span>
              <span className="text-2xl">✦</span>
            </div>

            {/* Main Description */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Each <span className="text-purple-400">Kit</span> contains books, crayons, and creative tools for hospitalized children
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your gift helps turn hospital stays into moments of joy and imagination. When you give an activity Kit, you help create a lasting impact, supporting mental well-being, inspiring courage, and making recovery a little brighter.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDecrement}
                  className="w-12 h-12 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-400 text-2xl flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Decrease quantity"
                  disabled={isLoading}
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                  className="w-24 h-12 text-center text-xl text-black font-semibold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  min="1"
                  disabled={isLoading}
                />
                <button
                  onClick={handleIncrement}
                  className="w-12 h-12 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-400 text-2xl flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Increase quantity"
                  disabled={isLoading}
                >
                  +
                </button>
                <span className="text-purple-400 text-3xl ml-2">✿</span>
              </div>
            </div>

            {/* Pricing */}
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

            {/* Email Input */}
            <div className="space-y-3">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ email: '' });
                }}
                placeholder="Enter your email address here"
                className={`w-full px-6 py-4 rounded-full border-2 ${
                  errors.email ? 'border-red-400' : 'border-purple-200'
                } focus:outline-none focus:border-purple-400 text-gray-700 placeholder-gray-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm ml-4">{errors.email}</p>
              )}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleSubmit} 
              disabled={isLoading}
              className="w-full bg-white border-2 border-purple-300 text-purple-500 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                'Gift a Smile Today!'
              )}
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                width="618"
                height="678"
                src="https://res.cloudinary.com/da1snxdv9/image/upload/v1765116195/Rectangle_14_2_vzlbqx.png"
                alt="Children doing creative activities with colorful paper crafts"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 text-purple-200 text-8xl opacity-50 pointer-events-none">
              ✿
            </div>
            <div className="absolute -bottom-6 -left-6 text-purple-200 text-6xl opacity-50 pointer-events-none">
              ★
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Star */}
      <div className="absolute top-1/2 left-12 text-yellow-300 text-4xl opacity-70 pointer-events-none">
        ★
      </div>
    </div>
  );
}