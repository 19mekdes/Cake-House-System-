import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
export interface Cake {
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

interface CardProps {
  item: Cake;
  onQuickView?: (cake: Cake) => void;
}

const Card: React.FC<CardProps> = ({ item, onQuickView }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  // Reusable notification logic from FeaturedCakes.tsx (abstracted slightly)
  const handleAddToCart = () => {
    
    addToCart(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Image Container with advanced zoom and overlay */}
      <div className="relative overflow-hidden h-64 bg-linear-to-br from-pink-100 to-purple-100 rounded-t-2xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay which appears on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Dynamic Badge (like Best Seller or Customer Favorite) */}
        {item.badge && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-4 left-4 z-10"
          >
            <span className="bg-linear-to-r from-pink-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {item.badge}
            </span>
          </motion.div>
        )}

        {/* New Badge */}
        {item.isNew && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-linear-to-r from-green-400 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              ✨ New
            </span>
          </div>
        )}

        {/* Animated Quick Action Buttons appearing on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-3 z-10"
        >
          {onQuickView && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onQuickView(item)}
              className="bg-white text-pink-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-pink-500 hover:text-white transition-colors"
            >
              Quick View
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="bg-linear-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Add to Cart
          </motion.button>
        </motion.div>

        {/* Favorite Button (static but style matches home page) */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-colors z-10"
          aria-label="Add to favorites"
        >
          <span className="text-xl">❤️</span>
        </motion.button>
      </div>

      {/* Content Area with refined typography */}
      <div className="p-5 grow">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-500 transition-colors mb-2">
          {item.name}
        </h3>
        
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-pink-500">
              {item.price}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
              <span className="text-xs text-gray-400">({item.reviews})</span>
            </div>
          </div>
          
          {/* Main Add to Cart Button (matches the screenshot style, used when overlay is hidden) */}
          <button
            onClick={handleAddToCart}
            className="bg-linear-to-r from-pink-500 to-red-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center"
            aria-label={`Add ${item.name} to cart`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.4 6.4M17 13l2.4 6.4M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </button>
        </div>

        {/* Unified Popularity Bar matching homepage */}
        {item.isPopular && (
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
  );
};

export default Card;