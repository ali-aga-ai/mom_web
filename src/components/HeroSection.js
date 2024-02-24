// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-background h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 md:mb-8">Homeopathy Helps</h1>
      <p className="text-lg md:text-xl mb-4">Discover the Healing Power of Homeopathy with Us.</p>
      <button className="bg-white text-gray-900 py-2 px-6 font-bold uppercase tracking-wider hover:bg-gray-200 transition duration-300">
        Schedule a Consultation
      </button>
    </div>
  );
};

export default HeroSection;
