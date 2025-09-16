"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual email submission logic
    console.log('Submitted email:', email);
  };

  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Hearing Aid', href: '/hearing-aid' },
              { label: 'Our Services', href: '/services' },
              { label: 'Partners', href: '/partners' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'FAQ', href: '/faq' }
            ].map(({ label, href }) => (
              <li key={href}>
                <Link 
                  href={href} 
                  className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company Info</h3>
          <ul className="space-y-2">
            {[
              { label: 'About Us', href: '/about-us' },
              { label: 'Careers', href: '/careers' },
              { label: 'Blog', href: '/blog' },
              { label: 'Press', href: '/press' },
              { label: 'Partner with Us', href: '/partner-with-us' },
              { label: 'Affiliate Program', href: '/affiliate-program' }
            ].map(({ label, href }) => (
              <li key={href}>
                <Link 
                  href={href} 
                  className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Legal Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Support & Legal</h3>
          <ul className="space-y-2">
            {[
              { label: 'Terms & Conditions', href: '/terms' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Refund & Cancellation Policy', href: '/refund' },
              { label: 'Booking Policy', href: '/booking' },
              { label: 'Help & Support', href: '/help' }
            ].map(({ label, href }) => (
              <li key={href}>
                <Link 
                  href={href} 
                  className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold mb-4 text-white">Enter your email</h3>
          <form onSubmit={handleEmailSubmit} className="flex-grow flex flex-col justify-start">
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-gray-600 text-white px-2 py-2 pr-10 w-full focus:outline-none focus:border-green-500 text-sm placeholder-gray-500"
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                →
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">No spam. Only the best insights.</p>
          </form>
        </div>
      </div>

      {/* Social Section */}
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Copyright */}
        <div className="flex items-center mb-4 md:mb-0">
          <Image 
            src="/Logo (1).png" 
            alt="YardHealth Logo" 
            width={150} 
            height={50} 
            className="mr-4"
          />
          <span className="text-sm text-gray-400">© 2023 YardHealth</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-green-500 transition-colors">
            <FaXTwitter size={20} />
          </Link>
          <Link href="#" className="text-white hover:text-green-500 transition-colors">
            <FaYoutube size={20} />
          </Link>
          <Link href="#" className="text-white hover:text-green-500 transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <Link href="#" className="text-white hover:text-green-500 transition-colors">
            <FaFacebook size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
