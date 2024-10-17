import React, { useEffect, useState } from 'react';


const AboutSection = () => {

  const [experience,setExperience] = useState()

  const exp = require('./images/mis.png')
  const edu = require('./images/edu.webp')

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setExperience(currentYear - 2000);
  }, []); 

  return (
    <section className="about-law mt-10 mb-10">
      <div className="container mx-auto">
        <div className="bg-white p-6 md:p-10 lg:p-12 shadow-lg rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-10">
            ABOUT US
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src={exp}
                alt="Legal books and gavel"
              />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden p-3">
              <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-3">
                Experience
              </h3>
              <p className="text-gray-600">
              Consulting homeopath and therapist with {experience} years of experience in women and children's health. Practicing doctor with expertise in REBT therapy for {experience - 8} years. Conducted life skill workshops as a trainer at Highbrow Academy. Former contributor and ex-sub-editor at the National Journal of Homeopathy. Bringing {experience - 8} years of dedicated psychotherapeutic practice to enhance well-being              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8">
            <div className="w-full md:w-1/2 overflow-hidden p-3">
              <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-3">
                Education
              </h3>
              <p className="text-gray-600">
    <ul>
      {[
        "Bachelor of Homeopathic Medicine and Surgery (BHMS) in 2000 from CMPH, Mumbai.",
        "Post Graduate Diploma in Counselling Psychology (PGDCP) in 2001 from Xavier's Institute of Counselling Psychology.",
        "MSc in Psychology in 2006 from Madras University.",
        "Primary and Advanced Program in Rational Emotive Behaviour Therapy (REBT) in 2017 from In Vivo (Albert Ellis Institute, New York).",
      ].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </p>
</div>
            <div className="w-full md:w-1/2">
              <img
                className="w-full h-auto rounded-lg"
                src={edu}
                alt="Law professionals discussing over a laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
