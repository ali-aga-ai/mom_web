// CalendlyComponent.js
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyComponent = ({ sectionRef }) => {
  return (
    <div className="calender-container text-center" ref={sectionRef}>
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-8">SCHEDULE AN APPOINTMENT</h2>
      <div className="calender-wrapper">
        <InlineWidget url="https://calendly.com/heal_aga/30min" styles={{ minWidth: '320px', height: '580px' }} />
      </div>
    </div>
  );
};

export default CalendlyComponent;
