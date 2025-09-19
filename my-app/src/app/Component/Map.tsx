import React from 'react';
import Image from 'next/image';

const Map: React.FC = () => {
  const cities = [
    'Delhi', 
    'Pune', 
    'Hyderabad', 
    'Mumbai', 
    'Bangalore', 
    'Trivandrum', 
    'Coimbatore', 
    'Kolkata'
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
        Expert Hearing Care, Wherever You Are
      </h2>
      <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto text-sm sm:text-base px-2">
        With our Pan-India presence, you'll always find trusted Yard Health audiologists and modern hearing solutions near you.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Map Image */}
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
          <Image 
            src="/map.png" 
            alt="India Map with Yard Health Hearing Solution Locations" 
            width={600} 
            height={400} 
            className="w-full h-auto max-w-md mx-auto lg:max-w-none"
          />
        </div>

        {/* Cities List */}
        <div className="w-full lg:w-1/2 max-w-md order-1 lg:order-2">
          <div className="space-y-3 sm:space-y-4">
            {cities.map((city, index) => (
              <div 
                key={index} 
                className={`text-left text-black text-sm sm:text-base font-bold py-2 sm:py-3 ${index < cities.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {city}
              </div>
            ))}
            <div className="text-center lg:text-left mt-4 sm:mt-6">
              <button 
                className="bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
