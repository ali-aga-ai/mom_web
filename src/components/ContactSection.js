// ContactUsSection.js
import React, { useState } from 'react';

const ContactUsSection = ({ sectionRef }) => {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [showInstagramForm, setShowInstagramForm] = useState(false);

  const handleWhatsAppClick = () => {
    setShowWhatsAppForm(true);
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/healandhope_holistichealth/?igsh=MXgzdjBwZWNnZ2FzeA%3D%3D', '_blank');
  };

  return (
    <section className="contact-us bg-white py-16" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-8">CONTACT US</h2>
        <p className="text-base lg:text-lg mb-2">Better yet, see us in person!</p>
        <p className="text-sm lg:text-base mb-4">
          We love our customers, so feel free to visit during normal business hours.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 text-white px-6 py-2 rounded-full inline-flex items-center mb-4"
        >
          <i className="fab fa-whatsapp mr-2" /> Contact Us on WhatsApp
        </button>

        {showWhatsAppForm && <p>Send us a message at 8104597978 on WhatsApp!</p>}
        <br></br>
        <button
          onClick={handleInstagramClick}
          className="bg-pink-500 text-white px-6 py-2 rounded-full inline-flex items-center mb-4"
        >
          <i className="fab fa-instagram mr-2" /> Contact Us on Instagram
        </button>

        
      </div>
    </section>
  );
};

export default ContactUsSection;
