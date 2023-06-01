import React, { useState } from 'react';
import './Navbar.css';
import icon from "../Images/travel-icon-213.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      

      <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
        <span className={` ${isOpen ? 'active' : ''}`}><i className="fas fa-bars"></i></span>
      </button>
      <div className="navbar-logo show">
            <img src={ icon } alt="" />
        </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''} `}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <div className="navbar-logo hide">
            <img src={ icon } alt="" />
        </div>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
