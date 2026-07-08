import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Card from '../components/cards/card';
import { menuItems } from './menu';
import type { Cake } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  useCart();

  const handleOrderNow = () => {
    navigate('/menu');
  };

  const handleViewMenu = () => {
    navigate('/menu');
  };

  const handleViewAllCakes = () => {
    navigate('/menu');
  };


  const handleQuickView = (cake: Cake) => {
    console.log('Quick view:', cake);
    navigate(`/cake/${cake.id}`);
  };

  const previewCakes = menuItems.slice(0, 4);

  // Testimonials data
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Regular Customer", comment: "The best cakes in town! Always fresh and delicious. My family loves their chocolate cake!", rating: 5, avatar: "👩" },
    { id: 2, name: "Michael Chen", role: "Birthday Party Planner", comment: "Ordered 3 custom cakes for events. Each one was a masterpiece! Highly recommend.", rating: 5, avatar: "👨" },
    { id: 3, name: "Emma Williams", role: "Food Blogger", comment: "I've tried cakes all over the city, and Cake House is definitely #1! The presentation is stunning.", rating: 5, avatar: "👩" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
      <main className="grow">

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
      
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=1920&h=1080&fit=crop&crop=center')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 w-32 h-32 rounded-2xl shadow-2xl opacity-30 hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 w-40 h-40 rounded-2xl shadow-2xl opacity-25 hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=200&fit=crop"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full mb-6 border border-white/30"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
                </span>
                <span className="text-sm font-semibold">Freshly Baked Daily</span>
                <span className="ml-2 text-xs opacity-50">|</span>
                <span className="text-sm">Since 2024</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cursive text-white mb-6 leading-tight"
              >
                Welcome to{' '}
                <span className="text-gradient bg-linear-to-r from-pink-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Cake House
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
              >
                Indulge in our handcrafted cakes made with love and the finest ingredients.
                Every bite tells a story of perfection and passion for baking.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={handleOrderNow}
                  className="px-8 py-4 bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                >
                  Order Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={handleViewMenu}
                  className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full font-semibold border border-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                >
                  View Menu
                  <span className="text-xl group-hover:rotate-12 transition-transform">🍰</span>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
              >
                {[
                  { number: '500+', label: 'Happy Customers', icon: '😊' },
                  { number: '100+', label: 'Cake Varieties', icon: '🎂' },
                  { number: '4.9★', label: 'Average Rating', icon: '⭐' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">{stat.icon}</span>
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {stat.number}
                      </span>
                    </div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/20 to-transparent z-5"></div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-6xl mb-4"
              >
                🍰
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-cursive mb-4">
                Popular <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Cakes</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Discover our most loved cakes, crafted with love and the finest ingredients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {previewCakes.map((cake) => (
                <Card
                  key={cake.id}
                  item={cake}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewAllCakes}
                className="px-8 py-3 bg-linear-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                View All Cakes
                <span className="text-xl">→</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        
        <section className="py-20 px-4 bg-linear-to-br from-pink-50 via-white to-yellow-50">
          <div className="container mx-auto">
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
                ⭐
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-cursive mb-4">
                What Our <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Real reviews from real people who love our cakes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative group"
                >
                  <div className="absolute top-4 right-4 text-6xl opacity-10 text-pink-500">❝</div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-linear-to-r from-pink-400 to-red-400 flex items-center justify-center text-3xl shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-pink-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    "{testimonial.comment}"
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">✓ Verified</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* NEWSLETTER SECTION */}

        <section className="py-16 px-4 bg-linear-to-r from-pink-50 to-yellow-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-5xl mb-4"
              >
                📧
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-cursive mb-4">
                Subscribe to Our <span className="text-gradient bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Newsletter</span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Get updates on new cakes, special offers, and baking tips!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-linear-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe 🎂
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                No spam, unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FLOATING ACTION BUTTON */}

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOrderNow}
          className="fixed bottom-6 right-6 bg-linear-to-r from-pink-500 to-red-500 text-white rounded-full p-4 shadow-2xl z-50 hover:shadow-3xl transition-all duration-300"
          aria-label="Quick Order"
        >
          <span className="text-2xl">🛒</span>
        </motion.button>
      </main>
    </div>
  );
};

export default HomePage;