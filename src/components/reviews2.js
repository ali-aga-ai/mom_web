import React from 'react';

const CustomerTestimonials = () => {

const person1 = require('./img1.png')
const person2 = require('./img2.png')

return (
  <section className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Hear From Our Patients
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
          Don't just take our word for it, see what others are saying.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded shadow-md">
              <div className="star-rating flex items-center mb-5">
                {/* Use font-awesome for stars */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="leading-relaxed mb-6 text-gray-700">
              An honest and sincere practitioner of homeopathy. She seems to her the diagnosis and medicines correct each time. I’ve made a complete switch from allopathy to homeopathy              </p>
              <div className="testimonial-author inline-flex items-center">
                <img alt="testimonial" src={person1} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Ibrahim chaudhary</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded shadow-md">
              <div className="star-rating flex items-center mb-5">
                {/* Use font-awesome for stars */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="leading-relaxed mb-6 text-gray-700">
              The medicines dramatically helped My 2 year daughter who was constantly down with a runny nose and cough. We tried everything, and also a few homeopaths here in Dubai but nothing worked. Dr Kausher took her time to identify the cause and worked on her immunity and gave SOS meds too. Highly recommend!              </p>
              <div className="testimonial-author inline-flex items-center">
                <img alt="testimonial" src={person2} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Amreeta Kaur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default CustomerTestimonials;
