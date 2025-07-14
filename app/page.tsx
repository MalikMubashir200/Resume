import About from './components/About';
import Hero from './components/Hero';
import PortfolioProjects from './components/Portfolio_projects';
import WhyWorkWithMe from './components/why-work-with-me';
import ContactSection from './components/ContactSection';
import WebDevelopmentServices from './components/WebDevelopmentServices';

const projects = [
  {
    id: 1,
    title: 'Electronic Health Records System',
    description: 'A comprehensive EHR system for managing patient records and medical history.',
    image: '/Telemedcin_App_Ui.avif',
    category: 'Healthcare',
    caseStudyLink: '/case-studies/ehr-system'
  },
  {
    id: 2,
    title: 'Telemedicine Platform',
    description: 'A secure platform enabling remote doctor-patient consultations.',
    image: '/Telemedcin_App_Ui.avif',
    category: 'Healthcare',
    caseStudyLink: '/case-studies/telemedicine'
  },
  // Add more projects as needed
];

export default async function Home() {
  return (
    <section className="space-y-16 md:space-y-24">
      <Hero
        heading="HELLO, I'M MR."
        subheading="NICE TO MEET YOU!"
        description="I'm a passionate web developer—crafting fast, accessible, and beautiful experiences that make a difference."
        imageSrc="/p.avif"
        imageAlt="Mubashir at"
        arrowLink='#about'
      />
      <About />
      <WhyWorkWithMe /> 
      <WebDevelopmentServices />
      <PortfolioProjects 
        projects={projects} 
        titleP1 = 'MY WORK'
        titleP2 = 'Turning Ideas Into Impact'
        subtitle = 'Each project has been an opportunity to learn, grow, and solve real problems. From personal experiments to client-focused solutions, I’m proud to share this journey with you.'
      />
      <ContactSection />
    </section>
  );
}
