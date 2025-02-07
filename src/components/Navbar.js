import React, { useState } from "react";
import hosLogo from "../assets/hospital-logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={hosLogo} alt="Hospital Logo" />
          <span className="logo-name">Advanced Care Hospital</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li> {/* Fixed path */}
          <li><Link to="/gallery">Gallery</Link></li>   {/* Fixed path */}
          <li><Link to="/contact">Contact Us</Link></li> {/* Fixed path */}
        </ul>
        <div className="mobile-menu" onClick={toggleMobileMenu}>☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
