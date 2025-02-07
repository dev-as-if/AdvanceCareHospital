import React, { useState, useEffect } from "react";
import hosLogo from "../assets/hospital-logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Close drawer when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setDrawerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={hosLogo} alt="Hospital Logo" />
          <span className="logo-name">Advanced Care Hospital</span>
        </div>

        {/* Desktop Navbar */}
        {!isMobile && (
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <div className="mobile-menu" onClick={toggleDrawer}>
            {isDrawerOpen ? "✖" : "☰"}
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobile && (
        <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
            <li><Link to="/about" onClick={toggleDrawer}>About</Link></li>
            <li><Link to="/services" onClick={toggleDrawer}>Services</Link></li>
            <li><Link to="/gallery" onClick={toggleDrawer}>Gallery</Link></li>
            <li><Link to="/contact" onClick={toggleDrawer}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
