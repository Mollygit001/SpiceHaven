import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './components/cart/CartContext';

const Layout = () => {
  return (
    <CartProvider>
    <Navbar />
    <Outlet />
    <Footer />
    </CartProvider>
  )
}

export default Layout