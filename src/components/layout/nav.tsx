import React from 'react';
const Nav: React.FC = () => {
  return (
    <nav className="bg-orange-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-orange-600">
          Cake House
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
          <li><a href="/menu" className="hover:text-orange-500 transition">Menu</a></li>
          <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
          <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>

        {/* Action Button */}
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Nav;