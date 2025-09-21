"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HearingBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center">
      <Image 
        src="/bg2.png" 
        alt="Background" 
        fill 
        className="absolute inset-0 object-fill z-0" 
        priority
      />
      <div className="container mx-auto px-4 relative z-20 text-white text-center">
        <h1 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-3 sm:mb-4 md:mb-6 leading-tight max-w-4xl mx-auto px-2">
          Book an Appoinment Online
        </h1>
        <p className="text-[16px] sm:text-[16px] mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto text-gray-200 px-4 sm:px-0 font-semibold">
        Fill out our simple appointment form to book a free hearing test or consultation at your nearest YardHealth clinic.
        </p>
        <div className="flex justify-center space-x-4 px-4">
          <Link 
            href="/audiologists" 
            className="bg-white text-black px-6 py-3 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-sm sm:text-base w-full sm:w-auto"
          >
            Book Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HearingBanner;
