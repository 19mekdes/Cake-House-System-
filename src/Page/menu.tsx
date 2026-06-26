// src/Page/menu.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/cards/card';
import type { Cake } from '../types';

// ✅ EXPORT this so HomePage can import it
// eslint-disable-next-line react-refresh/only-export-components
export const menuItems: Cake[] = [
  { 
    id: 1, 
    name: "Chocolate Dream", 
    price: "$35.00", 
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    rating: 4.9,
    reviews: 128,
    description: "Rich chocolate cake with silky ganache.",
    category: "chocolate",
    badge: "⭐ Best Seller",
    isPopular: true
  },
  { 
    id: 2, 
    name: "Strawberry Bliss", 
    price: "$40.00", 
    image: "https://i.pinimg.com/1200x/80/d1/4e/80d14e962568069c2080d10d4c0785fd.jpg",
    rating: 4.8,
    reviews: 96,
    description: "Fresh strawberries with creamy frosting.",
    category: "fruit",
    isNew: true
  },
  { 
    id: 3, 
    name: "Vanilla Paradise", 
    price: "$30.00", 
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500",
    rating: 4.7,
    reviews: 84,
    description: "Classic vanilla with buttercream.",
    category: "classic"
  },
  { 
    id: 4, 
    name: "Red Velvet Dream", 
    price: "$38.00", 
    image: "https://i.pinimg.com/1200x/06/fc/ec/06fcec053100a4d1e79ee28018d528e3.jpg",
    rating: 4.9,
    reviews: 156,
    description: "Cream cheese frosting delight.",
    category: "classic",
    badge: "❤️ Customer Favorite",
    isPopular: true
  },
];

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Cakes', icon: '🎂' },
    { id: 'chocolate', label: 'Chocolate', icon: '🍫' },
    { id: 'fruit', label: 'Fruit', icon: '🍓' },
    { id: 'classic', label: 'Classic', icon: '🎀' },
  ];

  const filteredCakes = filter === 'all' 
    ? menuItems 
    : menuItems.filter(cake => cake.category === filter);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-yellow-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-cursive mb-4">
            Our <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Menu</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our delicious handcrafted cakes made with love.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${filter === category.id 
                  ? 'bg-linear-to-r from-pink-500 to-red-500 text-white shadow-lg shadow-pink-500/30' 
                  : 'bg-white text-gray-600 hover:bg-pink-50'
                }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCakes.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCakes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <span className="text-6xl block mb-4">🧁</span>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No cakes found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;