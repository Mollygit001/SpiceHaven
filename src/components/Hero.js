import React, { useState, useEffect } from 'react';

const Hero = ({ onShopNowClick }) => {
  const images = ['/p1.jpg', '/p2.jpg', '/p3.jpg']; // Array of background image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="flex items-center justify-end h-screen px-6 text-white transition-all duration-1000 bg-center bg-cover"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Text Section */}
      <div className='flex flex-col items-center w-1/2 p-8'>
        <div className="w-max">
          <h1 className="pr-5 mr-2 overflow-hidden text-5xl font-bold text-white border-r-4 animate-typing whitespace-nowrap border-r-white">
            Choose from the best
          </h1>
        </div>
        <p className="mb-6 text-lg">
          Discover the finest spices handpicked for your culinary adventures.
        </p>
        <button
          onClick={onShopNowClick}
          className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
