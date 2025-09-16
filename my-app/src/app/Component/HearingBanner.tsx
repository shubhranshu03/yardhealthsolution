"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HearingBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center flex items-center">
      <Image 
        src="/bg2.png" 
        alt="Background" 
        fill 
        className="absolute inset-0 object-cover z-0" 
        priority
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="container mx-auto px-4 relative z-20 text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
          Don't Miss Out on Life's Best Sounds
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto text-gray-200 px-4 sm:px-0">
          Rediscover Our Hearing Solutions and Embrace Every Moment
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/locate-us" 
            className="text-white border border-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 text-sm sm:text-base"
          >
            Locate Clinic
          </Link>
          <Link 
            href="/audiologists" 
            className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
          >
            Find Audiologists
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HearingBanner;
