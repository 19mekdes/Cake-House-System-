import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../ui/CartDrawer'; 

const Nav: React.FC = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-pink-100 p-4 shadow-sm z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Cake House
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-pink-500 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-500 transition-colors">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:text-pink-500 transition-colors">
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          {/* Cart Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors"
          >
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-linear-to-r from-pink-500 to-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isOpen && <CartDrawer onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Nav;