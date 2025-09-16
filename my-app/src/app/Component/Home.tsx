"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Home: React.FC = () => {
  const backgroundImages = [
    '/home1.png',
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
      className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImages[currentBackgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      {/* Background Image for Mobile Responsiveness */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src={backgroundImages[currentBackgroundIndex]} 
          alt="Background" 
          fill
          priority
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-40"
          style={{
            filter: 'brightness(0.6)'
          }}
        />
      </div>
      
      {/* Rest of the component remains the same */}
      <nav className="absolute top-0 left-0 right-0 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Image 
                src="/Logo (3).png" 
                alt="Yard Health Logo" 
                width={220} 
                height={220} 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
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

            {/* Navigation Links */}
            <div className={`
              fixed inset-0 bg-black bg-opacity-80 z-50 transform 
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
              md:translate-x-0 md:relative md:bg-transparent md:block md:static
              transition-transform duration-300 ease-in-out
            `}>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-end h-full space-y-6 md:space-y-0 md:space-x-8">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="md:hidden absolute top-4 right-4 text-white text-2xl"
                >
                  ×
                </button>
                <a href="#" className="text-white hover:text-green-400 text-base md:text-sm font-medium">About Us</a>
                <a href="#" className="text-white hover:text-green-400 text-base md:text-sm font-medium">Hearing Aid</a>
                <a href="#" className="text-white hover:text-green-400 text-base md:text-sm font-medium">Our Brands</a>
                <a href="#" className="text-white hover:text-green-400 text-base md:text-sm font-medium">Franchise</a>
                <a href="#" className="text-white hover:text-green-400 text-base md:text-sm font-medium">Contact Us</a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center">
                <CiLocationOn className="mr-2" />
                Find A Clinic
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Main Content - Left Aligned */}
            <div className="text-white relative z-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Rediscover Clear Hearing,<br />
                <span className="text-green-400">Rediscover Life.</span>
              </h1>
              
              <p className="text-sm sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg">
                Personalized hearing care, expert audiologists, and advanced technology—all 
                closer than you think.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center">
                  <CiLocationOn className="mr-2" />
                  Find A Clinic Near You
                </button>
                <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300">
                  Book Free Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;