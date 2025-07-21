'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const industriesButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setShowIndustries(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setShowIndustries(false);
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
    setShowIndustries(false);
  };

  const toggleIndustries = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setShowIndustries(!showIndustries);
  };

  const handleIndustriesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleIndustries(e);
    } else if (e.key === 'Escape' && showIndustries) {
      setShowIndustries(false);
      industriesButtonRef.current?.focus();
    }
  };

  return (
    <>
      <header role="banner" className="fixed h-16 md:h-screen w-full md:w-24 bg-white border-b md:border-r border-gray-300 shadow-sm flex md:flex-col items-center justify-between md:justify-start px-4 md:p-4">
        <Link 
          href="/" 
          className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-md p-1"
          aria-label="Home"
        >
          <img 
            className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform hover:scale-105" 
            src="/logo.avif" 
            alt="My logo" 
            width={56}
            height={56}
          />
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="origin-center -rotate-90 whitespace-nowrap">
            <h1 className="text-[1.3rem] font-normal text-gray-700 heading">Malik Mubashir</h1>
            <p className="text-md text-gray-500 w-full text-center">Web Developer</p>
          </div>
        </div>

        <button 
          onClick={toggleMenu}
          ref={industriesButtonRef}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-black hover:text-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-md"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          {isMenuOpen ? (
            <>
              <div className="md:hidden">
                <IoClose className="w-8 h-8" />
              </div>
              <div className="hidden md:flex items-center gap-1">
                <IoClose className="w-7 h-7" />
                <span className="sr-only md:not-sr-only text-base">Close</span>
              </div>
            </>
          ) : (
            <IoMenu className="w-8 h-8 hover:scale-110 transition-transform" />
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div 
          ref={menuRef}
          id="main-menu"
          className="fixed inset-0 z-40 flex flex-col items-center justify-between p-6 bg-white/90 backdrop-blur-lg overflow-y-auto shadow-xl"
          role="navigation"
          aria-label="Primary"
        >
          <div className="w-full max-w-md mx-4 mt-12">
            <ul role="menu" className="space-y-8">
              <li>
                <Link 
                  href="/" 
                  role="menuitem" className="text-5xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-3 px-4 focus:outline-none"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  role="menuitem" className="text-5xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-3 px-4 focus:outline-none"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  ref={industriesButtonRef}
                  onClick={toggleIndustries}
                  onKeyDown={handleIndustriesKeyDown}
                  className="w-full text-5xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 flex items-center justify-between py-3 px-4 focus:outline-none"
                  aria-expanded={showIndustries}
                  aria-controls="industries-submenu" aria-haspopup="true"
                >
                  <span>Industries</span>
                  <IoChevronDown 
                    className={`transition-transform duration-200 text-xl ${showIndustries ? 'rotate-180' : ''}`} 
                    aria-hidden="true"
                  />
                </button>
                {showIndustries && (
                  <ul 
                    id="industries-submenu" role="menu"
                    className="mt-2 ml-6 space-y-3 border-l border-gray-200 pl-5"
                  >
                    <li>
                      <Link 
                        href="/industries/clinic" 
                        role="menuitem" className="text-2xl font-normal text-gray-700 hover:text-orange-500 transition-colors duration-200 block py-2 px-3 focus:outline-none"
                        onClick={toggleMenu}
                      >
                        Clinic & Private Practice
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/industries/telemedicine" 
                        role="menuitem" className="text-2xl font-normal text-gray-700 hover:text-orange-500 transition-colors duration-200 block py-2 px-3 focus:outline-none"
                        onClick={toggleMenu}
                      >
                        Telemedicine Platforms
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/industries/medical-booking" 
                        role="menuitem" className="text-2xl font-normal text-gray-700 hover:text-orange-500 transition-colors duration-200 block py-2 px-3 focus:outline-none"
                        onClick={toggleMenu}
                      >
                        Medical Booking Systems
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link 
                  href="#work" 
                  role="menuitem" className="text-5xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-3 px-4 focus:outline-none"
                  onClick={toggleMenu}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  role="menuitem" className="text-5xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-3 px-4 focus:outline-none"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 flex items-center gap-2 text-3xl text-gray-700 hover:text-orange-500 transition-colors duration-200 focus:outline-none"
            aria-label="Close menu"
          >
            <IoClose className="w-8 h-8" />
            <span>Exit</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;