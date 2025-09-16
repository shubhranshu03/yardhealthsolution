import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

// Define a type for review data
interface ReviewData {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  profilePic: string;
}

const reviews: ReviewData[] = [
  {
    id: 1,
    name: "Samantha Varma",
    location: "Delhi",
    comment: "After Getting My Hearing Aid From YardHealth, I Feel Confident Again. Thank You For Bringing Back The Joy Of Conversations.",
    rating: 5,
    profilePic: "/Logo (1).png"
  },
  {
    id: 2,
    name: "Nikita Sharma",
    location: "Bangalore",
    comment: "Very Professional Audiologists And Excellent After-Sales Service. Highly Recommend YardHealth Clinics.",
    rating: 5,
    profilePic: "/logo (2).png"
  },
  {
    id: 3,
    name: "Anil Kumar",
    location: "Lucknow",
    comment: "I Was Worried About The Point Cost, But The EMI Plan Truly A Blessing For Senior Citizens Like Me.",
    rating: 4,
    profilePic: "/logo (3).png"
  },
  {
    id: 4,
    name: "Priyanka Singh",
    location: "Mumbai",
    comment: "Excellent Service And Very Polite Staff. The Fitting With Clarity Is Amazing.",
    rating: 4,
    profilePic: "/Logo (1).png"
  },
  {
    id: 5,
    name: "Vikram Mehta",
    location: "Gujarat",
    comment: "I Had A Great Experience Before And After The Hearing Aid Fitting. Understanding Proper Care.",
    rating: 5,
    profilePic: "/logo (2).png"
  }
];

const ReviewComponent: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`inline-block mr-1 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        size={16}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Hear What Our Clients Say</h2>
      
      {/* Static grid layout for reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                <Image 
                  src={review.profilePic} 
                  alt={`${review.name}'s profile`} 
                  width={64} 
                  height={64} 
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            
            <div className="flex justify-center mb-2">
              {renderStars(review.rating)}
            </div>
            
            <p className="text-gray-600 mb-3 text-xs italic h-16 overflow-hidden">
              "{review.comment}"
            </p>
            
            <div>
              <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
              <p className="text-gray-500 text-xs">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent; 