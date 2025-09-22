"use client";

import Image from 'next/image';
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '/frame5.png',
      title: 'BT Connectivity',
      description: 'Connects with Bluetooth for easy listening on your favorite devices.'
    },
    {
      icon: '/frame3.png',
      title: 'Rechargeable',
      description: 'Easy to recharge for long-lasting use without changing batteries.'
    },
    {
      icon: '/frame2.png',
      title: 'Voice Clarity',
      description: 'Voice clarity enhances conversations for a natural and clear hearing experience.'
    },
    {
      icon: '/frame1.png',
      title: 'Noise Cancellation',
      description: 'Reduces background noise, letting you focus on important sounds only.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 max-w-7xl">
      <div className="mb-6 sm:mb-8 md:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-3 sm:mb-4 md:mb-6 leading-tight sm:leading-[54px] tracking-normal text-center">
          Hear the Difference with YardHealth Hearing<br />
          Solutions Advanced Technology
        </h2>
        <p className="text-sm sm:text-base md:text-[16px] font-semibold leading-6 sm:leading-7 md:leading-[27px] tracking-normal max-w-6xl mx-auto text-center px-2 sm:px-4" style={{ color: '#909090' }}>
          Insono Hearing Solutions delivers advanced noise reduction, rechargeable convenience, 
          and Bluetooth connectivity, offering clear sound and comfort for your active lifestyle.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 transition-all duration-300"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
              <Image 
                src={feature.icon} 
                alt={feature.title} 
                width={80} 
                height={80} 
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{feature.title}</h3>
            <p className="text-xs sm:text-sm md:text-[14px] font-semibold text-black leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
