
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-lg shadow-lg mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <span className="text-xl font-cursive text-cake-primary">
              Cake House
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-cake-primary transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-gray-600 hover:text-cake-primary transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-cake-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-cake-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Cake House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;