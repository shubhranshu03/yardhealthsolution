  'use client';

import React from 'react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

const Review: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Pooja Nair, Kochi",
      text: "Excellent service and very polite staff. The fitting was quick, and the sound clarity is amazing.",
      rating: 5,
      avatar: "/z1.png"
    },
    {
      id: 2,
      name: "Anil Kumar, Lucknow",
      text: "I was worried about the cost, but the EMI plan made it affordable. Truly a blessing for senior citizens like me.",
      rating: 4,
      avatar: "/z2.png"
    },
    {
      id: 3,
      name: "Neha Sharma, Bangalore",
      text: "Very professional audiologists and excellent after-sales service. Highly recommend YardHealth clinics.",
      rating: 5,
      avatar: "/z3.png"
    },
    {
      id: 4,
      name: "Ramesh Verma, Delhi",
      text: "After getting my hearing aid from YardHealth, I feel connected again. Thank you for bringing back the joy of conversations.",
      rating: 4,
      avatar: "/z4.png"
    }
  ];

  const getStarImage = (reviewName: string, starIndex: number) => {
    switch (reviewName) {
      case "Ramesh Verma, Delhi":
        // All stars will be Star 3.png (filled stars based on rating)
        return starIndex < 5 ? "/Star 3.png" : "/Star 5.png";
      
      case "Neha Sharma, Bangalore":
        // 4 stars Star 3.png, 1 star Star 5.png
        return starIndex < 4 ? "/Star 3.png" : "/Star 5.png";
      
      case "Anil Kumar, Lucknow":
        // 4 stars Star 3.png, 1 star Star 5.png
        return starIndex < 4 ? "/Star 3.png" : "/Star 5.png";
      
      case "Pooja Nair, Kochi":
        // 3 stars Star 3.png, 2 stars Star 5.png
        return starIndex < 3 ? "/Star 3.png" : "/Star 5.png";
      
      default:
        return "/Star 3.png";
    }
  };

  return (
    <div className="w-full max-w-[1555px] mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Hear What Our Clients Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <div 
          className="flex"
          style={{
            animation: 'scroll 12s linear infinite',
            width: `${reviews.length * 2 * 315}px`
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2.5 bg-[#F4F4F4] shadow-md rounded-lg p-4 text-left flex flex-col"
              style={{
                width: '295px',
                height: '359px',
                borderRadius: '20px',
                transform: 'rotate(0deg)',
                opacity: '1'
              }}
            >
              <div className="flex justify-start mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-[263px] h-[135px] mb-4 overflow-hidden">
                <p className="text-[#2C2C2C] font-medium text-xl leading-[27px] capitalize text-left" style={{ fontSize: '20px' }}>
                  {review.text}
                </p>
              </div>

              <div className="flex justify-start mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Image
                    key={i}
                    src={getStarImage(review.name, i)}
                    alt="Star"
                    width={24}
                    height={24}
                    className="w-6 h-6 mr-1"
                  />
                ))}
              </div>

              <div className="text-left">
                <p className="text-gray-600 font-medium text-sm">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${reviews.length * 315}px); }
        }
      `}</style>
    </div>
  );
};

export default Review;