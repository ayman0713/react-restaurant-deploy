import React from "react";
import restaurantImage from "../assets/restaurant.jpg";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16 text-center">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">About Us</h1>
      <p className="max-w-3xl mx-auto text-lg">
        Welcome to <strong>Burger Place</strong>, where passion meets flavor! 🍔 We serve handcrafted burgers made from the freshest ingredients, cooked to perfection. 
      </p>
      <div className="mt-6">
        <img 
          src={restaurantImage} 
          alt="Our Restaurant" 
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400">Why Choose Us?</h2>
        <ul className="mt-2 space-y-2">
          <li>✅ 100% Fresh Ingredients</li>
          <li>✅ Family-Friendly Atmosphere</li>
          <li>✅ Unique Signature Burgers</li>
          <li>✅ Fast & Friendly Service</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
