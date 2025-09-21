import Image from 'next/image';
import React from 'react';

const AboutFeatures = () => {
  const features = [
    {
      icon: '/about1.png',
      title: 'Accessibility',
      description: 'Clinics and services across major Indian cities to ensure hearing care is within everyone\'s reach.'
    },
    {
      icon: '/about3.png',
      title: 'Advanced Technology',
      description: 'From rechargeable and Bluetooth-enabled devices to AI-powered noise cancellation and tinnitus relief solutions.'
    },
    {
      icon: '/about2.png',
      title: 'Affordability',
      description: '0% EMI options, trade-in programs, and price ranges starting at ₹19,990.'
    },
    {
      icon: '/about4.png',
      title: 'Aftercare & Support',
      description: 'Lifetime service, regular check-ups, and warranties for complete peace of mind.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-left text-[24px] sm:text-[32px] md:text-[40px] font-semibold mb-6">
        About Us – YardHealth Hearing Solution
      </h2>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[35px] text-[#909090] mb-12">
        At <span className="text-black text-[16px] sm:text-[18px] md:text-[20px]">YardHealth Hearing Solution</span>, we believe that hearing well is the first step toward living well. Our mission is to empower people with hearing loss by providing <span className="text-black text-[16px] sm:text-[18px] md:text-[20px]">world-class hearing aids, advanced diagnostic services, and personalized care</span> that restore confidence and improve quality of life.
        <br />
        With a strong presence across India, YardHealth is becoming one of the most trusted names in hearing care. We partner with <span className="text-black">global leaders in hearing technology</span>—<span className="text-black text-[16px] sm:text-[18px] md:text-[20px] font-bold">Signia, Phonak, Resound, Widex, Starkey, and Oticon</span>—to ensure our clients experience only the best in sound clarity and comfort.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center"
          >
            <div className="mb-2 sm:mb-4 w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 flex items-center justify-center">
              <Image 
                src={feature.icon} 
                alt={feature.title} 
                width={80} 
                height={80} 
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-black text-center max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
