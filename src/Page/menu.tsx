import Card from '../components/cards/card';
const menuItems = [
  { id: 1, title: "Chocolate Cake", price: "$25.00", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
  { id: 2, title: "Strawberry Cupcake", price: "$5.00", image: "https://images.unsplash.com/photo-1587668178277-295251f90016?w=500" },
  { id: 3, title: "Vanilla Delight", price: "$20.00", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500" },
];

function Menu() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Delicious Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;