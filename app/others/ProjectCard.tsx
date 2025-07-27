import React from 'react';
import Link from 'next/link';

interface ProjectDetail {
  imageUrl: string;
  title: string;
  description: string;
  caseStudyLink: string;
}

const ProjectCard = ({ imageUrl, title, description, caseStudyLink }: ProjectDetail) => {
  return (
    <article 
      className="
        bg-white rounded-2xl overflow-hidden 
        transition-all duration-300 
        focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-4
        group/card
        h-full flex flex-col
      "
    >
      {/* Image container with isolated hover effects */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          className="
            w-full h-full object-cover 
            transition-transform duration-500 
            group-hover/card:scale-110
          "
          loading="lazy"
        />
        <div className="
          absolute inset-0 
          bg-gradient-to-t from-black/10 via-black/5 to-transparent 
          opacity-0 group-hover/card:opacity-100
          transition-opacity duration-300
        " />
      </div>

      {/* Static content that doesn't move on hover */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Button with subtle hover effect (not affected by image zoom) */}
        <div className="mt-auto pt-4">
          <Link
            href={caseStudyLink}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              text-sm font-medium
              bg-blue-600 text-white
              rounded-lg
              hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              transition-colors duration-200
            "
            aria-label={`View case study for ${title} project`}
          >
            View Case Study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;