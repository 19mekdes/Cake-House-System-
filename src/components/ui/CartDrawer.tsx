import { useCart } from '../../context/CartContext';
import { FaTrash, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const CartDrawer = ({ onClose }: { onClose: () => void }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-60 flex justify-end">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-96 h-full p-6 shadow-2xl z-10 overflow-y-auto flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><FaTimes /></button>
        </div>
        
        <div className="grow">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
              <img src={item.image} className="w-16 h-16 rounded-lg object-cover" />
              <div className="grow">
                <h4 className="font-semibold">{item.name}</h4>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-100 p-1 rounded"><FaMinus size={10}/></button>
                  <span className="font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-100 p-1 rounded"><FaPlus size={10}/></button>
                </div>
              </div>
              <p className="font-bold text-pink-500">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-400 p-2"><FaTrash /></button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-pink-500 text-white py-3 rounded-full font-bold">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;