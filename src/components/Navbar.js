import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/hospital-logo.jpeg" alt="Hospital Logo" />
          <span className="logo-name">Advance Care Hospital</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
        <div className="mobile-menu">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
