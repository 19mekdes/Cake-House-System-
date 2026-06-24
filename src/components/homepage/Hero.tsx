// src/components/homepage/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOrderNow?: () => void;
  onViewMenu?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Google Images/Unsplash */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Decorative Floating Cake Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating Cake 1 - Top Right */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-32 h-32 rounded-2xl shadow-2xl opacity-30 hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop&crop=center"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Floating Cake 2 - Bottom Left */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-10 w-40 h-40 rounded-2xl shadow-2xl opacity-25 hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=200&fit=crop&crop=center"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Floating Cake 3 - Middle Right */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 right-20 w-24 h-24 rounded-2xl shadow-2xl opacity-20 hidden xl:block"
        >
          <img
            src="https://images.unsplash.com/photo-1614707267537-b85a0c2ae708?w=200&h=200&fit=crop&crop=center"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Floating Cake 4 - Bottom Right */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-40 right-40 w-28 h-28 rounded-2xl shadow-2xl opacity-20 hidden xl:block"
        >
          <img
            src="https://images.unsplash.com/photo-1611394716233-7c0b6aa5506c?w=200&h=200&fit=crop&crop=center"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-6 border border-white/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>
            <span className="text-sm font-semibold">Freshly Baked Daily</span>
            <span className="w-px h-4 bg-white/20"></span>
            <span className="text-sm">⭐ 4.9 Rating</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cursive text-white mb-6 leading-tight"
          >
            Welcome to{' '}
            <span className="text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Cake House
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            Indulge in our handcrafted cakes made with love and the finest ingredients. 
            Every bite tells a story of perfection and passion for baking.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onOrderNow}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold 
                       shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 
                       transition-all duration-300 transform hover:scale-105 
                       flex items-center gap-2 group"
            >
              Order Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button
              onClick={onViewMenu}
              className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 
                       text-white rounded-full font-semibold border border-white/30
                       transition-all duration-300 transform hover:scale-105 
                       flex items-center gap-2 group"
            >
              View Menu
              <span className="text-xl group-hover:rotate-12 transition-transform">🍰</span>
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {[
              { number: '500+', label: 'Happy Customers', icon: '😊', color: 'from-pink-500/20 to-pink-600/20' },
              { number: '100+', label: 'Cake Varieties', icon: '🎂', color: 'from-purple-500/20 to-purple-600/20' },
              { number: '4.9★', label: 'Average Rating', icon: '⭐', color: 'from-yellow-500/20 to-yellow-600/20' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-md rounded-2xl p-4 text-center border border-white/20`}
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-5"></div>
    </section>
  );
};

export default Hero;