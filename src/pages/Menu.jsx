import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot, faLeaf, faBreadSlice, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import burger1 from "../assets/burger.jpg";
import burger2 from "../assets/burger-2.jpg";
import burger3 from "../assets/burger-3.jpg";
import burger4 from "../assets/burger-4.jpg";
import Cart from "../components/Cart";

const menuItems = [
  { id: 1, name: "Classic Burger", price: 8.99, img: burger1, bestSeller: true },
  { id: 2, name: "Spicy Inferno", price: 9.99, img: burger2, spicy: true },
  { id: 3, name: "Vegan Delight", price: 10.99, img: burger3, vegan: true },
  { id: 4, name: "Gluten-Free Special", price: 11.99, img: burger4, glutenFree: true },
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="bg-black text-white py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="relative">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
              {item.bestSeller && (
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  🔥 Best Seller
                </span>
              )}
            </div>
            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
            <p className="text-yellow-400 font-bold text-lg">£{item.price.toFixed(2)}</p>
            <div className="mt-2 flex gap-2">
              {item.spicy && <FontAwesomeIcon icon={faPepperHot} className="text-red-500 text-lg" title="Spicy" />}
              {item.vegan && <FontAwesomeIcon icon={faLeaf} className="text-green-500 text-lg" title="Vegan" />}
              {item.glutenFree && <FontAwesomeIcon icon={faBreadSlice} className="text-orange-500 text-lg" title="Gluten-Free" />}
            </div>
            <button onClick={() => addToCart(item)} className="mt-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Menu;
