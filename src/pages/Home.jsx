import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home({ setActiveProject, setActiveCertificate }) {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects onViewDetails={setActiveProject} />
      <Certifications onViewDetails={setActiveCertificate} />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
