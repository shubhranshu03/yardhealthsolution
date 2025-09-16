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
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Hear the Difference with 
          <span className="block sm:inline"> </span>
          YardHealth Hearing Solutions Advanced Technology
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Insono Hearing Solutions delivers advanced noise reduction, rechargeable convenience, 
          and Bluetooth connectivity, offering clear sound and comfort for your active lifestyle.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center">
              <Image 
                src={feature.icon} 
                alt={feature.title} 
                width={80} 
                height={80} 
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
