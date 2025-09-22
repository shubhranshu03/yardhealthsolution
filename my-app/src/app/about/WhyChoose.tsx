import Image from 'next/image';
import React from 'react';

const WhyChoose: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-[40px] font-bold mb-8 sm:mb-10 lg:mb-12 px-2">
        Why Choose YardHealth Hearing Solution?
      </h2>

      {/* Main Content: Icons and Image */}
      <div className="flex flex-col lg:flex-row items-center mb-8 sm:mb-10 lg:mb-12">
        {/* Left Side: Icons */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 mb-8 lg:mb-0 lg:mr-4 lg:ml-16">
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-4">
            <Image 
              src="/icon1.png"
              alt="Trusted by thousands"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-4 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                Trusted by <span className="text-[#909090]">thousands of families</span>
              </h3>
              <p className="text-[#909090] text-sm sm:text-lg lg:text-[20px]">across India</p>
            </div>
          </div>
                     
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-4">
            <Image 
              src="/icon2.png"
              alt="4.9 ratings"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-4 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">
                4.9★ ratings and exceptional
              </h3>
              <p className="text-black text-sm sm:text-lg lg:text-[20px] font-bold">client satisfaction</p>
            </div>
          </div>
                     
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-4">
            <Image 
              src="/icon3.png"
              alt="Comprehensive range"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-4 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] text-black leading-tight">Comprehensive range of hearing aids</h3>
              <p className="text-[#909090] text-sm sm:text-lg lg:text-[20px]">tailored for all types of hearing loss</p>
            </div>
          </div>
                     
          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-4">
            <Image 
              src="/icon4.png"
              alt="Focused on care"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="pl-2 sm:pl-4 flex-1">
              <h3 className="font-bold text-sm sm:text-lg lg:text-[20px] leading-tight">
                <span className="text-[#909090]">Focused on </span>
                <span className="text-black">care, comfort, and</span>
              </h3>
              <p className="text-black text-sm sm:text-lg lg:text-[20px] font-bold">cutting-edge technology</p>
            </div>
          </div>
        </div>
                 
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:-ml-8">
          <Image 
            src="/aboutus.png"
            alt="YardHealth Hearing Solution"
            width={440}
            height={461}
            className="object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px]"
          />
        </div>
      </div>
              
      {/* Vision and Mission Section */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 lg:ml-16 px-2 sm:px-0">
        <div className="w-full lg:w-1/2 border border-black rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-4 sm:p-5 lg:p-6 relative mx-auto" style={{
          maxWidth: '529px',
          width: '100%',
          minHeight: '200px',
          height: 'auto'
        }}>
          <div className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-5 lg:left-6">
            <Image 
              src="/vision.png"
              alt="Our Vision"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </div>
          <div className="pt-12 sm:pt-14 lg:pt-16">
            <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-sm sm:text-lg lg:text-[20px] leading-relaxed text-black">
              To become India&apos;s most reliable hearing care partner by combining technology, compassion, and expertise—so that everyone can experience the joy of hearing life&apos;s moments clearly.
            </p>
          </div>
        </div>
                 
        <div className="w-full lg:w-1/2 border border-black rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-4 sm:p-5 lg:p-6 relative mx-auto" style={{
          maxWidth: '529px',
          width: '100%',
          minHeight: '200px',
          height: 'auto'
        }}>
          <div className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-5 lg:left-6">
            <Image 
              src="/mission1.png"
              alt="Our Mission"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </div>
          <div className="pt-12 sm:pt-14 lg:pt-16">
            <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-lg lg:text-[20px] leading-relaxed text-black">
              To make better hearing accessible, affordable, and personalized for every individual in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;