import React, { useState } from 'react';
import { useCart } from './CartContext';

const SpiceCard = ({ image, title, description, basePrice = 1000, rating = 0 }) => {
    const [quantity, setQuantity] = useState(1);
    const [quantityType, setQuantityType] = useState("Kg");
    const { addItemToCart } = useCart();

    const getPrice = () => {
        switch (quantityType) {
            case "Kg":
                return basePrice * quantity;
            case "grams":
                return (basePrice / 1000) * quantity;
            case "packet":
                return basePrice * 0.5 * quantity;
            default:
                return basePrice;
        }
    };

    const handleAddToCart = () => {
        addItemToCart({
            id: Date.now(), // or a unique ID for each product
            name: title,
            price: getPrice(),
            quantity,
            image
        });
        alert(`Added ${quantity} ${quantityType} of ${title} to the cart!`);
    };


  return (
    <div className="relative max-w-xs p-4 text-center transition-transform transform bg-white border-2 rounded-lg shadow-xl border-amber-900 hover:scale-105">
      
      {/* Conditionally render Bestseller badge */}
      {rating > 4 && (
        <div className="absolute px-2 py-1 text-xs font-semibold text-white rounded-md top-4 left-4 bg-amber-500">
          Bestseller
        </div>
      )}
      
      {/* Spice Image */}
      <img src={image} alt={title} className="object-cover w-full h-48 mb-4 rounded-md" />
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-amber-900">{title}</h3>
      
      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {Array(Math.floor(rating)).fill().map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.76 3.44 1.1-6.41-4.65-4.53 6.42-.93L10 1.3l2.89 5.84 6.42.93-4.65 4.53 1.1 6.41L10 15z" />
          </svg>
        ))}
      </div>

      {/* Description */}
      <p className="mt-2 text-gray-600">{description}</p>
      
      {/* Price with Rupee Symbol */}
      <p className="mt-2 text-lg font-semibold text-green-700">₹ {getPrice()}</p>

      {/* Quantity Input and Type Selection */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <label htmlFor="quantity" className="text-gray-600">Qty:</label>
        
        {/* Quantity Number Input */}
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="w-16 p-1 text-center border border-gray-300 rounded-md"
        />
        
        {/* Quantity Type Dropdown */}
        <select
          value={quantityType}
          onChange={(e) => setQuantityType(e.target.value)}
          className="p-1 text-center border border-gray-300 rounded-md"
        >
          <option value="Kg">Kg</option>
          <option value="grams">grams</option>
          <option value="packet">packet</option>
        </select>
      </div>

      {/* Shop and Add to Cart Buttons */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 transition-colors duration-200"
        >
          Shop
        </button>
        <button
          type="button"
          onClick={handleAddToCart}
          className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpiceCard;
