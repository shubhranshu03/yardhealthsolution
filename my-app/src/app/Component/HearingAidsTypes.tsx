"use client";

import React from 'react';
import Image from 'next/image';

const HearingAidsTypes: React.FC = () => {
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
      image: '/image 9.png',
      name: 'Sigma S',
      description: 'Sophisticated hearing solution with cutting-edge features'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">Types of Hearing Aids</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto">
        {hearingAidTypes.map((aid, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center"
          >
            <div className="bg-blue-50 rounded-full w-24 h-24 sm:w-40 sm:h-40 flex items-center justify-center mb-2 shadow-md overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={aid.image} 
                  alt={aid.name} 
                  fill
                  sizes="(max-width: 768px) 96px, 160px"
                  className="object-contain p-2 sm:p-4"
                />
              </div>
            </div>
            <h3 className="text-xs sm:text-sm font-semibold mt-2 px-2 truncate max-w-full">{aid.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HearingAidsTypes;
