 "use client";

import React from 'react';
import Image from 'next/image';

const Journey: React.FC = () => {
  return (
    <div className="journey-container max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <h2 className="font-bold text-center mb-12 sm:mb-16 text-gray-800 leading-tight text-3xl sm:text-4xl md:text-5xl">
        Your Journey to Better Hearing
      </h2>

      {/* Mobile Layout - Image and text together */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {/* Step 1: Book a Free Hearing Test */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-4"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc3.png" 
                alt="Book a Free Hearing Test" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
            <div className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 shadow-md" style={{ backgroundColor: '#474FB8' }}>1</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Book a Free Hearing Test</h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">Quick and simple online booking</p>
          </div>

          {/* Step 2: Get a Professional Evaluation */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-4"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc2.png" 
                alt="Get a Professional Evaluation" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
            <div className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 shadow-md" style={{ backgroundColor: '#474FB8' }}>2</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Get a Professional Evaluation</h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">Comprehensive audiological tests</p>
          </div>

          {/* Step 3: Try Before You Buy */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-4"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc1.png" 
                alt="Try Before You Buy" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
            <div className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 shadow-md" style={{ backgroundColor: '#474FB8' }}>3</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Try Before You Buy</h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">Experience hearing aids in real-life situations</p>
          </div>

          {/* Step 4: Personalized Fitting & Support */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-4"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc5.png" 
                alt="Personalized Fitting & Support" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
            <div className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 shadow-md" style={{ backgroundColor: '#474FB8' }}>4</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Personalized Fitting & Support</h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">Ongoing care and adjustments</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original layout preserved */}
      <div className="hidden lg:block">
        {/* Photos Row */}
        <div className="journey-photos grid grid-cols-4 gap-8 sm:gap-10 relative mb-8">
          {/* Step 1: Book a Free Hearing Test */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-6"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc3.png" 
                alt="Book a Free Hearing Test" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
          </div>

          {/* Step 2: Get a Professional Evaluation */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-6"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc2.png" 
                alt="Get a Professional Evaluation" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
          </div>

          {/* Step 3: Try Before You Buy */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-6"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc1.png" 
                alt="Try Before You Buy" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
          </div>

          {/* Step 4: Personalized Fitting & Support */}
          <div className="journey-step text-center relative">
            <div 
              className="step-icon-container flex items-center justify-center mx-auto mb-6"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                padding: '20px',
                opacity: 1,
                gap: '10px'
              }}
            >
              <Image 
                src="/doc5.png" 
                alt="Personalized Fitting & Support" 
                width={80} 
                height={80}
                style={{ opacity: 1 }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Line with Numbered Circles - Desktop only */}
        <div className="relative mt-8 mb-8">
          <div className="flex justify-center items-center">
            <div 
              className="h-0.5 bg-black relative"
              style={{ width: '1236.46px', height: '2px' }}
            >
              {/* Numbered Circles */}
              <div className="absolute -top-2.5 left-27 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#474FB8' }}>1</div>
              <div className="absolute -top-2.5 left-100 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#474FB8' }}>2</div>
              <div className="absolute -top-2.5 left-172 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#474FB8' }}>3</div>
              <div className="absolute -top-2.5 right-28 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#474FB8' }}>4</div>
            </div>
          </div>
        </div>

        {/* Text Row - Desktop only */}
        <div className="journey-text grid grid-cols-4 gap-8 sm:gap-10 relative">
          {/* Step 1: Book a Free Hearing Test */}
          <div className="journey-step text-center relative">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Book a Free Hearing Test</h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">Quick and simple online booking</p>
          </div>

          {/* Step 2: Get a Professional Evaluation */}
          <div className="journey-step text-center relative">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 whitespace-nowrap">Get a Professional Evaluation</h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">Comprehensive audiological tests</p>
          </div>

          {/* Step 3: Try Before You Buy */}
          <div className="journey-step text-center relative">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Try Before You Buy</h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">Experience hearing aids in real-life situations</p>
          </div>

          {/* Step 4: Personalized Fitting & Support */}
          <div className="journey-step text-center relative">
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-800 whitespace-nowrap">Personalized Fitting & Support</h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">Ongoing care and adjustments</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12 sm:mt-16 px-6">
        <button className="text-white rounded-full text-base sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto transform hover:scale-105 px-[25px] py-[10px]" style={{ backgroundColor: '#4EBD44' }}>
          Schedule Your Free Test Today
        </button>
      </div>
    </div>
  );
};

export default Journey;