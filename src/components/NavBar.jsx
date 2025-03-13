import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
        <FontAwesomeIcon icon={faHamburger} className="text-yellow-500 text-2xl" />
        Burger Place
      </Link>

      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      <ul className="hidden md:flex space-x-8">
        <li><Link to="/menu" className="hover:text-yellow-500">Menu</Link></li>
        <li><Link to="/services" className="hover:text-yellow-500">Services</Link></li>
        <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
      </ul>

      <ul className="hidden md:flex gap-4">
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-yellow-500" /></a></li>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="text-white text-xl hover:text-yellow-500" /></a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-white text-xl hover:text-yellow-500" /></a></li>
        <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl hover:text-yellow-500" /></a></li>
      </ul>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link to="/menu" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/services" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Contact</Link>

          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-yellow-500" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="text-white text-xl hover:text-yellow-500" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-white text-xl hover:text-yellow-500" /></a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl hover:text-yellow-500" /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
