import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-[#1a1b21] text-gray-300 py-12 md:py-16 px-10 md:px-12 border-t border-[#2d2e36] mt-16 md:ml-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
        {/* About Section */}
        <div className="space-y-12 ">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-white">ABOUT ME</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            I&apos;m a freelance web developer with a passion for building modern web applications that improve user experiences and reduce administrative burdens.
          </p>
          <p className="font-medium text-white">Malik Mubashir</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-white">NAVIGATION</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About
              </Link>
            </li>
            <li>
              <Link href="#work" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-white">CONTACT</h3>
          <address className="not-italic space-y-3">
            <p className="flex items-center gap-3 text-gray-400">
              <FaMapMarkerAlt className="text-orange-400 w-4 h-4" />
              Mansehra, Pakistan
            </p>
            <p className="flex items-center gap-3 text-gray-400">
              <FaEnvelope className="text-orange-400 w-5 h-5" />
              mubashirmalik6778@gmail.com
            </p>
          </address>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-white">FOLLOW ME</h3>
          <div className="flex space-x-5">
            <a href="http://www.fiverr.com/s/VY2v1Qx" className="relative group w-10 h-10 flex items-center justify-center border border-gray-400 overflow-hidden hover:border-orange-400 fill-from-bottom">
              <TbBrandFiverr className="w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-white" />
            </a>
            <a href="https://wa.me/923485467832" className="relative group w-10 h-10 flex items-center justify-center border border-gray-400 overflow-hidden hover:border-orange-400 fill-from-bottom">
              <FaWhatsapp className="w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-white" />
            </a>
            <a href="https://www.upwork.com/freelancers/~018cfec97032ba4070" className="relative group w-10 h-10 flex items-center justify-center border border-gray-400 overflow-hidden hover:border-orange-400 fill-from-bottom">
              <FaUpwork className="w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-white" />
            </a>
            <a href="#" className="relative group w-10 h-10 flex items-center justify-center border border-gray-400 overflow-hidden hover:border-orange-400 fill-from-bottom">
              <FaLinkedin className="w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#2d2e36] text-sm text-center text-gray-500">
        <p>Made with <span className="text-orange-400">❤️</span> by Malik Mubashir | Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;