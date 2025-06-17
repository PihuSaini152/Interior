import React, { useState } from "react";
import "./nav.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
// import logo from "/logo1.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
           <img src="/navimg/logo1.jpg" alt="Logo" />

          </Link>
        </div>

        {/* Center: Search Input (mobile only) */}
        <div className="mobile-search">
          <input type="text" placeholder="Search for products..." />
        </div>

        {/* Right: Menu + Search icon (desktop) */}
        <div className="nav-icons">
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li className="search-icon"><FiSearch /></li>
          </ul>

          {/* Toggle Icon (mobile) */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={closeMenu}><FiX /></div>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
