'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header role="banner" className="fixed top-0 left-0 z-50 h-16 md:h-screen w-full md:w-24 bg-white/95 backdrop-blur-sm border-b md:border-r border-gray-200 shadow-sm flex md:flex-col items-center justify-between md:justify-start px-4 md:p-4">
        <Link 
          href="/" 
          className="flex items-center justify-center focus:outline-none focus:ring-offset-2 rounded-md p-1"
          aria-label="Home"
        >
          <Image 
            className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform hover:scale-105" 
            src="/logo.avif" 
            alt="My logo" 
            width={56}
            height={56}
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </Link>
        
        <div className="flex flex-1 items-center justify-center">
          <div className="origin-center md:-rotate-90 whitespace-nowrap">
            <h1 className="text-[1.1rem] md:text-[1.3rem] font-medium text-gray-700 ">Malik &quot;MR&quot; Mubashir</h1>
            <p className="text-md text-gray-500 w-full text-center">Web Developer</p>
          </div>
        </div>

        <button 
          onClick={toggleMenu}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-gray-700 hover:text-orange-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-haspopup="true"
        >
          {isMenuOpen ? (
            <IoClose className="w-10 h-10 transition-transform hover:scale-110" />
          ) : (
            <IoMenu className="w-10 h-10 transition-transform hover:scale-110" />
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div 
          ref={menuRef}
          id="main-menu"
          className="fixed inset-0 z-40 flex flex-col items-center justify-between p-6 bg-white overflow-y-auto shadow-xl"
          role="navigation"
          aria-label="Primary"
        >
          <div className="w-full max-w-md mx-4 mt-12">
            <ul role="menu" className="space-y-8">
              <li>
                <Link 
                  href="/" 
                  role="menuitem" 
                  className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  role="menuitem" 
                  className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  role="menuitem" 
                  className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#work" 
                  role="menuitem" 
                  className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  role="menuitem" 
                  className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
