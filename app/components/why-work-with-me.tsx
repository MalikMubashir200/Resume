import React from 'react';
import { FaMobileAlt, FaRocket, FaHeadset, FaUserCheck, FaPalette } from 'react-icons/fa';
import { TbSeo } from "react-icons/tb";

const WhyWorkWithMe = () => {
  const features = [
    {
      icon: <FaPalette className="text-2xl text-white" />,
      title: 'UI/UX Excellence',
      description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions through thoughtful user experience design.'
    },
    {
      icon: <TbSeo className="text-2xl text-white" />,
      title: 'SEO-First Approach',
      description: 'Semantic HTML, structured data, and fast rendering for better search rankings and online visibility.'
    },
    {
      icon: <FaMobileAlt className="text-2xl text-white" />,
      title: 'Responsive Design',
      description: 'Flawless experiences across all devices with mobile-first development and adaptive layouts.'
    },
    {
      icon: <FaUserCheck className="text-2xl text-white" />,
      title: 'User-Centered Design',
      description: 'Interfaces built around user needs with intuitive navigation and clear calls-to-action for better engagement.'
    },
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: 'Blazing Fast',
      description: 'Optimized performance with modern technologies for lightning-fast load times.'
    },
    {
      icon: <FaHeadset className="text-2xl text-white" />,
      title: 'Dedicated Support',
      description: 'Personalized attention and reliable communication throughout our collaboration.',
      ariaLabel: 'Dedicated Support'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="why-work-with-me-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 
            id="why-work-with-me-heading" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">WHY WORK</span>
            <span className="block text-gray-800">WITH ME</span>
          </h2>
          <div className="h-1 w-16 bg-[#faaf52] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Delivering exceptional web solutions with a focus on quality, performance, and user experience.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              aria-label={feature.ariaLabel}
            >
              <div className="relative">
                {/* Icon Container */}
                <div 
                  className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-[#faaf52] shadow-sm"
                  aria-hidden="true"
                >
                  <span className="text-white text-xl">
                    {feature.icon}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;