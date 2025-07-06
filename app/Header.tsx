'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX,HiCode } from 'react-icons/hi';
import Button from '@mui/material/Button';

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
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 sm:px-4">
        
        {/* Logo */}
        <Link href="/" className="font-bold flex justify-center items-center text-lg md:text-xl text-blue-600 hover:opacity-90">
          <HiCode className="mr-1 text-blue-600" />
          Malik Mubashir
        </Link>

        {/* Centered Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-1 items-center">
          {navItems.map(item => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="text-sm font-medium px-3 py-1.5 rounded hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact button */}
        <div className="hidden md:block">
          <Link href="/contact" passHref>
            <Button 
              variant="contained" 
              color="primary"
              sx={{
                textTransform: 'none',
                fontWeight: 'medium',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '0.875rem',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-gray-700 hover:bg-blue-50 rounded-full transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" passHref onClick={() => setIsOpen(false)}>
              <Button 
                variant="contained" 
                color="primary"
                fullWidth
                sx={{
                  textTransform: 'none',
                  fontWeight: 'medium',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '0.875rem',
                  marginTop: '8px'
                }}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;