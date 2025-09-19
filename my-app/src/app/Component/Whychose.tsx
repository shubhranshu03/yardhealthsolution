"use client";

import React from 'react';
import Image from 'next/image';
import { FaStopwatch } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const WhyChose: React.FC = () => {
  const features = [
    { 
      image: '/card1.png', 
      title: '24/7', 
      description: 'Online Support'
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
      description: 'Hearing Aid Models'
    },
    { 
      image: '/card5.png', 
      title: '500+', 
      description: 'Satisfied Customers'
    },
    { 
      image: '/card6.png', 
      title: 'YardHealth', 
      description: 'Lifetime Hearing Care'
    }
  ];

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bg1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4 px-4" style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 600, lineHeight: 'clamp(32px, 6vw, 54px)' }}>
            Why Choose Yard Health Hearing Solutions
            <br />
            for Your Hearing Needs?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            return (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{
                  width: '100%',
                  maxWidth: '295px',
                  minHeight: '185px',
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
                    <p className="text-black text-left" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 700 }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 px-4">
          <button className="text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 w-full sm:w-auto" style={{ backgroundColor: '#4EBD44' }}>
            Schedule Your Free Test Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
