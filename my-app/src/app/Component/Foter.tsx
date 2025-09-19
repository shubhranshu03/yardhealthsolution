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
          <form onSubmit={handleEmailSubmit} className="flex-grow flex flex-col justify-start">
            <div className="relative w-full">
              <div className="flex border border-gray-700 rounded-lg overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-white px-4 py-3 flex-1 focus:outline-none text-sm placeholder-gray-400"
                />
                <button 
                  type="submit"
                  className="bg-green-600 w-12 h-12 hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Image 
                    src="/Path.png" 
                    alt="Arrow" 
                    width={20} 
                    height={20}
                    className="text-black"
                  />
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">No spam. Only the best insights.</p>
          </form>
        </div>
      </div>

      {/* Social Section */}
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Image 
            src="/Logo (1).png" 
            alt="YardHealth Logo" 
            width={150} 
            height={50} 
            className="mr-4"
          />
        </div>

        {/* Copyright - Centered */}
        <div className="flex justify-center mb-4 md:mb-0">
          <span className="text-sm text-gray-400">© 2025 YardHealth</span>
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
