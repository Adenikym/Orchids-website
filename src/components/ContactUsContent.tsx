import React, { useState } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactUsContent() {
  const [formData, setFormData] = useState<ContactFormData>({
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
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div>
      {/* Contact Form */}
      <div className="space-y-6">
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
            className="w-full px-12 py-3 bg-purple-400 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </div>

        {/* Decorative Star */}
        <div className="flex justify-center mt-8">
          <div className="text-purple-300 text-6xl opacity-60">✦</div>
        </div>
      </div>
    </div>
  );
}