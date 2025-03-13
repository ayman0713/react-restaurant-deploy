import React from "react";
import { Link } from "react-router-dom";
import burgerImage from "/src/assets/burger-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-800 to-yellow-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            THE BEST <br />
            <span className="outline-text p-2 text-amber-300">BURGER</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">⭐️ Special Ingredients</p>
          <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">
            We use only the best ingredients to craft delicious, juicy burgers. Taste the quality in every bite!
          </p>
          <Link to="/about">
          <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
            READ MORE
          </button>
          </Link>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={burgerImage} alt="Delicious Burger" className="w-80 md:w-[500px] lg:w-[600px] rounded-lg shadow-lg" />
          <div className="absolute top-4 left-6 md:top-8 md:left-10 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">
            100% PREMIUM
          </div>
        </div>
      </div>

      <div className="mt-16 text-center px-8 md:px-20">
        <h2 className="text-3xl font-bold text-yellow-500">Why Choose Us?</h2>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          Our burgers are crafted with love, using locally sourced ingredients and premium quality meats. Experience the taste that sets us apart!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
            <h3 className="text-xl font-semibold text-yellow-400">Fresh Ingredients</h3>
            <p className="text-gray-300 mt-2 text-sm">We use only the freshest produce and highest quality meats.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
            <h3 className="text-xl font-semibold text-yellow-400">Fast Service</h3>
            <p className="text-gray-300 mt-2 text-sm">Enjoy quick and efficient service, whether dining in or ordering out.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 text-center">
            <h3 className="text-xl font-semibold text-yellow-400">Delicious Taste</h3>
            <p className="text-gray-300 mt-2 text-sm">Every bite is packed with mouth-watering flavors you’ll love.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;