import React, { useState } from 'react';
import Image from 'next/image';
import {initializePayment} from "../app/api";



export default function ActivityKit() {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const unitPrice = 3000;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleSubmit = async () => {
    const paymentData = {
      activityKitId: 'e1b868ff-e7ba-4eb1-9cba-ba79d9f05dca',
      email,
      type: 'activity_kit',
       amount: quantity * unitPrice , 
      quantity
    };
    await initializePayment(paymentData).then((response) => {
      console.log(response);
      window.location.href = response.authorizationUrl;
    });

  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-purple-400 mb-6">OUR WORK</h1>
        <p className="text-gray-700 text-lg max-w-6xl leading-relaxed">
          At Orchids Pediatric Foundation, we believe that play is medicine. Through our programs, we bring emotional comfort, creativity, and color into the lives of hospitalized children—helping them heal not just physically, but emotionally and mentally too.
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
                  className="w-12 h-12 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-400 text-2xl flex items-center justify-center transition-colors"
                  aria-label="Decrease quantity"
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
                  aria-label="Increase quantity"
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address here"
                className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:outline-none focus:border-purple-400 text-gray-700 placeholder-gray-300"
              />
            </div>

            {/* CTA Button */}
            <button onClick={handleSubmit} className="w-full bg-white border-2 border-purple-300 text-purple-500 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-md">
              Gift a Smile Today!
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