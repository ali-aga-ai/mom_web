// ContactUsSection.js
import React, { useState } from 'react';
import Email from './Email';

const ContactUsSection = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleButtonClick = () => {
    setShowEmailForm(true);
  };

  return (
    <section className="contact-us bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-8">CONTACT US</h2>
        <p className="text-base lg:text-lg mb-2">Better yet, see us in person!</p>
        <p className="text-sm lg:text-base mb-4">
          We love our customers, so feel free to visit during normal business hours.
        </p>
        <button onClick={handleButtonClick} className="bg-gray-900 text-white px-6 py-2 rounded-full inline-flex items-center mb-4">
          <i className="fab fa-whatsapp mr-2" />Contact Us on Email
        </button>

        {showEmailForm && <Email />}
        
        <div className="mb-4">
          {/* ... other content */}
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
