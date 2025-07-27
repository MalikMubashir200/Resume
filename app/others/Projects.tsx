import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      imageUrl: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?uid=R201599412&ga=GA1.1.1950494797.1752213876&semt=ais_hybrid&w=740",
      title: "E-Commerce Platform",
      description: "A fully accessible online store with screen reader support and keyboard navigation.",
      caseStudyLink: "/projects/ecommerce"
    },
    {
      id: 2,
      imageUrl: "https://www.freepik.com/free-vector/isometric-online-doctor-design_2092139.htm#fromView=search&page=1&position=43&uuid=17836294-96c0-4c93-856f-1599ad249bcc&query=healthcare+portal",
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient management system with high contrast mode.",
      caseStudyLink: "/projects/healthcare"
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-20 py-16 w-full"  aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <header className="space-y-4 mb-12">
          <h2 id="projects-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            <span className="flex items-center">
              <img 
                src="/Vector.webp" 
                alt="" 
                className="h-8 mr-3 w-auto" 
                aria-hidden="true"
              />
              My Projects
            </span>
          </h2>
        </header>

        {/* Accessible grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              caseStudyLink={project.caseStudyLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;