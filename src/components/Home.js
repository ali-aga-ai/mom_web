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
import Diseases from './Diseases'

export default function Home() {


  return (
    <>
      <div className='relative bg-black min-h-screen'>
        <Navbar />
        <HealthPartnerSection  />
      </div>
      <AboutSection />
      <CustomerTestimonials />
      <Diseases />
      <MyCarousel />
      <ContactSection  />
      <GoogleMapsSection />
      <Footer />
    </>
  )
}
