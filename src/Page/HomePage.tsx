// src/Page/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Components
import Hero from '../components/homepage/Hero';
import FeaturedCakes from '../components/homepage/FeaturedCakes';
import Testimonials from '../components/homepage/Testimonials';

// ✅ Correct import - importing from the file directly
import type { Cake } from '../types/index';

// OR if you want to import everything
// import * as Types from '../types/index';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
  };

  const handleViewMenu = () => {
    navigate('/menu');
  };

  const handleAddToCart = (cake: Cake) => {
    console.log('Added to cart:', cake);
  };

  const handleQuickView = (cake: Cake) => {
    console.log('Quick view:', cake);
    navigate(`/cake/${cake.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
      <main className="flex-grow">
        <Hero 
          onOrderNow={handleOrderNow}
          onViewMenu={handleViewMenu}
        />
        <FeaturedCakes 
          onAddToCart={handleAddToCart}
          onQuickView={handleQuickView}
        />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage;