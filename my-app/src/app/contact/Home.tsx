import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    problem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Split Background */}
      <div className="absolute top-0 left-0 w-full h-[66%] bg-[#F5F5F7]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[34%] bg-white"></div>

      <div className="max-w-5xl mx-auto relative z-20 py-16 px-4 sm:px-6 lg:px-8 text-center pt-32">
        {/* Left Decorative Vector */}
        <div className="absolute left-[-159px] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
          <Image
            src="/line1.png"
            alt="Decorative line left"
            width={200}
            height={400}
            className="opacity-30"
          />
        </div>

        {/* Right Decorative Vector */}
        <div className="absolute right-[-200px] bottom-[10px] transform z-10 hidden lg:block">
          <Image
            src="/line2.png"
            alt="Decorative line right"
            width={200}
            height={400}
            className="opacity-30"
          />
        </div>

        {/* About Us Button */}
        <div className="flex justify-center mb-6">
          <button 
            className="w-[110px] h-[27px] rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(270deg, #FFFFFF 0%, #4EBD44 100%)',
              paddingRight: '10px',
              paddingLeft: '10px'
            }}
          >
            <span className="text-[12px] font-medium text-black">Contact Us</span>
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 px-4 md:px-0">
          YardHealth – We're Here to Help You
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 px-4 md:px-0">
          Hear Better
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 md:px-0">
          <button className="px-6 py-3 border-2 border-black rounded-full text-black font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Find a Clinic Near You
          </button>
          <button className="px-6 py-3 bg-[#4EBD44] text-white rounded-full font-medium hover:bg-[#45a63a] transition-colors w-full sm:w-auto">
            Book Free Appointment
          </button>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div 
            className="bg-white rounded-[20px] shadow-lg p-4 sm:p-8 mx-auto"
            style={{
              width: '100%',
              maxWidth: '750px',
              height: 'auto',
              minHeight: '500px',
              opacity: 1,
              transform: 'rotate(0deg)'
            }}
          >
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              {/* Form Fields Container */}
              <div className="flex-1">
                {/* First Row - Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-left text-gray-700 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4EBD44] focus:border-transparent bg-[#F4F4F4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-left text-gray-700 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4EBD44] focus:border-transparent bg-[#F4F4F4]"
                      required
                    />
                  </div>
                </div>

                {/* Second Row - Email and Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-left text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4EBD44] focus:border-transparent bg-[#F4F4F4]"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-gray-700 font-medium mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4EBD44] focus:border-transparent bg-[#F4F4F4]"
                    />
                  </div>
                </div>

                {/* Third Row - Problem Description */}
                <div className="mb-2 flex justify-center">
                  <label className="block text-left text-gray-700 font-medium mb-2 w-full max-w-[700px]">
                    Tell us your problem <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="flex justify-center">
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    placeholder="Type here..."
                    className="w-full max-w-[700px] h-[74px] px-4 py-3 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#4EBD44] focus:border-transparent resize-none bg-[#F4F4F4]"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="w-[230px] h-[48px] bg-[#4EBD44] text-white rounded-[45px] font-medium hover:bg-[#45a63a] transition-colors"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;