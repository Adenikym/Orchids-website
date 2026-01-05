import React, { useState } from 'react';
import {initializePayment} from "../app/api";

interface DonationFormData {
  email: string;
  amount: string;
  displayAmount: string;
}

export default function DonationForm() {
  const [formData, setFormData] = useState<DonationFormData>({
    email: '',
    amount: '',
    displayAmount: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    amount: ''
  });

  const formatNumberWithCommas = (value: string) => {
    // Remove all non-digit characters except decimal point
    const numericValue = value.replace(/[^\d.]/g, '');
    
    // Split into integer and decimal parts
    const parts = numericValue.split('.');
    
    // Add commas to integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Rejoin with decimal point if it exists
    return parts.join('.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'amount') {
      // Remove commas to get the actual numeric value
      const numericValue = value.replace(/,/g, '');
      
      // Format with commas for display
      const formattedValue = formatNumberWithCommas(numericValue);
      
      setFormData(prev => ({ 
        ...prev, 
        amount: numericValue,
        displayAmount: formattedValue
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      amount: ''
    };
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const amount = parseFloat(formData.amount);
    if (!formData.amount.trim()) {
      newErrors.amount = 'Donation amount is required';
      isValid = false;
    } else if (isNaN(amount) || amount <= 0) {
      newErrors.amount = 'Please enter a valid amount';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const paymentData = {
        email: formData.email,
        type: 'donation',
        amount: parseFloat(formData.amount)
      };

      
       const response = await initializePayment(paymentData);
      
      // For demonstration purposes:
      console.log('Donation submitted:', paymentData);
      
    
       window.location.href = response.authorizationUrl;
      
      alert('Thank you for your donation! Redirecting to payment...');
      
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Payment initialization failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Make a Donation</h2>
          <p className="text-gray-600 text-base">
            Your gift and participation creates play sessions, emotional support, and hope for children facing illness
          </p>
        </div>

        <div className="space-y-6">
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
              disabled={isLoading}
              className={`w-full px-4 py-3 border-b-2 text-gray-700  ${
                errors.email ? 'border-red-400' : 'border-gray-300'
              } focus:border-purple-400 focus:outline-none bg-transparent transition-colors disabled:opacity-50`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Donation Amount */}
          <div className="space-y-2">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Donation Amount (₦)
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.displayAmount}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Enter amount"
              className={`w-full text-black px-4 py-3 border-b-2 ${
                errors.amount ? 'border-red-400' : 'border-gray-300'
              } focus:border-purple-400 focus:outline-none bg-transparent transition-colors disabled:opacity-50`}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full px-12 py-3 bg-purple-400 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-400 flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              'Donate Now'
            )}
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