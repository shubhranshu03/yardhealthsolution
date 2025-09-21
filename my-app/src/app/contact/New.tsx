import React from 'react';
import Image from 'next/image';

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-38 items-center">
        <div className="flex flex-col items-center">
          <Image 
            src="/whatsapp.png" 
            alt="WhatsApp" 
            width={60} 
            height={60} 
            className="mb-12"
          />
          <p className="text-black font-semibold" style={{fontSize: '20px'}}>Call/WhatsApp</p>
          <p className="text-black" style={{fontSize: '20px'}}>+91-96259575757 / +91-9668677932</p>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/gmail.png" 
            alt="Email" 
            width={60} 
            height={60} 
            className="mb-12"
          />
          <p className="text-black font-semibold" style={{fontSize: '20px'}}>Email</p>
          <p className="text-black" style={{fontSize: '20px'}}>info@yardhearth.io</p>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/company.png" 
            alt="Company" 
            width={60} 
            height={60} 
            className="mb-12"
          />
          <p className="text-black font-semibold" style={{fontSize: '20px'}}>Corporate Office</p>
          <p className="text-black" style={{fontSize: '20px'}}>Nagpur Tower, Okhla, Delhi - 110020</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
