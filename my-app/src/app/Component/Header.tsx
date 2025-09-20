import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/blacklogo1 (2).png" 
            alt="YardHealth Logo" 
            width={150} 
            height={50} 
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 text-black font-medium text-[14px]">
            <li><Link href="/" className="hover:text-green-500 transition-colors">About</Link></li>
            <li><Link href="/hearing-aids" className="hover:text-green-500 transition-colors">Hearing Aids</Link></li>
            <li><Link href="/our-services" className="hover:text-green-500 transition-colors">Our Services</Link></li>
            <li><Link href="/providers" className="hover:text-green-500 transition-colors">Providers</Link></li>
            <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center justify-center w-[136px] h-[48px] text-black border-2 border-black rounded-[45px] px-4 py-[15px] gap-2 hover:bg-black hover:text-white transition-colors text-[12px] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="w-[80px] text-center">Find a Clinic</span>
          </button>
          <button className="w-[108px] h-[48px] bg-green-500 text-white rounded-[45px] hover:bg-green-600 transition-colors text-[14px] font-medium px-[35px] py-[15px] flex items-center justify-center gap-2">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
