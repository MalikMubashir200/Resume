'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiCode, HiMail } from 'react-icons/hi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center group"
        >
          <HiCode className="mr-3 h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
          <span className="text-xl font-bold text-blue-600 group-hover:text-blue-600 transition-colors">
            Malik Mubashir
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-2">
          {navItems.map(item => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button - Now slightly smaller */}
        <div className="hidden md:block">
          <Link href="/contact" passHref>
            <button 
              className="group flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full text-white font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm"
            >
              <HiMail className="mr-2 h-4 w-4" />
              Contact Us
              <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">→</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="h-6 w-6 text-gray-700" />
          ) : (
            <HiMenu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-5 pb-5 pt-2 bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-3">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              passHref 
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              <button 
                className="w-full group flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full text-white font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm"
              >
                <HiMail className="mr-2 h-4 w-4" />
                Contact Us
                <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">→</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;