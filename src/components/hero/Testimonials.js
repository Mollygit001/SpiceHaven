// Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    quote: "The spices from this collection are exceptional! They've transformed my cooking.",
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    quote: "I can't imagine cooking without these spices now. Truly a game-changer!",
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mark Wilson',
    quote: "These spices brought my dishes to life! Highly recommend for any cook.",
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Emily Johnson',
    quote: "Flavors like no other! The best spices I've ever used in my kitchen.",
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  
];

const Testimonials = () => (
  <motion.div
    className="relative overflow-hidden"
    style={{ height: '300px' }} 
  >
    <motion.div
      className="flex gap-8 animate-slider"
      animate={{ x: ['0%', '-100%'] }}
      transition={{
        x: { repeat: Infinity, repeatType: 'loop', duration: 15, ease: 'linear' },
      }}
      style={{ width: `${testimonials.length * 300 * 2}px` }} // Double the width of the total cards
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div key={index} className="flex-none p-6 bg-white shadow-xl w-80 rounded-xl">
          <img
            src={testimonial.image}
            alt={`${testimonial.name}'s portrait`}
            className="w-16 h-16 mx-auto mb-4 rounded-full"
          />
          <p className="text-lg font-semibold text-black">{testimonial.name}</p>
          <p className="mt-2 text-gray-600">{testimonial.quote}</p>
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default Testimonials;
