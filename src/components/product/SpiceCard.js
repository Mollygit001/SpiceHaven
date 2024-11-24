import React, { useState } from 'react';
import { useCart } from '../cart/CartContext';
import CustomAlert from './CustomAlert';

const SpiceCard = ({ image, title, description, basePrice = 1000, rating = 0 }) => {
    const [quantity, setQuantity] = useState(1);
    const [quantityType, setQuantityType] = useState("Kg");
    const { addItemToCart } = useCart();
    const [alertMessage, setAlertMessage] = useState('');

    const getUnitPrice = () => {
        // Calculate price per unit based on quantity type
        switch (quantityType) {
            case "Kg":
                return basePrice;
            case "grams":
                return basePrice / 1000;
            case "packet":
                return basePrice * 0.5;
            default:
                return basePrice;
        }
    };

    const handleAddToCart = () => {
        const unitPrice = getUnitPrice();
        addItemToCart({
            id: Date.now(),
            name: title,
            price: unitPrice, // Store unit price for quantity calculation in the cart
            quantity,
            quantityType,
            image
        });
        setAlertMessage(`Added ${quantity} ${quantityType} of ${title} to the cart!`);
    };

    return (
        <div className="relative max-w-xs p-4 text-center transition-transform transform bg-white border-2 rounded-lg shadow-xl border-amber-900 hover:scale-105">
            {rating > 4 && (
                <div className="absolute px-2 py-1 mr-2 text-xs font-semibold text-white rounded-md top-4 left-4 bg-amber-500">
                    Bestseller
                </div>
            )}

            <img src={image} alt={title} className="object-cover w-full h-48 mb-4 rounded-md" />
            
            <h3 className="ml-2 text-xl font-semibold text-amber-900">{title}</h3>

            <div className="flex justify-center mt-2">
                {Array(Math.floor(rating)).fill().map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.76 3.44 1.1-6.41-4.65-4.53 6.42-.93L10 1.3l2.89 5.84 6.42.93-4.65 4.53 1.1 6.41L10 15z" />
                    </svg>
                ))}
            </div>

            <p className="mt-2 text-gray-600">{description}</p>

            <p className="mt-2 text-lg font-semibold text-green-700">₹ {basePrice} per {quantityType}</p>
            <p className="text-sm text-gray-500">Selected Quantity: {quantity} {quantityType}</p>

            <div className="flex items-center justify-center gap-2 mt-4">
                <label htmlFor="quantity" className="text-gray-600">Qty:</label>
                
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-16 p-1 text-center border border-gray-300 rounded-md"
                />

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

            {alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />}
        </div>
    );
};

export default SpiceCard;
