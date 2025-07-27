import Hero from '@/app/components/Hero'
import React from 'react'
import BenefitsOfWebDevelopment from '@/app/components/healthcare/BenefitsOfWebDevelopment'
import UseCasesCarousel from '@/app/components/healthcare/UseCasesCarousel'
import PortfolioProjects from '@/app/components/Portfolio_projects'
import ContactSection from '@/app/components/ContactSection'

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
const Healthcare = () => {
  return (
    <section>
       <Hero
          heading="HealthCare Meets Tech"
          subheading="Less Stress, More Care"
          description="I help doctors and clinics go digital — without the confusion. From online bookings to patient portals, I build fast, simple, and secure tools that save time and make care easier to deliver."
          imageSrc="/Telemedcin_App_Ui.avif"
          imageAlt="Doctor using digital healthcare app"
          arrowLink="#benefits"
        />
        <BenefitsOfWebDevelopment/>
        <UseCasesCarousel/>
        <PortfolioProjects 
          projects={projects}
          titleP1="SOLUTIONS"
          titleP2="FOR HEALTHCARE INDUSTRY"
          subtitle="Explore the different healthcare solutions that I've worked on, from telemedicine platforms to electronic health records systems."
        />
        <ContactSection/>
    </section>
  )
}

export default Healthcare