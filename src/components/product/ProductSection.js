import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Package2 } from 'lucide-react';
import SpiceCard from './SpiceCard';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const ProductSection = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [quantityType, setQuantityType] = useState('grams');

  const spices = [
    {
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070",
      title: 'Turmeric Powder',
      description: 'Fresh and pure turmeric powder from the finest Indian farms.',
      price: 12.5,
      origin: 'India',
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b",
      title: 'Chili Powder',
      description: 'Spicy and vibrant red chili powder with intense flavor.',
      price: 15.5,
      origin: 'Mexico',
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c",
      title: 'Cumin Seeds',
      description: 'Aromatic and flavorful cumin seeds for authentic taste.',
      price: 10.5,
      origin: 'Turkey',
      rating: 4.7
    },
    {
      image: "https://img.freepik.com/free-photo/spices-are-placed-spoon-placed-cement-ground_1150-20774.jpg",
      title: 'Coriander Powder',
      description: 'Premium coriander powder with a fresh, earthy aroma.',
      price: 8.5,
      origin: 'India',
      rating: 4.6
    },
    {
      image: "https://img.freepik.com/free-photo/wooden-plate-full-dried-pepper-white-background_114579-77244.jpg",
      title: 'Black Pepper',
      description: 'Whole black peppercorns with bold and robust flavor.',
      price: 18.0,
      origin: 'Vietnam',
      rating: 4.9
    },
    {
      image: "https://img.freepik.com/free-photo/close-up-pumpkin-seeds_53876-33638.jpg",
      title: 'Cardamom Pods',
      description: 'Fragrant green cardamom pods, perfect for tea and desserts.',
      price: 25.0,
      origin: 'Guatemala',
      rating: 4.8
    },
    {
      image: "https://img.freepik.com/free-photo/stack-cinnamon_144627-444.jpg",
      title: 'Cinnamon Sticks',
      description: 'Rich and aromatic cinnamon sticks sourced from Sri Lanka.',
      price: 22.5,
      origin: 'Sri Lanka',
      rating: 4.9
    },
    {
      image: "https://img.freepik.com/free-photo/top-view-dried-cloves-with-wooden-spoon_140725-9082.jpg",
      title: 'Cloves',
      description: 'Strong and fragrant cloves for enhancing savory and sweet dishes.',
      price: 30.0,
      origin: 'Indonesia',
      rating: 4.7
    },
    {
      image: "https://img.freepik.com/premium-photo/nutmeg-isolated-white-dry-whole-nutmeg-wooden-bowl-close-up_157837-2063.jpg",
      title: 'Nutmeg',
      description: 'Fresh and whole nutmeg with a warm, sweet flavor.',
      price: 20.0,
      origin: 'Grenada',
      rating: 4.6
    },
    {
      image: "https://img.freepik.com/premium-photo/fenugreek-seeds-as-background-close-up-texture_136354-4895.jpg",
      title: 'Fenugreek Seeds',
      description: 'Nutty and slightly sweet fenugreek seeds for traditional recipes.',
      price: 6.5,
      origin: 'India',
      rating: 4.5
    },
    {
      image: "https://img.freepik.com/free-photo/high-angle-plate-with-star-anise_23-2148426142.jpg",
      title: 'Star Anise',
      description: 'Beautiful and aromatic star anise for an exotic touch.',
      price: 28.0,
      origin: 'China',
      rating: 4.8
    },
    {
      image: "https://img.freepik.com/free-photo/black-sesame-dark-background_1150-45234.jpg",
      title: 'Mustard Seeds',
      description: 'Zesty and pungent mustard seeds for an extra kick.',
      price: 5.5,
      origin: 'Canada',
      rating: 4.6
    }
  ];
  

  const dryFruits = [
    {
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=2070",
      title: 'Premium Almonds',
      description: 'Premium quality almonds from California.',
      price: 25.0,
      origin: 'USA',
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1600189020840-e9918c25269d?q=80&w=2070",
      title: 'Persian Walnuts',
      description: 'Fresh and crunchy walnuts from Persian gardens.',
      price: 30.0,
      origin: 'Iran',
      rating: 4.8
    }
  ];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    console.log(`Added ${selectedItem.title} - ${quantity} ${quantityType}`);
    setSelectedItem(null);
  };

  const calculateTotal = () => {
    if (!selectedItem) return 0;
    const basePrice = selectedItem.price;
    const multiplier = quantityType === 'kgs' ? 1000 : quantityType === 'lbs' ? 453.592 : 1;
    return ((basePrice / 100) * quantity * multiplier).toFixed(2);
  };

  return (
    <section ref={ref} className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container px-6 mx-auto">
        <div className="flex justify-center gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory('spices')}
            className="w-full max-w-sm p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-[300px] flex flex-col items-center justify-center group"
          >
            <Package2 className="w-16 h-16 mb-4 transition-colors text-amber-700 group-hover:text-amber-800" />
            <h2 className="text-4xl font-extrabold text-center text-amber-900">Spices</h2>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory('dryFruits')}
            className="w-full max-w-sm p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-[300px] flex flex-col items-center justify-center group"
          >
            <ShoppingBag className="w-16 h-16 mb-4 text-green-700 transition-colors group-hover:text-green-800" />
            <h2 className="text-4xl font-extrabold text-center text-green-900">Dry Fruits</h2>
          </motion.div>
        </div>
      </div>

      {/* Category Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center p-4 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="relative w-full max-w-4xl p-8 mx-auto overflow-y-auto shadow-2xl bg-white/90 rounded-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ maxHeight: '85vh' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  {selectedCategory === 'spices' ? 'Spices Collection' : 'Dry Fruits Collection'}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
                {(selectedCategory === 'spices' ? spices : dryFruits).map((item, index) => (
                  <SpiceCard key={index} {...item} onClick={() => setSelectedItem(item)} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="relative w-full max-w-2xl p-8 mx-auto overflow-hidden shadow-2xl bg-white/95 rounded-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedItem(null)}
                  className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-full top-4 left-4 bg-amber-600">
                    {selectedItem.origin}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                    <p className="mb-4 text-gray-600">{selectedItem.description}</p>
                    
                    <div className="p-4 mb-6 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-gray-700">Quantity Type</span>
                        <select
                          value={quantityType}
                          onChange={(e) => setQuantityType(e.target.value)}
                          className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="grams">Grams</option>
                          <option value="kgs">Kilograms</option>
                          <option value="lbs">Pounds</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-700">Quantity</span>
                        <div className="flex items-center space-x-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={decrementQuantity}
                            className="p-1 text-gray-500 bg-white rounded-full hover:bg-gray-100"
                          >
                            <Minus className="w-5 h-5" />
                          </motion.button>
                          <span className="w-12 font-semibold text-center">{quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={incrementQuantity}
                            className="p-1 text-gray-500 bg-white rounded-full hover:bg-gray-100"
                          >
                            <Plus className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-700">Total Price:</span>
                      <span className="text-2xl font-bold text-amber-600">${calculateTotal()}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCart}
                      className="w-full py-3 text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default ProductSection;