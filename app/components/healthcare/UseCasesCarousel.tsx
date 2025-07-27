'use client';

import React, { useState, useEffect } from 'react';
import { FaClinicMedical, FaUserMd, FaCalendarAlt, FaMobileAlt, FaChartLine, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa6';

const useCases = [
  {
    id: 1,
    title: 'Patient Portals',
    description: 'Personalized dashboards for patients to view medical records, test results, and treatment plans.',
    icon: <FaClinicMedical className="w-6 h-6 text-white group-hover:text-[#faaf52] transition-colors duration-300" />,
    stat: '24/7 access',
    color: 'bg-[#3498db] group-hover:bg-white border-2 border-[#3498db]',
    textColor: 'text-[#3498db]'
  },
  {
    id: 2,
    title: 'Appointment Scheduling',
    description: 'Intuitive online booking systems that reduce no-shows with automated reminders and calendar sync.',
    icon: <FaCalendarAlt className="w-6 h-6 text-white group-hover:text-[#faaf52] transition-colors duration-300" />,
    stat: 'Reduced no-shows',
    color: 'bg-[#9b59b6] group-hover:bg-white border-2 border-[#9b59b6]',
    textColor: 'text-[#9b59b6]'
  },
  {
    id: 3,
    title: 'HIPAA Compliance',
    description: 'Secure, compliant web solutions that protect sensitive patient health information.',
    icon: <FaShieldAlt className="w-6 h-6 text-white group-hover:text-[#faaf52] transition-colors duration-300" />,
    stat: 'Fully secure',
    color: 'bg-[#e67e22] group-hover:bg-white border-2 border-[#e67e22]',
    textColor: 'text-[#e67e22]'
  },
  {
    id: 4,
    title: 'Remote Patient Monitoring',
    description: 'Real-time monitoring and analytics for remote patient care.',
    icon: <FaMobileAlt className="w-6 h-6 text-white group-hover:text-[#faaf52] transition-colors duration-300" />,
    stat: 'Real-time monitoring',
    color: 'bg-[#f1c40f] group-hover:bg-white border-2 border-[#f1c40f]',
    textColor: 'text-[#f1c40f]'
  },
  {
    id: 5,
    title: 'Mental Health Chatbot UI',
    description: 'Intuitive conversational interfaces for mental health support.',
    icon: <FaRobot className="w-6 h-6 text-white group-hover:text-[#faaf52] transition-colors duration-300" />,
    stat: 'Personalized support',
    color: 'bg-[#2ecc71] group-hover:bg-white border-2 border-[#2ecc71]',
    textColor: 'text-[#2ecc71]'
  },
  {
    id: 6,
    title: 'Admin Dashboard with Access Control',
    description: 'Customizable dashboards for administrators with robust access control.',
    icon: <FaChartLine className="w-6 h-6 text-white group-hover:text-[#faaf52] transition-colors duration-300" />,
    stat: 'Customizable access',
    color: 'bg-[#8e44ad] group-hover:bg-white border-2 border-[#8e44ad]',
    textColor: 'text-[#8e44ad]'
  }
];

const UseCasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive card count
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCards(mobile ? 1 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalGroups = Math.ceil(useCases.length / visibleCards);
  const currentGroup = Math.floor(currentIndex / visibleCards);
  const visibleItems = [];

  // Get the current set of cards to display
  for (let i = 0; i < visibleCards; i++) {
    const index = (currentGroup * visibleCards + i) % useCases.length;
    visibleItems.push(useCases[index]);
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= useCases.length - visibleCards ? 0 : prevIndex + visibleCards
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - visibleCards : prevIndex - visibleCards
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * visibleCards);
  };

  return (
    <section className="w-full py-16 bg-white" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 
            id="industries-served" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">Web Solutions</span>
            <span className="block text-gray-800">for Healthcare Tech</span>
          </h2>
          <div className="w-20 h-1 bg-[#faaf52] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative web solutions designed to transform healthcare delivery and patient experience
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6 transition-colors duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.stat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#faaf52] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#faaf52] focus:ring-offset-2 transition-all duration-300"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#faaf52] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#faaf52] focus:ring-offset-2 transition-all duration-300"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentGroup === index ? 'bg-[#faaf52] w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesCarousel;