import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ReviewCard = ({ rating, review, authorName, authorImage }) => {



  return (
    <div className="bg-white p-8 rounded shadow-md h-full">
      <div className="star-rating flex items-center mb-5">
        {[...Array(rating)].map((_, index) => (
          <i key={index} className="fas fa-star text-yellow-400"></i>
        ))}
      </div>
      <p className="leading-relaxed mb-6 text-gray-700">
        {review}
      </p>
      <div className="testimonial-author inline-flex items-center">
        <img 
          alt="testimonial" 
          src={authorImage} 
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" 
        />
        <div className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">{authorName}</span>
        </div>
      </div>
    </div>
  );
};

const ReviewCardSection = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(10);
  const prependNumber = useRef(1);
  const man = require('./images/img1.png')
  const woman = require('./images/img2.png')
  const initialReviews = [
    {
      rating: 5,
      review: "An honest and sincere practitioner of homeopathy. She seems to her the diagnosis and medicines correct each time. I've made a complete switch from allopathy to homeopathy",
      authorName: "Ibrahim chaudhary",
      authorImage: man
    },
    {
      rating: 5,
      review: "The medicines dramatically helped My 2 year daughter who was constantly down with a runny nose and cough. We tried everything, and also a few homeopaths here in Dubai but nothing worked.",
      authorName: "Amreeta Kaur",
      authorImage: woman
    },
    {
      rating: 5,
      review: "Overall satisfactory experience right from the staff member to Dr Kausar Agha. Truly appreciated. May God give more and more success and opportunity to serve the humanity. Highly recommended for all age group.",
      authorName: "Mrs. Virani",
      authorImage: woman
    },
    {
      rating: 5,
      review: "She is the best doctor. Also the clinic is very accessible and good environment",
      authorName: "Alkama Rajan",
      authorImage: woman
    },
    {
      rating: 5,
      review: "She is a skilled homoeopathic physician. She treats me very well and looks after me as if I were a friend. Her nonverbal, kind words, and faith in her patient all contribute to the treatment's effectiveness. I strongly suggest it.",
      authorName: "Muskan Chevelwalla",
      authorImage: woman
    },
    {
      rating: 5,
      review: "Excellent doctor .. apt advice..the beautiful smile of the doctor keeps the illness away🌹",
      authorName: "Sarwar Shroff",
      authorImage: woman
    },
    {
      rating: 5,
      review: "I am truly amazed by the results and highly recommend Dr Kausar Aga to anyone seeking natural and effective healing",
      authorName: "Susan Shaikh",
      authorImage: woman
    }
  ];

  const generatePlaceholderReview = (number) => ({
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4 and 5
    review: `Patient testimonial ${number} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    authorName: `Patient ${number}`,
    authorImage: "/api/placeholder/48/48"
  });

  const [reviews, setReviews] = useState([
    ...initialReviews,
    ...Array.from({ length: 0 }).map((_, index) => generatePlaceholderReview(index + 4))
  ]);


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
          <Swiper
            modules={[Virtual, Navigation, Pagination, Autoplay]}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            virtual
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="review-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={`review-${index}`} virtualIndex={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default ReviewCardSection;