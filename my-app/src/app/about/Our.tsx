import Image from 'next/image';
import React from 'react';

const Our = () => {
  return (
    <div className="relative w-[1350px] max-w-full mx-auto h-[365px] overflow-hidden mt-9 md:w-[1350px]">
      {/* Background Image */}
      <div className="absolute inset-[+10px_-6px_-50px_-10px] z-0">
        <Image 
          src="/l1.jpg" 
          alt="Our Team Background" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white max-w-6xl px-4 w-full">
          <h2 className="text-3xl font-bold mb-4 text-shadow-lg md:text-3xl sm:text-2xl">Our Team</h2>
          <p className="text-base mb-6 text-shadow-lg md:text-base sm:text-sm">
            Our network of certified audiologists and hearing care professionals is dedicated to guiding every individual through their hearing journey—from free hearing tests to fitting the most suitable device and providing ongoing support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Our;
