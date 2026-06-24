// src/Page/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
// Import Components
import Hero from '../components/homepage/Hero';
import FeaturedCakes from '../components/homepage/FeaturedCakes';
import Testimonials from '../components/homepage/Testimonials';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();  // ← Get addToCart from context

  const handleOrderNow = () => {
    navigate('/order');
  };

  const handleViewMenu = () => {
    navigate('/menu');
  };

  const handleViewAllCakes = () => {
    navigate('/menu');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleQuickView = (cake: any) => {
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
          onAddToCart={addToCart}  // ← Pass addToCart from context
          onQuickView={handleQuickView}
          onViewAll={handleViewAllCakes}
        />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage;