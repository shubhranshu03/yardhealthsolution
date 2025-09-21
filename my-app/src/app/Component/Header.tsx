import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header background when scrolled more than 50 pixels
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/blacklogo1 (2).png" 
            alt="YardHealth Logo" 
            width={150} 
            height={50} 
            className={`cursor-pointer transition-all duration-300 ${
              isScrolled ? 'scale-90' : ''
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className={`flex space-x-6 font-medium text-[14px] transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-black'
          }`}>
            <li><Link href="/" className="hover:text-green-500 transition-colors font-semibold">About</Link></li>
            <li><Link href="/hearing-aids" className="hover:text-green-500 transition-colors font-semibold">Hearing Aid</Link></li>
            <li><Link href="/our-services" className="hover:text-green-500 transition-colors font-semibold">Our brands</Link></li>
            <li><Link href="/providers" className="hover:text-green-500 transition-colors font-semibold">Franchise</Link></li>
            <li><Link href="/contact" className="hover:text-green-500 transition-colors font-semibold">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className={`flex items-center justify-center w-[136px] h-[48px] border-2 rounded-[45px] px-4 py-[15px] gap-2 hover:bg-black hover:text-white transition-colors text-[12px] font-medium ${
            isScrolled 
              ? 'text-black border-black' 
              : 'text-black border-black'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="w-[80px] text-center">Find a Clinic</span>
          </button>
          <button className={`w-[108px] h-[48px] rounded-[45px] hover:bg-green-600 transition-colors text-[14px] font-medium px-[35px] py-[15px] flex items-center justify-center gap-2 ${
            isScrolled 
              ? 'bg-green-500 text-white' 
              : 'bg-green-500 text-white'
          }`}>
            Login
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/">
                  <Image 
                    src="/blacklogo1 (2).png" 
                    alt="YardHealth Logo" 
                    width={120} 
                    height={40} 
                    className="cursor-pointer"
                  />
                </Link>
                <button 
                  onClick={toggleMobileMenu}
                  className="text-black focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-grow p-4">
                <ul className="space-y-4 text-black font-medium text-[16px]">
                  <li><Link href="/" onClick={toggleMobileMenu} className="block py-2 hover:text-green-500 transition-colors font-semibold">About</Link></li>
                  <li><Link href="/hearing-aids" onClick={toggleMobileMenu} className="block py-2 hover:text-green-500 transition-colors font-semibold">Hearing Aid</Link></li>
                  <li><Link href="/our-services" onClick={toggleMobileMenu} className="block py-2 hover:text-green-500 transition-colors font-semibold">Our brands</Link></li>
                  <li><Link href="/providers" onClick={toggleMobileMenu} className="block py-2 hover:text-green-500 transition-colors font-semibold">Franchise</Link></li>
                  <li><Link href="/contact" onClick={toggleMobileMenu} className="block py-2 hover:text-green-500 transition-colors font-semibold">Contact Us</Link></li>
                </ul>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="p-4 space-y-4">
                <button className="w-full flex items-center justify-center h-[48px] text-black border-2 border-black rounded-[45px] px-4 py-[15px] gap-2 hover:bg-black hover:text-white transition-colors text-[14px] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Find a Clinic
                </button>
                <button className="w-full h-[48px] bg-green-500 text-white rounded-[45px] hover:bg-green-600 transition-colors text-[14px] font-medium px-[35px] py-[15px] flex items-center justify-center gap-2">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
