import { FaShieldAlt, FaLayerGroup, FaServer, FaLaptopCode } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';

const services = [
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "Enterprise Applications",
    description: "Custom-built applications tailored to your business needs with enterprise-grade features."
  },
  {
    icon: <FaLayerGroup className="w-6 h-6" />,
    title: "SaaS Application",
    description: "Scalable, maintainable, and secure SaaS applications built with modern technologies."
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "HIPAA Compliant Solutions",
    description: "Secure healthcare applications that meet strict HIPAA compliance standards for protected health information (PHI)."
  },
  {
    icon: <BsShop className="w-6 h-6" />,
    title: "Ecommerce Solutions",
    description: "Crafting tailored e-commerce platforms with features like online shopping carts, payment gateways, inventory management, and customer portals."
  },
  {
    icon: <FaServer className="w-6 h-6" />,
    title: "Third-Party Applications",
    description: "Seamless integration with third-party services and APIs."
  }
];

export default function WebDevelopmentServices() {
  return (
    <section id='services' className="py-16 md:py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="why-work-with-me-heading" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            <span className="block text-[#faaf52]">CUSTOM WEB DEVELOPMENT</span>
            <span className="block text-gray-800">SERVICES</span>
          </h2>
          <div className="w-20 h-1 bg-[#faaf52] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We deliver cutting-edge web solutions that drive results and help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#faaf52]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#faaf52]/10 to-[#faaf52]/5 text-[#faaf52] mb-5 group-hover:from-[#faaf52] group-hover:to-[#e69c3e] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#faaf52] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
