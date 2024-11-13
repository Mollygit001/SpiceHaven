import React from 'react';
import { useCart } from './CartContext';

const Bag = () => {
    const { cartItems, clearCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gray-100'>
            <h1 className='mb-6 text-4xl font-bold'>Your Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div className='w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg'>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className='flex items-center justify-between py-4 border-b'>
                                <div className='flex items-center'>
                                    <img src={item.image} alt={item.name} className='w-20 h-20 mr-4 rounded-lg' />
                                    <div>
                                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                                        <p className='text-gray-600'>${item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                </div>
                                <p className='text-xl font-bold'>${(item.price * item.quantity).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center justify-between pt-4 mt-6 border-t'>
                        <h2 className='text-2xl font-bold'>Total:</h2>
                        <p className='text-2xl font-bold text-green-600'>${calculateTotal()}</p>
                    </div>
                    <div className='flex justify-end gap-4 mt-6'>
                        <button onClick={clearCart} className='px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600'>Clear Cart</button>
                        <button className='px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'>Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <p className='text-2xl text-gray-600'>Your cart is empty. Start adding some spices!</p>
            )}
        </div>
    );
};

export default Bag;
