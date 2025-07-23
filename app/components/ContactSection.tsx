import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaWhatsapp, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-white">
      {/* Simple top accent line */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            id="industries-served" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">GET IN TOUCH</span>
            <span className="block text-gray-800">LET'S WORK TOGETHER</span>
          </h2>
          <div className="h-1 w-16 bg-[#faaf52] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'm just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Contact Card 1: Email */}
          <div className="group bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-[#faaf52] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Email Me</h3>
            <a 
              href="mailto:mubashirmalik6778@gmail.com" 
              className="text-gray-600 hover:text-[#faaf52] transition-colors text-lg"
            >
              mubashirmalik6778@gmail.com
            </a>
            <div className="mt-4 text-sm text-gray-500">
              I'll respond within 24 hours
            </div>
          </div>

          {/* Contact Card 2: Phone */}
          <div className="group bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-[#faaf52] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhone className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Call Me</h3>
            <div className="space-y-4">
              <a 
                href="tel:+923485467832" 
                className="block text-gray-600 hover:text-[#faaf52] transition-colors text-lg mb-2"
              >
                +92 348 5467832
              </a>
              <a 
                href="https://wa.me/923485467832" 
                className="inline-flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded hover:bg-opacity-90 transition-colors mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Available 9 AM - 6 PM (PST)
            </div>
          </div>

          {/* Contact Card 3: Location */}
          <div className="group bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-[#faaf52] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Find Me</h3>
            <p className="text-gray-600 mb-6">
              Based in Pakistan<br />
              Available for remote work worldwide
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/yourprofile" 
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-gray-600 hover:shadow-md transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-600 hover:shadow-md transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center text-gray-600 hover:shadow-md transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              Let's connect and collaborate!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
