'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiCode, HiMail, HiChevronDown } from 'react-icons/hi';

interface NavItem {
  name: string;
  path: string;
  dropdown?: {
    name: string;
    path: string;
  }[];
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'Industries', 
    path: '#',
    dropdown: [
      { name: 'Technology', path: '/tech' },
      { name: 'Healthcare', path: '/healthcare' },
      { name: 'Finance', path: '/finance' },
      { name: 'Education', path: '/education' },
      { name: 'E-commerce', path: '/ecommerce' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/projects' },
  { name: 'Skills', path: '/skills' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm  ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <HiCode className="mr-3 h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
          <span className="text-xl font-bold text-blue-600 group-hover:text-blue-600 transition-colors">
            Malik Mubashir
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-2">
          {navItems.map((item) => (
            <div key={item.name} className="relative" ref={navRef}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all"
                  >
                    {item.name}
                    <HiChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Enhanced Desktop Dropdown */}
                  {activeDropdown === item.name && (
                    <div 
                      className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50 animate-fadeIn"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0 hover:pl-5"
                          onClick={closeAll}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact" passHref>
            <button className="group flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full text-white font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm">
              <HiMail className="mr-2 h-4 w-4" />
              Contact Us
              <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">→</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX className="h-6 w-6 text-gray-700" /> : <HiMenu className="h-6 w-6 text-gray-700" />}
        </button>
      </nav>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 pb-5 pt-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {item.name}
                      <HiChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-1 space-y-1 pl-2 border-l-2 border-blue-100 ml-3">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-4 py-2.5 text-base text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                            onClick={closeAll}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={closeAll}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" passHref onClick={closeAll} className="mt-2">
              <button className="w-full group flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300">
                <HiMail className="mr-2 h-4 w-4" />
                Contact Us
                <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">→</span>
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Add this to your global CSS for fade-in animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;