import React from 'react';
import { useCart } from '../cart/CartContext';

const Bag = () => {
  const { cartItems, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0).toFixed(2);  // Calculate the total price, with a fallback for undefined values
  };

  return (
    <div className='relative flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gray-100'>
      {/* SVG Background */}
      <div className="absolute inset-0 bg-center bg-no-repeat opacity-60" style={{ 
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="10" fill="%23D97706"/><path d="M20,20 L40,40 M60,60 L80,80" stroke="%23EA580C" stroke-width="2"/></svg>')`
      }}></div>

      <h1 className='relative z-10 mb-6 text-4xl font-bold'>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className='relative z-10 w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg'>
          <ul>
            {cartItems.map(item => {
              const price = item.price || 0;
              const quantity = item.quantity || 1;
              const totalPrice = price * quantity;
              return (
                <li key={item.id} className='flex items-center justify-between py-4 border-b'>
                  <div className='flex items-center'>
                    <img src={item.image} alt={item.name} className='w-20 h-20 mr-4 rounded-lg' />
                    <div>
                      <h2 className='text-xl font-semibold'>{item.name}</h2>
                      <p className='text-gray-600'>₹{price.toFixed(2)} x {quantity}</p>
                    </div>
                  </div>
                  <p className='text-xl font-bold'>₹{totalPrice.toFixed(2)}</p>
                </li>
              );
            })}
          </ul>
          <div className='flex items-center justify-between pt-4 mt-6 border-t'>
            <h2 className='text-2xl font-bold'>Total:</h2>
            <p className='text-2xl font-bold text-green-600'>₹{calculateTotal()}</p>
          </div>
          <div className='flex justify-end gap-4 mt-6'>
            <button onClick={clearCart} className='px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600'>Clear Cart</button>
            <button className='px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p className='relative z-10 text-2xl text-gray-600'>Your cart is empty. Start adding some items!</p>
      )}
    </div>
  );
};

export default Bag;
