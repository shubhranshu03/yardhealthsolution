   "use client";

import React from 'react';
import Image from 'next/image';

const WhyChose: React.FC = () => {
  const features = [
    { 
      image: '/card1.png', 
      title: '24/7', 
      description: 'Ongoing Support'
    },
    { 
      image: '/card2.png', 
      title: '50+', 
      description: 'Expert Audiologists'
    },
    { 
      image: '/card3.png', 
      title: '8+', 
      description: 'Years of Experience'
    },
    { 
      image: '/card4.png', 
      title: '300+', 
      description: 'Hearing Aids Models'
    },
    { 
      image: '/card5.png', 
      title: '500+', 
      description: 'Satisfied Customers'
    },
    { 
      image: '/card6.png', 
      title: 'YardHealth Trust', 
      description: 'Lifetime Hearing Care'
    }
  ];

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-8 sm:py-12 lg:py-16"
      style={{
        backgroundImage: `url('/bg1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-white mb-4 px-2 sm:px-4" style={{ 
            fontSize: 'clamp(18px, 5vw, 40px)', 
            fontWeight: 600, 
            lineHeight: 'clamp(24px, 6vw, 54px)' 
          }}>
            Why Choose Yard Health Hearing Solutions
            <br />
            for Your Hearing Needs?
          </h2>
        </div>
        
        {/* Mobile Layout - Single Column with Reduced Spacing */}
        <div className="block sm:hidden">
          <div className="space-y-4 flex flex-col items-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-[280px]"
                style={{
                  minHeight: '120px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  borderRadius: '25px',
                  padding: '16px'
                }}
              >
                <div className="flex flex-col items-start">
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '30px',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      alignSelf: 'flex-start',
                      marginLeft: '-2px'
                    }}
                  >
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      width={48}
                      height={48}
                      style={{
                        borderRadius: '24px'
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 text-left">{feature.title}</h3>
                    <p className="text-black text-left text-sm font-bold">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout - 2 Columns */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-3 place-items-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-[260px]"
                style={{
                  minHeight: '130px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  borderRadius: '28px',
                  padding: '18px'
                }}
              >
                <div className="flex flex-col items-start">
                  <div
                    style={{
                      width: '66px',
                      height: '66px',
                      borderRadius: '33px',
                      padding: '7px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '15px',
                      alignSelf: 'flex-start',
                      marginLeft: '-3px'
                    }}
                  >
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      width={52}
                      height={52}
                      style={{
                        borderRadius: '26px'
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-left">{feature.title}</h3>
                    <p className="text-black text-left text-sm font-bold">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - 3 Columns (Original) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-4 place-items-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white bg-opacity-90 shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-[295px] ${index === 0 || index === 3 ? 'justify-self-end' : index === 2 || index === 5 ? 'justify-self-start' : ''}`}
                style={{
                  minHeight: '140px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  borderRadius: '30px',
                  padding: '20px'
                }}
              >
                <div className="flex flex-col items-start">
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '36px',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '19px',
                      alignSelf: 'flex-start',
                      marginLeft: '-5px'
                    }}
                  >
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      width={56}
                      height={56}
                      style={{
                        borderRadius: '28px'
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-left">{feature.title}</h3>
                    <p className="text-black text-left" style={{ 
                      fontSize: 'clamp(14px, 3vw, 16px)', 
                      fontWeight: 700 
                    }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 px-2 sm:px-4">
          <button className="text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base" style={{ backgroundColor: '#4EBD44' }}>
            Schedule Your Free Test Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;