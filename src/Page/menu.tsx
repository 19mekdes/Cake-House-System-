import Card, { type Cake } from '../components/cards/card';

const menuItems: Cake[] = [
  { 
    id: 1, 
    name: "Chocolate Dream", 
    price: "$35.00", 
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    rating: 4.9,
    reviews: 128,
    description: "Rich chocolate cake with silky ganache.",
    category: "chocolate",
    badge: "⭐ Best Seller",
    isPopular: true
  },
  { 
    id: 2, 
    name: "Strawberry Bliss", 
    price: "$40.00", 
    image: "https://images.unsplash.com/photo-1587668178277-295251f90016?w=500",
    rating: 4.8,
    reviews: 96,
    description: "Fresh strawberries with creamy frosting.",
    category: "fruit",
    isNew: true
  },
  { 
    id: 3, 
    name: "Vanilla Paradise", 
    price: "$30.00", 
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500",
    rating: 4.7,
    reviews: 84,
    description: "Classic vanilla with buttercream.",
    category: "classic"
  },
  { 
    id: 4, 
    name: "Red Velvet Dream", 
    price: "$38.00", 
    image: "https://images.unsplash.com/photo-1614707267537-b85a0c2ae708?w=500",
    rating: 4.9,
    reviews: 156,
    description: "Cream cheese frosting delight.",
    category: "classic",
    badge: "❤️ Customer Favorite",
    isPopular: true
  },
];

function Menu() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Delicious Menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;