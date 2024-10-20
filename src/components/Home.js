import React, { useRef } from 'react'
import Navbar from './Navbar'
import AboutSection from './AboutSection'
import MyCarousel from './Carousel'
import ContactSection from './ContactSection'
import HealthPartnerSection from './doc_head'
import GoogleMapsSection from './GoogleMapsSection'
import Footer from './Footer'
import CustomerTestimonials from './reviews2'
import CalendlyComponent from './CalendlyComponent'

export default function Home() {
  const calRef = useRef(null)

  const handleButtonClick = (sectionRef) => {
    switch (sectionRef) {
      case 'cal':
        window.scrollTo({ top: calRef.current.offsetTop, behavior: 'smooth' })
        break
      default:
        break
    }
  }

  return (
    <>
      <div className='relative bg-black min-h-screen'>
        <Navbar />
        <HealthPartnerSection handleButtonClick={handleButtonClick} />
      </div>
      <AboutSection />
      <CustomerTestimonials />
      <MyCarousel />
      <ContactSection sectionRef={calRef} />
      <GoogleMapsSection />
      <Footer />
    </>
  )
}
