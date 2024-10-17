import React from 'react'

const HealthPartnerSection = ({ handleButtonClick }) => {
  const image = require('./images/logo.jpeg')

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Left side with image */}
      <div className='w-full md:w-1/2'>
        <img
          src={image}
          alt='Medical professional in a hospital setting'
          className='w-full h-[300px] md:h-screen object-cover' // Reduced height on mobile
        />
      </div>
      {/* Right side with content */}
      <div className='w-full md:w-1/2 text-black flex flex-col justify-between p-8 md:p-20 doc_bg'>
        <div className='flex justify-between items-center'>
          {/* Content for the section */}
        </div>
        <div className='mt-5 md:mt-10'>
          <h2 className='text-3xl md:text-5xl font-bold mb-3 md:mb-5'>
            YOUR PARTNER IN HEALTH
          </h2>
          <p className='text-lg md:text-xl mb-5 md:mb-10'>
            Personalized care that puts you first
          </p>
          <button
            className='bg-transparent border border-black text-black py-2 px-6 md:py-2 md:px-10 hover:bg-white hover:text-black transition duration-300'
            onClick={() => handleButtonClick('cal')}
          >
            SCHEDULE A VISIT
          </button>
        </div>
        <div>{/* Additional content */}</div>
      </div>
    </div>
  )
}

export default HealthPartnerSection
