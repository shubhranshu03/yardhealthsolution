"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Home: React.FC = () => {
  const backgroundImages = [
    '/k1.jpg',
    '/home2.png',
    '/home3.png',
    '/home4.png'
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pb-16 overflow-hidden" 
      style={{
        backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      {/* Responsive Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src={backgroundImages[currentBackgroundIndex]} 
          alt="Background" 
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo - Responsive Sizing */}
            <div className="flex items-center">
              <Image 
                src="/logo1 (2).png" 
                alt="Yard Health Logo" 
                width={150} 
                height={150} 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <FaBars className="text-2xl" />
              </button>
            </div>

            {/* Navigation Links - Responsive Mobile Menu */}
            <div className={`
              fixed inset-0 bg-black bg-opacity-90 z-50 transform 
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
              md:translate-x-0 md:relative md:bg-transparent md:block
              transition-transform duration-300 ease-in-out
            `}>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-end h-full space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8 p-4 md:p-0">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="md:hidden absolute top-4 right-4 text-white text-3xl"
                >
                  ×
                </button>
                {['About Us', 'Hearing Aid', 'Our Brands', 'Franchise', 'Contact Us'].map((item, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-white hover:text-green-400 text-lg md:text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Responsive */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <button className="bg-transparent border-2 border-white text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center">
                <CiLocationOn className="mr-1 lg:mr-2" />
                Find A Clinic
              </button>
              <button className="bg-green-500 text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-green-600">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Responsive */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="text-white relative z-20">
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-bold leading-tight mb-3 sm:mb-4">
                Rediscover Clear Hearing,<br />
                <span className="text-white">Rediscover Life.</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-[16px] leading-relaxed text-gray-200 mb-4 max-w-full md:max-w-[606px]">
                Personalized hearing care, expert audiologists, and advanced technology—all closer than you think.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-gray-800 transition-all duration-300">
                  Find A Clinic Near You
                </button>
                <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-green-600 transition-all duration-300">
                  Book Free Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators - Responsive */}
      <div className="absolute bottom-10 sm:bottom-16 left-0 right-0 z-20">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBackgroundIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ${
                currentBackgroundIndex === index
                  ? 'bg-green-500'
                  : 'bg-white/80'
              }`}
              style={{
                width: '50px',
                height: '4px',
                borderRadius: '41px',
                transform: 'rotate(0deg)',
                opacity: 1
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;