'use client';

import React from 'react';
import { FaMobileAlt, FaUserShield, FaChartLine, FaUserMd, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaMobileAlt className="w-8 h-8 text-[#faaf52] group-hover:text-white transition-colors duration-300" />,
    title: "24/7 Patient Access",
    description: "Patients can access their health information, schedule appointments, and communicate with providers anytime, reducing phone calls and improving satisfaction.",
    stat: "+65% patient engagement"
  },
  {
    icon: <FaUserShield className="w-8 h-8 text-[#faaf52] group-hover:text-white transition-colors duration-300" />,
    title: "Enhanced Security",
    description: "Secure web applications protect sensitive health data with HIPAA-compliant features like encryption, access controls, and audit trails.",
    stat: "100% HIPAA compliant"
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#faaf52] group-hover:text-white transition-colors duration-300" />,
    title: "Streamlined Operations",
    description: "Automate administrative tasks, reduce paperwork, and optimize workflows to save time and reduce operational costs.",
    stat: "40% more efficient"
  },
  {
    icon: <FaUserMd className="w-8 h-8 text-[#faaf52] group-hover:text-white transition-colors duration-300" />,
    title: "Better Provider Experience",
    description: "Intuitive interfaces and mobile access allow healthcare providers to focus on patient care rather than struggling with complex systems.",
    stat: "30% time savings"
  },
  {
    icon: <FaClock className="w-8 h-8 text-[#faaf52] group-hover:text-white transition-colors duration-300" />,
    title: "Reduced Wait Times",
    description: "Online scheduling and check-ins minimize wait times and improve the overall patient experience.",
    stat: "50% less wait time"
  },
  {
    icon: <FaMoneyBillWave className="w-8 h-8 text-[#faaf52] group-hover:text-white transition-colors duration-300" />,
    title: "Cost Efficiency",
    description: "Reduce overhead costs with digital solutions that minimize paperwork, staff workload, and administrative expenses.",
    stat: "35% cost reduction"
  }
];

const BenefitsOfWebDevelopment = () => {
  return (
    <section  className="w-full py-16 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="industries-served" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">Benefits</span>
            <span className="block text-gray-800">of Software Development in Healthcare</span>
          </h2>
          <div className="h-1 w-16 bg-[#faaf52] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how software development can transform healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {benefits.map((benefit, index) => (
            <div 
              key={`benefit-${index}`}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#faaf52]/20 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#faaf52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with subtle animation */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#fff8f0] group-hover:bg-[#faaf52] flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-105">
                <div className="transition-all duration-300">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#faaf52] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#faaf52] bg-orange-50 rounded-full group-hover:bg-[#faaf52] group-hover:text-white transition-colors duration-300">
                    {benefit.stat}
                    <svg className="w-4 h-4 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#faaf52] opacity-10 rounded-tl-full transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfWebDevelopment;
