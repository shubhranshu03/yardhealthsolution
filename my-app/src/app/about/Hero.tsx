import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-white py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-2">
          <button 
            className="w-[82px] h-[27px] rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(270deg, #FFFFFF 0%, #4EBD44 100%)',
              paddingRight: '14px',
              paddingLeft: '14px'
            }}
          >
            <span className="text-[12px] font-medium">About Us</span>
          </button>
        </div>
        <h1 className="text-[40px] font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
          YardHealth Hearing Solution –Trusted<br />
          Hearing Aid Clinics in India
        </h1>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-white text-black px-6 py-3 rounded-full border-2 border-black hover:bg-gray-100 transition-colors">
            Find a Clinic Near You
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            Book Free Appointment
          </button>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative mt-8" style={{height: '150px'}}>
          <div className="absolute left-[-170px] top-0 w-[240px] h-[170px] rounded-[30px] overflow-hidden">
            <Image 
              src="/hero1.png" 
              alt="Hero Image 1" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="absolute left-[100px] top-[55px] w-[380px] h-[230px] rounded-[30px] overflow-hidden">
            <Image 
              src="/hero2.png" 
              alt="Hero Image 2" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="absolute left-[510px] top-[-4px] w-[350px] h-[220px] rounded-[30px] overflow-hidden">
            <Image 
              src="/hero3.png" 
              alt="Hero Image 3" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="absolute left-[900px] top-[80px] w-[284px] h-[200px] rounded-[30px] overflow-hidden">
            <Image 
              src="/hero4.png" 
              alt="Hero Image 4" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          <div className="relative w-full aspect-square rounded-[30px] overflow-hidden">
            <Image 
              src="/hero1.png" 
              alt="Hero Image 1" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="relative w-full aspect-square rounded-[30px] overflow-hidden">
            <Image 
              src="/hero2.png" 
              alt="Hero Image 2" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="relative w-full aspect-square rounded-[30px] overflow-hidden">
            <Image 
              src="/hero3.png" 
              alt="Hero Image 3" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="relative w-full aspect-square rounded-[30px] overflow-hidden">
            <Image 
              src="/hero4.png" 
              alt="Hero Image 4" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
