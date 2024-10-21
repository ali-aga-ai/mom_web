import React, { useState } from 'react'

const Navbar = () => {
  const [blogDropdown, setBlogDropdown] = useState(false)
  const [galleryDropdown, setGalleryDropdown] = useState(false)

  return (
    <nav className='bg-[#5A9C9E] text-white p-4 border-b border-white relative'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white font-bold text-xl'>Heal And Hope</div>

        <div className='flex space-x-6 items-center'>
          {/* Blog Dropdown */}
          <div className='relative'>
            <button
              className='hover:text-gray-300 flex items-center'
              onClick={() => {
                setBlogDropdown(!blogDropdown)
                setGalleryDropdown(false)
              }}
            >
              Blogs
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  blogDropdown ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {blogDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10'>
                <a
                  href='/blogs/health'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Individualized Treatment Plans
                </a>
                <a
                  href='/blogs/wellness'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Natural Remedies
                </a>
                <a
                  href='/blogs/lifestyle'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Preventive Care
                </a>
                <a
                  href='/blogs/lifestyle'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Holistic Approach to Wellness
                </a>
              </div>
            )}
          </div>

          {/* Gallery Dropdown */}
          <div className='relative'>
            <button
              className='hover:text-gray-300 flex items-center'
              onClick={() => {
                setGalleryDropdown(!galleryDropdown)
                setBlogDropdown(false)
              }}
            >
              Gallery
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  galleryDropdown ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {galleryDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10'>
                <a
                  href='/gallery/events'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Our Clinic
                </a>
                <a
                  href='/gallery/success-stories'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Success Stories
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
