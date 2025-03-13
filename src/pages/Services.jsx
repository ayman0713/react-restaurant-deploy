import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faTruck, faConciergeBell, faBirthdayCake, faBox, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

const services = [
  { id: 1, name: "Dine-In Experience", icon: faUtensils, description: "Enjoy a cozy atmosphere with top-notch service." },
  { id: 2, name: "Takeout & Delivery", icon: faTruck, description: "Get your favorite meals delivered fast and fresh." },
  { id: 3, name: "Catering Services", icon: faConciergeBell, description: "Perfect for events, parties, and corporate meetings." },
  { id: 4, name: "Special Events", icon: faBirthdayCake, description: "Book private dining for special occasions." },
  { id: 5, name: "Meal Prep & Subscription", icon: faBox, description: "Healthy meal plans delivered to your door." },
  { id: 6, name: "Cooking Workshops", icon: faChalkboardTeacher, description: "Learn to make our signature dishes." },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
            <FontAwesomeIcon icon={service.icon} className="text-yellow-500 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;