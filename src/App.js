// App.js
import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import MyCarousel from './components/Carousel';
import ContactSection from './components/ContactSection';
import HealthPartnerSection from './components/doc_head';
import GoogleMapsSection from './components/GoogleMapsSection';
import HeroSection from './components/HeroSection';
import ChatIcon from './components/ChatIcon';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import CustomerTestimonials from './components/reviews2';
import CalendlyComponent from './components/CalendlyComponent';

const App = () => {
  const calRef = useRef(null);

  const handleButtonClick = (sectionRef) => {
    switch (sectionRef) {
      
      case 'cal':
        window.scrollTo({ top: calRef.current.offsetTop, behavior: 'smooth' });
        break;
      
      default:
        break;
    }
  };

  return (
    <div className="antialiased text-gray-700">
<div className="relative bg-black min-h-screen">
        <Navbar />
        <HealthPartnerSection handleButtonClick={handleButtonClick}/>
      </div>
      <AboutSection />
      <CustomerTestimonials />
      <MyCarousel />

      <ContactSection />
      <CalendlyComponent sectionRef={calRef} />
      <GoogleMapsSection />
      <Footer />
    </div>
  );
};

export default App;
