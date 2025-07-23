import React from 'react';
import { FaLaptopMedical, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const IndustryServiced = () => {
  const industries = [
    {
      icon: <FaLaptopMedical className="text-2xl text-white" />,
      title: 'SaaS Solutions',
      description: 'Comprehensive cloud-based software solutions with enterprise-grade features and security.',
      link: '/solutions/saas',
      features: [
        'Frontend Development',
        'Backend Integration',
        'Responsive Design',
        'API Development'
      ],
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: 'HIPAA Compliance',
      description: 'Fully compliant solutions meeting all healthcare data protection and privacy requirements.',
      link: '/solutions/hipaa-compliance',
      features: [
        'Web Security',
        'Performance Optimization',
        'Testing & Debugging',
        'Code Quality'
      ],
    }
  ];



  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="industries-served">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 
            id="industries-served" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">INDUSTRIES</span>
            <span className="block text-gray-800">SERVED</span>
          </h2>
          <div className="h-1 w-16 bg-[#faaf52] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Delivering innovative web solutions with cutting-edge technology and modern development practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link 
              href={industry.link}
              key={index}
              className="group block h-full"
              aria-label={`Learn more about ${industry.title}`}
            >
              <article 
                className="h-full flex flex-col bg-white p-7 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 overflow-hidden"
              >
                <div className="relative flex-1">
                  <div 
                    className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-[#faaf52] shadow-sm group-hover:bg-[#e69e48] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#faaf52] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base mb-5">
                      {industry.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 group-hover:bg-gray-100 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-[#faaf52] font-medium mt-4 group-hover:translate-x-1 transition-transform duration-300">
                      <span>Learn more</span>
                      <FaArrowRight className="ml-2 text-sm mt-0.5" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServiced;