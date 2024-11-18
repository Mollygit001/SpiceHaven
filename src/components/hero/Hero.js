// Hero.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel-custom';
import { cn } from '../../utils/utils';
import Testimonials from './Testimonials'; // Import Testimonials component
import { Cover } from '../ui/Cover';
import { NavLink } from 'react-router-dom';

const images = [
  'https://images.unsplash.com/photo-1517646458010-ea6bd9f4a75f',
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
  'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
  'https://images.unsplash.com/photo-1467453678174-768ec283a940',
].map(url => `${url}?auto=format&fit=crop&w=800&q=80`);

const Hero = ({ onShopNowClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FA812F]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container relative grid items-center h-screen max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-center space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-orange-100 rounded-full dark:bg-orange-900/50">
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-800 dark:text-orange-200">Premium Spices Collection</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-50">
            <span className="block">Discover the Art of</span>
            <span className="block mt-2 text-orange-600 ">
              <Cover className='z-1'>Flavor Mastery</Cover>
            </span>
          </h1>

          <p className="max-w-lg text-lg text-gray-600 dark:text-gray-300">
            Explore our curated collection of premium spices, sourced from the world's finest regions
            to elevate your culinary creations.
          </p>
          <NavLink to='/products' >
          <div className="flex items-center gap-4">
            <Button
              onClick={onShopNowClick}
              size="lg"
              className={cn(
                "group relative overflow-hidden bg-orange-600 text-white hover:bg-orange-700",
                "transition-all duration-300 hover:shadow-[0_0_15px_4px_rgba(251,146,60,0.3)]"
              )}
            >
              <ShoppingBag className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          </NavLink>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3]"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full h-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-2xl max-h-[500px]">
                    <img
                      src={image}
                      alt={`Spice collection ${index + 1}`}
                      className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>

      {/* Additional Content for Scrolling */}
      <div className="py-16 bg-gray-100">
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Why Choose Our Spices?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1: Quality Assurance */}
            <div className="relative p-6 overflow-hidden bg-white rounded-lg shadow-lg">
              <div
                className="absolute inset-0 bg-center bg-cover opacity-30"
                style={{
                  backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664302087637-ad5e9b3c5a7e')",
                 // Spice quality and assortment
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="mb-4 text-xl font-semibold">Quality Assurance</h3>
                <p className="text-[#1A1A1D]">
                  Every spice is carefully selected and processed to maintain the highest quality and freshness.
                </p>
              </div>
            </div>

            {/* Card 2: Sustainable Sourcing */}
            <div className="relative p-6 overflow-hidden bg-white rounded-lg shadow-lg">
              <div
                className="absolute inset-0 bg-center bg-cover opacity-30"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09')", // Sustainable farming and spice harvesting
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="mb-4 text-xl font-semibold">Sustainable Sourcing</h3>
                <p className="text-gray-600">
                  Our spices are sourced sustainably from local farmers, supporting ethical practices.
                </p>
              </div>
            </div>

            {/* Card 3: Unmatched Flavor */}
            <div className="relative p-6 overflow-hidden bg-white rounded-lg shadow-lg">
              <div
                className="absolute inset-0 bg-center bg-cover opacity-30"
                style={{
                  backgroundImage: "url('https://plus.unsplash.com/premium_photo-1670574469076-b479fa087adb')", // Vibrant and flavorful spice arrangement
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="mb-4 text-xl font-semibold">Unmatched Flavor</h3>
                <p className="text-gray-600">
                  Each spice is packed with rich, authentic flavors that elevate any dish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-16 bg-orange-600">
        <div className="container max-w-6xl px-4 mx-auto text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Our Customers Love Us!</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            "The spices from this collection are exceptional! They’ve transformed my cooking."
          </p>

          {/* Use Testimonials Component */}
          <Testimonials />
          {/* <CanvasRevealEffectDemo/> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
