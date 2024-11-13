import React, { useState, useEffect } from 'react';
import { useCart } from '../cart/CartContext'; // Assuming useCart provides addItemToCart and cartItems

const Custom = () => {
  const { addItemToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('spices');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Example items for spices and dry fruits (replace with actual data)
  const spices = [
    { id: 1, name: 'Cumin', price: 100, unit: 'Kg' },
    { id: 2, name: 'Turmeric', price: 120, unit: 'Kg' },
    { id: 3, name: 'Chili Powder', price: 150, unit: 'Kg' },
  ];

  const dryFruits = [
    { id: 1, name: 'Almonds', price: 500, unit: 'Kg' },
    { id: 2, name: 'Cashews', price: 600, unit: 'Kg' },
    { id: 3, name: 'Walnuts', price: 700, unit: 'Kg' },
  ];

  // Function to update selected items and total price
  const addItemToPack = (item, quantity) => {
    setSelectedItems(prevItems => {
      // If the quantity is 0 or less, remove the item from the list
      if (quantity <= 0) {
        return prevItems.filter(existing => existing.id !== item.id);
      }

      // Check if item already exists in the selectedItems list
      const existingItem = prevItems.find(existing => existing.id === item.id);
      if (existingItem) {
        // If item exists, update the quantity
        return prevItems.map(existing =>
          existing.id === item.id
            ? { ...existing, quantity }
            : existing
        );
      }

      // If item doesn't exist, add it with the specified quantity
      return [...prevItems, { ...item, quantity }];
    });
  };

  // Calculate total price based on selected items
  useEffect(() => {
    const total = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [selectedItems]); // Recalculate whenever selectedItems changes

  const handleAddToCart = () => {
    // Ensure selected items and totalPrice are correct before adding to the cart
    addItemToCart({
      id: Date.now(),
      name: 'Custom Pack',
      items: selectedItems,
      totalPrice,  // Pass the calculated total price here
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen text-3xl text-black bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-center">Create Your Own Pack</h1>

        <div className="mb-4">
          <label className="mr-4">Select Category:</label>
          <button
            onClick={() => setSelectedCategory('spices')}
            className={`px-4 py-2 ${selectedCategory === 'spices' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Spices
          </button>
          <button
            onClick={() => setSelectedCategory('dryFruits')}
            className={`px-4 py-2 ${selectedCategory === 'dryFruits' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Dry Fruits
          </button>
        </div>

        <div>
          {selectedCategory === 'spices' ? (
            <>
              <h2 className="text-2xl font-semibold">Select Spices:</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {spices.map(spice => (
                  <div key={spice.id} className="p-4 border rounded-lg shadow-md">
                    <h3 className="text-xl">{spice.name}</h3>
                    <p className="text-lg">₹{spice.price} per {spice.unit}</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="Quantity"
                      onChange={(e) => addItemToPack(spice, parseInt(e.target.value) || 0)}
                      className="p-1 mt-2 border border-gray-300 rounded w-[150px]"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">Select Dry Fruits:</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {dryFruits.map(dryFruit => (
                  <div key={dryFruit.id} className="p-4 border rounded-lg shadow-md">
                    <h3 className="text-xl">{dryFruit.name}</h3>
                    <p className="text-lg">₹{dryFruit.price} per {dryFruit.unit}</p>
                    <input
                      type="number"
                      min="0"
                      placeholder="Quantity"
                      onChange={(e) => addItemToPack(dryFruit, parseInt(e.target.value) || 0)}
                      className="p-1 mt-2 border border-gray-300 rounded w-[150px]"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Total Price: ₹{totalPrice}</h2>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Add Custom Pack to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custom;
