"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const TopBrands: React.FC = () => {
  const brands = [
    '/image 15.png',
    '/image 16.png',
    '/image 17.png',
    '/image 18.png',
    '/image 19.png',
    '/image 20.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % brands.length
      );
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate the visible logos (centered around current index)
  const getVisibleLogos = () => {
    const visibleCount = 5; // Number of logos to show at once
    const start = currentIndex;
    const visibleLogos = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (start + i) % brands.length;
      visibleLogos.push(brands[index]);
    }

    return visibleLogos;
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Top Brands of Hearing Aids
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Discover the leading hearing aid brands trusted by professionals worldwide, 
          offering cutting-edge technology and superior sound quality.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center space-x-4 sm:space-x-8 transition-all duration-700 ease-in-out">
          {getVisibleLogos().map((brandIcon, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 transform transition-all duration-700 ease-in-out"
              style={{
                opacity: index === 2 ? 1 : 0.5,
                scale: index === 2 ? '1.0 sm:1.1' : '0.8 sm:0.9'
              }}
            >
              <div className="w-24 h-24 sm:w-48 sm:h-48 flex items-center justify-center">
                <Image 
                  src={brandIcon} 
                  alt={`Brand ${index + 1}`} 
                  width={120} 
                  height={120} 
                  className="object-contain hover:scale-110 transition-all duration-300 max-w-full max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-6 sm:mt-8">
        <button className="bg-green-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-green-600 transition-all duration-300">
          Book Your Appointment
        </button>
      </div>
    </div>
  );
};

export default TopBrands;
