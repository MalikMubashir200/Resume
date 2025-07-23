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

  interface industry {
    link: string;
    name: string;
  }

  const industries: industry[] = [
    { link: '/healthcare', name: 'Healthcare' },
  ];

  return (
    <>
      <header role="banner" className="fixed top-0 left-0 z-50 h-16 md:h-screen w-full md:w-24 bg-white/95 backdrop-blur-sm border-b md:border-r border-gray-200 shadow-sm flex md:flex-col items-center justify-between md:justify-start px-4 md:p-4">
        <Link 
          href="/" 
          className="flex items-center justify-center focus:outline-none focus:ring-offset-2 rounded-md p-1"
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
            <h1 className="text-[1.3rem] font-normal text-gray-700 heading">Malik "MR" Mubashir</h1>
            <p className="text-md text-gray-500 w-full text-center">Web Developer</p>
          </div>
        </div>

        <button 
          onClick={toggleMenu}
          ref={industriesButtonRef}
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
                  role="menuitem" className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  role="menuitem" className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
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
                  className="w-full text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 flex items-center justify-between py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
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
                      {industries.map((item) =>{
                        return(
                          <Link 
                        href={item.link} 
                        role="menuitem" className="text-2xl flex items-center gap-3 font-normal text-gray-700 hover:text-orange-500 transition-colors duration-200 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                        onClick={toggleMenu}
                      >
                        <div className='h-3 w-3 bg-orange-500 rounded-full'></div>
                         {item.name}
                      </Link>
                        )
                      })}
                    </li>
                   
                   
                  </ul>
                )}
              </li>
              <li>
                <Link 
                  href="#work" 
                  role="menuitem" className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  onClick={toggleMenu}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  role="menuitem" className="text-4xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-200 block py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white rounded-lg"
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