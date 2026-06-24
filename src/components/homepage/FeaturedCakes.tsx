// src/components/homepage/FeaturedCakes.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Cake {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  badge?: string | null;
}

interface FeaturedCakesProps {
  onAddToCart?: (cake: Cake) => void;
  onQuickView?: (cake: Cake) => void;
  onViewAll?: () => void;
}

const FeaturedCakes: React.FC<FeaturedCakesProps> = ({ 
  onAddToCart, 
  onQuickView,
  onViewAll
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  
  // ✅ Safely use cart context
  try {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.warn('Cart context not available, using fallback');
  }

  // OR use it directly with error handling:
  // const { isInCart } = useCart();

  const cakes: Cake[] = [
    {
      id: 1,
      name: "Chocolate Dream",
      price: "$35.00",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 128,
      description: "Rich chocolate cake with silky ganache",
      category: "chocolate",
      isPopular: true,
      badge: "⭐ Best Seller"
    },
    {
      id: 2,
      name: "Strawberry Bliss",
      price: "$40.00",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 96,
      description: "Fresh strawberries with creamy frosting",
      category: "fruit",
      isNew: true,
      badge: "✨ New"
    },
    {
      id: 3,
      name: "Vanilla Paradise",
      price: "$30.00",
      image: "https://i.pinimg.com/1200x/52/00/eb/5200eb70b472324cf6978bbc10aac5be.jpg",
      rating: 4.7,
      reviews: 84,
      description: "Classic vanilla with buttercream",
      category: "classic",
      badge: null
    },
    {
      id: 4,
      name: "Red Velvet Dream",
      price: "$38.00",
      image: "https://i.pinimg.com/736x/3f/ed/03/3fed031005e9753f12cfda2500ddd246.jpg",
      rating: 4.9,
      reviews: 156,
      description: "Cream cheese frosting delight",
      category: "classic",
      isPopular: true,
      badge: "❤️ Customer Favorite"
    }
  ];

  const handleAddToCart = (cake: Cake) => {
    setNotification(`🎉 Added ${cake.name} to cart!`);
    setTimeout(() => setNotification(null), 3000);
    if (onAddToCart) {
      onAddToCart(cake);
    }
  };

  const handleQuickView = (cake: Cake) => {
    if (onQuickView) onQuickView(cake);
  };

  return (
    <section className="py-20 px-4 bg-linear-to-br from-white to-pink-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block text-5xl mb-4"
          >
            🎂
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-cursive mb-4">
            Our <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Featured Cakes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our most popular cakes, crafted with love and the finest ingredients.
            Each cake is a masterpiece of flavor and design.
          </p>
        </motion.div>

        {/* Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              className="fixed bottom-6 right-6 bg-linear-to-r from-pink-500 to-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3"
            >
              <span className="text-2xl">🎉</span>
              <span className="font-semibold">{notification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredId(cake.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-linear-to-br from-pink-100 to-purple-100">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                {cake.badge && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <span className="bg-linear-to-r from-pink-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      {cake.badge}
                    </span>
                  </motion.div>
                )}

                {/* New Badge */}
                {cake.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-linear-to-r from-green-400 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      ✨ New
                    </span>
                  </div>
                )}

                {/* Quick Action Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === cake.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-3 z-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuickView(cake)}
                    className="bg-white text-pink-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    Quick View
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAddToCart(cake)}
                    className="bg-linear-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Add to Cart
                  </motion.button>
                </motion.div>

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-colors z-10"
                  aria-label="Add to favorites"
                >
                  <span className="text-xl">❤️</span>
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {cake.name}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {cake.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-pink-500">
                      {cake.price}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-semibold">{cake.rating}</span>
                      <span className="text-xs text-gray-400">({cake.reviews})</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(cake)}
                    className="bg-linear-to-r from-pink-500 to-red-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    aria-label={`Add ${cake.name} to cart`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.4 6.4M17 13l2.4 6.4M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                  </button>
                </div>

                {/* Popularity Bar */}
                {cake.isPopular && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1.5 rounded-full bg-linear-to-r from-pink-500 to-red-500"
                      ></motion.div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">🔥 Popular choice</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewAll}
            className="px-8 py-4 bg-linear-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Cakes
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCakes;