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
      name: 'BTE Signia Kit Motion C&G X (BTE)',
      description: 'Behind-the-ear model with motion-sensing technology',
      customStyle: {
        width: '250px'
      }
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

  // Duplicate hearing aid types for infinite loop effect
  const duplicatedHearingAidTypes = [...hearingAidTypes, ...hearingAidTypes];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">Types of Hearing Aids</h2>
      
      <div className="overflow-hidden">
        <div 
          className="flex items-center gap-4 sm:gap-6"
          style={{
            animation: 'scroll 20s linear infinite',
            width: 'max-content'
          }}
        >
          {duplicatedHearingAidTypes.map((aid, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center flex-shrink-0 px-2"
              style={{
                width: aid.customStyle?.width ?? 'clamp(180px, 25vw, 250px)',
                opacity: 1
              }}
            >
              <div 
                className="bg-blue-50 w-32 h-32 sm:w-48 sm:h-48 flex flex-col items-center justify-center mb-3 shadow-md overflow-hidden mobile-hearing-aid-container" 
                style={{ 
                  border: '1px solid #5592FF', 
                  borderRadius: '50%',
                  position: 'relative'
                }}
              >
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center justify-start -top-6">
                  <Image 
                    src={aid.image} 
                    alt={aid.name} 
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-contain p-1 sm:p-2"
                    onError={(e) => {
                      console.error(`Error loading image: ${aid.image}`, e);
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = '/blacklogo.png'; // Fallback image
                      (e.target as HTMLImageElement).style.objectFit = 'contain';
                    }}
                  />
                </div>
                <div 
                  className="absolute bottom-6 left-0 right-0 text-center text-[12px] font-semibold mobile-hearing-aid-name"
                >
                  {aid.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar Slider */}
      <div className="mt-6 sm:mt-8 flex justify-center px-4">
        <div className="flex space-x-1 sm:space-x-2">
          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === (currentSlide % 4)
                  ? 'bg-green-500 shadow-lg' 
                  : 'bg-gray-300'
              }`}
              style={{
                width: '50px',
                height: '4px',
                borderRadius: '41px',
                transform: 'rotate(0deg)',
                opacity: 1,
                boxShadow: index === (currentSlide % 4) ? '0 1px 4px rgba(34, 197, 94, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            />
          ))}
        </div>
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

        @media (max-width: 640px) {
          .mobile-hearing-aid-container {
            width: 120px !important;
            height: 120px !important;
            margin-bottom: 0.5rem !important;
          }
          
          .mobile-hearing-aid-image {
            width: 50px !important;
            height: 50px !important;
            position: absolute !important;
            top: 15px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          
          .mobile-hearing-aid-name {
            bottom: 15px !important;
            font-size: 10px !important;
            left: 0 !important;
            right: 0 !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HearingAidsTypes;
