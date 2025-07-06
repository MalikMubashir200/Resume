'use client';
import React from 'react';
import Link from 'next/link';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = 'your.email@example.com';

  return (
    <footer className="w-full mt-32 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's build something<br />amazing together
          </h2>
          
          <div className="flex flex-col items-center">
            <p className="text-gray-500 mb-4 text-lg">Have a project in mind?</p>
            <a 
              href={`mailto:${email}`}
              className="group inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              <HiMail className="mr-3 text-xl" />
              Get in touch
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Malik Mubashir. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;