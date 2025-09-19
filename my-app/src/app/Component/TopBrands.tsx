"use client";

import Image from 'next/image';
import React from 'react';

const TopBrands: React.FC = () => {
  const brands = [
    '/image 15.png',
    '/image 16.png',
    '/image 17.png',
    '/image 18.png',
    '/image 19.png',
    '/image 20.png'
  ];

  // Duplicate brands for infinite loop effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 md:py-12">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(24px, 5vw, 40px)' }}>
          Top Brands of Hearing Aids
        </h2>
      </div>
      <div className="overflow-hidden">
        <div 
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
          style={{
            animation: 'scroll 20s linear infinite',
            width: 'max-content'
          }}
        >
          {duplicatedBrands.map((brandIcon, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{
                width: 'clamp(150px, 25vw, 272px)',
                height: 'clamp(50px, 8vw, 80px)',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
              }}
            >
              <Image 
                src={brandIcon} 
                alt={`Brand ${index + 1}`} 
                width={200} 
                height={60} 
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4 sm:mt-6 md:mt-8">
        <button className="text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300" style={{ backgroundColor: '#4EBD44' }}>
          Book Your Appointment
        </button>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default TopBrands;
