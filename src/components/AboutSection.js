import React, { useEffect, useState } from 'react';


const AboutSection = () => {

  const [experience,setExperience] = useState()

  const exp = require('./images/mis.png')
  const edu = require('./images/edu.webp')
  const img = require('./images/logo4.jpeg')

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setExperience(currentYear - 2000);
  }, []); 

  return (
    <section className="bg-[#5A9C9E] about-law p-10 ">
      <div className="container mx-auto">
        <div className="bg-white p-6 md:p-10 lg:p-12 shadow-lg rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-10">
            ABOUT US
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src={img}
                alt="Legal books and gavel"
              />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden p-3">
              
              <p className="text-gray-600">
              Heal and Hope Holistic Health  Centre, led by Dr. Kauser Aga, a renowned homeopath and  psychotherapist with over {experience} years of experience, our center has earned a distinguished reputation for excellence in integrative care.

Dr.  Kauser Aga’s expertise in blending homeopathic treatments with advanced psychotherapeutic techniques has been recognized both nationally and internationally. Her individualisitic approach to each case 
 has  made Heal and Hope Holistic Health a trusted destination for patients seeking transformative, personalized care.

Our global reach ensures that no matter where you are, our expert guidance and support are just a click away.       </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
