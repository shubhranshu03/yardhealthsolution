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
      icon: FaStopwatch, 
      title: '24/7', 
      description: 'Online Support',
      color: 'text-blue-500' 
    },
    { 
      icon: FaStethoscope, 
      title: '50+', 
      description: 'Expert Audiologists',
      color: 'text-red-500' 
    },
    { 
      icon: FaTrophy, 
      title: '8+', 
      description: 'Years of Experience',
      color: 'text-red-600' 
    },
    { 
      icon: FaHeadSideVirus, 
      title: '300+', 
      description: 'Hearing Aid Models',
      color: 'text-yellow-500' 
    },
    { 
      icon: FaSmile, 
      title: '500+', 
      description: 'Satisfied Customers',
      color: 'text-black' 
    },
    { 
      icon: FaCheckCircle, 
      title: 'YardHealth', 
      description: 'Lifetime Hearing Care',
      color: 'text-green-500' 
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Why Choose Yard Health 
            <br />
            Hearing Solutions for Your Hearing Needs?
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className={`text-5xl mb-4 flex justify-center ${feature.color}`}>
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300">
            Schedule Your Free Hearing Test Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
