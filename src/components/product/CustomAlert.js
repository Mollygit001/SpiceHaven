import React, { useState, useEffect } from 'react';

const CustomAlert = ({ message, onClose }) => {
  const [progress, setProgress] = useState(100); // to track the progress of the loading bar
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 1) {
          clearInterval(timer);
          setIsVisible(false); // hide the alert after 5 seconds
          return 0;
        }
        return prevProgress - 1;
      });
    }, 50); // This will reduce the progress by 1 every 50ms (5 seconds for full disappearance)

    return () => clearInterval(timer);
  }, []);

  return (
    isVisible && (
      <div className="fixed z-50 flex items-center justify-between p-4 text-white rounded-lg shadow-lg right-4 top-16 w-96 bg-amber-900">
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold">{message}</p>
          <div className="relative w-full h-2 mt-2 bg-gray-300 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progress}%`, transition: 'width 0.1s' }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose(); // Callback to close the alert manually
          }}
          className="p-2 ml-4 text-white transition-colors bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-amber-900"
        >
          &times;
        </button>
      </div>
    )
  );
};

export default CustomAlert;
