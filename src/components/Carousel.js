import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyCarousel.css';

const MyCarousel = () => {
  const img1 = require('./img1.jpeg');
  const img2 = require('./img4.jpeg');
  const img3 = require('./img5.jpeg');
  const img4 = require('./img6.jpeg');
  const img5 = require('./img7.jpeg');

  useEffect(() => {
    // Preload images
    [img1, img2, img3,img4,img5].forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <div className='car_bg'>
<Carousel className="custom-carousel p-3 p-md-6" interval={1500}>

      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img5} alt="Third slide" />
      </Carousel.Item>
  {/* Your Carousel Items */}
  </Carousel>
  </div>
  );
};

export default MyCarousel;
