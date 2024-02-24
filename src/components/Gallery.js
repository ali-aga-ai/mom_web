import React, { useState } from 'react';
import homeopathy from './homeopathy.webp';

const Gallery = () => {
  // Sample array of images, replace with your actual image URLs
  const images = [
    "https://placehold.co/1200x500",
    "https://placehold.co/1200x500/abcdef",
    "https://placehold.co/1200x500/ffcc00"
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery py-12 px-4 text-center">
      <h2 className="text-4xl section-title mb-6">
        Beauty Beyond The Surface: A Gallery of Our Salon's Creativity and Artistry
      </h2>

      {/* Carousel Container */}
      <div className="relative mx-auto" style={{ maxWidth: '1200px' }}>
        <img
          src={images[currentImageIndex]}
          alt="Salon interior with orange chairs and modern design"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
        {/* Left Arrow Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          aria-label="Previous Image"
        >
          <i className="fas fa-chevron-left" />
        </button>
        {/* Right Arrow Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          aria-label="Next Image"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
