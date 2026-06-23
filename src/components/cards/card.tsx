import React from 'react';
interface CardProps {
  title: string;
  price: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-orange-600 font-semibold mt-1">{price}</p>
        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;