import Image from 'next/image';
import { FaUpwork, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { TbBrandFiverr } from "react-icons/tb";

interface HeroProps {
  heading?: string;
  subheading: string; // Optional subheading
  description: string;
  imageSrc: string;
  imageAlt: string;
  arrowLink: string;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
  arrowLink
}) => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center md:justify-start relative pt-24 md:pt-0">
      {/* Arrow box - centered and only on medium screens and up */}
      <div className="hidden md:flex absolute left-1/2 bottom-8 transform -translate-x-1/2 z-10">
        <div className="relative">
          <div className="w-16 h-16 bg-[#faaf52] transform"></div>
          <a 
            href={arrowLink} 
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Scroll to about section"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#faaf52] group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-white transform "  fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
      {/* Left: Intro text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 md:px-16 lg:px-24 space-y-6 md:space-y-8 text-center md:text-left mt-8 md:mt-0">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {heading && (
              <span className="block text-[#faaf52] mb-1">{heading}</span>
            )}
              <span className="block text-gray-800">{subheading}</span>
          </h2>
          <div className="h-1 w-16 bg-[#faaf52] mx-auto md:mx-0"></div>
        </div>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md md:max-w-lg">
          {description}
        </p>
      </div>

      {/* Right: Full-height image with social icons */}
      <div className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-screen">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={1000}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Icons - Bottom Right */}
        <div className="absolute bottom-6 right-6 flex space-x-4 z-10">
          <a 
            href={arrowLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative p-2 border border-white text-white overflow-hidden group transition-all duration-300 w-10 h-10 flex items-center justify-center"
            aria-label="Upwork Profile"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#faaf52] group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
            <FaUpwork className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative p-2 border border-white text-white overflow-hidden group transition-all duration-300 w-10 h-10 flex items-center justify-center"
            aria-label="LinkedIn Profile"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#faaf52] group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative p-2 border border-white text-white overflow-hidden group transition-all duration-300 w-10 h-10 flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#faaf52] group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative p-2 border border-white text-white overflow-hidden group transition-all duration-300 w-10 h-10 flex items-center justify-center"
            aria-label="Facebook Profile"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#faaf52] group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
            <TbBrandFiverr className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
