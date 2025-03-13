import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="bg-black text-white py-10 px-6 md:px-16 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full text-center md:text-left">
        <div>
          <p className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500" /> 123 Burger Street, Food City</p>
          <p className="flex items-center gap-2 mt-2"><FontAwesomeIcon icon={faPhone} className="text-yellow-500" /> +44 7000 000000</p>
          <p className="flex items-center gap-2 mt-2"><FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" /> contact@burgerplace.com</p>
          <p className="flex items-center gap-2 mt-2"><FontAwesomeIcon icon={faClock} className="text-yellow-500" /> Mon-Sun: 11AM - 10PM</p>
        </div>
        
        <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <input type="text" placeholder="Your Name" className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none" />
          <input type="email" placeholder="Your Email" className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none" />
          <textarea placeholder="Your Message" rows="4" className="p-3 bg-gray-700 rounded-lg text-white focus:outline-none"></textarea>
          <button type="submit" className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Send Message</button>
        </form>
      </div>
      
      <div className="flex gap-6 mt-8">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-yellow-500" /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-yellow-500" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-yellow-500" /></a>
      </div>
    </div>
  );
};

export default Contact;
