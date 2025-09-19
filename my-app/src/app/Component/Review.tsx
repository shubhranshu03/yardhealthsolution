'use client';

import React from 'react';

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
      name: "Rebecca Vermen, Client",
      text: "After Getting My Hearing Aid From YardHealth, I Feel Connected Again. Thank You For Bringing Back The Joy Of Conversations.",
      rating: 5,
      avatar: "/g1.jpg"
    },
    {
      id: 2,
      name: "Nadia Brennan, Springfield", 
      text: "Very Professional Audiologists And Excellent After-Sales Service. Highly Recommend YardHealth Clinics.",
      rating: 5,
      avatar: "/g2.jpg"
    },
    {
      id: 3,
      name: "Anil Kamlur, Luckville",
      text: "I Was Worried About The Cost, But The EM Plan Made It Affordable. Truly A Blessing For Senior Citizens Like Me.",
      rating: 4,
      avatar: "/g3.jpg"
    },
    {
      id: 4,
      name: "Peggy Jean, Rocky",
      text: "Excellent Service And Very Polite Staff. The Fitting Was Quick, And The Sound Clarity Is Amazing.",
      rating: 4,
      avatar: "/g4.jpg"
    }
  ];

  return (
    <div className="w-full max-w-[1555px] mx-auto px-4 py-8 overflow-hidden">
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
              style={{ width: '295px', height: '359px', borderRadius: '20px' }}
            >
              <div className="flex justify-start mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-[263px] h-[135px] mb-4 overflow-hidden">
                <p className="text-[#2C2C2C] font-medium text-xl leading-[27px] capitalize text-left">
                  {review.text}
                </p>
              </div>

              <div className="flex justify-start mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-xl ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
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