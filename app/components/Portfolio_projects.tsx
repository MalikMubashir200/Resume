'use client'
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  caseStudyLink: string;
};

type PortfolioProjectsProps = {
  projects: Project[];
  titleP1: string;
  titleP2: string;
  subtitle?: string;
};

export default function PortfolioProjects({ projects, titleP1, titleP2, subtitle }: PortfolioProjectsProps) {
  return (
    <section id='work' className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
          <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
             <h2 
            id="industries-served" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block text-[#faaf52] mb-2">{titleP1}</span>
            <span className="block text-gray-800">{titleP2}</span>
         </h2>
         <div className="h-1 w-16 bg-[#faaf52] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
          </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 sm:px-6 lg:px-0">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 hover:-translate-y-1 hover:border-gray-200 "
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-white/90 text-gray-900 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 border border-[#faaf52]/20 bg-[#faaf52]/5 text-[#faaf52]">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#faaf52] transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={project.caseStudyLink}
                    className="inline-flex items-center text-sm font-medium text-[#faaf52] hover:text-[#e69c3e] transition-colors group-hover:underline underline-offset-4"
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                    <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
