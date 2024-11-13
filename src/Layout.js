import React from 'react'
<<<<<<< HEAD
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './components/cart/CartContext';
=======
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './components/CartContext';
>>>>>>> 1bc2ba124a00c784dae9f8c281da122a7a6db06f

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