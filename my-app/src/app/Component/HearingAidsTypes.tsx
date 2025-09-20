"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HearingAidsTypes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const hearingAidTypes = [
    {
      image: '/image 4.png',
      name: 'Maya - HC',
      description: 'Compact and discreet hearing aid for everyday use'
    },
    {
      image: '/image 5.png',
      name: 'Resound One 5 ITE',
      description: 'In-the-ear solution with advanced sound processing'
    },
    {
      image: '/image 6.png',
      name: 'BTE Sigma Kit Motion CIC (ITC)',
      description: 'Behind-the-ear model with motion-sensing technology'
    },
    {
      image: '/image 7.png',
      name: 'Sigma Insio Ne (IIC)',
      description: 'Invisible in-canal hearing aid for maximum discretion'
    },
    {
      image: '/image 8.png',
      name: 'Sigma Active Pro (ITE)',
      description: 'Active lifestyle hearing aid with enhanced durability'
    },
    {
      image: '/n1.png',
      name: 'Sigma S',
      description: 'Sophisticated hearing solution with cutting-edge features'
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hearingAidTypes.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [hearingAidTypes.length]);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">Types of Hearing Aids</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto">
        {hearingAidTypes.map((aid, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center"
          >
            <div className="bg-blue-50 w-24 h-24 sm:w-45 sm:h-45 flex flex-col items-center justify-center mb-2 shadow-md overflow-hidden" style={{ border: '1px solid #5592FF', borderRadius: '50%' }}>
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                <Image 
                  src={aid.image} 
                  alt={aid.name} 
                  fill
                  sizes="(max-width: 768px) 64px, 96px"
                  className="object-contain p-1 sm:p-2"
                  onError={(e) => {
                    console.error(`Error loading image: ${aid.image}`, e);
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src = '/blacklogo.png'; // Fallback image
                    (e.target as HTMLImageElement).style.objectFit = 'contain';
                  }}
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold px-1 text-center leading-tight">{aid.name}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Bar Slider */}
      <div className="mt-6 sm:mt-8 flex justify-center px-4">
        <div className="flex space-x-1 sm:space-x-2">
          {[0, 1, 2].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === (currentSlide % 3)
                  ? 'bg-green-500 shadow-lg' 
                  : 'bg-gray-300'
              }`}
              style={{
                width: '50px',
                height: '4px',
                borderRadius: '41px',
                transform: 'rotate(0deg)',
                opacity: 1,
                boxShadow: index === (currentSlide % 3) ? '0 1px 4px rgba(34, 197, 94, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HearingAidsTypes;
