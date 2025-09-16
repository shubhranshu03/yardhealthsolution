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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Expert Hearing Care, Wherever You Are
      </h2>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        With our Pan-India presence, you'll always find trusted Yard Health audiologists and modern hearing solutions near you.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Map Image */}
        <div className="w-full md:w-1/2 relative">
          <Image 
            src="/map.png" 
            alt="India Map with Yard Health Hearing Solution Locations" 
            width={600} 
            height={400} 
            className="w-full h-auto"
          />
        </div>

        {/* Cities List */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="space-y-4">
            {cities.map((city, index) => (
              <div 
                key={index} 
                className="text-left text-black text-base font-bold py-3 border-b border-gray-200 last:border-b-0"
              >
                {city}
              </div>
            ))}
            <div className="text-left mt-4">
              <button 
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
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
