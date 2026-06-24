import { useCart } from '../../context/CartContext';
import { FaTrash, FaTimes } from 'react-icons/fa';

const CartDrawer = ({ onClose }: { onClose: () => void }) => {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  return (
    <div className="fixed inset-0 z-60 flex justify-end">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Drawer content */}
      <div className="bg-white w-96 h-full p-6 shadow-2xl z-10 overflow-y-auto flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <FaTimes size={20} />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="grow flex items-center justify-center text-gray-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="grow">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center gap-4 mb-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="grow">
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                  <p className="text-pink-500 font-bold">{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-400 hover:text-red-600 p-2"
                  aria-label="Remove item"
                >
                  <FaTrash size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer with Total and Checkout */}
        {cart.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-linear-to-r from-pink-500 to-red-500 text-white py-3 rounded-full font-bold hover:shadow-lg transition-all">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;