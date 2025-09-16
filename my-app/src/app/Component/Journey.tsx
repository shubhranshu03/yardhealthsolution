"use client";

import React from 'react';
import Image from 'next/image';

const Journey: React.FC = () => {
  return (
    <div className="journey-container max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gray-800 leading-tight">
        Your Journey to Better Hearing
      </h2>
      <div className="journey-steps grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
        {/* Step 1: Book a Free Hearing Test */}
        <div className="journey-step text-center relative">
          <div className="step-icon-container bg-[#E6E6FA] rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/doc3.png" 
              alt="Book a Free Hearing Test" 
              width={48} 
              height={48} 
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
          </div>
          <div className="step-number absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-base">1</div>
          <h3 className="text-sm sm:text-lg font-semibold mt-2 sm:mt-4">Book a Free Hearing Test</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Quick and simple online booking</p>
        </div>

        {/* Step 2: Get a Professional Evaluation */}
        <div className="journey-step text-center relative">
          <div className="step-icon-container bg-[#FFE4E1] rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/doc2.png" 
              alt="Get a Professional Evaluation" 
              width={48} 
              height={48} 
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
          </div>
          <div className="step-number absolute top-0 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-base">2</div>
          <h3 className="text-sm sm:text-lg font-semibold mt-2 sm:mt-4">Get a Professional Evaluation</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Comprehensive audiological tests</p>
        </div>

        {/* Step 3: Try Before You Buy */}
        <div className="journey-step text-center relative">
          <div className="step-icon-container bg-[#E0F2F1] rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/doc1.png" 
              alt="Try Before You Buy" 
              width={48} 
              height={48} 
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
          </div>
          <div className="step-number absolute top-0 left-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-base">3</div>
          <h3 className="text-sm sm:text-lg font-semibold mt-2 sm:mt-4">Try Before You Buy</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Experience hearing aids in real-life situations</p>
        </div>

        {/* Step 4: Personalized Fitting & Support */}
        <div className="journey-step text-center relative">
          <div className="step-icon-container bg-[#FFE0F0] rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/doc5.png" 
              alt="Personalized Fitting & Support" 
              width={48} 
              height={48} 
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
          </div>
          <div className="step-number absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-base">4</div>
          <h3 className="text-sm sm:text-lg font-semibold mt-2 sm:mt-4">Personalized Fitting & Support</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Ongoing care and adjustments</p>
        </div>

        {/* Connecting Line - Hidden on mobile */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-green-500 -z-10"></div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8 sm:mt-12">
        <button className="bg-[#2ecc71] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#27ae60] transition-colors shadow-md">
          Schedule Your Free Test Today
        </button>
      </div>
    </div>
  );
};

export default Journey;
