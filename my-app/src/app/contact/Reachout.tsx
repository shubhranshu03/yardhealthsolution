import Image from 'next/image';
import React from 'react';

const WhyChoose: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-[40px] font-bold mb-8 sm:mb-10 lg:mb-12 px-2">
        Why Reach Out to YardHealth?
      </h2>

      {/* Main Content: Image and Icons - Flipped Layout */}
      <div className="flex flex-col lg:flex-row items-center mb-8 sm:mb-10 lg:mb-12 gap-6 lg:gap-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:ml-16">
          <Image 
            src="/new.jpg"
            alt="YardHealth Hearing Solution"
            width={439}
            height={460}
            className="object-cover rounded-[40px] w-[300px] h-[315px] sm:w-[380px] sm:h-[400px] lg:w-[439px] lg:h-[460px] opacity-100"
            style={{
              transform: 'rotate(0deg)'
            }}
          />
        </div>

        {/* Right Side: Icons */}
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-5 lg:mr-16">
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-3">
            <Image 
              src="/1.png"
              alt="Free hearing tests"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-3 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                Free hearing tests by 
              </h3>
              <p className="text-black text-sm sm:text-lg lg:text-[20px] font-bold">certified audiologists</p>
            </div>
          </div>
                     
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-3">
            <Image 
              src="/2.png"
              alt="Trial of top hearing aid brands"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-3 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                Trial of world's top hearing aid 
              </h3>
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                brands – Signia, Phonak, ReSound
              </h3>
              <p className="text-black text-sm sm:text-lg lg:text-[20px] font-bold">Widex, Starkey & Oticon</p>
            </div>
          </div>
                     
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-3">
            <Image 
              src="/3.png"
              alt="Transparent hearing aid prices"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-3 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                Transparent hearing aid 
              </h3>
              <p className="text-black text-sm sm:text-lg lg:text-[20px] font-bold">prices with 0% EMI</p>
            </div>
          </div>
                     
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-3">
            <Image 
              src="/4.png"
              alt="Nationwide aftercare and support"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-3 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                Nationwide aftercare & support
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;