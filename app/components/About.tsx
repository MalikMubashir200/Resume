import React from 'react';
import { FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';

const experience = [
  {
    id: 1,
    period: 'April 2025 - June 2025',
    title: 'Junior Developer Intern',
    company: 'BawdicSoft.',
    description: 'Learning web development and working on real world projects.'
  },
  {
    id: 2,
    period: '2024 - January 2025',
    title: 'Learning Web Development',
    company: 'Udemy',
    description: 'Learning web development and building projects.'
  }
]

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* First Column: About Us */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-[#faaf52] p-2.5 rounded-full mr-3">
                <FaBriefcase className="text-white text-lg" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
            </div>
            <p className=" leading-relaxed text-sm md:text-base text-gray-600">
            I’m Malik Mubashir, a full-stack developer who started coding at 17 with a simple goal — build things that help people.
            Today, I craft fast, accessible, and SEO-friendly web apps. Clean UI, scalable back-ends, and thoughtful UX are my toolkit.
            </p>
          </div>

          {/* Second Column: Experience */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-[#faaf52] p-2.5 rounded-full mr-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="group border-b  border-b-gray-300 pb-4">
                  <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Third Column: Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-[#faaf52] p-2 rounded-full mr-3">
                <FaTools className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
            </div>
            <div className="space-y-6">
              {/* Frontend Skills */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[  'React', 'Next.js', 'Tailwind CSS'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-50 text-sm text-gray-700 rounded-full border border-gray-200 hover:border-[#faaf52] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'REST APIs', 'PostgreSQL','Fast API'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-50 text-sm text-gray-700 rounded-full border border-gray-200 hover:border-[#faaf52] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Others */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Responsive Design', 'UI/UX','Wordpress'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-50 text-sm text-gray-700 rounded-full border border-gray-200 hover:border-[#faaf52] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;