import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  caseStudyLink?: string;
  githubLink?: string;
  liveDemoLink?: string;
};

const PortfolioProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Telehealth Platform',
      description: 'A comprehensive telemedicine solution enabling secure video consultations, e-prescriptions, and remote patient monitoring for healthcare providers.',
      image: 'https://img.freepik.com/free-vector/flat-design-medical-id-card_23-2149083795.jpg?t=st=1753262397~exp=1753265997~hmac=f13d5c0c0b78cb2edfad1ab6ac3618ac9553ffc88199f891853e631b3175c386&w=826',
      category: 'HealthCare',
      githubLink: 'https://github.com/yourusername/telehealth-platform',
      liveDemoLink: 'https://telehealth-demo.example.com',
      caseStudyLink: '/case-studies/telehealth-platform'
    },
    {
      id: 2,
      title: 'Clinic Management System',
      description: 'An all-in-one practice management software for clinics, featuring appointment scheduling, EHR integration, and billing solutions.',
      image: 'https://img.freepik.com/free-vector/online-doctor-concept_23-2148512245.jpg',
      category: 'Web Application',
      githubLink: 'https://github.com/yourusername/clinic-management',
      liveDemoLink: 'https://clinic-demo.example.com',
      caseStudyLink: '/case-studies/clinic-management-system'
    },
    {
      id: 3,
      title: 'Medical Appointment App',
      description: 'A mobile-first application that allows patients to book, reschedule, and manage medical appointments with healthcare providers.',
      image: 'https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165932.jpg?t=st=1753263736~exp=1753267336~hmac=183359dc8e83ffed348b6c522e3502498c03b53570caec8b0061d9ad486379f3&w=826',
      category: 'Mobile Application',
      githubLink: 'https://github.com/yourusername/medical-appointment-app',
      liveDemoLink: 'https://appointment-demo.example.com',
      caseStudyLink: '/case-studies/medical-appointment-app'
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 
            id="industries-served" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">PORTFOLIO'S</span>
            <span className="block text-gray-800">PROJECTS</span>
          </h2>
          <div className="h-1 w-12 bg-[#faaf52] mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Explore my latest projects and case studies in healthcare technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {projects.map((project) => (
            <div key={project.id} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col w-full">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-[#faaf52] hover:text-white transition-colors duration-300"
                        aria-label="View on GitHub"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoLink && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-[#faaf52] hover:text-white transition-colors duration-300"
                        aria-label="View Live Demo"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#faaf52]/10 text-[#faaf52] rounded-full">
                    {project.category}
                  </span>
                </div>
                {project.caseStudyLink && (
                  <Link 
                    href={project.caseStudyLink}
                    className="inline-flex items-center text-[#faaf52] text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View Details
                    <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
