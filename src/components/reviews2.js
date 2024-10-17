import React from 'react';
import { useEffect, useState } from 'react';
import Test from './Test' // Import your Test component
import Test2 from './Test2' // Import your Test component

// Custom hook for device detection
const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};

// Component to handle conditional rendering
const ResponsiveReviews = ({ MobileVersion, DesktopVersion }) => {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </>
  );
};

// Usage example (you can export this instead if you prefer)
const ReviewsContainer = () => {
  return (
    <ResponsiveReviews
      MobileVersion={Test}  // Your mobile component
      DesktopVersion={Test2}  // Your desktop component
    />
  );
};

export default ReviewsContainer;