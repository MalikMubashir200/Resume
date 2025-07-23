import About from './components/About';
import Hero from './components/Hero';
import IndustryServiced from './components/Industry_served';
import PortfolioProjects from './components/Portfolio_projects';
import WhyWorkWithMe from './components/why-work-with-me';
import ContactSection from './components/ContactSection';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  caseStudyLink?: string;
}

export default async function Home() {
  return (
    <section className="space-y-16 md:space-y-24">
      <Hero />
      <About />
      <WhyWorkWithMe />
      <IndustryServiced />
      <PortfolioProjects />
      <ContactSection />
    </section>
  );
}
