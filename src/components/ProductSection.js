import React, { forwardRef } from 'react';
import SpiceCard from './SpiceCard';

import spice1 from '../assets/spice.jpeg';
import spice2 from '../assets/spice.jpeg';
import spice3 from '../assets/spice.jpeg';

const ProductSection = forwardRef((props, ref) => {
  const spices = [
    { image: spice1, title: 'Turmeric Powder', description: 'Fresh and pure turmeric powder.', rating: 3.5, price: 12.5 },
    { image: spice2, title: 'Chili Powder', description: 'Spicy and vibrant red chili powder.', rating: 4.5, price: 12.5 },
    { image: spice3, title: 'Cumin Seeds', description: 'Aromatic and flavorful cumin seeds.', rating: 4.5, price: 12.5 },
    { image: spice1, title: 'Turmeric Powder', description: 'Fresh and pure turmeric powder.', rating: 3.5, price: 12.5 },
    { image: spice2, title: 'Chili Powder', description: 'Spicy and vibrant red chili powder.', rating: 4.5, price: 12.5 },
    { image: spice3, title: 'Cumin Seeds', description: 'Aromatic and flavorful cumin seeds.', rating: 4.5, price: 12.5 },
  ];

  return (
    <section ref={ref} className="py-24 text-center bg-gray-50"> {/* Increased top padding */}
      <h2 className="mb-8 text-3xl font-bold text-amber-900">
        <span className="px-4 border-2 border-green-700 w-[300px] rounded-lg">
          Recent Purchase
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {spices.map((spice, index) => (
          <SpiceCard key={index} {...spice} />
        ))}
      </div>
    </section>
  );
});

export default ProductSection;
