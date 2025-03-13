import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-yellow-500 mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-700 py-2">
              <span>{item.name}</span>
              <span className="text-yellow-400 font-bold">£{item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-4 font-bold text-lg">Total: <span className="text-yellow-400">£{totalPrice.toFixed(2)}</span></h3>
    </div>
  );
};

export default Cart;
