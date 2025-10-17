import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="GeoLink Logo" className="nav-logo-img" />
          <span className="nav-logo-text">GeoLink Solutions</span>
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><NavLink end to="/" onClick={closeMenu}><FaHome className="nav-icon" /><span>Home</span></NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}><FaUser className="nav-icon" /><span>About</span></NavLink></li>
        <li><NavLink to="/services" onClick={closeMenu}><FaCogs className="nav-icon" /><span>Services</span></NavLink></li>
        <li><NavLink to="/portfolio" onClick={closeMenu}><FaBriefcase className="nav-icon" /><span>Portfolio</span></NavLink></li>
        <li><NavLink to="/tools" onClick={closeMenu}><FaEnvelope className="nav-icon" /><span>Tools</span></NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
