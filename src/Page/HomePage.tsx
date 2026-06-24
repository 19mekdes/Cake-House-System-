// src/Page/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Components
import Hero from '../components/homepage/Hero';
import FeaturedCakes from '../components/homepage/FeaturedCakes';
import Testimonials from '../components/homepage/Testimonials';

// Import Types
// Import Types
import type { Cake } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Navigation Handlers
  const handleOrderNow = () => {
    navigate('/order');
  };

  const handleViewMenu = () => {
    navigate('/menu');
  };

  const handleViewAllCakes = () => {
    navigate('/menu');  // ← Navigate to menu page
  };

  const handleAddToCart = (cake: Cake) => {
    console.log('Added to cart:', cake);
  };

  const handleQuickView = (cake: Cake) => {
    console.log('Quick view:', cake);
    navigate(`/cake/${cake.id}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
      <main className="grow">
        <Hero 
          onOrderNow={handleOrderNow}
          onViewMenu={handleViewMenu}
        />
        <FeaturedCakes 
          onAddToCart={handleAddToCart}
          onQuickView={handleQuickView}
          onViewAll={handleViewAllCakes}  // ← PASS THIS PROP
        />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage;