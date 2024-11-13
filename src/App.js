import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Hero onShopNowClick={scrollToProducts} />
      <ProductSection ref={productsRef} />
      <Footer />
    </div>
  );
}

export default App;
