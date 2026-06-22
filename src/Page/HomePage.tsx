// 📁 src/Page/HomePage.tsx
import React from 'react';
import Navbar from '../components/layout/nav';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
      <Navbar />
      
      <main className="grow container mx-auto px-4 py-12">
        {/* Hero Section - Simple */}
        <div className="text-center py-12">
          <h1 className="text-5xl md:text-6xl font-cursive text-cake-primary mb-4">
            Welcome to Cake House 🎂
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delicious handmade cakes made with love and the finest ingredients.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="btn-primary">Order Now</button>
            <button className="btn-secondary">View Menu</button>
          </div>
        </div>

        {/* Featured Cakes - Simple */}
        <div className="py-12">
          <h2 className="text-3xl font-cursive text-center mb-8">
            Our <span className="text-gradient">Cakes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Chocolate Dream", price: "$35", emoji: "🍫" },
              { name: "Strawberry Bliss", price: "$40", emoji: "🍓" },
              { name: "Vanilla Paradise", price: "$30", emoji: "🍦" },
              { name: "Red Velvet", price: "$38", emoji: "❤️" }
            ].map((cake, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
                <div className="text-6xl mb-4">{cake.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{cake.name}</h3>
                <p className="text-cake-primary font-bold text-2xl">{cake.price}</p>
                <button className="mt-4 bg-cake-primary text-white px-6 py-2 rounded-full hover:bg-red-500 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers - Simple */}
        <div className="py-12">
          <h2 className="text-3xl font-cursive text-center mb-8">
            Special <span className="text-gradient">Offers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Weekend Special", discount: "50% OFF", color: "from-pink-400 to-red-400" },
              { title: "New Customer", discount: "FREE SLICE", color: "from-blue-400 to-purple-400" },
              { title: "Birthday Month", discount: "20% OFF", color: "from-yellow-400 to-orange-400" }
            ].map((offer, index) => (
              <div key={index} className={`bg-linear-to-r ${offer.color} rounded-2xl p-8 text-white text-center shadow-xl`}>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <div className="text-4xl font-bold">{offer.discount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials - Simple */}
        <div className="py-12">
          <h2 className="text-3xl font-cursive text-center mb-8">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah", comment: "Best cakes in town!", avatar: "👩" },
              { name: "Michael", comment: "Amazing quality!", avatar: "👨" },
              { name: "Emma", comment: "Absolutely delicious!", avatar: "👩" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-2">{testimonial.avatar}</div>
                <p className="text-gray-600">"{testimonial.comment}"</p>
                <p className="font-bold mt-2">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;