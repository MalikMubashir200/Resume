import Hero from './components/Hero';
import About from './components/About';
import PortfolioProjects from './components/Portfolio_projects';
import WhyWorkWithMe from './components/why-work-with-me';
import ContactSection from './components/ContactSection';
import WebDevelopmentServices from './components/WebDevelopmentServices';
import projects from './storage/storage';


export default function Home() {
  return (
    <section className="space-y-16 md:space-y-24">
      <Hero
        heading="HELLO, I'M MR."
        subheading="NICE TO MEET YOU!"
        description="I'm a passionate web developer—crafting fast, accessible, and beautiful experiences that make a difference."
        imageSrc="/me.jpg"
        imageAlt="Mubashir at"
        arrowLink='#about'
      />
      <About />
      <WhyWorkWithMe /> 
      <WebDevelopmentServices />
      <PortfolioProjects 
        projects={projects} 
        titleP1='MY WORK'
        titleP2='Turning Ideas Into Impact'
        subtitle='Each project has been an opportunity to learn, grow, and solve real problems. From personal experiments to client-focused solutions, I am proud to share this journey with you'
      />
      <ContactSection />
    </section>
  );
}
