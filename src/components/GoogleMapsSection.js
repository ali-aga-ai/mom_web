import React from 'react'
import mapImage from './images/map.png'
import 'font-awesome/css/font-awesome.min.css'

const GoogleMapsSection = () => {
  return (
    <section className='map-section mt-10 mb-20 text-center'>
      <h2 className='text-3xl lg:text-5xl font-bold text-gray-700 mb-8'>
        CHECK OUR DIRECTIONS
      </h2>
      <div className='container mx-auto px-4 lg:px-8'>
        <a
          href='https://maps.app.goo.gl/zprANjXLzM7FTwXe9'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={mapImage}
            alt='Location Map'
            className='w-full h-auto max-w-full'
          />
        </a>
      </div>
      <br></br>
      <h4>
        A-406, Rizvi Mahal. Opposite Bhabha Hospital, Bandra (West). Mumbai
        -400050.{' '}
      </h4>
      <br></br>
      <h5>
        <i className='fa fa-phone' aria-hidden='true'></i>  Contact Number:
        8104597978
      </h5>
    </section>
  )
}

export default GoogleMapsSection
